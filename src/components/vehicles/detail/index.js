import { h, Component } from "preact";
import style from "./style.less";

import { connect } from "preact-redux";
import { loadVehicleDetail } from "@/actions/";

class VehicleDetail extends Component {
	componentDidMount() {
		this.props.loadVehicleDetail(this.props.id);
	}

	render() {
		return (
			<div class={style.vehicle}>
				<i class="fa fa-car" />

				<div class={style.desc}>
					<div class={style.title}>{this.props.vehicle.name}</div>
					<div class={style.text}>
						<b>Vehicle Class</b> : {this.props.vehicle.vehicle_class}
					</div>
					<div class={style.text}>
						<b>Length</b> : {this.props.vehicle.length}
					</div>
					<div class={style.text}>
						<b>Description</b> : {this.props.vehicle.description}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		vehicle: state.vehicle
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadVehicleDetail: id => dispatch(loadVehicleDetail(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetail);

// {
// 	"id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
// 	"name": "Air Destroyer Goliath",
// 	"description": "A military airship utilized by the government to access Laputa",
// 	"vehicle_class": "Airship",
// 	"length": "1,000",
// 	"pilot": "https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583",
// 	"films": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe",
// 	"url": "https://ghibliapi.herokuapp.com/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb"
// 	}
