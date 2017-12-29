import * as ActionTypes from "../constant";

export function film(state = {}, action) {
	switch (action.type) {
		case ActionTypes.FILM_SUCCESS:
			return action.response;

		default:
			return state;
	}
}

export function films(state = [], action) {
	switch (action.type) {
		case ActionTypes.FILMS_SUCCESS:
			return action.response;

		default:
			return state;
	}
}
