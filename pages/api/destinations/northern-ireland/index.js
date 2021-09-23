import { attractionGuides } from '../../../../data/attractions/northern-ireland';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
