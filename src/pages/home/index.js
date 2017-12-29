import { h, Component } from "preact";
import style from "./style.less";

import Films from "components/films";

export default class Home extends Component {
	render() {
		return (
			<main class={style.home}>
				<Films />
			</main>
		);
	}
}
