import { h, Component } from "preact";
import style from "./style.less";
import { Link } from "preact-router";

import { connect } from "preact-redux";
import { loadSpecies } from "@/actions/";

import AdsInFeed from "components/googleads/infeed";

class Species extends Component {
	componentDidMount() {
		this.props.loadSpecies();
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
						<Link href={`/species/${item.id}`} class={style.card}>
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
			<ul class={style.species}>
				{this.props.species.map(generateBlockWithAds)}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	return {
		species: state.species
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadSpecies: () => dispatch(loadSpecies())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Species);
