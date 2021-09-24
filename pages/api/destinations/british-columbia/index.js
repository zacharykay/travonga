// import { attractionGuides } from '../../../../data/attractions/british-columbia';
const {
	attractionGuides
} = require('../../../../data/attractions/british-columbia.json');

export default function handler(req, res) {
	res.status(200).json(attractionGuides);
}
