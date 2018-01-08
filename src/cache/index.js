const CACHE_PREFIX = "GHIBLI_";

export const getCache = key => {
	let data = null;
	let cache = localStorage.getItem(`${CACHE_PREFIX}${key}`);
	try {
		let result = JSON.parse(cache);
		console.log(`get from cache key: ${CACHE_PREFIX}${key} `, result);
		// we will cache per one day
		if (result !== null) {
			let dateNow = new Date().getDate();
			let createdDate = new Date(result.created).getDate();
			if (dateNow === createdDate) {
				data = result.data;
			}
		}
	} catch (err) {
		// do nothing
	}
	return data;
};

export const saveCache = (key, data) => {
	let obj = {
		created: new Date().getTime(),
		data
	};
	let dataString = JSON.stringify(obj);
	localStorage.setItem(`${CACHE_PREFIX}${key}`, dataString);
};
