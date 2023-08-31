const express = require('express')
const router = express.Router()

const meController = require("../app/controllers/MeController")

router.get('/stored/Coursess', meController.storedCoursess)
router.get('/trash/Coursess', meController.trashCoursess)
module.exports = router