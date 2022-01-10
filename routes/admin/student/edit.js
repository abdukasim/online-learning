module.exports = async (req, res) => {
  try {
    res.status(200).json({ success, student: stud })
  } catch(e) {
    console.log(e)
    res.sendStatus(isNaN(e) ? 500 : Number(e))
  }
}