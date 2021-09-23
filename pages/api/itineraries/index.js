import { itineraries } from '../../../data/itineraries';

export default function handler(req, res) {
	res.status(200).json(itineraries);
}
