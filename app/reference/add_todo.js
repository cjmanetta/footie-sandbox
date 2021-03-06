import React from 'react';
import { addTodo } from './actions'

const AddTodo = (props, { store }) => {
	let input;

	return (
		<div>
			<input ref={node => {input = node;}}/>
			<button 
				onClick={() => { 
					store.dispatch(addTodo(input.value));
					input.value= '';
				}}>
				Add todo
			</button>
		</div>
	);
};

AddTodo.contextTypes = {
	store: React.PropTypes.object
};

export default AddTodo;