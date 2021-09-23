import { destinations } from '../../../data/destinations';

export default function handler(req, res) {
	res.status(200).json(destinations);
}
