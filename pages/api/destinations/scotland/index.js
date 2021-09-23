import { attractionGuides } from '../../../../data/attractions/scotland';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
