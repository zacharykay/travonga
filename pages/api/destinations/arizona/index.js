// import { attractionGuides } from '../../../../data/attractions/arizona';
const { attractionGuides } = require('../../../../data/attractions/arizona.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
