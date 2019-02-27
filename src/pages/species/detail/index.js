import { h, Component } from "preact";
import style from "./style.less";

import SpeciesDetail from "src/components/species/detail";

export default class SpeciesDetailPage extends Component {
	render() {
		return (
			<main class={style.filmpage}>
				<h1>Species description</h1>
				<SpeciesDetail id={this.props.id} />
			</main>
		);
	}
}
