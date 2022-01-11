const Grade = require('./schemes/grade')
const User = require('./schemes/user')
const Course = require('./schemes/course')

module.exports = {
	Grade, User, Course,

	'Permissions': {
		id: String, // user ID
		level: {
			type: String,
			uppercase: true,
		}, // permission level
	},

	'Files': {
		filename: {
			type: String,
			lowercase: true,
		},
		level: String,
		section: {
			type: String,
			uppercase: true
		}
	},

	'AllowedFileTypes': {
		fileType: String,
		extension: {
			type: String,
			lowercase: true
		}
	},
}