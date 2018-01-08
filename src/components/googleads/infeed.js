import { h, Component } from "preact";

export default class AdsInFeed extends Component {
	componentDidMount() {
		const installGoogleAds = () => {
			const elem = document.createElement("script");
			elem.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
			elem.async = true;
			elem.defer = true;
			document.body.insertBefore(elem, document.body.firstChild);
		};
		installGoogleAds();
		(adsbygoogle = window.adsbygoogle || []).push({});
	}

	render() {
		return (
			<li class="ads">
				<ins
					class="adsbygoogle"
					style={{ display: "block" }}
					data-ad-format="fluid"
					data-ad-layout-key="-fg+5n+6t-e7+r"
					data-ad-client="ca-pub-5442972248172818"
					data-ad-slot="2105028631"
				/>
			</li>
		);
	}
}
