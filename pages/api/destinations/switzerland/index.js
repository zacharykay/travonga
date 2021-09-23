import { attractionGuides } from '../../../../data/attractions/switzerland';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
