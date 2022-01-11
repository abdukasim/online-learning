const mongoose = require('mongoose')
const { createIfNotExist } = require('../database/actions')
const { findByLevel, editByLevel } = require('../database/level-actions')
const Course = require('../logic/course/Course')
const Grade = require('../logic/grade/Grade')

// create admin user
async function testAdmin() {
  let admin = {
    model: mongoose.models['User'],
    filter: { 'login.username': 'admin' },
    item: {
      personal: {
        name: { first: 'Admin', last: 'Admin', }
      },
      login: {
        username: 'admin',
        password: 'admin',
        sessions: [
          { session: 'admin', active: true }
        ],
      },
      type: 'ADMIN'
    }
  }

  if (await createIfNotExist(admin)) console.log('admin created')
}


// create grade 1 with 2 sections --- for testing purposes
async function testGrade() {
  let grade = {
    model: mongoose.models['Grade'],
    filter: { level: 1 },
    item: new Grade({
      level: 1,
      sections: 2
    })
  }

  if (await createIfNotExist(grade)) console.log('grade 1[2] created')
}

// create course for grade 1 both sections --- for testing purposes
async function testCourse() {
  let grade = (await findByLevel(1))[0]
  let code = 'TES_01'
  let courseObject = new Course({ name: 'Test', code })
  let add = false

  grade.sections.forEach(sec => {
    add = (sec.courses.filter(c => c.code == code)).length <= 0
    if (add) sec.courses.push(courseObject)
  })

  let course = {
    model: mongoose.models['Course'],
    filter: { code },
    item: {
      code,
      level: 1
    }
  }

  await editByLevel({ level: 1, item: grade })
  await createIfNotExist(course)

  if (add) console.log(`course ${code} created`)
}

module.exports = async () => {
  await testAdmin()
  await testGrade()
  await testCourse()
}