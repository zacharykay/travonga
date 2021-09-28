const { destinations } = require('../../../data/destinations.json');

export default function handler(req, res) {
	res.status(200).json(destinations);
}
