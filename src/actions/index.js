import { CALL_API } from "@/middleware/api";
import { getCache } from "@/cache";
import * as Constant from "@/constant";

// FILMS
export const loadFilms = () => dispatch => {
	let cache = getCache(Constant.CACHE_FILMS);
	if (!cache) {
		const fetchData = () => ({
			[CALL_API]: {
				types: [Constant.REQUEST, Constant.FILM_SUCCESS, Constant.FAILURE],
				endpoint: `${Constant.ENDPOINT_FILMS}/`,
				cachekey: Constant.CACHE_FILMS
			}
		});

		return dispatch(fetchData());
	}

	const action = {
		type: Constant.FILM_SUCCESS,
		cache,
		fromCache: true
	};
	return dispatch(action);
};

export const loadFilmDetail = id => dispatch => {
	let cache = getCache(id);
	if (!cache) {
		const fetchData = id => ({
			[CALL_API]: {
				types: [
					Constant.REQUEST,
					Constant.FILM_DETAIL_SUCCESS,
					Constant.FAILURE
				],
				endpoint: `${Constant.ENDPOINT_FILMS}/${id}`,
				cachekey: id
			}
		});

		return dispatch(fetchData(id));
	}

	const action = {
		type: Constant.FILM_DETAIL_SUCCESS,
		cache,
		fromCache: true
	};
	return dispatch(action);
};

// PEOPLE
export const loadPeople = () => dispatch => {
	let cache = getCache(Constant.CACHE_PEOPLE);
	if (!cache) {
		const fetchData = () => ({
			[CALL_API]: {
				types: [Constant.REQUEST, Constant.PEOPLE_SUCCESS, Constant.FAILURE],
				endpoint: `${Constant.ENDPOINT_PEOPLE}/`,
				cachekey: Constant.CACHE_PEOPLE
			}
		});

		return dispatch(fetchData());
	}

	const action = {
		type: Constant.PEOPLE_SUCCESS,
		cache,
		fromCache: true
	};
	return dispatch(action);
};

export const loadPersonDetail = id => dispatch => {
	let cache = getCache(id);
	if (!cache) {
		const fetchData = id => ({
			[CALL_API]: {
				types: [
					Constant.REQUEST,
					Constant.PEOPLE_DETAIL_SUCCESS,
					Constant.FAILURE
				],
				endpoint: `${Constant.ENDPOINT_PEOPLE}/${id}`,
				cachekey: id
			}
		});

		return dispatch(fetchData(id));
	}

	const action = {
		type: Constant.PEOPLE_DETAIL_SUCCESS,
		cache,
		fromCache: true
	};
	return dispatch(action);
};

// LOCATION
export const loadLocations = () => dispatch => {
	let cache = getCache(Constant.CACHE_LOCATIONS);
	if (!cache) {
		const fetchData = () => ({
			[CALL_API]: {
				types: [Constant.REQUEST, Constant.LOCATION_SUCCESS, Constant.FAILURE],
				endpoint: `${Constant.ENDPOINT_LOCATIONS}/`,
				cachekey: Constant.CACHE_LOCATIONS
			}
		});

		return dispatch(fetchData());
	}

	const action = {
		type: Constant.LOCATION_SUCCESS,
		cache,
		fromCache: true
	};
	return dispatch(action);
};

export const loadLocationDetail = id => dispatch => {
	let cache = getCache(id);
	if (!cache) {
		const fetchData = id => ({
			[CALL_API]: {
				types: [
					Constant.REQUEST,
					Constant.LOCATION_DETAIL_SUCCESS,
					Constant.FAILURE
				],
				endpoint: `${Constant.ENDPOINT_LOCATIONS}/${id}`,
				cachekey: id
			}
		});

		return dispatch(fetchData(id));
	}

	const action = {
		type: Constant.LOCATION_DETAIL_SUCCESS,
		cache,
		fromCache: true
	};
	return dispatch(action);
};

// SPECIES
export const loadSpecies = () => dispatch => {
	let cache = getCache(Constant.CACHE_SPECIES);
	if (!cache) {
		const fetchData = () => ({
			[CALL_API]: {
				types: [Constant.REQUEST, Constant.SPECIES_SUCCESS, Constant.FAILURE],
				endpoint: `${Constant.ENDPOINT_SPECIES}/`,
				cachekey: Constant.CACHE_SPECIES
			}
		});

		return dispatch(fetchData());
	}

	const action = {
		type: Constant.SPECIES_SUCCESS,
		cache,
		fromCache: true
	};
	return dispatch(action);
};

export const loadSpeciesDetail = id => dispatch => {
	let cache = getCache(id);
	if (!cache) {
		const fetchData = id => ({
			[CALL_API]: {
				types: [
					Constant.REQUEST,
					Constant.SPECIES_DETAIL_SUCCESS,
					Constant.FAILURE
				],
				endpoint: `${Constant.ENDPOINT_SPECIES}/${id}`,
				cachekey: id
			}
		});

		return dispatch(fetchData(id));
	}

	const action = {
		type: Constant.SPECIES_DETAIL_SUCCESS,
		cache,
		fromCache: true
	};
	return dispatch(action);
};

// VEHICLES
export const loadVehicles = () => dispatch => {
	let cache = getCache(Constant.CACHE_VEHICLES);
	if (!cache) {
		const fetchData = () => ({
			[CALL_API]: {
				types: [Constant.REQUEST, Constant.VEHICLE_SUCCESS, Constant.FAILURE],
				endpoint: `${Constant.ENDPOINT_VEHICLES}/`,
				cachekey: Constant.CACHE_VEHICLES
			}
		});

		return dispatch(fetchData());
	}

	const action = {
		type: Constant.VEHICLE_SUCCESS,
		cache,
		fromCache: true
	};
	return dispatch(action);
};

export const loadVehicleDetail = id => dispatch => {
	let cache = getCache(id);
	if (!cache) {
		const fetchData = id => ({
			[CALL_API]: {
				types: [
					Constant.REQUEST,
					Constant.VEHICLE_DETAIL_SUCCESS,
					Constant.FAILURE
				],
				endpoint: `${Constant.ENDPOINT_VEHICLES}/${id}`,
				cachekey: id
			}
		});

		return dispatch(fetchData(id));
	}

	const action = {
		type: Constant.VEHICLE_DETAIL_SUCCESS,
		cache,
		fromCache: true
	};
	return dispatch(action);
};
