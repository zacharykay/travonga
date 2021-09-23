import { attractionGuides } from '../../../../data/attractions/utah';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
