// import { attractionGuides } from '../../../../data/attractions/europe';
const { attractionGuides } = require('../../../../data/attractions/europe.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
