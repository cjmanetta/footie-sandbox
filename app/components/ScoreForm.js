import React from 'react';

let nextScoreId = 1;

const printLog = (store) =>{
	var state = store.getState();
	console.log(
		`================================
store looks like this:
--------------------------------
		 `);

		state.forEach((score) => { console.log(score)})
	
};


const ScoreForm = (props, { store }) => {
	let input;
	return (
		<div>
			<form 
				onSubmit={(event) => {
					event.preventDefault();
					printLog(store);
					store.dispatch({
								type: 'ADD_SCORE',
								id: nextScoreId++,
								value: input.value,
								player: 'Carli Lloyd',
								challenge: 'Ronaldo Chop'
							});
					input.value = '';
					printLog(store);
				}}>
				<div>player selector</div>
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