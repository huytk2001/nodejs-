const Course = require("../models/Course")
const { mongooseToObject } = require("../../util/mongoose")
class CoursesController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) }); // Pass the course data to the view
            })
            .catch(next);
    }
    // [GET] /courses/:create
    create(req, res, next) {
        res.render('courses/create')
    }
    // [Post] /courses/store
    store(req, res, next) {
        // const formData = req.body
        // req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        // const course = new Course(formData)
        // course.save()
        // res.send(' hello')
        res.json(req.body)

    }
}

module.exports = new CoursesController();
