import { h, Component } from "preact";
import style from "./style.less";

import PersonDetail from "components/people/detail";

export default class PersonPage extends Component {
	render() {
		return (
			<main class={style.filmpage}>
				<h1>Character description</h1>
				<PersonDetail id={this.props.id} />
			</main>
		);
	}
}
