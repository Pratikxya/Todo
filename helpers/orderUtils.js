import Todos from "../models/todo.js";

export const getNewOrder = async (before, after) => {
	let beforeOrder = 0;
	let afterOrder = Date.now();
	// console.log('I am here')
	try {
		if (before && after) {
			console.log('before && after')
			// find their order and return average
			beforeOrder = (await Todos.findById(before)).order;
			afterOrder = (await Todos.findById(after)).order;
			return (beforeOrder + afterOrder) / 2
		}
		if (!before && after) {
			// find before and then return average
			console.log('!before && after')

			afterOrder = (await Todos.findById(after)).order;
			beforeOrder = (await Todos.find({ order: { $gt: afterOrder } }).sort({ order: 'asc' }).limit(1))[0].order
			return (beforeOrder + afterOrder) / 2
		}
		if (!after && before) {
			// find after and then return average
			console.log('!after && before')
			beforeOrder = (await Todos.findById(before)).order;
			afterOrder = (await Todos.find({ order: { $lt: beforeOrder } }).sort({ order: 'desc' }).limit(1))[0].order
			return (beforeOrder + afterOrder) / 2
		}
		if (!before && !after) {
			console.log('!after && !before')
			return Date.now()
		}
	} catch (error) {
		return (beforeOrder + afterOrder) / 2
	}
}