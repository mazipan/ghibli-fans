import { h, Component } from "preact";
import style from "./style.less";

import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
	render() {
		return (
			<footer class={style.footer}>
				<nav>
					<div class={style.link}>
						<NavLink activeClassName={style.active} to="/">
							<i class="fa fa-film" />
							<div class={style.text}>Films</div>
						</NavLink>
					</div>
					<div class={style.link}>
						<NavLink activeClassName={style.active} to="/people/">
							<i class="fa fa-users" />
							<div class={style.text}>People</div>
						</NavLink>
					</div>
					<div class={style.link}>
						<NavLink activeClassName={style.active} to="/locations">
							<i class="fa fa-map-o" />
							<div class={style.text}>Locations</div>
						</NavLink>
					</div>
					<div class={style.link}>
						<NavLink activeClassName={style.active} to="/species/">
							<i class="fa fa-reddit-alien" />
							<div class={style.text}>Species</div>
						</NavLink>
					</div>
					<div class={style.link}>
						<NavLink activeClassName={style.active} to="/vehicles">
							<i class="fa fa-car" />
							<div class={style.text}>Vehicles</div>
						</NavLink>
					</div>
				</nav>
			</footer>
		);
	}
}
