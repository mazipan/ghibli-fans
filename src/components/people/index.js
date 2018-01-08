import { h, Component } from "preact";
import style from "./style.less";
import { Link } from "preact-router";

import { connect } from "preact-redux";
import { loadPeople } from "@/actions/";

import AdsInFeed from "components/googleads/infeed";

class People extends Component {
	componentDidMount() {
		this.props.loadPeople();
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
						<Link href={`/people/${item.id}`} class={style.card}>
							<div class={style.card__left}>
								{item.image ? (
									<img src={item.image} />
								) : (
									<i class="fa fa-male" />
								)}
							</div>
							<div class={style.card__right}>{item.name}</div>
						</Link>
					</li>
				);
			}
			return result;
		};

		return (
			<ul class={style.people}>
				{this.props.people.map(generateBlockWithAds)}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	return {
		people: state.people
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadPeople: () => dispatch(loadPeople())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
