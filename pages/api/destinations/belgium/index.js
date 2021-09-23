import { attractionGuides } from '../../../../data/attractions/belgium';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
