// import { attractionGuides } from '../../../../data/attractions/france';
const { attractionGuides } = require('../../../../data/attractions/france.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
