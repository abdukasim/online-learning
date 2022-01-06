module.exports = (req, res, next) => {
  if (req.headers["api-key"] === process.env.API_KEY) next()
  else res.sendStatus(401)
}