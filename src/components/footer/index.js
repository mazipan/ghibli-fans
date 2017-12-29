import { h, Component } from "preact";
import style from "./style.less";
import { Link } from "preact-router/match";

export default class Footer extends Component {
	render() {
		return (
			<footer class={style.footer}>
				<nav>
					<Link activeClassName="active" href="/">
						Films
					</Link>
					<Link activeClassName="active" href="/people/">
						People
					</Link>
					<Link activeClassName="active" href="/locations">
						Locations
					</Link>
					<Link activeClassName="active" href="/species/">
						Species
					</Link>
					<Link activeClassName="active" href="/vehicles">
						Vehicles
					</Link>
				</nav>
			</footer>
		);
	}
}
