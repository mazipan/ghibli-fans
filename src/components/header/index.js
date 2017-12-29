import { h, Component } from "preact";
import { Link } from "preact-router";
import style from "./style.less";

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<Link href="/" class={style.brand}>
					<img src="assets/icons/favicon-32x32.png" />
					<span>{this.props.appName}</span>
				</Link>
				<nav>
					<a target="_blank" href="https://github.com/mazipan/ghibli-fans">
						Github
					</a>
				</nav>
			</header>
		);
	}
}
