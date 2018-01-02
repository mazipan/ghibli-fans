import { h, Component } from "preact";
import style from "./style.less";

import People from "components/people";

export default class PeoplePage extends Component {
	render() {
		return (
			<main class={style.home}>
				<h1>List of character in Ghibli's films</h1>
				<People />
			</main>
		);
	}
}
