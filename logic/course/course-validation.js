const { findCourseByCode } = require("../../database/course-actions")

module.exports = async course => {
  try {
    let { code, level } = course
    
    let c = (await findCourseByCode(code))[0]
    
    return c.level == level.toString()
  } catch {
    return false
  }
}