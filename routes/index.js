const express = require('express')
const router = express.Router()
const session = require('./session')
const admin = require('./admin')
const keyAuth = require('../middleware/key-auth')

module.exports = app => {
	app.use('/api', router)

	router.use(keyAuth)

	router.use('/session', session)
	router.use('/admin', admin)
}