import * as ActionTypes from "../constant";

export function hasErrored(state = false, action) {
	switch (action.type) {
		case ActionTypes.FILM_FAILURE:
			return action.type;
		default:
			return state;
	}
}

export function isLoading(state = false, action) {
	switch (action.type) {
		case ActionTypes.FILM_REQUEST:
			return action.type;
		default:
			return state;
	}
}
