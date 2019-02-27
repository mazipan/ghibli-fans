import { h, Component } from "preact";
import style from "./style.less";

import FilmDetail from "src/components/films/detail";

export default class FilmPage extends Component {
	render() {
		return (
			<main class={style.filmpage}>
				<h1>Film description</h1>
				<FilmDetail id={this.props.id} />
			</main>
		);
	}
}
