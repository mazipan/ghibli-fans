import { h, Component } from "preact";
import style from "./style.less";
import { Link } from "preact-router";

import { connect } from "preact-redux";
import { loadLocations } from "src/actions/";

class Locations extends Component {
	componentDidMount() {
		this.props.loadLocations();
	}

	render() {
		return (
			<ul class={style.locations}>
				{this.props.locations.map(item => (
					<li key={item.id} class={style.person}>
						<Link href={`/locations/${item.id}`} class={style.card}>
							<div class={style.card__left}>
								<i class="fa fa-picture-o" />
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
		locations: state.locations
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadLocations: () => dispatch(loadLocations())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
