const validateSession = require('../../logic/validate-session')
const permission = require('./permission')
const { findByUsername } = require('../../database/user-actions')

module.exports = async data => {
  try {
    let { session, access } = data

    if ((await validateSession(session))) {
      let user = (await findByUsername(session.username))[0]

      return (await permission.check(user, access))
    } else return false
  } catch {
    return false
  }
}