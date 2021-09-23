import { attractionGuides } from '../../../../data/attractions/oregon';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
