import { attractionGuides } from '../../../../data/attractions/colorado';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
