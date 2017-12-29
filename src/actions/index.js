import { CALL_API } from "../middleware/api";
import * as Constant from "../constant";

const fetchFilms = () => ({
	[CALL_API]: {
		types: [
			Constant.FILM_REQUEST,
			Constant.FILMS_SUCCESS,
			Constant.FILM_FAILURE
		],
		endpoint: `films/`
	}
});

const fetchFilm = filmId => ({
	[CALL_API]: {
		types: [
			Constant.FILM_REQUEST,
			Constant.FILM_SUCCESS,
			Constant.FILM_FAILURE
		],
		endpoint: `films/${filmId}`
	}
});

export const loadFilm = filmId => dispatch => {
	return dispatch(fetchFilm(filmId));
};

export const loadFilms = () => dispatch => {
	return dispatch(fetchFilms());
};
