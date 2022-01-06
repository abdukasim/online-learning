const { createUser } = require("../../../database/user-actions")
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
      if ((await createUser(stud)) && (await tetherStudent(stud))) res.status(200).json({
        success: true,
        student: stud
      })
    } else throw '406'
  } catch(e) {
    console.log(e)
    if (isNaN(e)) res.sendStatus(500)
    else res.sendStatus(e)
  }
}