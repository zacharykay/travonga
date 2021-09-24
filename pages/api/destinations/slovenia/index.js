// import { attractionGuides } from '../../../../data/attractions/slovenia';
const { attractionGuides } = require('../../../../data/attractions/slovenia.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
