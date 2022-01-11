const { findByLevel, editByLevel } = require("../../database/level-actions")

module.exports = async teacher => {
  try {
    let { courses } = teacher
    let { username } = teacher.login

    return await new Promise(resolve => {
      courses.forEach(async (c, i) => {
        let grade = (await findByLevel(c.level))[0]
        
        if (c.sections instanceof Array) { // sections r defined
          c.sections.forEach(selected => {
            grade.sections.forEach(sec => {
              if (sec.index == selected.section.toUpperCase()) {
                sec.courses.forEach(course => {
                  if (course.code == c.code) course.teachers.push({ username })
                })
              }
            })
          })
        } else
          grade.sections.forEach(sec => {
            sec.courses.forEach(course => {
              if (course.code == c.code) course.teachers.push({ username })
            })
          })

        // remove duplicate teachers from grade
        grade.sections.forEach(section => {
          section.courses.forEach(course => {
            let temp = [...new Set(course.teachers.map(t => t.username))]
            course.teachers = temp.map(username => username ? { username } : false)
          })
        })

        if (i == courses.length-1) resolve(await editByLevel({
          level: grade.level,
          item: grade
        }))
      })
    })
  } catch(e) {
    console.log(e)
    return false
  }
}