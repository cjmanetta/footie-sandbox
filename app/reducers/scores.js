import { combineReducers } from 'redux';

const score = (state, action) => {
	switch (action.type) {
		case 'ADD_SCORE':
			return {
				id: action.id,
				value: action.value,
				player: action.player,
				challenge: action.challenge
			};
		default:
			return state;
	}
};


const constructScores = (state, action) => {
	switch(action.type) {
		case 'ADD_SCORE':
			return {
				scores: [
					...state[0].scores,
					score(undefined, action)
				] 	
			}
	}
};

const scores = (state =	[{scores:[]}], action) => {
	switch(action.type) {
		case 'ADD_SCORE':
			return [
				constructScores(state, action),
			];
		default:
			return state;
	}
};


export default scores;
