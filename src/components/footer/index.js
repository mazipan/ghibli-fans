import { h, Component } from "preact";
import style from "./style.less";
import { Link } from 'preact-router';

export default class Footer extends Component {
	render() {
		return (
			<footer class={style.footer}>
				<nav>
					<div class={style.link}>
						<Link activeClassName={style.active} href="/">
							<i class="fa fa-film" />
							<div class={style.text}>Films</div>
						</Link>
					</div>
					<div class={style.link}>
						<Link activeClassName={style.active} href="/people/">
							<i class="fa fa-users" />
							<div class={style.text}>People</div>
						</Link>
					</div>
					<div class={style.link}>
						<Link activeClassName={style.active} href="/locations">
							<i class="fa fa-map-o" />
							<div class={style.text}>Locations</div>
						</Link>
					</div>
					<div class={style.link}>
						<Link activeClassName={style.active} href="/species/">
							<i class="fa fa-reddit-alien" />
							<div class={style.text}>Species</div>
						</Link>
					</div>
					<div class={style.link}>
						<Link activeClassName={style.active} href="/vehicles">
							<i class="fa fa-car" />
							<div class={style.text}>Vehicles</div>
						</Link>
					</div>
				</nav>
			</footer>
		);
	}
}
