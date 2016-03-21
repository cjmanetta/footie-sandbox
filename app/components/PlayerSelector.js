import React from 'react';

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
		let selection;

		const players = state.players.map(player => {
			return <option value={player.id} key={player.id}>{player.name}</option>
		});

		return (
			<select 
				defaultValue=""
				onChange={() => {
					store.dispatch({
						type: 'SELECT_PLAYER',
						id: selection.value
					});
					console.log("i got here!")
				}}
				ref={(node) => {
					selection = node;
					// console.log(selection.value);
				}}>
				{players}
			</select>
		)
	}
};

PlayerSelector.contextTypes = {
	store: React.PropTypes.object
};

export default PlayerSelector;