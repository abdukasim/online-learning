let editOptions = {
	new: true,
	upsert: false,
	rawResult: true,
	multi: true
}

async function find(data) {
	try {
		let { model, filter } = data
		return (await model.find(filter).lean())
	} catch(e) {
		console.log(e)
		return []
	}
}

async function create(data) {
	try {
		let { model, item } = data
		await model.create(item)
		return true
	} catch(e) {
		console.log(e)
		return false
	}
}

async function edit(data) {
	try {
		let { model, filter, item } = data
		let result = await model.updateMany(filter, item, editOptions)

		return { success: result.matchedCount > 0, items: result.value }
	} catch(e) {
		console.log(e)
		return { success: false }
	}
}

async function remove(data) {
	try {
		let { model, filter } = data
		return (await model.deleteOne(filter)).deletedCount > 0
	} catch(e) {
		console.log(e)
		return false
	}
}

module.exports = {
	find: async data => (await find(data)),
	create: async data => (await create(data)),
	edit: async data => (await edit(data)),
	remove: async data => (await remove(data)),

	async createIfNotExist(data) {
		try {
			if ((await find(data)).length <= 0) return (await create(data))
			else throw 'Operation failed'
		} catch {
			return false
		}
	},
}