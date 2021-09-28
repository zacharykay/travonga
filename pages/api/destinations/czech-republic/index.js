const { attractionGuides } = require('../../../../data/attractions/czech-republic.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
