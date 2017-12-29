import { h, Component } from 'preact';
import style from './style.less';

import Item from 'components/item';

export default class Home extends Component {

	render() {
		return (
			<main class={style.home}>

				<div class={style.img}>
					<img src="assets/icons/android-icon-192x192.png" />
				</div>

				<Item />

			</main>
		);
	}
}
