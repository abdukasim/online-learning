const { findLevel } = require('../../database/level-actions')

module.exports = async (level, section) => {
  try {
    let grade = (await findLevel({ level }))[0]
    let pass = false

    if (section)
      grade.sections.every(sec => {
        pass = sec.index.toUpperCase() === section.toUpperCase()
        return !pass
      })

    return { lev: true, sec: pass }
  } catch(e) {
    return { lev: false, sec: false }
  }
}