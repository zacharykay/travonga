import { attractionGuides } from '../../../../data/attractions/germany';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}