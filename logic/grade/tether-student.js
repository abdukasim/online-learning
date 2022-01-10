const { findByLevel, editByLevel } = require("../../database/level-actions")

/**
 * Adds a student to grade
 * @param {Object} data { username, level, section }
 * @returns Boolean
 */
module.exports = async student => {
  try {
    let { username } = student.login
    let { section, level } = student
    
    let grade = (await findByLevel(level))[0]
    let tethered = false
    
    if (section)
      grade.sections.every(sec => {
        if (sec.index.toUpperCase() === section.toUpperCase()) {
          sec.students.push({ username })
          tethered = true
        }
        return !tethered
      })
    else grade.untethered.push({ username })
    
    return await editByLevel({
      level: grade.level,
      item: grade
    })
  } catch(e) {
    console.log(e)
    return false
  }
}