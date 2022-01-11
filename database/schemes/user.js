module.exports = {
  personal: {
    name: { first: String, last: String },
    sex: String,
  },
  login: {
    username: {
      type: String,
      lowercase: true
    },
    password: String,
    sessions: [
      { session: String, active: Boolean, device: Object }
    ],
  },
  type: {
    type: String,
    uppercase: true
  }, // identifies user type

  // for student
  level: String,
  section: {
    type: String,
    uppercase: true
  },
  
  // for teachers
  courses: [
    {
      code: {
        type: String,
        uppercase: true
      },
      level: String,
      section: {
        type: String,
        uppercase: true
      }
    }
  ],
} // User