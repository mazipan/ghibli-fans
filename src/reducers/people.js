import * as ActionTypes from "@/constant";

export function person(state = {}, action) {
	switch (action.type) {
		case ActionTypes.PEOPLE_DETAIL_SUCCESS:
			if (action.fromCache) {
				return action.cache;
			}
			// getting data from api
			return action.response;
		default:
			return state;
	}
}

export function people(state = [], action) {
	switch (action.type) {
		case ActionTypes.PEOPLE_SUCCESS:
			if (action.fromCache) {
				return action.cache;
			}
			// getting data from api
			return action.response;
		default:
			return state;
	}
}
