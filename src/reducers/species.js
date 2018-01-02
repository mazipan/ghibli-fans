import * as ActionTypes from "@/constant";

export function speciesDetail(state = {}, action) {
	switch (action.type) {
		case ActionTypes.SPECIES_DETAIL_SUCCESS:
			if (action.fromCache) {
				return action.cache;
			}
			// getting data from api
			return action.response;
		default:
			return state;
	}
}

export function species(state = [], action) {
	switch (action.type) {
		case ActionTypes.SPECIES_SUCCESS:
			if (action.fromCache) {
				return action.cache;
			}
			// getting data from api
			return action.response;
		default:
			return state;
	}
}
