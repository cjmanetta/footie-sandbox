import React from 'react';
// import store from './store';
import TodoList from './todo_list';

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

class VisibleTodoList extends React.Component {

	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const props = this.props;
		const { store } = this.context;
		const state = store.getState();

		return (
			<TodoList 
				todos={getVisibleTodos(
					state.todos,
					state.visibilityFilter
					)
				}
				onTodoClick={id => 
					store.dispatch({
						type: 'TOGGLE_TODO',
						id
					})
				}
			/>
		);
	}
}

VisibleTodoList.contextTypes = {
	store: React.PropTypes.object
};

export default VisibleTodoList;