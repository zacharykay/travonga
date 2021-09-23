import { attractionGuides } from '../../../../data/attractions/washington';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
