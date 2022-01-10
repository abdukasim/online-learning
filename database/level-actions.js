const mongoose = require('mongoose')
const { create, find, edit, remove, createIfNotExist } = require("./actions")

async function findLevel(filter) {
	return await find({
		model: mongoose.models['Grade'],
		filter
	})
}

async function createLevel(item) {
	return await create({
		model: mongoose.models['Grade'],
		item
	})
}

async function createLevelIfNotExist(filter, item) {
	return await createIfNotExist({
		model: mongoose.models['Grade'],
		filter, item
	})
}

async function editLevel(filter, item) {
	return await edit({
		model: mongoose.models['Grade'],
		filter, item
	})
}

async function removeLevel(filter) {
	return await remove({
		model: mongoose.models['Grade'],
		filter
	})
}

module.exports = {
	findLevel: async filter => (await findLevel(filter)),
	findByLevel: async level => (await findLevel({ level })),

	createLevel: async item => (await createLevel(item)),
	createLevelIfNotExist: async data => (await createLevelIfNotExist(data.filter, data.item)),
	createLevelIfNotExist: async (filter, item) => {
		filter = (typeof filter === 'string') ? {
			level: filter
		} : filter
		return await createLevelIfNotExist(filter, item)
	},

	editLevel: async data => (await editLevel(data.filter, data.item)),
	editByLevel: async data => (await editLevel({ level: data.level }, data.item)),

	removeLevel: async filter => (await removeLevel(filter)),
	removeByLevel: async level => (await removeLevel({ level })),
}