const { findByUsername } = require("../database/user-actions")

module.exports = async (req, res, next) => {
	try {
		let { username, password } = req.body

		if (username && password) {
			let { username } = req.body
			let result = await findByUsername(username)

			if (result.length <= 0) throw '403'
			let user = result[0]

			req.user = user
			next()
		}
		else throw '401'
	} catch(e) {
		console.log(e)
    res.sendStatus(isNaN(e) ? 500 : Number(e))
	}
}