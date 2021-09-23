import { attractionGuides } from '../../../../data/attractions/czech-republic';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
