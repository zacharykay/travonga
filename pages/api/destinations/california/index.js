import { attractionGuides } from '../../../../data/attractions/california';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
