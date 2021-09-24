// import { attractionGuides } from '../../../../data/attractions/oregon';
const { attractionGuides } = require('../../../../data/attractions/oregon.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
