import { h, Component } from "preact";
import style from "./style.less";
import { Link } from "preact-router";

import { connect } from "preact-redux";
import { loadVehicles } from "@/actions/";

class Vehicles extends Component {
	componentDidMount() {
		this.props.loadVehicles();
	}

	render() {
		return (
			<ul class={style.vehicles}>
				{this.props.vehicles.map(item => (
					<li key={item.id} class={style.person}>
						<Link href={`/vehicles/${item.id}`} class={style.card}>
							<div class={style.card__left}>
								<img src={item.image} />
							</div>
							<div class={style.card__right}>{item.name}</div>
						</Link>
					</li>
				))}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	return {
		vehicles: state.vehicles
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadVehicles: () => dispatch(loadVehicles())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
