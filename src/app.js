import { h, Component } from "preact";
import { Router } from "preact-router";
import createHashHistory from "history/createHashHistory";

import { Provider } from "preact-redux";
import configureStore from "./store";
const store = configureStore();

import Header from "src/components/header";
import Footer from "src/components/footer";

import FilmsPage from "src/pages/films/list";
import FilmPage from "src/pages/films/detail";

import PeoplePage from "src/pages/people/list";
import PersonPage from "src/pages/people/detail";

import LocationsPage from "src/pages/locations/list";
import LocationPage from "src/pages/locations/detail";

import SpeciesPage from "src/pages/species/list";
import SpeciesDetailPage from "src/pages/species/detail";

import VehiclesPage from "src/pages/vehicles/list";
import VehiclePage from "src/pages/vehicles/detail";

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
						<FilmPage path="/films/:id" />

						<PeoplePage path="/people" />
						<PersonPage path="/people/:id" />

						<LocationsPage path="/locations" />
						<LocationPage path="/locations/:id" />

						<SpeciesPage path="/species" />
						<SpeciesDetailPage path="/species/:id" />

						<VehiclesPage path="/vehicles" />
						<VehiclePage path="/vehicles/:id" />
					</Router>

					<Footer appName={this.state.appName} />
				</div>
			</Provider>
		);
	}
}
