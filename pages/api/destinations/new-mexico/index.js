import { attractionGuides } from '../../../../data/attractions/nex-mexico';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
