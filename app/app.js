import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";
import Store from "./store";


const render = () => {
	Store.getState();
}
// const render = () => {
// 	ReactDOM.render(
// 	  <Counter 
// 	  	value={Store.getState()}
// 			onIncrement={() =>
// 				Store.dispatch({type: 'INCREMENT'})
// 	  	}
// 	  	onDecrement={() =>
// 				Store.dispatch({type: 'DECREMENT'})
// 	  	}
// 	  />,
	  
// 	  document.getElementById('root')
// 	);
// };

Store.subscribe(render);
render();

// state log =========================
console.log('Initial state:');
console.log(Store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
Store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});
console.log('Current state:');
console.log(Store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
Store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Go shopping'
});
console.log('Current state:');
console.log(Store.getState());
console.log('--------------');

console.log('Dispatching TOGGLE_TODO.');
Store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0
});
console.log('Current state:');
console.log(Store.getState());
console.log('--------------');

console.log('Dispatching SET_VISIBILITY_FILTER');
Store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
});
console.log('Current state:');
console.log(Store.getState());
console.log('--------------');