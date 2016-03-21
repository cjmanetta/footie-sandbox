import React from 'react';

//should be getting this from the store
// const getPlayers = () => {
// 	return [
		
// 	];
// };

class PlayerSelector extends React.Component {

	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const { store } = this.context;
		const state = store.getState();
		// debugger;
		const players = state.players.map(player => {
			return <option value={player.id} key={player.id}>{player.name}</option>
		});

		return (
			<select defaultValue="">{players}</select>
		)
	}
};

PlayerSelector.contextTypes = {
	store: React.PropTypes.object
};

export default PlayerSelector;