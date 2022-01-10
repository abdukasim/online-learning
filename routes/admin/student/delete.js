module.exports = async (req, res) => {
  try {
    res.status(200).json({ success: true })
  } catch(e) {
    console.log(e)
    res.sendStatus(isNaN(e) ? 500 : Number(e))
  }
}