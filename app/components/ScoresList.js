import React from 'react';
import Score from './score';

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
					key={score.id}
					score={score}			
				/>
			)}
		</ul>
	);
};

export default ScoresList;
