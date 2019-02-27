import { h, Component } from "preact";
import style from "./style.less";
import { Link } from "preact-router";

import { connect } from "preact-redux";
import { loadFilms } from "src/actions/";

class Films extends Component {
	componentDidMount() {
		this.props.loadFilms();
	}

	render() {
		return (
			<ul class={style.films}>
				{this.props.films.map(item => (
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
