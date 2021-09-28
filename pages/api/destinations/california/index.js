const { attractionGuides } = require('../../../../data/attractions/california.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
