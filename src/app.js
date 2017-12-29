import { h, Component } from "preact";
import { Router } from "preact-router";
import createHashHistory from "history/createHashHistory";

import { Provider } from "preact-redux";
import configureStore from "./store";
const store = configureStore();

import Header from "components/header";
import Footer from "components/footer";

import Home from "pages/home";
import FilmPage from "pages/filmpage";

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
						<Home path="/" appName={this.state.appName} />
						<FilmPage path="/film/:filmid" appName={this.state.appName} />
					</Router>

					<Footer appName={this.state.appName} />
				</div>
			</Provider>
		);
	}
}
