import { h, Component } from "preact";

export default class AdsInArticle extends Component {
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
			<ins
				class="adsbygoogle"
				style={{ display: "block", "text-align": "center" }}
				data-ad-layout="in-article"
				data-ad-format="fluid"
				data-ad-client="ca-pub-5442972248172818"
				data-ad-slot="7974047383"
			/>
		);
	}
}
