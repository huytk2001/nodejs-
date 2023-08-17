const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)
const Course = new Schema({
    name: { type: String, maxLength: 255, required: true, },
    description: { type: String, maxLength: 655 },
    image: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    videoId: { type: String, required: true, },
    slug: { type: String, slug: 'name', unique: true }

}, { timestamps: true })
module.exports = mongoose.model('Course', Course)