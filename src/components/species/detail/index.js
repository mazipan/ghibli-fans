import { h, Component } from "preact";
import style from "./style.less";

import { connect } from "preact-redux";
import { loadSpeciesDetail } from "@/actions/";

class SpeciesDetail extends Component {
	componentDidMount() {
		this.props.loadSpeciesDetail(this.props.id);
	}

	render() {
		return (
			<div class={style.species}>
				<i class="fa fa-reddit-alien" />

				<div class={style.desc}>
					<div class={style.title}>{this.props.species.name}</div>
					<div class={style.text}>
						<b>Age</b> : {this.props.species.classification}
					</div>
					<div class={style.text}>
						<b>Eye Color</b> : {this.props.species.eye_color}
					</div>
					<div class={style.text}>
						<b>Hair Color</b> : {this.props.species.hair_color}
					</div>
				</div>
			</div>
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
		loadSpeciesDetail: id => dispatch(loadSpeciesDetail(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesDetail);

// {
// 	"id": "af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
// 	"name": "Human",
// 	"classification": "Mammal",
// 	"eye_colors": "Black, Blue, Brown, Blue, Grey, Green, Hazel",
// 	"hair_colors": "Black, Blonde, Brown, Grey, White",
// 	"people": [
// 	"https://ghibliapi.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0",
// 	"https://ghibliapi.herokuapp.com/people/e9356bb5-4d4a-4c93-aadc-c83e514bffe3",
// 	"https://ghibliapi.herokuapp.com/people/34277bec-7401-43fa-a00a-5aee64b45b08",
// 	"https://ghibliapi.herokuapp.com/people/91939012-90b9-46e5-a649-96b898073c82",
// 	"https://ghibliapi.herokuapp.com/people/20e3bd33-b35d-41e6-83a4-57ca7f028d38",
// 	"https://ghibliapi.herokuapp.com/people/8bccdc78-545b-49f4-a4c8-756163a38c91",
// 	"https://ghibliapi.herokuapp.com/people/116bfe1b-3ba8-4fa0-8f72-88537a493cb9",
// 	"https://ghibliapi.herokuapp.com/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
// 	"https://ghibliapi.herokuapp.com/people/d5df3c04-f355-4038-833c-83bd3502b6b9",
// 	"https://ghibliapi.herokuapp.com/people/3031caa8-eb1a-41c6-ab93-dd091b541e11",
// 	"https://ghibliapi.herokuapp.com/people/87b68b97-3774-495b-bf80-495a5f3e672d",
// 	"https://ghibliapi.herokuapp.com/people/08ffbce4-7f94-476a-95bc-76d3c3969c19",
// 	"https://ghibliapi.herokuapp.com/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a"
// 	],
// 	"films": [
// 	"https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe",
// 	"https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a",
// 	"https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
// 	"https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
// 	"https://ghibliapi.herokuapp.com/films/4e236f34-b981-41c3-8c65-f8c9000b94e7",
// 	"https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8",
// 	"https://ghibliapi.herokuapp.com/films/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
// 	"https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
// 	"https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6",
// 	"https://ghibliapi.herokuapp.com/films/45204234-adfd-45cb-a505-a8e7a676b114",
// 	"https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c",
// 	"https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81",
// 	"https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
// 	"https://ghibliapi.herokuapp.com/films/112c1e67-726f-40b1-ac17-6974127bb9b9",
// 	"https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786",
// 	"https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
// 	"https://ghibliapi.herokuapp.com/films/45db04e4-304a-4933-9823-33f389e8d74d",
// 	"https://ghibliapi.herokuapp.com/films/67405111-37a5-438f-81cc-4666af60c800",
// 	"https://ghibliapi.herokuapp.com/films/578ae244-7750-4d9f-867b-f3cd3d6fecf4",
// 	"https://ghibliapi.herokuapp.com/films/5fdfb320-2a02-49a7-94ff-5ca418cae602"
// 	],
// 	"url": "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
// 	}
