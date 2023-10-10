const bcrypt = require('bcrypt')
const User = require('../models/User')

// register
async function register(login, password) {
	if (!password) {
		throw new Error('Password is empty')
	}

	const passwordHash = await bcrypt.hash(password, 10)

	const user = User.create({ login, password: passwordHash })

	return user
}

// login

// logout

// delete

// edit

module.exports = { register }
