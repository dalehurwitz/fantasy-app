import './style';
import { Component } from 'preact';

export default class App extends Component {
	state = {
		loading: true,
		playersArr: null,
		playersObj: null
	}

	componentDidMount () {
		fetch('/data/rankings.json')
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

		return (
			<table>
				{this.state.playersArr.map(nameKey => {
					const { rank, name, team } = this.state.playersObj[nameKey];
					return (
						<tr>
							<td>{rank} - </td>
							<td>{name} - </td>
							<td>{team}</td>
						</tr>
					);
				})}
			</table>
		);
	}
}
