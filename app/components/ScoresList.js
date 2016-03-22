import React from 'react';
import Score from './score';

let nextSortedScoreId = 0;

const ScoresList = ({
	scores
}) => {

	if (scores.length === 0) {
		return <div>no scores yet</div>
	}

	return (
		<ul> 
			{scores.map(score => 
				<Score 
					key={nextSortedScoreId++}
					score={score}			
				/>
			)}
		</ul>
	);
};

export default ScoresList;
