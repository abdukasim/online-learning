module.exports = class Course {
  constructor(course) {
    let { name, code, teachers, files } = course

    this.name = name
    this.code = code
    this.teachers = teachers ? teachers : []
    this.files = files ? files : []
  }
}