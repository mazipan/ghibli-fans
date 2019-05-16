import { h, Component } from "preact";
import { Router } from "preact-router";
import AsyncRoute from 'preact-async-route';

import { Provider } from "preact-redux";
import configureStore from "./store";
const store = configureStore();

import Header from "src/components/header";
import Footer from "src/components/footer";

import FilmsPage from "src/pages/films/list";

// const createHashHistory = require("history").createHashHistory;
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

					<Router>
						<FilmsPage path="/" />
						<FilmsPage path="/films" />

						<AsyncRoute
							path="/films/:id"
							getComponent={ () => import('../src/pages/films/detail').then(module => module.default) }
							loading={ () => <div>loading...</div> }
						/>

						<AsyncRoute
							path="/people"
							getComponent={ () => import('../src/pages/people/list').then(module => module.default) }
							loading={ () => <div>loading...</div> }
						/>
						<AsyncRoute
							path="/people/:id"
							getComponent={ () => import('../src/pages/people/detail').then(module => module.default) }
							loading={ () => <div>loading...</div> }
						/>

						<AsyncRoute
							path="/locations"
							getComponent={ () => import('../src/pages/locations/list').then(module => module.default) }
							loading={ () => <div>loading...</div> }
						/>
						<AsyncRoute
							path="/locations/:id"
							getComponent={ () => import('../src/pages/locations/detail').then(module => module.default) }
							loading={ () => <div>loading...</div> }
						/>

						<AsyncRoute
							path="/species"
							getComponent={ () => import('../src/pages/species/list').then(module => module.default) }
							loading={ () => <div>loading...</div> }
						/>
						<AsyncRoute
							path="/species/:id"
							getComponent={ () => import('../src/pages/species/detail').then(module => module.default) }
							loading={ () => <div>loading...</div> }
						/>

						<AsyncRoute
							path="/vehicles"
							getComponent={ () => import('../src/pages/vehicles/list').then(module => module.default) }
							loading={ () => <div>loading...</div> }
						/>
						<AsyncRoute
							path="/vehicles/:id"
							getComponent={ () => import('../src/pages/vehicles/detail').then(module => module.default) }
							loading={ () => <div>loading...</div> }
						/>
					</Router>

					<Footer appName={this.state.appName} />
				</div>
			</Provider>
		);
	}
}
