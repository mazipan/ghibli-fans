import { h, Component } from "preact";
import style from "./style.less";

import VehicleDetail from "components/vehicles/detail";

export default class VehiclePage extends Component {
	render() {
		return (
			<main class={style.filmpage}>
				<h1>Vehicle description</h1>
				<VehicleDetail id={this.props.id} />
			</main>
		);
	}
}
