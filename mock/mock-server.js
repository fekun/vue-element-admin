const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const chalk = require('chalk')
const path = require('path')

const mockDir = path.join(process.cwd(), 'mock')

function registerRoutes (app) {
  let mockLastIndex
  const { default: mocks } = require('./index.js')
  for (const mock of mocks) {
    app[mock.type](mock.url, mock.response)
    mockLastIndex = app._router.stack.length // the length of route stack
  }
  const mockRoutesLength = Object.keys(mocks).length
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength
  }
}

function unregisterRoutes () {
  Object.keys(require.cache).forEach(i => {
    // 'i' represent a absolute path of corresponding module in here
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)] // remove specific module from module cache
    }
  })
}

module.exports = app => {
  // es6 polyfill
  require('@babel/register')

  // parse app.body
  // https://expressjs.com/en/4x/api.html#req.body
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(cookieParser())
  const mockRoutes = registerRoutes(app)
  var mockRoutesLength = mockRoutes.mockRoutesLength
  var mockStartIndex = mockRoutes.mockStartIndex

  // watch files, hot reload mock server
  chokidar.watch(mockDir, {
    ignored: /mock-server/,
    ignoreInitial: true
  }).on('all', (event, path) => {
    if (event === 'change' || event === 'add') {
      // remove mock routes stack
      app._router.stack.splice(mockStartIndex, mockRoutesLength) // remove previous mock route stack

      // clear routes cache
      unregisterRoutes()

      const mockRoutes = registerRoutes(app)
      mockRoutesLength = mockRoutes.mockRoutesLength
      mockStartIndex = mockRoutes.mockStartIndex

      console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
    }
  })
}
