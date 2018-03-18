import gulp from 'gulp';
import gulpWebpack from 'webpack-stream';
import rename from 'gulp-rename';


gulp.task('scripts', ()=>{
  return gulp.src(['src/index.js'])
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel-loader'
        }]
      }
    }))
    .pipe(rename({
        basename:'index',
        extname:'.js'
      }))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
    gulp.watch('src/index.js', ['build']);
 });
 