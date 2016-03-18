import React from 'react';
import store from './store';
import Link from './link';

class FilterLink extends React.Component {
	componentDidMount() {
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const props = this.props;
		const state = store.getState();

		return (
			<Link
				active={ props.filter === state.visibilityFilter}
				onClick={() =>
					store.dispatch({
						type: 'SET_VISIBILITY_FILTER',
						filter: props.filter
					})
				}
			>
				{props.children}
			</Link>
		);
	}
}






// const FilterLink = ({
// 	filter,
// 	currentFilter,
// 	children,
// 	onClick
// }) => {
// 	if (filter === currentFilter) {
// 		return <span>{children}</span>;
// 	}
// 	return (
// 		<a href="#"
// 			onClick={event => {
// 				event.preventDefault();
// 				onClick(filter);
// 			}}>
// 			{children}
// 		</a>
// 	);
// };

export default FilterLink;