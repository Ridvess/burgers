const {src, dest, task, series, watch} = require("gulp");
const sass = require("gulp-sass");
const rm = require("gulp-rm");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const concat = require("gulp-concat");

sass.compiler = require('node-sass');

task("copy:html", () => {
    return src('src/*.html').pipe(dest('dist')).pipe(reload({stream:true}))
});

task("clean:dist",() => {
    return src("dist/**/*", {read:false}).pipe(rm())
});

task("sassCompile", () => {
    return src("src/css/main.scss").pipe(sass().on('error', sass.logError)).pipe(dest('dist'))
});

task("copy:img", () => {
    return src("src/img/**").pipe(dest("dist/img"))
});

task("copy:fonts", () => {
    return src("src/fonts/*").pipe(dest("dist/fonts"))
});



task('compress',  () => {
    return src("src/JavaScript/*.js").pipe(concat('all.js')).pipe(dest("dist/"))
});

task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});


watch('./src/styles/**/*.scss', series("sassCompile"));
watch('./src/*.html', series("copy:html"));
task("default", series("clean:dist","copy:html","copy:img","compress", "copy:fonts", "sassCompile", "server"));

/**
 * 4. запускать лайв сервер
 */
