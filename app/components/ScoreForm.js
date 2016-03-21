import React from 'react';
import PlayerSelector from './playerselector';

let nextScoreId = 1;

const ScoreForm = (props, { store }) => {
	let input;
	return (
		<div>
			<form 
				onSubmit={(event) => {
					event.preventDefault();
					store.dispatch({
								type: 'ADD_SCORE',
								id: nextScoreId++,
								value: input.value,
								player: 'Carli Lloyd',
								challenge: 'Ronaldo Chop'
							});
					input.value = '';
				}}>
				<PlayerSelector />
				<div>challenge selector</div>
				<input type="number" ref={node => {input = node;}}/>
				<button
					type="submit">
					record
				</button>
			</form>
		</div>
	)
};

ScoreForm.contextTypes = {
	store: React.PropTypes.object
};

export default ScoreForm;