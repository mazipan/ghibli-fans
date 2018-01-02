import { h, Component } from "preact";
import { Router } from "preact-router";
import createHashHistory from "history/createHashHistory";

import { Provider } from "preact-redux";
import configureStore from "./store";
const store = configureStore();

import Header from "components/header";
import Footer from "components/footer";

import FilmsPage from "pages/films/list";
import FilmPage from "pages/films/detail";

import PeoplePage from "pages/people/list";
import PersonPage from "pages/people/detail";

import LocationsPage from "pages/locations/list";
import LocationPage from "pages/locations/detail";

import SpeciesPage from "pages/species/list";
import SpeciesDetailPage from "pages/species/detail";

import VehiclesPage from "pages/vehicles/list";
import VehiclePage from "pages/vehicles/detail";

export default class App extends Component {
	state = {
		appName: "Ghibli Fans"
	};
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header appName={this.state.appName} />

					<Router history={createHashHistory()}>
						<FilmsPage path="/" />

						<FilmsPage path="/films" />
						<FilmPage path="/films/:filmid" />

						<PeoplePage path="/people" />
						<PersonPage path="/people/:filmid" />

						<LocationsPage path="/locations" />
						<LocationPage path="/locations/:filmid" />

						<SpeciesPage path="/species" />
						<SpeciesDetailPage path="/species/:filmid" />

						<VehiclesPage path="/vehicles" />
						<VehiclePage path="/vehicles/:filmid" />
					</Router>

					<Footer appName={this.state.appName} />
				</div>
			</Provider>
		);
	}
}
