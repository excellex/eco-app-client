const router = require('express').Router()
const controller = require('../controllers')

router.get('/', controller.getRoot)


module.exports = router
