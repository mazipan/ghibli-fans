import { h, Component } from "preact";
import style from "./style.less";

import FilmDetail from "components/filmdetail";

export default class FilmPage extends Component {
	render() {
		return (
			<main class={style.filmpage}>
				<FilmDetail filmid={this.props.filmid} />
			</main>
		);
	}
}
