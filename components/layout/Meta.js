const Meta = ({ meta }) => {
	const {
		page_title,
		thumbnail,
		meta_description,
		meta_keywords,
		social_media_title,
		social_media_thumbnail
	} = meta;

	return (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={meta_keywords} />
			<meta name="description" content={meta_description} />
			<meta name="thumbnail" content={thumbnail} />
			<meta property="og:title" content={social_media_title} />
			<meta name="twitter:title" content={social_media_title} />
			<meta property="og:image" content={social_media_thumbnail} />
			<meta name="twitter:image" content={social_media_thumbnail} />
			<meta charSet="utf-8" />
			<meta name="theme-color" content="#444" />
			<title>{page_title}</title>
		</>
	);
};

Meta.defaultProps = {
	page_title: 'Travonga Travel Itineraries & Destination Guides for Europe & USA',
	thumbnail:
		'https://www.travelimager.com/images/utah/Utah-Moab-Arches-National-Park-Delicate-Arch-Golden-Hour-Travonga-Homepage-Thumbnail-150x150.jpg',
	meta_description: `Plan the perfect trips with our detailed Travel Itineraries and Attraction Guides for Europe, Western USA, and British Columbia's top attractions`,
	meta_keywords:
		'travel destinations, attractions guide, travel itineraries, trip itinerary, europe itineraries, road trip itineraries, travel attractions, itinerary attractions',
	social_media_title: 'Travonga Travel Itineraries & Attractions',
	social_media_thumbnail:
		'https://www.travelimager.com/images/utah/Utah-Moab-Arches-National-Park-Delicate-Arch-Golden-Hour-Travonga-Homepage-Thumbnail-150x150.jpg'
};

export default Meta;
