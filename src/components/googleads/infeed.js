import { h, Component } from "preact";

export default class AdsInFeed extends Component {
	componentDidMount() {
		const installGoogleAds = () => {
			const elem = document.createElement("script");
			elem.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
			elem.async = true;
			elem.defer = true;
			this.base.parentNode.insertBefore(elem, this.base);
		};
		installGoogleAds();
		(adsbygoogle = window.adsbygoogle || []).push({});
	}

	render() {
		return (
			<ins
				class="adsbygoogle"
				style={{ display: "block" }}
				data-ad-format="fluid"
				data-ad-layout-key="-fg+5n+6t-e7+r"
				data-ad-client="ca-pub-5442972248172818"
				data-ad-slot="2105028631"
			/>
		);
	}
}
