import React from 'react';
import ScoresList from './scoreslist';

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
			<div><ScoresList scores={state.scores} /></div>
		)
	}
};

Scoreboard.contextTypes = {
	store: React.PropTypes.object
};

export default Scoreboard;