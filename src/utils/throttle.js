/**
* @module 
* @function
* @param {Function} func - Function that will be executed after throttling time
* @param {Number} ms - Throttling time
* @return {Function}
* @description Throttle function 
*/
function throttle(func, ms) {
	let isThrottled = false
	let savedArgs
	let savedThis

	return function wrapper() {

		if (isThrottled) {
			savedArgs = arguments
			savedThis = this
			return
		}

		func.apply(this, arguments)

		isThrottled = true

		setTimeout(() => {
			isThrottled = false
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs)
				savedArgs = savedThis = null
			}
		}, ms)
	}
}

export default throttle