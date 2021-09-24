// import { attractionGuides } from '../../../../data/attractions/germany';
const { attractionGuides } = require('../../../../data/attractions/germany.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
