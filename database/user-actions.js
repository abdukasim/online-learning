const mongoose = require('mongoose')
const { find, edit, create, remove } = require("./actions")

async function findUser(filter) {
	return await find({
		model: mongoose.models['User'],
		filter
	})
}

async function createUser(item) {
	return await create({
		model: mongoose.models['User'],
		item
	})
}

async function editUser(filter, item) {
	return await edit({
		model: mongoose.models['User'],
		filter, item
	})
}

async function removeUser(filter) {
	return await remove({
		model: mongoose.models['User'],
		filter
	})
}

module.exports = {
	findUser: async filter => (await findUser(filter)),
	findByUsername: async username => (await findUser({ 'login.username': username })),

	createUser: async item => (await createUser(item)),

	editUser: async data => (await editUser(data.filter, data.item)),
	editByUsername: async data => (await editUser({ 'login.username': data.username }, data.item)),

	removeUser: async filter => (await removeUser(filter)),
	removeByUsername: async username => (await removeUser({ 'login.username': username })),
}