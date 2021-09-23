import { attractionGuides } from '../../../../data/attractions/british-columbia';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
