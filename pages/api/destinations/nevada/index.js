import { attractionGuides } from '../../../../data/attractions/nevada';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
