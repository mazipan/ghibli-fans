import { h, Component } from "preact";
import style from "./style.less";

import Films from "components/films";

export default class FilmsPage extends Component {
	render() {
		return (
			<main class={style.home}>
				<h1>List of Studio Ghibli's films</h1>
				<Films />
				{/* ADSENSE IN-FEED */}
				<script
					async
					src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
				/>
				<ins
					class="adsbygoogle"
					style="display:block"
					data-ad-format="fluid"
					data-ad-client="ca-pub-5442972248172818"
					data-ad-slot="2105028631"
				/>
				<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
			</main>
		);
	}
}
