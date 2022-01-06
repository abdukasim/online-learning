const { findByUsername } = require('../database/user-actions')

/**
 * Validates the session the user attached with the request
 * @param {Array<>} session username, password, user(optional)
 * @returns Boolean
 */
module.exports = async session => {
  try {
    let { username, password, user } = session
 
    if (!user) {
      user = await findByUsername(username)
      if (user.length <= 0) throw '403'
      user = user[0]
    }

    let active = false
		user.login.sessions.every(session => {
			active = session.session === password && session.active
			return !active
		})

    return active
  } catch(e) {
    console.log(e)
    return false
  }
}