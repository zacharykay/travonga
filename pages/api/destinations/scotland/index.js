// import { attractionGuides } from '../../../../data/attractions/scotland';
const { attractionGuides } = require('../../../../data/attractions/scotland.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
