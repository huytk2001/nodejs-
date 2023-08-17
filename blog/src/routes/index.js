const newRouter = require('./news')
const siteRouter = require('./site')
const coursesController = require('./courses')
const meRouter = require('./me')
function route(app) {

    app.use('/news', newRouter)
    app.use('/me', meRouter)
    app.use('/courses', coursesController)
    app.use('/', siteRouter)
    app.use('/search', siteRouter)


}

module.exports = route