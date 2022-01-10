const validateSession = require("../../logic/validate-session")

module.exports = async (req, res) => {
	try {
		let { username, password } = req.body
		let { user } = req

		if (!(await validateSession({ username, password, user })))
			throw '403'
		else
			res.status(200).json({ success: true })

	} catch (e) {
		console.log(e)
		res.sendStatus(isNaN(e) ? 500 : Number(e))
	}
}