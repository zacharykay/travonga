const {
	attractionGuides
} = require('../../../../data/attractions/northern-ireland.json');

export default function handler({ query: { id } }, res) {
	const filtered = attractionGuides.filter((guide) => guide.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res
			.status(404)
			.json({ message: `Attraction guide with id of ${id} was not found` });
	}
}
