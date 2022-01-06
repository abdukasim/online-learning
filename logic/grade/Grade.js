function setSections(count) {
	let sec = []

	if (isNaN(count)) count = 1
	
	for (let i=0; i<count; i++) {
		sec.push({
			index: String.fromCharCode(65 + i),
			students: [],
			courses: [],
		})
	}
	return sec
}

module.exports = class Grade {
	/**
	 * Blueprint of the grade mongodb schema
	 * @param {Object} grade
	 */
	constructor(grade) {
    let { level, untethered, dates, sections } = grade

		this.level = level
		this.untethered = untethered ? untethered : []

		this.dates = dates

		if (grade.sections instanceof Array)
			this.sections = sections
		else
			this.sections = setSections(sections)
	}
}