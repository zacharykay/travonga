// import { attractionGuides } from '../../../../data/attractions/austria';
const { attractionGuides } = require('../../../../data/attractions/austria.json');

// import { apiServer } from '../../../../config';

// export default async function handler(req, res) {
// 	const response = await fetch(`${apiServer}/attractions/austria.json`);
// 	const { attractionGuides } = await response.json();
// 	await res.status(200).json(attractionGuides);
// }

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
