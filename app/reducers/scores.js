import { combineReducers } from 'redux';


const constructPlayers = () => {
	return [
			{id: 1, name: "Carli Lloyd"},
			{id: 2, name: "Becky Saurbruen"},
			{id: 3, name: "Hope Solo"}
		];
};

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
			return [
					...state.scores,
					score(undefined, action)
			];
	}
};

const initialState = {
	scores: [],
	players: constructPlayers()
}
// this should take an initial state which is loaded from the server
const scores = (state =	initialState, action) => {
	switch(action.type) {
		case 'ADD_SCORE':
			return Object.assign({}, state, {
				scores: constructScores(state, action)
			});
		default:
			return state;
	}
};


export default scores;
