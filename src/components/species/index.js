import { h, Component } from "preact";
import style from "./style.less";
import { Link } from "preact-router";

import { connect } from "preact-redux";
import { loadSpecies } from "@/actions/";

class Species extends Component {
	componentDidMount() {
		this.props.loadSpecies();
	}

	render() {
		return (
			<ul class={style.species}>
				{this.props.species.map(item => (
					<li key={item.id} class={style.person}>
						<Link href={`/species/${item.id}`} class={style.card}>
							<div class={style.card__left}>
								<i class="fa fa-reddit-alien" />
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
		species: state.species
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadSpecies: () => dispatch(loadSpecies())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Species);
