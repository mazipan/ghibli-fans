import { h, Component } from "preact";
import style from "./style.less";

import LocationDetail from "components/locations/detail";

export default class LocationPage extends Component {
	render() {
		return (
			<main class={style.filmpage}>
				<h1>Location description</h1>
				<LocationDetail id={this.props.id} />
			</main>
		);
	}
}
