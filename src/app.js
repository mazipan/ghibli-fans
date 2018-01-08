import { h, Component } from "preact";
import { Router } from "preact-router";
import createHashHistory from "history/createHashHistory";
import AsyncRoute from "preact-async-route";

import { Provider } from "preact-redux";
import configureStore from "./store";
const store = configureStore();

import Header from "components/header";
import Footer from "components/footer";

import FilmsPage from "pages/films/list";

export default class App extends Component {
	state = {
		appName: "Ghibli Fans"
	};

	render() {
		const getAsyncComponent = path => {
			import(path).then(module => module.default);
		};

		return (
			<Provider store={store}>
				<div id="app">
					<Header appName={this.state.appName} />

					<Router history={createHashHistory()}>
						<FilmsPage path="/" />
						<FilmsPage path="/films" />
						<AsyncRoute
							path="/films/:id"
							getComponent={getAsyncComponent("pages/films/detail")}
						/>
						<AsyncRoute
							path="/people/"
							getComponent={getAsyncComponent("pages/people/list")}
						/>
						<AsyncRoute
							path="/people/:id"
							getComponent={getAsyncComponent("pages/people/detail")}
						/>
						<AsyncRoute
							path="/locations/"
							getComponent={getAsyncComponent("pages/locations/list")}
						/>
						<AsyncRoute
							path="/locations/:id"
							getComponent={getAsyncComponent("pages/locations/detail")}
						/>
						<AsyncRoute
							path="/species/"
							getComponent={getAsyncComponent("pages/species/list")}
						/>
						<AsyncRoute
							path="/species/:id"
							getComponent={getAsyncComponent("pages/species/detail")}
						/>
						<AsyncRoute
							path="/vehicles/"
							getComponent={getAsyncComponent("pages/vehicles/list")}
						/>
						<AsyncRoute
							path="/vehicles/:id"
							getComponent={getAsyncComponent("pages/vehicles/detail")}
						/>
					</Router>

					<Footer appName={this.state.appName} />
				</div>
			</Provider>
		);
	}
}
