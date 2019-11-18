const log = require('fancy-log')
const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require("gulp-rename")
const cleanCSS = require('gulp-clean-css')
const rollup = require('gulp-better-rollup')
const terser = require('rollup-plugin-terser').terser
const browserSync = require('browser-sync').create()
const Hexo = require('hexo')
const runSequence = require('run-sequence')

const gitBranch = require('./scripts/git-branch')

const getEnv = function () {
    return gitBranch() == 'master' ? 'prod' : 'dev'
}

gulp.task('generate', (cb) => {
    var hexo = new Hexo(process.cwd(), {
        config: `_config.${getEnv()}.yml`,
        watch: false,
    })

    hexo.init().then(function() {
        return hexo.call('generate')
    }).then(function() {
        return hexo.exit()
    }).then(function() {
        return cb()
    }).catch(function(err) {
        console.log(err)
        hexo.exit(err)
        return cb(err)
    })
})

gulp.task('bundle', () => (
    gulp.src('js/main.js')
        .on('error', log.error)
        .pipe(rollup({ plugins: [terser()] }, 'iife'))
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest('public/js'))
))

gulp.task('sass', () => (
    gulp.src("./themes/navy/source/scss/main.scss")
        .on('error', log.error)
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())
))

gulp.task('css', ['sass'], () => (
    gulp.src('./public/css/main.css')
        .on('error', log.error)
        .pipe(cleanCSS())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest('./public/css/'))
))

gulp.task('watch', () => (
    gulp.watch('./themes/navy/source/scss/*.scss', ['css'])
))

gulp.task('exit', () => (
    process.exit(0)
))

gulp.task('build', () => (
    runSequence('generate', 'bundle', 'css', 'watch')
))

gulp.task('run', () => (
    runSequence('generate', 'bundle', 'css')
))

gulp.task('default', [])
