const { createUser } = require("../../../database/user-actions")
const courseValidation = require("../../../logic/course/course-validation")
const tetherTeacher = require("../../../logic/grade/tether-teacher")
const Teacher = require("../../../logic/user/Teacher")
const usernameIsUnique = require("../../../logic/user/username-is-unique")

module.exports = async (req, res) => {
  try {
    let { teacher } = req.body

    let uniqueUsername = await usernameIsUnique(teacher.username)
    let validCourse = teacher.courses ? teacher.courses.length === 0 : true

    if (!validCourse)
      await new Promise(resolve => {
        teacher.courses.every(async (course, i) => {
          validCourse = await courseValidation(course)
          if (!validCourse || i == teacher.courses.length - 1) resolve()
          return validCourse
        })
      })


    if (uniqueUsername && validCourse) {
      let teach = new Teacher(teacher)

      if (await tetherTeacher(teach) && await createUser(teach))
        res.status(200).json({
          success: true,
          teacher: teach
        })
      else throw '500'
    } else throw '406'
  } catch (e) {
    console.log(e)
    res.sendStatus(isNaN(e) ? 500 : Number(e))
  }
}