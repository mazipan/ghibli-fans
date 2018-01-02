export const getCache = key => {
	let cache = localStorage.getItem(key);
	return cache;
};

export const saveCache = (key, data) => {
	localStorage.setItem(key, data);
};
