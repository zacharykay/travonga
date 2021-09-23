import { attractionGuides } from '../../../../data/attractions/italy';

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
