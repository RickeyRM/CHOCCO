const {src, dest} = require('gulp');

function copy(){
    return src('src/SCSS/*.scss').pipe(dest('dist'));
}

exports.copy = copy