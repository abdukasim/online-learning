const randIdGen = require("rand-id-gen")
const { editByUsername } = require("../../database/user-actions")

module.exports = async (req, res) => {
	try {
		let { username, password } = req.body
		let { user } = req
		
		if (user.login.password !== password) throw '403'

		let session = randIdGen({ array: user.login.sessions.map(item => (item.session)), numbers: true })

		user.login.sessions.push({
			session,
			active: true,
			// device: // attach device info here
		})

		delete user._id

		await editByUsername({
			username,
			item: user
		})

		res.status(200).json({
			success: true,
			password: session,
			redirect: user.type.toLowerCase()
		})
	} catch (e) {
		console.log(e)
		res.sendStatus(isNaN(e) ? 500 : Number(e))
	}
}