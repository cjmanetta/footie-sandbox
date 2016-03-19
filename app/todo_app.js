import React from 'react';
import store from './store';
import VisibleTodoList from './visible_todo_list';
import AddToDo from './add_todo';
import Footer from './footer';

let nextTodoId = 0;

const TodoApp =  () => (
		<div>
			<AddToDo />
			<VisibleTodoList />
			<Footer />
		</div>
	);

export default TodoApp;