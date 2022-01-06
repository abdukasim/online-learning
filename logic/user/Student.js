const User = require("./User");

module.exports = class Student extends User {
  constructor(student, validSec) {
    super(student)

    let { level, section } = student

    this.level = level
    this.section = validSec ? section : undefined
    this.type = 'STUDENT'
  }
}