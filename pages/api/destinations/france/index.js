import { attractionGuides } from '../../../../data/attractions/france';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
