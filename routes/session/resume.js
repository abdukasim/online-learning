const validateSession = require("../../logic/validate-session")

module.exports = async (req, res) => {
	try {
		let { username, password } = req.body
		let { user } = req
		
		let active = await validateSession({ username, password, user })

		if (!active) throw '403'
		else res.status(200).json({ success: true })
	} catch (e) {
		console.log(e)
		if (isNaN(e)) res.sendStatus(500)
		else res.sendStatus(Number(e))
	}
}