const { findLevel, editLevel } = require("../../database/level-actions")

module.exports = async student => {
  try {
    let { username } = student.login
    let grade = (await findLevel({ level: student.level }))[0]
    let tethered = false
    
    if (student.section)
      grade.sections.every(sec => {
        if (sec.index.toUpperCase() === student.section.toUpperCase()) {
          sec.students.push({ username })
          tethered = true
        }
        return !tethered
      })
    else grade.untethered.push({ username })
    
    await editLevel({
      filter: { level: grade.level },
      item: grade
    })
    
    return true
  } catch(e) {
    console.log(e)
    return false
  }
}