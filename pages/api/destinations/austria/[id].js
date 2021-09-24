// import { attractionGuides } from '../../../../data/attractions/austria';
const { attractionGuides } = require('../../../../data/attractions/austria.json');

// import { apiServer } from '../../../../config';

// export default async function handler({ query: { id } }, res) {
// 	const response = await fetch(`${apiServer}/attractions/austria.json`);
// 	const { attractionGuides } = await response.json();
// 	const filtered = await attractionGuides.filter((guide) => guide.id === id);

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
