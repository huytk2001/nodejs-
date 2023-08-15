const newRouter = require('./news')
const siteRouter = require('./site')
const coursesController = require('./courses')
function route(app) {

    app.use('/news', newRouter)
    app.use('/courses', coursesController)
    app.use('/', siteRouter)
    app.use('/search', siteRouter)


}

module.exports = route