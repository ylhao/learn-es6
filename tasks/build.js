import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', function(cb){
    gulpSequence('clean','scripts')(cb);
});
