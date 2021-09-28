const { attractionGuides } = require('../../../../data/attractions/wyoming.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
