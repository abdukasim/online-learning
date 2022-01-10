const express = require('express')
const router = express.Router()

const student = require('./student')
const teacher = require('./teacher')
const grade = require('./grade')
const adminAuth = require('../../middleware/admin-auth')



router.use(adminAuth)

router.use('/student', student)
router.use('/teacher', teacher)
router.use('/grade', grade)


module.exports = router