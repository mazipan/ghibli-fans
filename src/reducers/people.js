import * as ActionTypes from "@/constant";
import data from "@/data/people";

export function person(state = {}, action) {
	switch (action.type) {
		case ActionTypes.PEOPLE_DETAIL_SUCCESS:
			if (action.fromCache) {
				return Object.assign({}, data[action.cache.id], action.cache);
			}
			// getting data from api
			return Object.assign({}, data[action.response.id], action.response);
		default:
			return state;
	}
}

export function people(state = [], action) {
	switch (action.type) {
		case ActionTypes.PEOPLE_SUCCESS:
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
