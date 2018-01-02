import { h, Component } from "preact";
import style from "./style.less";

import Films from "components/films";

export default class VehiclesPage extends Component {
	render() {
		return (
			<main class={style.home}>
				<h1>List of vehicles in Ghibli's films</h1>
				<Films />
			</main>
		);
	}
}
