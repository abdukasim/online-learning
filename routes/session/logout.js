const validateSession = require("../../logic/validate-session")

module.exports = async (req, res) => {
  try {
    let { username, password } = req.body
    let { user } = req

    let active = await validateSession({ username, password, user })
  } catch(e) {

  }
}