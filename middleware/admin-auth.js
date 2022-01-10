const validateRequest = require("./resource/validate-request")

const access = 'ADMIN'

module.exports = async (req, res, next) => {
  try {
    let { session } = req.body

    if (await validateRequest({ session, access })) next()
    else throw '403'
  } catch(e) {
		console.log(e)
    res.sendStatus(isNaN(e) ? 500 : Number(e))
  }
}