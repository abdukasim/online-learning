const mongoose = require('mongoose')
const { create, find, edit, remove, createIfNotExist } = require("./actions")

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

async function createUserIfNotExist(filter, item) {
	return await createIfNotExist({
		model: mongoose.models['User'],
		filter, item
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
	createUserIfNotExist: async (filter, item) => {
		filter = (typeof filter === 'string') ? {
			'login.username': filter
		} : filter
		return await createUserIfNotExist(filter, item)
	},

	editUser: async data => (await editUser(data.filter, data.item)),
	editByUsername: async data => (await editUser({ 'login.username': data.username }, data.item)),

	removeUser: async filter => (await removeUser(filter)),
	removeByUsername: async username => (await removeUser({ 'login.username': username })),
}