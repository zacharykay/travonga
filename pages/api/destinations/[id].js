// import { destinations } from '../../../data/destinations';
const { destinations } = require('../../../data/destinations.json');

export default function handler({ query: { id } }, res) {
	const filtered = destinations.filter((destination) => destination.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(404).json({ message: `destination with id of ${id} was not found` });
	}
}
