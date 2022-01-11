module.exports = async (req, res) => {
  try {
    res.status(204).send('Working on it')
  } catch(e) {
    res.sendStatus(isNaN(e) ? 500 : Number(e))
  }
}