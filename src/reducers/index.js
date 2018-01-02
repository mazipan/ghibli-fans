import { combineReducers } from "redux";

import { hasErrored, isLoading } from "./common";
import { film, films } from "./films";
import { location, locations } from "./locations";
import { person, people } from "./people";
import { speciesDetail, species } from "./species";
import { vehicle, vehicles } from "./vehicles";

export default combineReducers({
	hasErrored,
	isLoading,
	film,
	films,
	location,
	locations,
	person,
	people,
	speciesDetail,
	species,
	vehicle,
	vehicles
});
