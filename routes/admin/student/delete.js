const { findByUsername, removeByUsername } = require("../../../database/user-actions")
const untetherStudent = require("../../../logic/grade/untether-student")

module.exports = async (req, res) => {
  try {
    let { filter } = req.body

    let user = await findByUsername(filter)
    if (user.length <= 0) throw '406'
    let { username, level, section } = user[0]

    if ((await untetherStudent({
      username, level, section
    })) && (await removeByUsername(filter))) res.status(200).json({ success: true })
    else throw '406'
  } catch(e) {
    console.log(e)
    res.sendStatus(isNaN(e) ? 500 : Number(e))
  }
}