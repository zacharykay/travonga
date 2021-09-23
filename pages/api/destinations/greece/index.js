import { attractionGuides } from '../../../../data/attractions/greece';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
