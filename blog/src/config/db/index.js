const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Blog-dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connet')
    } catch (error) {
        console.log('fail')
    }
}

module.exports = { connect };