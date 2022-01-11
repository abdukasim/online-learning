const mongoose = require("mongoose")
const { model, Schema } = require("mongoose")
const devMode = require("../config/dev-mode")
const schemes = require('./raw-schemes')

const database = 'school'
const password = 'burkaman'

process.env.OFFLINE_DATABASE_URI = `mongodb://localhost:27017/${database}`
process.env.ONLINE_DATABASE_URI = `mongodb+srv://burka:${password}@cluster0.ja273.mongodb.net/${database}?retryWrites=true&w=majority`

module.exports = async () => {
	return new Promise(async (resolve, reject) => {
		// connect to database
		try {
			let connected = await mongoose.connect(process.env.ONLINE_DATABASE_URI, {
				useNewUrlParser: true
			})

			Object.entries(schemes).forEach(item => {
				model(item[0], new Schema(item[1], { strict: false }))
			})

			
			devMode()


			resolve('connected to database')
		} catch (e) {
			console.log(e.toString())
			reject('not able to connect to database')
		}
	})
}