// import { itineraries } from '../../../data/itineraries';
const { itineraries } = require('../../../data/itineraries.json');

export default function handler({ query: { id } }, res) {
	const filtered = itineraries.filter((itinerary) => itinerary.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(404).json({ message: `destination with id of {id} was not found` });
	}
}
