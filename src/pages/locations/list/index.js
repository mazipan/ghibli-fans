import { h, Component } from "preact";
import style from "./style.less";

import Locations from "components/locations";

export default class LocationsPage extends Component {
	render() {
		return (
			<main class={style.home}>
				<h1>List of locations in Ghibli's films</h1>
				<Locations />
			</main>
		);
	}
}
