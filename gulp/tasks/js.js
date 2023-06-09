/**
 * Javascript file handling
 */ 

import webpack from "webpack-stream"; // Including webpack to add import capability (ES6)

// export const js = () => {
//    return app.gulp.src(app.path.src.js, { sourcemaps: true })
//       .pipe(app.plugins.plumber(
//          app.plugins.notify.onError({
//             title: 'JS',
//             message: 'Error: <%= error.message %>'
//          })
//       ))
//       .pipe(webpack({
//          mode: 'development',
//          output: {
//             filename: 'bundle.min.js',
//          },
//          module: {
//             rules: [
//                {
//                   test: /\.(css|s[ac]ss)$/i,
//                   use: ['css-loader', { loader: 'postcss-loader' }, 'sass-loader'] // Использование loaders происходит справа налево
//                },
//                {
//                   test: /\.less$/i,
//                   use: ['css-loader', { loader: 'postcss-loader' }, 'less-loader'], // Использование loaders происходит справа налево
//                },
//             ]
//          }
//       }))
//       .pipe(app.gulp.dest(app.path.dist.js))
//       .pipe(app.plugins.browsersync.stream());
// }


const homeJs = () => {
   return app.gulp.src(app.path.src.homeJs, { sourcemaps: true })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: 'JS',
            message: 'Error: <%= error.message %>'
         })
      ))
      .pipe(webpack({
         mode: 'development',
         output: {
            filename: 'bundle-home.min.js',
         },
         module: {
            rules: [
               {
                  test: /\.(css|s[ac]ss)$/i,
                  use: ['css-loader', { loader: 'postcss-loader' }, 'sass-loader'] // Использование loaders происходит справа налево
               },
               {
                  test: /\.less$/i,
                  use: ['css-loader', { loader: 'postcss-loader' }, 'less-loader'], // Использование loaders происходит справа налево
               },
            ]
         }
      }))
      .pipe(app.gulp.dest(app.path.dist.homeJs))
      .pipe(app.plugins.browsersync.stream());
}


const courseJs = () => {
   return app.gulp.src(app.path.src.courseJs, { sourcemaps: true })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: 'JS',
            message: 'Error: <%= error.message %>'
         })
      ))
      .pipe(webpack({
         mode: 'development',
         output: {
            filename: 'bundle-course.min.js',
         },
         module: {
            rules: [
               {
                  test: /\.(css|s[ac]ss)$/i,
                  use: ['css-loader', { loader: 'postcss-loader' }, 'sass-loader'] // Использование loaders происходит справа налево
               },
               {
                  test: /\.less$/i,
                  use: ['css-loader', { loader: 'postcss-loader' }, 'less-loader'], // Использование loaders происходит справа налево
               },
            ]
         }
      }))
      .pipe(app.gulp.dest(app.path.dist.courseJs))
      .pipe(app.plugins.browsersync.stream());
}

export {
   homeJs,
   courseJs
}

/**
 * sourcemaps: true - helps to track in which file js is written 
 */