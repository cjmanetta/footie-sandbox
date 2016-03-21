import React from 'react';

//should be getting this from the store
const getPlayers = () => {
	return [
		{id: 1, name: "Carli Lloyd"},
		{id: 2, name: "Becky Saurbruen"},
		{id: 3, name: "Hope Solo"}
	];
};

class PlayerSelector extends React.Component {

	render() {

		const players = getPlayers().map(player => {
			return <option value={player.id} key={player.id}>{player.name}</option>
		});

		return (
			<select defaultValue="">{players}</select>
		)
	}
};


export default PlayerSelector;