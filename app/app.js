import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";
import Store from "./store";

const render = () => {
	ReactDOM.render(
	  <Counter 
	  	value={Store.getState()}
			onIncrement={() =>
				Store.dispatch({type: 'INCREMENT'})
	  	}
	  	onDecrement={() =>
				Store.dispatch({type: 'DECREMENT'})
	  	}
	  />,
	  
	  document.getElementById('root')
	);
};

Store.subscribe(render);
render();