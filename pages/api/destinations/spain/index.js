// import { attractionGuides } from '../../../../data/attractions/spain';
const { attractionGuides } = require('../../../../data/attractions/spain.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
