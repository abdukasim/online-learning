const mongoose = require('mongoose')
const { create, find } = require("./actions");

async function findCourse(filter) {
  return await find({
    model: mongoose.models['Course'],
    filter
  })
}


async function createCourse(item) {
  return await create({
    model: mongoose.models['Course'],
    item
  })
}


module.exports = {
  findCourse: async filter => (await findCourse(filter)),
  findCourseByCode: async code => (await findCourse({ code })),
  
  createCourse: async item => (await createCourse(item)),
}