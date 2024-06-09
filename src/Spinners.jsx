import React from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
const override = {
	display: 'block',
	margin: '100px auto',
};
const Spinners = (loading) => {
	return (
		<CircleLoader
			color="#4338ca"
			loading={loading}
			cssOverride={override}
			size={75}
		/>
	);
};

export default Spinners;
