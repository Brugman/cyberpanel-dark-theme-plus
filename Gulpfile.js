/**
 * timbr.dev Gulp template.
 *
 * Template last updated: 2021-06-17.
 * File last updated:     2022-01-12.
 */

/**
 * Directories.
 */
var dir = {
    input: {
        less: 'less',
    },
    output: {
        less: 'css',
    },
};

/**
 * Packages.
 */
var gulp         = require( 'gulp' );
var autoprefixer = require( 'gulp-autoprefixer' );
var cleancss     = require( 'gulp-clean-css' );
var filter       = require( 'gulp-filter' );
var notify       = require( 'gulp-notify' );
var plumber      = require( 'gulp-plumber' );
var rename       = require( 'gulp-rename' );
var log          = require( 'fancy-log' );
// less
var less         = require( 'gulp-less' );

/**
 * Error handlers.
 */
var onErrorLess = function ( err ) {
    log( '------------------' );
    log( 'Less has an error!' );
    log( '------------------' );

    notify.onError({
        title: "Error in "+err.filename.replace( /^.*[\\\/]/, '' )+" on line "+err.line,
        message: err.extract,
        appID: "Gulp",
    })( err );

    log( '------------------' );

    this.emit('end');
};

/**
 * Procedures.
 */
var app = [];

app.processLess = function ( args ) {
    // use all the files
    return gulp.src( args.inputFiles )
        // catch errors
        .pipe( plumber( { errorHandler: onErrorLess } ) )
        // compile the less to css
        .pipe( less() )
        // autoprefix the css
        .pipe( autoprefixer() )
        // minify the css
        .pipe( cleancss( { keepSpecialComments: 0 } ) )
        // name the output file
        .pipe( rename( args.outputFile ) )
        // place the output file
        .pipe( gulp.dest( args.outputDir ) );
};

/**
 * Tasks: Less.
 */
gulp.task( 'less_theme', function ( done ) {
    app.processLess({
        'name'       : 'theme less',
        'inputFiles' : [ dir.input.less+'/theme.less' ],
        'outputDir'  : dir.output.less,
        'outputFile' : 'theme.min.css',
    });
    done();
});

/**
 * Task: Watch.
 */
gulp.task( 'watch', function () {
    // Less
    gulp.watch( dir.input.less+'/theme.less', gulp.parallel( 'less_theme' ) );
    // notify
    gulp.src( 'node_modules/gulp-notify/test/fixtures/1.txt' ).pipe( notify({
        title: "Gulp watch is ready.",
        message: " ",
        appID: "Gulp",
    }));
});

/**
 * Task: Default.
 */
gulp.task( 'default', gulp.parallel(
    'less_theme',
));

