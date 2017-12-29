import { h, Component } from "preact";
import style from "./style.less";

import FilmDetail from "components/filmdetail";

export default class FilmPage extends Component {
	render() {
		return (
			<main class={style.home}>
				<div class={style.img}>
					<img src="assets/icons/android-icon-192x192.png" />
				</div>

				<FilmDetail filmid={this.props.filmid} />
			</main>
		);
	}
}
