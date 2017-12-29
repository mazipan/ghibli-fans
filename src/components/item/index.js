import { h, Component } from "preact";

import { connect } from "preact-redux";
import { itemsFetchData } from "../../actions/";

class Item extends Component {
	componentDidMount() {
		console.log("fetch data");
		this.props.fetchData("http://599167402df2f40011e4929a.mockapi.io/items");
	}

	render() {
		return (
			<ul>
				{this.props.items.map(item => <li key={item.id}>{item.label}</li>)}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.items,
		hasErrored: state.itemsHasErrored,
		isLoading: state.itemsIsLoading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchData: url => dispatch(itemsFetchData(url))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
