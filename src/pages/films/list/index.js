import { h, Component } from "preact";
import style from "./style.less";

import Films from "src/components/films";

export default class FilmsPage extends Component {
	render() {
		return (
			<main class={style.home}>
				<h1>List of Studio Ghibli's films</h1>
				<Films />
			</main>
		);
	}
}
