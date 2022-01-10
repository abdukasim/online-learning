const { createUser, createUserIfNotExist } = require("../../../database/user-actions")
const levelValidation = require("../../../logic/grade/level-validation")
const tetherStudent = require("../../../logic/grade/tether-student")
const Student = require("../../../logic/user/Student")
const usernameIsUnique = require("../../../logic/user/username-is-unique")

module.exports = async (req, res) => {
  try {
    let { student } = req.body
    let { username, level, section } = student

    let uniqueUsername = await usernameIsUnique(username)
    let { lev, sec } = await levelValidation(level, section)

    if (uniqueUsername && lev) {
      let stud = new Student(student, sec)

      // add student to db --> add student to selected grade
      if ((await createUserIfNotExist(username, stud)) && (await tetherStudent(stud)))
        res.status(200).json({
          success: true,
          student: stud
        })
      else throw '500'
    } else throw '406'
  } catch(e) {
    console.log(e)
    res.sendStatus(isNaN(e) ? 500 : Number(e))
  }
}