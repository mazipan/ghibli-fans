import { h, Component } from "preact";
import style from "./style.less";

import Species from "src/components/species";

export default class SpeciesPage extends Component {
	render() {
		return (
			<main class={style.home}>
				<h1>List of species in Ghibli's films</h1>
				<Species />
			</main>
		);
	}
}
