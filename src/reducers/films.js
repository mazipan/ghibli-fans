import * as ActionTypes from "src/constant";
import data from "src/data/film";

export function film(state = {}, action) {
	switch (action.type) {
		case ActionTypes.FILM_DETAIL_SUCCESS:
			if (action.fromCache) {
				return Object.assign({}, data[action.cache.id], action.cache);
			}
			// getting data from api
			return Object.assign({}, data[action.response.id], action.response);
		default:
			return state;
	}
}

export function films(state = [], action) {
	switch (action.type) {
		case ActionTypes.FILM_SUCCESS:
			if (action.fromCache) {
				return action.cache.map(item => {
					return Object.assign({}, data[item.id], item);
				});
			}
			// getting data from api
			return action.response.map(item => {
				return Object.assign({}, data[item.id], item);
			});
		default:
			return state;
	}
}
