import React from 'react';
import store from './store';
import FilterLink from './filter_link';

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

class TodoApp extends React.Component {
	render() {
		const {
			todos,
			visibilityFilter
		} = this.props;
		const visibleTodos = getVisibleTodos(
			todos,
			visibilityFilter
		);
		return (
			<div>
				<input ref={node => {this.input = node;}} type="text"/>
				<button onClick={() => {
					store.dispatch({
						type: 'ADD_TODO',
						text: this.input.value,
						id: nextTodoId++
					});
					this.input.value = '';
				}}>Add todo</button>
				<ul>
					{visibleTodos.map(todo => 
						<li key={todo.id}
								onClick={() => {
									store.dispatch({
										type: 'TOGGLE_TODO',
										id: todo.id
									});
								}}
								style={{
									textDecoration:
										todo.completed ?
											'line-through' :
											'none'
								}}>
						{todo.text}
						</li>
					)}
				</ul>
				<p>
					Show:
					{' '}
					<FilterLink  
						filter='SHOW_ALL'
						currentFilter={visibilityFilter}>
						All
					</FilterLink>
					{' '}
					<FilterLink 
						filter='SHOW_ACTIVE'
						currentFilter={visibilityFilter}>
						active
					</FilterLink>
					{' '}
					<FilterLink 
						filter='SHOW_COMPLETED'
						currentFilter={visibilityFilter}>
						completed
					</FilterLink>
				</p>
			</div>
		);
	}
}

export default TodoApp;