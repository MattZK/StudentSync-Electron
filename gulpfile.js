'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');

// Copy HTML files
gulp.task('HTML', () => {
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('IMG', () => {
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// Uglify & Concat JS files
gulp.task('JS', () => {
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('TS', () => {
  gulp.src('src/js/*.ts')
    .pipe(concat('main.ts'))
    .pipe(ts({
      noImplicitAny: true
    }))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
  gulp.src('src/bin/app.ts')
    .pipe(ts({
      noImplicitAny: true
    }))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/bin'));
});

// Compile SCSS Sourcemaps (Dev Only)
gulp.task('SCSS:srcmaps', () => {
  gulp.src('src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// Compile SCSS
gulp.task('SCSS', () => {
  gulp.src('src/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Serve (Development)
gulp.task('serve', ['HTML', 'IMG', /*'JS',*/ 'TS', 'SCSS:srcmaps'], function() {
  browserSync.init({
      server: "./dist"  
  });

  gulp.watch('src/*.html', ['HTML']).on('change', browserSync.reload);
  gulp.watch('src/img/*', ['IMG']);
  //gulp.watch('src/js/*.js', ['JS']).on('change', browserSync.reload);
  gulp.watch('src/js/*.ts', ['TS']).on('change', browserSync.reload);
  gulp.watch('src/bin/*.ts', ['TS']);
  gulp.watch('src/scss/*.scss', ['SCSS:srcmaps']);
});;

// Default (Development)
gulp.task('default', ['HTML', 'IMG', /*'JS',*/ 'TS', 'SCSS:srcmaps']);
gulp.task('watch', () => {
  gulp.watch('src/*.html', ['HTML']);
  gulp.watch('src/img/*', ['IMG']);
  //gulp.watch('src/js/*.js', ['JS']);
  gulp.watch('src/js/*.ts', ['TS']);
  gulp.watch('src/scss/*.scss', ['SCSS:srcmaps']);
});

// Build (Production)
gulp.task('build', ['HTML', 'IMG', /*'JS',*/ 'TS', 'SCSS']);