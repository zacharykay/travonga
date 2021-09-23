import { attractionGuides } from '../../../../data/attractions/portugal';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
