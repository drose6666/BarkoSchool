/**
 * Contains path information
 */

import * as nodePath from 'path'; // import module path
const rootFolder = nodePath.basename(nodePath.resolve()); // Get the name of the project root folder (gulp-2022)

const distFolder = './dist'; // the dist folder is created automatically by the "gulp" command. You can also use rootFolder here
const srcFolder = './src'  // variable with root source folder

/**
 * The path object that will store all the path
 */
export const path = {
   // production folder
   dist: {
      libs: `${distFolder}/libs/`,
      fonts: `${distFolder}/fonts/`,
      images: `${distFolder}/img/optimized/`,
      svg: `${distFolder}/img/`,
      // js: `${distFolder}/js/`,
      homeJs: `${distFolder}/js/`,
      courseJs: `${distFolder}/js/`,
      css: `${distFolder}/css/`,
      html: `${distFolder}/`,
      other: `${distFolder}/other/`
   }, 

   // source folder
   src: { 
      fonts: `${srcFolder}/fonts/**/*.*`,
      libs: `${srcFolder}/libs/**/*.*`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      imagesOptimized: `${srcFolder}/img/optimized/**/*.{jpg,jpeg,png,gif,webp}`,
      imagesOptimizedDist: `${srcFolder}/img/optimized/`,
      svg: [`${srcFolder}/img/**/*.svg`, `${srcFolder}/img/**/*.ico`],
      homeJs: `${srcFolder}/js/home-page/bundle-home.js`,
      courseJs: `${srcFolder}/js/course-page/bundle-course.js`,
      // scss: `${srcFolder}/scss/style.scss`,
      homeScss: `${srcFolder}/scss/home/home-style.scss`,
      courseScss: `${srcFolder}/scss/course/course-style.scss`,
      html: `${srcFolder}/*.html`, // we get .html files that are in the src folder (the contents of the "components" folder are not copied to dist)
      libs: `${srcFolder}/libs/**/*.*`, // all files in all folders inside files folder
      other: `${srcFolder}/other/**/*.*`
   },

   // files/folders tracking
   watch: { 
      fonts: `${srcFolder}/fonts/**/*.*`,
      images: [`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`, `!${srcFolder}/img/optimized/**/*.{jpg,jpeg,png,gif,webp}`],
      // js: `${srcFolder}/js/**/*.js`,
      homeJs: `${srcFolder}/js/**/*.js`,
      courseJs: `${srcFolder}/js/**/*.js`,
      // scss: `${srcFolder}/**/*.scss`,
      homeScss: `${srcFolder}/**/*.scss`,
      courseScss: `${srcFolder}/**/*.scss`,
      html: `${srcFolder}/**/*.html`, // keep track of all .html files in all folders in the src/ directory
      libs: `${srcFolder}/libs/**/*.*`, // track all files with any extension in all folders in the src/files directory
      other: `${srcFolder}/other/**/*.*`,
      svg: [`${srcFolder}/img/**/*.svg`, `${srcFolder}/img/**/*.ico`],
   }, 

   clean: distFolder, // clear the production folder
   distFolder: distFolder, // production folder
   srcFolder: srcFolder, // source folder
   rootFolder: rootFolder, // root folder (gulp-2022)
   ftp: `test` // ftp connection
}
