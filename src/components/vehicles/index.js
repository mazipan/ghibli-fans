import { h, Component } from "preact";
import style from "./style.less";
import { Link } from "preact-router";

import { connect } from "preact-redux";
import { loadVehicles } from "@/actions/";

import AdsInFeed from "components/googleads/infeed";

class Vehicles extends Component {
	componentDidMount() {
		this.props.loadVehicles();
	}

	render() {
		const generateBlockWithAds = function(item, index) {
			let result = null;
			if (index > 0 && index % 5 === 0) {
				result = (
					<li class={style.card}>
						<AdsInFeed />
					</li>
				);
			} else {
				result = (
					<li key={item.id} class={style.person}>
						<Link href={`/vehicles/${item.id}`} class={style.card}>
							<div class={style.card__left}>
								<img src={item.image} />
							</div>
							<div class={style.card__right}>{item.name}</div>
						</Link>
					</li>
				);
			}
			return result;
		};

		return (
			<ul class={style.vehicles}>
				{this.props.vehicles.map(generateBlockWithAds)}
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
