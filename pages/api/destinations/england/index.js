import { attractionGuides } from '../../../../data/attractions/england';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
