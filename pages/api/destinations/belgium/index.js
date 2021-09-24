// import { attractionGuides } from '../../../../data/attractions/belgium';
const { attractionGuides } = require('../../../../data/attractions/belgium.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
