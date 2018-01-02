import { h, Component } from "preact";
import style from "./style.less";

import { connect } from "preact-redux";
import { loadPersonDetail } from "@/actions/";

class PersonDetail extends Component {
	componentDidMount() {
		this.props.loadPersonDetail(this.props.id);
	}

	render() {
		return (
			<div class={style.person}>
				{this.props.person.gender === "Male" ? (
					<i class="fa fa-male" />
				) : (
					<i class="fa fa-female" />
				)}

				<div class={style.desc}>
					<div class={style.title}>{this.props.person.name}</div>
					<div class={style.text}>Age : {this.props.person.age}</div>
					<div class={style.text}>
						Eye Color : {this.props.person.eye_color}
					</div>
					<div class={style.text}>
						Hair Color : {this.props.person.hair_color}
					</div>
					<div class={style.text}>Species : {this.props.person.species}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		person: state.person
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadPersonDetail: id => dispatch(loadPersonDetail(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetail);

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
