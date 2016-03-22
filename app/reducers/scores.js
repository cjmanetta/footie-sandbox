import { combineReducers } from 'redux';


const constructPlayers = () => {
	return [
			{id: 1, name: "Carli Lloyd"},
			{id: 2, name: "Becky Saurbruen"},
			{id: 3, name: "Hope Solo"}
		];
};

const constructChallenges = () => {
	return [
			{id: 1, title: "Ronaldo Chop"},
			{id: 2, title: "Juggling"},
			{id: 3, title: "Maradona"}
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
		default:
			return state;
	}
};

// this initial state should be loaded from the server
const initialState = {
	scores: [],
	players: constructPlayers(),
	challenges: constructChallenges(),
	selectorCache: {player: null, challenge: null}
};

// const constructSelectors = (state, action) => {
// 	switch (action.type) {
// 		case 'SELECT_PLAYER':
// 			return Object.assign(state.selectorCache, state.selectorCache, {
// 				player: action.id
// 			});
// 		default:
// 			return state;
// 	}
// };

const scoresApp = (state =	initialState, action) => {
	switch(action.type) {
		case 'SELECT_PLAYER':
			return {
				...state,
				selectorCache: {
					...state.selectorCache,
					player: action.id
				}
			};
		case 'SELECT_CHALLENGE':
			return {
				...state,
				selectorCache: {
					...state.selectorCache,
					challenge: action.id
				}
			};
		case 'ADD_SCORE':
			return {
				...state,
				scores: constructScores(state, action),
				selectorCache: {player: null, challenge: null}
			};
		default:
			return state;
	}
};

export default scoresApp;
