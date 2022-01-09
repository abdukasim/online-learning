const { findLevel, editLevel } = require("../../database/level-actions")

/**
 * Removes a student from grade
 * @param {Object} data { username, level, section }
 * @returns Boolean
 */
module.exports = async data => {
  try {
    let { username, level, section } = data

    let grade = (await findLevel({ level }))[0]
    let hasSec = false

    if (section)
      grade.sections.every(s => {
        if (s.index.toUpperCase() === section.toUpperCase()) {
          s.students = s.students.filter(item => item.username !== username)
          hasSec = true
        }
        return !hasSec
      })
    
    if (!hasSec) grade.untethered = grade.untethered.filter(item => item.username !== username)
    
    return await editLevel({
      filter: { level: grade.level },
      item: grade
    })
  } catch(e) {
    console.log(e)
    return false
  }
}