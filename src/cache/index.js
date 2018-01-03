export const getCache = key => {
	let cache = localStorage.getItem(key);
	console.log(`get from cache ${key} : `, cache);
	return cache;
};

export const saveCache = (key, data) => {
	localStorage.setItem(key, data);
};
