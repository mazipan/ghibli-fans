import { h, Component } from "preact";

import { connect } from "preact-redux";
import { loadFilm } from "../../actions/";

class FilmDetail extends Component {
	componentDidMount() {
		this.props.loadFilm(this.props.filmid);
	}

	render() {
		return (
			<div>
				<h3>{this.props.film.title}</h3>
				<div>Director : {this.props.film.director}</div>
				<div>Producer : {this.props.film.producer}</div>
				<div>release_date : {this.props.film.release_date}</div>
				<div>rt_score : {this.props.film.rt_score}</div>

				{this.props.film.description}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		film: state.film
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadFilm: filmId => dispatch(loadFilm(filmId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);
