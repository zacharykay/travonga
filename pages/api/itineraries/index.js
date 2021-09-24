// import { itineraries } from '../../../data/itineraries';
const { itineraries } = require('../../../data/itineraries.json');

export default function handler(req, res) {
	res.status(200).json(itineraries);
}
