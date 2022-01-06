const User = require("./User");

module.exports = class Teacher extends User {
  constructor(teacher) {
    super(teacher)

    let { courses } = teacher

    this.courses = courses ? courses : []
    this.type = 'TEACHER'
  }
}