import React from 'react';
// import store from './store';
import Link from './link';
import { setVisibilityFilter } from './actions';

class FilterLink extends React.Component {
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
			<Link
				active={ props.filter === state.visibilityFilter}
				onClick={() =>
					store.dispatch(setVisibilityFilter(props.filter))
				}
			>
				{props.children}
			</Link>
		);
	}
}

FilterLink.contextTypes = {
	store: React.PropTypes.object
};	




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