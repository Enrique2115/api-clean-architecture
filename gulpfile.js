const { src, dest } = require('gulp')
const Copy = require('gulp-copy')
const Uglify = require('gulp-uglify')

const paths = {
  env: {
    src: './env.yaml',
    dest: './dist',
  },
}

function compress() {
  return (
    src(paths.init.src)
      // .pipe(
      //   Uglify({
      //     compress: true,
      //   })
      // )
      .pipe(dest(paths.init.dest))
  )
}

/**
 * Copies the environment configuration file to the destination directory.
 * @return {Stream} A stream representing the copy process.
 */
function copyEnv() {
  // Return a stream that reads the source environment file and pipes it to the destination.
  return src([paths.env.src])
    .pipe(Copy(paths.env.dest, { prefix: 1 }))
    .on('error', err => {
      console.error('Error copying environment file:', err)
    })
}

exports.copyEnv = copyEnv
// exports.compress = compress
