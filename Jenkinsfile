pipeline {
  agent { label 'linux' }

  options {
    disableConcurrentBuilds()
    /* manage how many builds we keep */
    buildDiscarder(logRotator(
      numToKeepStr: '20',
      daysToKeepStr: '30',
    ))
  }

  environment {
    GIT_USER = 'status-im-auto'
    GIT_MAIL = 'auto@status.im'
  }

  stages {

    stage('Install Deps') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run clean'
        sh 'npm run build'
      }
    }

    stage('Robot') {
      when { expression { !GIT_BRANCH.endsWith('master') } }
      steps { script {
        sh 'echo "Disallow: /" >> public/robots.txt'
      } }
    }

    stage('Publish Prod') {
      when { expression { GIT_BRANCH.endsWith('master') } }
      steps { script {
        sshagent(credentials: ['status-im-auto-ssh']) {
          sh 'npm run deploy'
        }
      } }
    }

    stage('Publish Devel') {
      when { expression { !GIT_BRANCH.endsWith('master') } }
      steps { script {
        sshagent(credentials: ['jenkins-ssh']) {
          sh '''
            rsync -e 'ssh -o StrictHostKeyChecking=no' -r --delete public/. \
            jenkins@node-01.do-ams3.proxy.misc.statusim.net:/var/www/dev-nimbus/
          '''
        }
      } }
    }
  }
}
