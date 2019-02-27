import * as ActionTypes from "src/constant";

export function location(state = {}, action) {
	switch (action.type) {
		case ActionTypes.LOCATION_DETAIL_SUCCESS:
			if (action.fromCache) {
				return action.cache;
			}
			// getting data from api
			return action.response;
		default:
			return state;
	}
}

export function locations(state = [], action) {
	switch (action.type) {
		case ActionTypes.LOCATION_SUCCESS:
			if (action.fromCache) {
				return action.cache;
			}
			// getting data from api
			return action.response;
		default:
			return state;
	}
}
