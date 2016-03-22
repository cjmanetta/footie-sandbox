import React from 'react';
import ScoresList from './scoreslist';

const getSortedScores = (state) => {
	
	let scores = state.scores;
	let players = state.players;
	let sortedScores = [];

	players.forEach((player, index, players) => {
		const playersScores = scores.filter((score) => {
			return score.player === player.id.toString() 
		});

		let playersValues = [];

		const pushPlayersValues = () => {
			playersScores.forEach((score, index, playersScores) => { playersValues.push(parseInt(score.value))})
		}

		pushPlayersValues()


		const reducedScore = () => {
			if (playersValues.length === 0) {return playersValues = [0]}

			return playersValues.reduce((prev, curr) => prev + curr);
		}
	
		sortedScores.push({player: player.name, value: reducedScore()});
	})
	
	return sortedScores
};

class Scoreboard extends React.Component {

	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const { store } = this.context;
		const state = store.getState();

		return (
			<div><ScoresList scores={getSortedScores(state)} /></div>
		)
	}
};

Scoreboard.contextTypes = {
	store: React.PropTypes.object
};

export default Scoreboard;