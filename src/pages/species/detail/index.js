import { h, Component } from "preact";
import style from "./style.less";

import FilmDetail from "components/films/detail";

export default class SpeciesDetailPage extends Component {
	render() {
		return (
			<main class={style.filmpage}>
				<h1>Species description</h1>
				<FilmDetail filmid={this.props.filmid} />
			</main>
		);
	}
}
