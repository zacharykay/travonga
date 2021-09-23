import { attractionGuides } from '../../../../data/attractions/europe';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
