import React from 'react';

class ChallengeSelector extends React.Component {

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

		const challenges = state.challenges.map(challenge => {
			return <option value={challenge.id} key={challenge.id}>{challenge.title}</option>
		});

		return (
			<select defaultValue="">{challenges}</select>
		)
	}
};

ChallengeSelector.contextTypes = {
	store: React.PropTypes.object
};

export default ChallengeSelector;