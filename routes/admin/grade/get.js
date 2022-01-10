const { findGrade } = require("../../../database/level-actions")

module.exports = async (req, res) => {
  try {
    res.json({
      success: true,
      grades: await findGrade(req.body.filter)
    })
  } catch(e) {
    console.log(e)
    res.sendStatus(isNaN(e) ? 500 : Number(e))
  }
}