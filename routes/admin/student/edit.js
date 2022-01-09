const { findByUsername, editByUsername } = require("../../../database/user-actions")
const levelValidation = require("../../../logic/grade/level-validation")
const tetherStudent = require("../../../logic/grade/tether-student")
const untetherStudent = require("../../../logic/grade/untether-student")
const Student = require("../../../logic/user/Student")
const usernameIsUnique = require("../../../logic/user/username-is-unique")

module.exports = async (req, res) => {
  try {
    let { student, filter } = req.body
    let { first, last, sex, username, password, sessions, level, section } = student

    let prev = await findByUsername(filter)
    if (prev.length <= 0) throw '406'
    prev = prev[0]

    let uniqueUsername = username != filter ? await usernameIsUnique(username) : true
    let { lev, sec } = await levelValidation(level, section)
    
    if (uniqueUsername && lev) {
      let stud = new Student(student, sec, prev)
      let success = true

      if (stud.level != prev.level) {
        success &= await untetherStudent({
          username: prev.login.username,
          level: prev.level,
          section: prev.section
        })
        success &= await tetherStudent({
          username: stud.login.username,
          level: stud.level,
          section: stud.section
        })
      }

      success &= await editByUsername({
        username: filter,
        item: stud
      })
      res.status(200).json({ success, student: stud })
    } else throw '406'
  } catch(e) {
    console.log(e)
    res.sendStatus(isNaN(e) ? 500 : Number(e))
  }
}