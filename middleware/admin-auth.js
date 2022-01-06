const validateRequest = require("../logic/validate-request")

const access = 'ADMIN'

module.exports = async (req, res, next) => {
  try {
    let { session } = req.body

    if (await validateRequest({ session, access })) next()
    else throw '403'
  } catch(e) {
		console.log(e)
    if (isNaN(e)) res.sendStatus(500)
		else res.sendStatus(Number(e))
  }
}