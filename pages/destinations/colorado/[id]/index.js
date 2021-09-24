import { server } from '../../../../config';
import AttractionsGuide from '../../../../components/attraction_guides/AttractionsGuide';

const Attraction = ({ data }) => {
	return <AttractionsGuide data={data} />;
};

export const getStaticProps = async (context) => {
	const response = await fetch(
		`${server}/api/destinations/colorado/${context.params.id}`
	);
	const data = await response.json();

	return {
		props: {
			data
		}
	};
};

export const getStaticPaths = async () => {
	const response = await fetch(`${server}/api/destinations/colorado`);
	const data = await response.json();

	const ids = data.map((place) => place.id);
	const paths = ids.map((id) => {
		return { params: { id: id.toString() } };
	});
	return { paths, fallback: false };
};

export default Attraction;
