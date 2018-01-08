import { h, Component } from "preact";
import style from "./style.less";
import { Link } from "preact-router";

import { connect } from "preact-redux";
import { loadFilms } from "@/actions/";

import AdsInFeed from "components/googleads/infeed";

class Films extends Component {
	componentDidMount() {
		this.props.loadFilms();
	}

	render() {
		const generateBlockWithAds = function(item, index) {
			let result = null;
			if (index > 0 && index % 5 === 0) {
				result = <AdsInFeed />;
			} else {
				result = (
					<li key={item.id} class={style.film}>
						<Link href={`/films/${item.id}`} class={style.card}>
							<div class={style.card__left}>
								<img src={item.image} />
							</div>
							<div class={style.card__right}>
								<div class={style.title}>
									{item.title}

									<span class={style.text}>({item.release_date})</span>
								</div>
							</div>
						</Link>
					</li>
				);
			}
			return result;
		};

		return (
			<ul class={style.films}>
				{this.props.films.map(generateBlockWithAds)}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	return {
		films: state.films
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadFilms: () => dispatch(loadFilms())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);
