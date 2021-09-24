// import { attractionGuides } from '../../../../data/attractions/nex-mexico';
const { attractionGuides } = require('../../../../data/attractions/nex-mexico.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
