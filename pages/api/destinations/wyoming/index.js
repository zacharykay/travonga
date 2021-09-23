import { attractionGuides } from '../../../../data/attractions/wyoming';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
