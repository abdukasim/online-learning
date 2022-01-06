const { findUser } = require("../../../database/user-actions")

module.exports = async (req, res) => {
  try {
    let users = await findUser(req.body.filters)
    res.json({ success: true, users })
  } catch(e) {
    console.log(e)
    if (isNaN(e)) res.sendStatus(500)
		else res.sendStatus(Number(e))
  }
}