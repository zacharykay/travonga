import { attractionGuides } from '../../../../data/attractions/slovenia';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
