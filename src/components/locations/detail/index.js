import { h, Component } from "preact";
import style from "./style.less";

import { connect } from "preact-redux";
import { loadLocationDetail } from "@/actions/";

class LocationDetail extends Component {
	componentDidMount() {
		this.props.loadLocationDetail(this.props.id);
	}

	render() {
		return (
			<div class={style.location}>
				<i class="fa fa-picture-o" />

				<div class={style.desc}>
					<div class={style.title}>{this.props.location.name}</div>
					<div class={style.text}>
						<b>Climate</b> : {this.props.location.age}
					</div>
					<div class={style.text}>
						<b>Terrain</b> : {this.props.location.terrain}
					</div>
					<div class={style.text}>
						<b>Surface Water</b> : {this.props.location.surface_water}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		location: state.location
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadLocationDetail: id => dispatch(loadLocationDetail(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);

// {
// 	"id": "11014596-71b0-4b3e-b8c0-1c4b15f28b9a",
// 	"name": "Irontown",
// 	"climate": "Continental",
// 	"terrain": "Mountain",
// 	"surface_water": "40",
// 	"residents": [
// 	"https://ghibliapi.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0",
// 	"https://ghibliapi.herokuapp.com/people/030555b3-4c92-4fce-93fb-e70c3ae3df8b"
// 	],
// 	"films": [
// 	"https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
// 	],
// 	"url": [
// 	"https://ghibliapi.herokuapp.com/locations/11014596-71b0-4b3e-b8c0-1c4b15f28b9a"
// 	]
// 	}
