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
// 	"id": "ba924631-068e-4436-b6de-f3283fa848f0",
// 	"name": "Ashitaka",
// 	"gender": "male",
// 	"age": "late teens",
// 	"eye_color": "brown",
// 	"hair_color": "brown",
// 	"films": [],
// 	"species": "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
// 	"url": "https://ghibliapi.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0"
// }
