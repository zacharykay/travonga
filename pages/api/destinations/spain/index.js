import { attractionGuides } from '../../../../data/attractions/spain';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
