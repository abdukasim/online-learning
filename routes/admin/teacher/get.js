const { findUser } = require("../../../database/user-actions")

module.exports = async (req, res) => {
  try {
    let filter = { type: 'TEACHER' }

    try {
      Object.entries(req.body.filter).forEach(item => filter[item[0]] = item[1])
    } catch {}

    res.json({
      success: true,
      teachers: await findUser(filter)
    })
  } catch(e) {
    console.log(e)
    res.sendStatus(isNaN(e) ? 500 : Number(e))
  }
}