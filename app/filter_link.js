import React from 'react';
// import store from './store';

const FilterLink = ({
	filter,
	currentFilter,
	children,
	onClick
}) => {
	if (filter === currentFilter) {
		return <span>{children}</span>;
	}
	return (
		<a href="#"
			onClick={event => {
				event.preventDefault();
				onClick(filter);
			}}>
			{children}
		</a>
	);
};

export default FilterLink;