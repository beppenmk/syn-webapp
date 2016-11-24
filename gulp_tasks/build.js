const gulp = require('gulp');
const filter = require('gulp-filter');
const useref = require('gulp-useref');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const uglifySaveLicense = require('uglify-save-license');
const inject = require('gulp-inject');
const ngAnnotate = require('gulp-ng-annotate');
const zip = require('gulp-zip');
const conf = require('../conf/gulp.conf');

var bump = require('gulp-bump');
var injectString = require('gulp-inject-string');

gulp.task('bump-prerelease', function () {
  var options = {
    type: 'prerelease'
  };
  return realBump(options);
});
gulp.task('bump-patch', function () {
  var options = {
    type: 'patch'
  };
  return realBump(options);
});
gulp.task('bump-minor', function () {
  var options = {
    type: 'minor'
  };
  return realBump(options);
});
gulp.task('bump-major', function () {
  var options = {
    type: 'major'
  };
  return realBump(options);
});
gulp.task('build', build);
gulp.task('createzip', createzip);
gulp.task('injectInfo', injectInfo);

function realBump(options) {
  return gulp
    .src(['./package.json'])
    .pipe(bump(options))
    .pipe(gulp.dest('./'));
}
function build() {

  const partialsInjectFile = gulp.src(conf.path.tmp('templateCacheHtml.js'), {read: false});
  const partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: conf.paths.tmp,
    addRootSlash: false
  };

  const htmlFilter = filter(conf.path.tmp('*.html'), {restore: true});
  const jsFilter = filter(conf.path.tmp('**/*.js'), {restore: true});
  const cssFilter = filter(conf.path.tmp('**/*.css'), {restore: true});

  return gulp.src(conf.path.tmp('/index.html'))
    .pipe(inject(partialsInjectFile, partialsInjectOptions))
    .pipe(inject(partialsInjectFile, partialsInjectOptions))
    .pipe(useref())
    .pipe(jsFilter)
    // .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(ngAnnotate())
    .pipe(uglify({preserveComments: uglifySaveLicense})).on('error', conf.errorHandler('Uglify'))
    .pipe(rev())
    // .pipe(sourcemaps.write('maps'))
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    //  .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(cssnano())
    .pipe(rev())
    // .pipe(sourcemaps.write('maps'))
    .pipe(cssFilter.restore)
    .pipe(revReplace())
    .pipe(htmlFilter)
    .pipe(htmlmin())
    .pipe(htmlFilter.restore)
    .pipe(gulp.dest(conf.path.dist()));
}
function createzip() {
  var config = require('../package.json');
  var name = 'dist-' + config.name + '-' + config.version + '.zip';

  return gulp.src(['dist/**/*', '!maps'])
    .pipe(zip(name))
    .pipe(gulp.dest('./build'));
};
function injectInfo() {
  var config = require('../package.json');
  return gulp.src('dist/index.html')
    .pipe(injectString.append('\n<!-- \n' + config.name + '\nCreated: ' + Date() + ' \nVersion: ' + config.version + '\n-->'))
    .pipe(gulp.dest('dist'));
};