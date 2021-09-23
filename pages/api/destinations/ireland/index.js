import { attractionGuides } from '../../../../data/attractions/ireland';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
