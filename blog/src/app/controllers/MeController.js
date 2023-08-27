const Courses = require('../models/Course')
const { mutipleMongooseToObject } = require("../../util/mongoose")

class MeController {
    //[Get] /me/store/courses
    // storedCourses(req, res, next) {
    //     Promise.all([Courses.find({}), Courses.findDelete()])
    //         .then(([courses, deletedCount]) => {
    //             res.render('me/store-courses', {
    //                 deletedCount,
    //                 courses: mutipleMongooseToObject(courses),
    //             })

    //         })
    //         .catch(next)
    // }
    storedCourses(req, res, next) {
        Promise.all([Courses.find({}), Courses.findDeleted({})])
            .then(([courses, deletedCourses]) => {
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                    deletedCount: deletedCourses.filter(course => course.deleted).length
                })
            })
            .catch(next)
    }
    //[Get]/me/trash/courses
    trashCourses(req, res, next) {
        Courses.findWithDeleted({ deleted: true })
            .then(courses => res.render('me/trash-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }
}
module.exports = new MeController()