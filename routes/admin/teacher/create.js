const { createUser } = require("../../../database/user-actions")
const Teacher = require("../../../logic/user/Teacher")
const usernameIsUnique = require("../../../logic/user/username-is-unique")

module.exports = async (req, res) => {
  try {
    let { teacher } = req.body

    let uniqueUsername = await usernameIsUnique(teacher.username)
    
    if (uniqueUsername) {
      let teach = new Teacher(teacher)

      if (await createUser(teach))
        res.status(200).json({
          success: true,
          teacher: teach
        })
      else throw '500'
    } else throw '406'
  } catch(e) {
    console.log(e)
    res.sendStatus(isNaN(e) ? 500 : Number(e))
  }
}