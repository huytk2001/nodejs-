const express = require("express");
const route = express.Router()


const coursesController = require('../app/controllers/CoursesController');
const mongoose = require("../util/mongoose");
const Schema = mongoose.Schema

route.get('/create', coursesController.create)
route.post('/store', coursesController.store)
route.get('/:id/edit', coursesController.edit)
route.post('/handle-form-active', coursesController.handleFromActive)
route.put('/:id', coursesController.update)
route.patch('/:id/restore', coursesController.restore)
route.delete('/:id', coursesController.destroy)
route.delete('/:id/force', coursesController.forceDestroy)
route.get('/:slug', coursesController.show)

module.exports = route