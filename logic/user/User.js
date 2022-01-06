module.exports = class User {
  constructor(user) {
    let { first, last, sex, username, password, sessions } = user

    this.personal = {
			name: { first, last },
      sex
		}

		this.login = { username, password,
			sessions: sessions ? sessions : []
		}
  }
}