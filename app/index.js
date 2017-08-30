import './style/index.scss';
import { Component } from 'preact';
import App from './components/App'

export default class Fantasy extends Component {
	state = {
		loading: true,
		playersArr: null,
		playersObj: null
	}

	componentDidMount () {
		fetch('data/rankings.json')
			.then(response => response.json())
			.then(response => {
				this.setState({
					loading: false,
					playersArr: response.array,
					playersObj: response.object
				});
			});
	}

	render() {
		if (this.state.loading) return null;
		const players = this.state.playersArr.map(player => this.state.playersObj[player])
		return (
			<App players={players} />
		);
	}
}
