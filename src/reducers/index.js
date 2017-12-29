import { combineReducers } from "redux";

import { hasErrored, isLoading } from "./common";
import { film, films } from "./films";

export default combineReducers({
	hasErrored,
	isLoading,
	film,
	films
});
