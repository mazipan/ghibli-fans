import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { Provider } from 'preact-redux';
import configureStore from './store';
const store = configureStore();

import Header from 'components/header';
import Footer from 'components/footer';

import Home from 'pages/home';

export default class App extends Component {
	state = {
		appName: 'Ghibli Fans'
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

					<Router onChange={this.handleRoute}>
						<Home path="/ghibli-fans/" appName={this.state.appName} />
					</Router>

					<Footer appName={this.state.appName} />
				</div>
			</Provider>
		);
	}
}
