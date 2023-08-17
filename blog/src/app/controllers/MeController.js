const Courses = require('../models/Course')
const { mutipleMongooseToObject } = require("../../util/mongoose")

class MeController {
    //[Get] /me/store/courses
    storedCourses(req, res, next) {
        Courses.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)

    }
}
module.exports = new MeController()