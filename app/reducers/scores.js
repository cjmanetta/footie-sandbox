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

const scores = (state =	 [], action) => {
	switch(action.type) {
		case 'ADD_SCORE':
			return [
				...state,
				score(undefined, action)
			]
		default:
			return state;
	}
};


export default scores;
