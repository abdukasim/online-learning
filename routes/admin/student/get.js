const { findUser } = require("../../../database/user-actions")

module.exports = async (req, res) => {
  try {
    let filter = { type: 'STUDENT' }

    try {
      Object.entries(req.body.filter).forEach(item => filter[item[0]] = item[1])
    } catch {}

    let users = await findUser(filter)
    res.json({ success: true, users })
  } catch(e) {
    console.log(e)
    res.sendStatus(isNaN(e) ? 500 : Number(e))
  }
}