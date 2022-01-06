module.exports = {
	'Grade': {
		level: String,
		dates: {
			start: String,
			end: String,
		},
		untethered: [
			{
				// id: String, /* student ID */
				username: {
					type: String,
					lowercase: true,
				} /* student USERNAME */
			}
		],
		sections: [
			{
				index: {
					type: String,
					uppercase: true
				},
				students: [
					{
						// id: String, /* student ID */
						username: {
							type: String,
							lowercase: true
						} /* student USERNAME */
					}
				],
				courses: [
					{
						teachers: [
							{
								// id: String, /* teacher ID */
								username: {
									type: String,
									lowercase: true
								} /* teacher USERNAME */
							}
						],
						name: String,
						code: {
							type: String,
							uppercase: true
						},
						files: [
							{
								type: { // assignment, lecture note or homework
									type: String,
									uppercase: true
								},
								name: String,
								fileName: String, // must be unique
								size: String, // in bytes
								// date: { due: Date, deadline: Date },
								date: { due: String, deadline: String },
								uploader: String, // uploader teacher ID
								transcript: String,
							}
						],
					}
				],
			}
		] // sections
	}, // Grade

	'User': {
		personal: {
			name: { first: String, last: String },
			sex: String,
		},
		login: {
			username: {
				type: String,
				lowercase: true
			},
			password: String,
			sessions: [
				{ session: String, active: Boolean, device: Object }
			],
		},
		type: {
			type: String,
			uppercase: true
		}, // identifies user type
	}, // User

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