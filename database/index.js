const mongoose = require("mongoose")
const { model, Schema } = require("mongoose")
const Grade = require("../logic/grade/Grade")
const { createIfNotExist } = require("./actions")
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

			// create admin user
			let admin = {
				model: mongoose.models['User'],
				filter: { 'login.username': 'admin' },
				item: {
					personal: {
						name: { first: 'Admin', last: 'Admin', }
					},
					login: {
						username: 'admin',
						password: 'admin',
						sessions: [
							{ session: 'admin', active: true }
						],
					},
					type: 'ADMIN'
				}
			}
			if (await createIfNotExist(admin)) console.log('admin created')
			
			// create grade 1 with 2 sections --- for testing purposes
			let grade = {
				model: mongoose.models['Grade'],
				filter: { level: 1 },
				item: new Grade({
					level: 1,
					sections: 2
				})
			}
			if (await createIfNotExist(grade)) console.log('grade 1[2] created')


			resolve('connected to database')
		} catch (e) {
			console.log(e.toString())
			reject('not able to connect to database')
		}
	})
}