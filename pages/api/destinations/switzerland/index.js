// import { attractionGuides } from '../../../../data/attractions/switzerland';
const { attractionGuides } = require('../../../../data/attractions/switzerland.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
