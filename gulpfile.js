const gulp               = require('gulp');
const del                = require('del');
const webpack            = require('webpack-stream');
const webpackBuildConfig = require('./webpack.build.config');
const nodemon            = require('gulp-nodemon');
const sass               = require('gulp-sass');
const autoprefixer       = require('gulp-autoprefixer');
const cleanCSS           = require('gulp-clean-css');
const imagemin           = require('gulp-imagemin');
const jsonminify         = require('gulp-jsonminify');
const htmlmin            = require('gulp-htmlmin');
const realFavicon        = require('gulp-real-favicon');
const fs                 = require('fs');
const uuid               = require('uuid');
const replace            = require('gulp-replace-task');

const releaseId            = uuid.v4();
const webpackReleaseConfig = require('./webpack.release.config').getConfig(releaseId);

const FAVICON_DATA_FILE = 'faviconData.json';


/**
 * Build (Webpack)
 */

gulp
    .task('clean:build', function () {
        del('./public/js/*')
    });

gulp.task('clean:css', function () {
    del('./public/css/*')
});

gulp.task('clean:release:app', function () {
    'use strict';
    del('./release/js/*');
});
gulp.task('clean:release:css', function () {
    'use strict';
    del('./release/css/*');
});
gulp.task('clean:release:images', function () {
    'use strict';
    del('./release/images/*');
    del('./release/favicon/*');
});
gulp.task('clean:release:data', function () {
    'use strict';
    del('./release/data/*', {overwrite: false});
});

gulp.task('build', ['clean:build'], function () {
    return gulp.src('./src/app/app.js')
        .pipe(webpack(webpackBuildConfig))
        .on('error', function handleError() {
            this.emit('end'); // Recover from errors
        })
        .pipe(gulp.dest('./'));
});

gulp.task('buildRelease', ['clean:release:app'], function () {
    'use strict';
    gulp.src('./src/app/app.js')
        .pipe(webpack(webpackReleaseConfig))
        .on('error', function handleError() {
            this.emit('end');
        })
        .pipe(gulp.dest('./'));
});

gulp.task('watch:build', function () {
    return gulp.watch('./src/app/**/*', ['build']);
});

/**
 * Node Server (Express)
 */

gulp.task('serve:node', function (done) {
    nodemon({
        exec : 'node ./node_modules/babel-cli/bin/babel-node.js ./server.js',
        watch: ['server.js'],
        ext  : 'js html'
    });
});

/** SASS */
gulp.task('sass', ['clean:css'], function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sassRelease', ['clean:release:css', 'copy:normalize:release'], function () {
    'use strict';
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(replace({
            patterns: [
                {
                    match      : /(\/js\/|\/css\/|\/images\/|\/video\/|\/favicon\/|\/data\/)/g,
                    replacement: '/' + releaseId + '/'
                }
            ]
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./release/' + releaseId));
});

gulp.task('watch:sass', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

/** Normalize CSS */
gulp.task('copy:normalize', function () {
    return gulp.src('./node_modules/normalize.css/normalize.css')
        .pipe(gulp.dest('./public/css'));
});

gulp.task('copy:normalize:release', function () {
    return gulp.src('./node_modules/normalize.css/normalize.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./release/' + releaseId));
});

/** Images */

gulp.task('imagemin', ['clean:release:images'], function () {
    gulp.src('public/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./release/' + releaseId));
    gulp.src('public/favicon/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./release/' + releaseId));
});

/** Data */

gulp.task('datamin', ['clean:release:data'], function () {
    'use strict';
    gulp.src('public/data/*')
        .pipe(jsonminify())
        .pipe(gulp.dest('./release/' + releaseId));
});

/** supporting */
gulp.task('supporting', function () {
    'use strict';
    gulp.src(['public/favicon/browserconfig.xml', 'public/favicon/manifest.json'])
        .pipe(gulp.dest('./release/' + releaseId));
    gulp.src('public/video/*')
        .pipe(gulp.dest('./release/' + releaseId));
    gulp.src('public/index.html')
        .pipe(replace({
            patterns: [
                {
                    match      : /(\/js\/|\/css\/|\/images\/|\/video\/|\/favicon\/|\/data\/)/g,
                    replacement: '/' + releaseId + '/'
                }
            ]
        }))
        .pipe(htmlmin({
            collapseWhitespace   : true, collapseInlineTagWhitespace: true, removeComments: true,
            removeEmptyAttributes: true
        }))
        .pipe(gulp.dest('./release'));
});

/** favicon **/
// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('generate-favicon', function (done) {
    realFavicon.generateFavicon({
        masterPicture: './public/images/favicon.svg',
        dest         : './public/favicon',
        iconsPath    : '/favicon',
        design       : {
            ios            : {
                pictureAspect  : 'backgroundAndMargin',
                backgroundColor: '#f4f4f4',
                margin         : '14%',
                assets         : {
                    ios6AndPriorIcons     : false,
                    ios7AndLaterIcons     : false,
                    precomposedIcons      : true,
                    declareOnlyDefaultIcon: true
                },
                appName        : 'Albert van Dam'
            },
            desktopBrowser : {},
            windows        : {
                pictureAspect  : 'noChange',
                backgroundColor: '#f4f4f4',
                onConflict     : 'override',
                assets         : {
                    windows80Ie10Tile     : false,
                    windows10Ie11EdgeTiles: {
                        small    : true,
                        medium   : true,
                        big      : true,
                        rectangle: true
                    }
                },
                appName        : 'Albert van Dam'
            },
            androidChrome  : {
                pictureAspect: 'shadow',
                themeColor   : '#f4f4f4',
                manifest     : {
                    name       : 'Albert van Dam',
                    display    : 'standalone',
                    orientation: 'notSet',
                    onConflict : 'override',
                    declared   : true
                },
                assets       : {
                    legacyIcon        : false,
                    lowResolutionIcons: false
                }
            },
            safariPinnedTab: {
                pictureAspect: 'silhouette',
                themeColor   : '#373737'
            }
        },
        settings     : {
            compression         : 2,
            scalingAlgorithm    : 'Mitchell',
            errorOnImageTooSmall: false
        },
        markupFile   : FAVICON_DATA_FILE
    }, function () {
        done();
    });
});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('favicon', ['generate-favicon'], function () {
    return gulp.src(['./src/index.html'])
        .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
        .pipe(gulp.dest('./public'));
});

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task('check-for-favicon-update', function (done) {
    const currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
    realFavicon.checkForUpdates(currentVersion, function (err) {
        if (err) {
            throw err;
        }
    });
});

/**
 * Main tasks
 */

gulp.task('watch', ['copy:normalize', 'build', 'sass', 'serve:node', 'watch:build', 'watch:sass']);
gulp.task('release', ['buildRelease', 'sassRelease', 'imagemin', 'datamin', 'supporting']);
gulp.task('default', ['copy:normalize', 'build', 'sass', 'serve:node']);
