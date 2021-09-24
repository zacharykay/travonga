import { useState, useEffect } from 'react';

import { server } from '../../../../config';
import AttractionsGuide from '../../../../components/attraction_guides/AttractionsGuide';

const attraction = ({ data }) => {
	// const [ size, setSize ] = useState(null);

	// const checkSize = () => {
	// 	setSize(window.innerWidth);
	// };

	// useEffect(() => {
	// 	checkSize();
	// }, []);

	// useEffect(() => {
	// 	window.addEventListener('resize', checkSize);

	// 	return () => {
	// 		window.removeEventListener('resize', checkSize);
	// 	};
	// }, []);

	return <AttractionsGuide data={data} />;
};

export const getStaticProps = async (context) => {
	const response = await fetch(
		`${server}/api/destinations/czech-republic/${context.params.id}`
	);
	const data = await response.json();

	return {
		props: {
			data
		}
	};
};

export const getStaticPaths = async () => {
	const response = await fetch(`${server}/api/destinations/czech-republic`);
	const data = await response.json();

	const ids = data.map((place) => place.id);
	const paths = ids.map((id) => {
		return { params: { id: id.toString() } };
	});
	return { paths, fallback: false };
};

export default attraction;
