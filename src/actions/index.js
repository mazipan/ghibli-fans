import { CALL_API } from "../middleware/api";
import { getCache } from "../cache";
import * as Constant from "../constant";

const fetchFilms = () => ({
	[CALL_API]: {
		types: [
			Constant.FILM_REQUEST,
			Constant.FILMS_SUCCESS,
			Constant.FILM_FAILURE
		],
		endpoint: `films/`,
		cachekey: Constant.CACHE_FILMS
	}
});

const fetchFilm = filmId => ({
	[CALL_API]: {
		types: [
			Constant.FILM_REQUEST,
			Constant.FILM_SUCCESS,
			Constant.FILM_FAILURE
		],
		endpoint: `films/${filmId}`,
		cachekey: filmId
	}
});

export const loadFilm = filmId => dispatch => {
	let cache = getCache(filmId);
	if (!cache) {
		return dispatch(fetchFilm(filmId));
	}

	const action = {
		type: Constant.FILM_SUCCESS,
		cache: JSON.parse(cache),
		fromCache: true
	};
	return dispatch(action);
};

export const loadFilms = () => dispatch => {
	let cache = getCache(Constant.CACHE_FILMS);
	if (!cache) {
		return dispatch(fetchFilms());
	}

	const action = {
		type: Constant.FILMS_SUCCESS,
		cache: JSON.parse(cache),
		fromCache: true
	};
	return dispatch(action);
};
