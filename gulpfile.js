const {src, dest,watch, series} = require('gulp')
const sass = require("gulp-sass")(require('sass'))

const Tchopa = () => {
    return src("src/scss/*").pipe(sass()).pipe(dest("dist/css"))

}

const watchTchopa =()=> {
    watch(['src/scss/*'], Tchopa)
}

exports.default =series(Tchopa, watchTchopa)
