// import { attractionGuides } from '../../../../data/attractions/new-mexico';
const { attractionGuides } = require('../../../../data/attractions/new-mexico.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
