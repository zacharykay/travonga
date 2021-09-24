// import { attractionGuides } from '../../../../data/attractions/usa';
const { attractionGuides } = require('../../../../data/attractions/usa.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
