const { attractionGuides } = require('../../../../data/attractions/ireland.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
