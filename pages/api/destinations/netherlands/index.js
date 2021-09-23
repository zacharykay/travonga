import { attractionGuides } from '../../../../data/attractions/netherlands';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
