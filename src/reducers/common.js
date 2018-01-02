import * as ActionTypes from "@/constant";

export function hasErrored(state = false, action) {
	switch (action.type) {
		case ActionTypes.FAILURE:
			return action.type;
		default:
			return state;
	}
}

export function isLoading(state = false, action) {
	switch (action.type) {
		case ActionTypes.REQUEST:
			return action.type;
		default:
			return state;
	}
}
