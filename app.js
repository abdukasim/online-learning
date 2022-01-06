const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const database = require('./database')
const server = require('./config/server')

var app = express()


// middleware
app.use(cors())
app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


server(app)
database()
	.then(res => {
		routes(app)
		console.log(res)
	})
	.catch(err => {
		console.log(err)
		app.use(function (req, res, next) {
			if (req.url.match('api')) res.json({ success: false, detail: 'Cannot connect to database' })
			else res.sendFile(__dirname + '/public/error.html')
		})
	})