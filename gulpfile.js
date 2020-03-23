const log = require('fancy-log')
const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const rename = require("gulp-rename")
const cleanCSS = require('gulp-clean-css')
const rollup = require('gulp-better-rollup')
const webserver = require('gulp-webserver')
const terser = require('rollup-plugin-terser').terser
const browserSync = require('browser-sync').create()
const Hexo = require('hexo')
const runSequence = require('run-sequence')

const gitBranch = require('./scripts/git-branch')

const getEnv = function () {
    return gitBranch() == 'master' ? 'prod' : 'dev'
}

const generate = (done) => {
    var hexo = new Hexo(process.cwd(), {
        config: `_config.${getEnv()}.yml`,
        watch: false,
    })

    hexo.init().then(function() {
        return hexo.call('generate')
    }).then(function() {
        return hexo.exit()
    }).then(function() {
        return done()
    }).catch(function(err) {
        console.log(err)
        hexo.exit(err)
        return done(err)
    })
}

const bundle = () =>
    gulp.src('js/main.js')
        .on('error', log.error)
        .pipe(rollup({ plugins: [terser()] }, 'iife'))
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest('public/js'))


const sass = () =>
    gulp.src("./themes/navy/source/scss/main.scss")
        .on('error', log.error)
        .pipe(gulpSass())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())

const css = () =>
    gulp.src('./public/css/main.css')
        .on('error', log.error)
        .pipe(cleanCSS())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest('./public/css/'))

const devel = () => {
    gulp.watch('./js/*.js', bundle)
    gulp.watch(['./source/**/*.{md,yml}', './themes/navy/**/*'], generate)
    gulp.watch('./themes/navy/source/scss/*.scss', sass, css)
}

const server = () =>
  gulp.src('./public').pipe(webserver({livereload: true, open: true}));

exports.bundle = bundle
exports.sass = sass
exports.css = gulp.series(sass, css)
exports.devel = gulp.parallel(server, devel)
exports.build = gulp.parallel(generate, bundle, exports.sass)
exports.default = exports.build
