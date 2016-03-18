import React from 'react';
import store from './store';
import FilterLink from './filter_link';
import TodoList from './todo_list';
import AddToDo from './add_todo';
import Footer from './footer';

const getVisibleTodos = (
	todos,
	filter
) => {
		switch (filter) {
			case 'SHOW_ALL':
				return todos;
			case 'SHOW_COMPLETED':
				return todos.filter(
					td => td.completed
				);
			case 'SHOW_ACTIVE':
				return todos.filter(
					td => !td.completed
				);
		}
	}

let nextTodoId = 0;

const TodoApp =  ({
	todos,
	visibilityFilter
}) => (
		<div>
			<AddToDo
				onAddClick={text=>
					store.dispatch({
						type: 'ADD_TODO',
						id: nextTodoId++,
						text
					})
				}
			/>
			<TodoList 
				todos={
					getVisibleTodos(
						todos,
						visibilityFilter
					)
				}
				onTodoClick={id =>
					store.dispatch({
						type: 'TOGGLE_TODO',
						id
					})
				}
			/>
			<Footer />
		</div>
	);

export default TodoApp;