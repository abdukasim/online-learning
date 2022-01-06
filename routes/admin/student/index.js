const express = require('express')
const router = express.Router()

const get = require('./get')
const create = require('./create')
const edit = require('./edit')
const remove = require('./delete')
const adminAuth = require('../../../middleware/admin-auth')

router.use(adminAuth)

router.get('/', get)
router.post('/', create)
router.put('/', edit)
router.delete('/', remove)


module.exports = router