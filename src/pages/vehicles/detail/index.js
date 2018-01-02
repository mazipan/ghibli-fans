import { h, Component } from "preact";
import style from "./style.less";

import FilmDetail from "components/films/detail";

export default class VehiclePage extends Component {
	render() {
		return (
			<main class={style.filmpage}>
				<h1>Vehicle description</h1>
				<FilmDetail id={this.props.id} />
			</main>
		);
	}
}