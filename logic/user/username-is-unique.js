const { findByUsername } = require("../../database/user-actions")

module.exports = async username => {
  try {
    return (await findByUsername(username)).length <= 0
  } catch(e) {
    console.log(e)
    return false
  }
}