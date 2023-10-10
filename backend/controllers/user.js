const bcrypt = require('bcrypt')
const User = require('../models/User')
const { generate, verify } = require('../helpers/token')

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
async function login(login, password) {
	const user = await User.findOne({ login })

	if (!user) {
		throw new Error('User not found')
	}

	const isPasswordMatch = await bcrypt.compare(password, user.password)

	if (!isPasswordMatch) {
		throw new Error('Wrong password')
	}

	const token = generate({ id: user.id })

	return { user, token }
}

// delete

// edit

module.exports = { register, login }
