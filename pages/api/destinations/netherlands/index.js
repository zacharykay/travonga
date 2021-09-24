// import { attractionGuides } from '../../../../data/attractions/netherlands';
const { attractionGuides } = require('../../../../data/attractions/netherlands.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
