// import { attractionGuides } from '../../../../data/attractions/italy';
const { attractionGuides } = require('../../../../data/attractions/italy.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
