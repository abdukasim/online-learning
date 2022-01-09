const { findLevel, editLevel } = require("../../database/level-actions")

/**
 * Adds a student to grade
 * @param {Object} data { username, level, section }
 * @returns Boolean
 */
module.exports = async data => {
  try {
    let { username, section, level } = data
    let grade = (await findLevel({ level }))[0]
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