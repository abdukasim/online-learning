const Grade = require('./schemes/grade')
const User = require('./schemes/user')

module.exports = {
	Grade, User,

	'Permissions': {
		id: String, // user ID
		level: {
			type: String,
			uppercase: true,
		}, // permission level
	},

	'Courses': {
		code: {
			type: String,
			uppercase: true,
		},
		level: String,
		section: {
			type: String,
			uppercase: true
		}
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