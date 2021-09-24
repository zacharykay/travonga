// import { attractionGuides } from '../../../../data/attractions/northern-ireland';
const {
	attractionGuides
} = require('../../../../data/attractions/northern-ireland.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
