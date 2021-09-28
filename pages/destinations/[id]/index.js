import DestinationsPage from '../../../components/destinations/DestinationsPage';

const { destinations } = require('../../../data/destinations.json');

const destination = ({ data }) => {
	const { stateName, destinations, meta } = data;
	return (
		<DestinationsPage destinations={destinations} placeName={stateName} meta={meta} />
	);
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const filtered = destinations.filter((item) => {
		return item.id === id;
	});
	const data = filtered[0];
	return {
		props: {
			data
		}
	};
};

export const getStaticPaths = async () => {
	const ids = destinations.map((place) => place.id);
	const paths = ids.map((id) => {
		return { params: { id: id.toString() } };
	});
	return { paths, fallback: false };
};

export default destination;
