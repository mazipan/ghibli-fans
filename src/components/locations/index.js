import { h, Component } from "preact";
import style from "./style.less";
import { Link } from "preact-router";

import { connect } from "preact-redux";
import { loadLocations } from "@/actions/";

import AdsInFeed from "components/googleads/infeed";

class Locations extends Component {
	componentDidMount() {
		this.props.loadLocations();
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
						<Link href={`/locations/${item.id}`} class={style.card}>
							<div class={style.card__left}>
								<i class="fa fa-picture-o" />
							</div>
							<div class={style.card__right}>{item.name}</div>
						</Link>
					</li>
				);
			}
			return result;
		};

		return (
			<ul class={style.locations}>
				{this.props.locations.map(generateBlockWithAds)}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	return {
		locations: state.locations
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadLocations: () => dispatch(loadLocations())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
