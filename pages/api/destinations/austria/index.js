import { attractionGuides } from '../../../../data/attractions/austria';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
