const express = require('express')
const router = express.Router()

const resume = require('./resume')
const login = require('./login')
const logout = require('./logout')
const auth = require('../../middleware/auth')

process.env.API_KEY = '123456789'

router.use(auth)

router.post('/', login)
router.put('/', resume)
router.delete('/', logout)

module.exports = router