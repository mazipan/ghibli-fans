import * as ActionTypes from "@/constant";

export function vehicle(state = {}, action) {
	switch (action.type) {
		case ActionTypes.VEHICLE_DETAIL_SUCCESS:
			if (action.fromCache) {
				return action.cache;
			}
			// getting data from api
			return action.response;
		default:
			return state;
	}
}

export function vehicles(state = [], action) {
	switch (action.type) {
		case ActionTypes.VEHICLE_SUCCESS:
			if (action.fromCache) {
				return action.cache;
			}
			// getting data from api
			return action.response;
		default:
			return state;
	}
}
