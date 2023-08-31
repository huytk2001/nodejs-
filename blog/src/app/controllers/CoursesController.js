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
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                res.render('courses/edit', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    // [PUT] courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    // [DELETE] courses/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)

    }
    //[DELETE] courses/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    // [Patch] courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(error => next(error)); // Sử dụng 'error' thay vì 'next'
    }

    handleFromActive(req, res, next) { // Đã sửa tên hàm thành handleFormActive
        switch (req.body.action) { // Đã sửa rep thành req
            case 'delete':
                Course.deleteMany({ _id: { $in: req.body.CourseIds } }) // Sử dụng Courses.deleteMany thay vì Courses.delete
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid' }); // Sửa lỗi jôn thành json
        }
    }
}

module.exports = new CoursesController();
