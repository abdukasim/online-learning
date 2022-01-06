const mongoose = require('mongoose')
const { find, edit } = require("./actions")

async function findLevel(filter) {
	return await find({
		model: mongoose.models['Grade'],
		filter
	})
}

async function editLevel(filter, item) {
	return await edit({
		model: mongoose.models['Grade'],
		filter, item
	})
}

module.exports = {
	findLevel: async filter => (await findLevel(filter)),

	editLevel: async data => (await editLevel(data.filter, data.item)),
}