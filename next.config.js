module.exports = {
	reactStrictMode: true,
	images: {
		domains: [ 'www.travelimager.com' ]
	},
	async redirects() {
		return [
			{
				source: '/',
				destination:
					'/itineraries/italy-travel-itinerary-and-top-attractions-by-train',
				permanent: true
			}
		];
	}
};
