const express = require('express')
const router = express.Router()

//imports routes
const { login, register } = require('../controllers/auth')

//setup route

router.post('/register', register)
router.post('/login', login)

module.exports = router
