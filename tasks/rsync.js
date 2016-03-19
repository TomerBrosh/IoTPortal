/**
 * Created by Tomer on 20-Mar-16.
 */
var gulp = require('gulp');
var rsync = require('gulp-rsync');

gulp.task('deploy', function() {
  gulp.src('dist/**')
    .pipe(rsync({
      root: 'dist',
      hostname: 'iotadmin@104.40.191.215/',
      destination: '/var/IoT/Portal'
    }));
});
