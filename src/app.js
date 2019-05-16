import { h, Component } from "preact";

import { Switch, Route } from 'react-router-dom';

import { Provider } from "preact-redux";
import configureStore from "./store";
const store = configureStore();

import Header from "src/components/header";
import Footer from "src/components/footer";

import FilmsPage from "src/pages/films/list";
import FilmsDetailPage from "src/pages/films/detail";

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

					<Switch>
						<Route exact path='/' component={FilmsPage}/>
						<Route exact path='/films' component={FilmsPage}/>
						<Route exact path='/films/:id' component={FilmsDetailPage}/>
					</Switch>

					<Footer appName={this.state.appName} />
				</div>
			</Provider>
		);
	}
}
