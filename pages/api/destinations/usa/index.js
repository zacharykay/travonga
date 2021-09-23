import { attractionGuides } from '../../../../data/attractions/usa';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
