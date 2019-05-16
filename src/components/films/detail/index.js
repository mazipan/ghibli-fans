import { h, Component } from "preact";
import style from "./style.less";

import { connect } from "preact-redux";
import { loadFilmDetail } from "src/actions/";

class FilmDetail extends Component {
	componentDidMount() {
		this.props.loadFilmDetail(this.props.id);
	}

	render() {
		return (
			<div class={style.film}>
				<img src={this.props.film.image} />

				<div class={style.desc}>
					<div class={style.title}>{this.props.film.title}</div>
					<div class={style.text}>
						<b>Rating</b> :{" "}
						<span class={style.rating}>&#9734; {this.props.film.rt_score}</span>
					</div>
					<div class={style.text}>
						<b>Year</b> : {this.props.film.release_date}
					</div>
					<div class={style.text}>
						<b>Director</b> : {this.props.film.director}
					</div>
					<div class={style.text}>
						<b>Producer</b> : {this.props.film.producer}
					</div>
					<div class={style.text}>
						Description : {this.props.film.description}
					</div>

					<div class={style.link__wrapper}>
						<a class={style.link} href={this.props.film.imdb} target="_blank">
							<i class="fa fa-imdb" /> IMDB
						</a>
						<a
							class={style.link}
							href={this.props.film.streaming}
							target="_blank"
						>
							<i class="fa fa-play-circle-o" /> Streaming
						</a>
					</div>

				</div>
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
		loadFilmDetail: id => dispatch(loadFilmDetail(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);
