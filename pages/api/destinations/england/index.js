const { attractionGuides } = require('../../../../data/attractions/england.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
