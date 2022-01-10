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
} // User