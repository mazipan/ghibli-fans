import { h, Component } from "preact";
import style from "./style.less";
import { Link } from "preact-router";

import { connect } from "preact-redux";
import { loadFilms } from "../../actions/";

class Films extends Component {
	componentDidMount() {
		this.props.loadFilms();
	}

	render() {
		return (
			<ul class={style.films}>
				{this.props.films.map(item => (
					<li key={item.id} class={style.film}>
						<Link href={`/film/${item.id}`} class={style.card}>
							<div class={style.card__left}>
								<img src="assets/icons/favicon-32x32.png" />
								<div class={style.rating}>{item.rt_score}</div>
							</div>
							{item.title}
						</Link>
					</li>
				))}
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
