const express = require("express");
const route = express.Router()


const coursesController = require('../app/controllers/CoursesController');
const mongoose = require("../util/mongoose");
const Schema = mongoose.Schema

route.get('/create', coursesController.create)
route.post('/store', coursesController.store)
route.get('/:slug', coursesController.show)
route.put('/:id', coursesController.update)
route.delete('/:id', coursesController.destroy)
route.get('/:id/edit', coursesController.edit)

module.exports = route