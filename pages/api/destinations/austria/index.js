// import { attractionGuides } from '../../../../data/attractions/austria';
const { attractionGuides } = require('../../../../data/attractions/austria.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
