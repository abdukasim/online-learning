const http = require('http')

module.exports = app => {
    let port = process.env.PORT || 3000
    let listen = () => console.log(`server started on port ${port}`)

    var server = http.createServer(app)
    server.listen(port, listen)
}