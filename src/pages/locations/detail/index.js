import { h, Component } from "preact";
import style from "./style.less";

import FilmDetail from "components/films/detail";

export default class LocationPage extends Component {
	render() {
		return (
			<main class={style.filmpage}>
				<h1>Location description</h1>
				<FilmDetail id={this.props.id} />
			</main>
		);
	}
}
