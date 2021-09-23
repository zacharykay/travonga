import { server } from '../../../config';
import DestinationsPage from '../../../components/destinations/DestinationsPage';

const destination = ({ data }) => {
	const { stateName, destinations, meta } = data;
	return (
		<DestinationsPage destinations={destinations} placeName={stateName} meta={meta} />
	);
};

export const getStaticProps = async (context) => {
	const response = await fetch(`${server}/api/destinations/${context.params.id}`);
	const data = await response.json();

	return {
		props: {
			data
		}
	};
};

export const getStaticPaths = async () => {
	const response = await fetch(`${server}/api/destinations`);
	const data = await response.json();

	const ids = data.map((place) => place.id);
	const paths = ids.map((id) => {
		return { params: { id: id.toString() } };
	});
	return { paths, fallback: false };
};

export default destination;
