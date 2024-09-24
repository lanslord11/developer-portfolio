const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'
const repositoryName = 'lanslord11.github.io'

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
  // images: {
  //   domains: ['res.cloudinary.com', 'media.dev.to'],
  //   unoptimized: true,
  // }
}