import * as ActionTypes from "../constant";
import data from "../data/film";

export function film(state = {}, action) {
	switch (action.type) {
		case ActionTypes.FILM_SUCCESS:
			return Object.assign({}, data[action.response.id], action.response);
		default:
			return state;
	}
}

export function films(state = [], action) {
	switch (action.type) {
		case ActionTypes.FILMS_SUCCESS:
			return action.response.map(item => {
				return Object.assign({}, data[item.id], item);
			});

		default:
			return state;
	}
}
