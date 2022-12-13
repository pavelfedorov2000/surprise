import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';

export const sprites = (cb) => {
    gulp.src('app/images/sprite-icons/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            },
        }))
        .pipe(gulp.dest('dist/assets/images/'));
    cb();
};
