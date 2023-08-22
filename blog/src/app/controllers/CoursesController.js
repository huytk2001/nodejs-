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

    store(req, res, next) {
        const formData = req.body;

        // Generate the image URL based on the provided videoId
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;

        // Create a new Course instance using the formData
        const course = new Course(formData);

        // Save the course data to the database
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                // Handle any errors that occur during the saving process
                console.error("Error saving course:", error);
                // You might want to redirect to an error page or handle the error differently
                res.status(500).send("An error occurred while saving the course.");
            });
    }
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                res.render('courses/edit', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
    // // [PUT] courses/:id
    // update(req, res, next) {
    //     Course.updateOne({ _id: req.params._id }, req.body)
    //         .then(() => res.redirect('/me/stored/courses'))
    //         .cath(next)
    // }
    // [PUT] courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    // [DELETE] courses/:id
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)

    }

}

module.exports = new CoursesController();
