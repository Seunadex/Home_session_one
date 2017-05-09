'use strict'

module.exports = {
	findMinMax: (arr) => {
		let minimum = Math.min.apply(null, arr); 
		let maximum = Math.max.apply(null, arr);
		if (minimum === maximum) {
			return [minimum];
		}
		return [minimum, maximum];
	}
};