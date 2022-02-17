interface NavLink {
	id: number | string,
	name: string,
	url: string;
}

interface Submenu {
	id: number | string,
	name: string,
	pages: NavLink[];
}

interface Navigation {
	id: number | string,
	name: string,
	categories: Submenu[];
}

export const navigationLinks: Navigation[] = [
	{
		id: 1,
		name: 'Attraction Guides',
		categories: [
			{
				id: 1,
				name: 'Europe',
				pages: [
					{
						id: 1,
						name: 'Austria',
						url: '/destinations/austria-attractions-guides'
					},
					{
						id: 2,
						name: 'Belgium',
						url: '/destinations/belgium-attractions-guides'
					},
					{
						id: 3,
						name: 'Czech Republic',
						url: '/destinations/czech-republic-attractions-guides'
					},
					{
						id: 4,
						name: 'Denmark',
						url: '/destinations/europe/denmark-copenhagen-attractions-guide'
					},
					{
						id: 5,
						name: 'England',
						url: '/destinations/england-attractions-guides'
					},
					{
						id: 6,
						name: 'France',
						url: '/destinations/france-attractions-guides'
					},
					{
						id: 7,
						name: 'Germany',
						url: '/destinations/germany-attractions-guides'
					},
					{
						id: 8,
						name: 'Greece',
						url: '/destinations/greece-attractions-guides'
					},
					{
						id: 9,
						name: 'Hungary',
						url: '/destinations/europe/hungary-budapest-attractions-guide'
					},
					{
						id: 10,
						name: 'Italy',
						url: '/destinations/italy-attractions-guides'
					},
					{
						id: 11,
						name: 'Ireland',
						url: '/destinations/ireland-attractions-guides'
					}
				]
			},
			{
				id: 2,
				name: 'More Europe',
				pages: [
					{
						id: 12,
						name: 'Luxembourg',
						url: '/destinations/europe/luxembourg-city-attractions-guide'
					},
					{
						id: 13,
						name: 'Monaco',
						url: '/destinations/europe/monaco-attractions-guide'
					},
					{
						id: 14,
						name: 'Netherlands',
						url: '/destinations/netherlands-attractions-guides'
					},
					{
						id: 15,
						name: 'Norway',
						url: '/destinations/europe/norway-oslo-attractions-guide'
					},
					{
						id: 16,
						name: 'Portugal',
						url: '/destinations/portugal-attractions-guides'
					},
					{
						id: 17,
						name: 'Scotland',
						url: '/destinations/scotland-attractions-guides'
					},
					{
						id: 18,
						name: 'Slovakia',
						url: '/destinations/europe/slovakia-bratislava-attractions-guide'
					},
					{
						id: 19,
						name: 'Slovenia',
						url: '/destinations/slovenia-attractions-guides'
					},
					{
						id: 20,
						name: 'Spain',
						url: '/destinations/spain-attractions-guides'
					},
					{
						id: 21,
						name: 'Sweden',
						url: '/destinations/europe/sweden-stockholm-attractions-guide'
					},
					{
						id: 22,
						name: 'Switzerland',
						url: '/destinations/switzerland-attractions-guides'
					}
				]
			},
			{
				id: 3,
				name: 'USA & Canada',
				pages: [
					{
						id: 1,
						name: 'Arizona',
						url: '/destinations/arizona-attractions-guides'
					},
					{
						id: 2,
						name: 'British Columbia',
						url: '/destinations/british-columbia-attractions-guides'
					},
					{
						id: 3,
						name: 'California',
						url: '/destinations/california-attractions-guides'
					},
					{
						id: 4,
						name: 'Colorado',
						url: '/destinations/colorado-attractions-guides'
					},
					{
						id: 5,
						name: 'Montana',
						url:
							'/destinations/usa/montana-glacier-national-park-attractions-guide'
					},
					{
						id: 6,
						name: 'Nevada',
						url: '/destinations/nevada-attractions-guides'
					},
					{
						id: 7,
						name: 'New Mexico',
						url: '/destinations/new-mexico-attractions-guides'
					},
					{
						id: 8,
						name: 'Oregon',
						url: '/destinations/oregon-attractions-guides'
					},
					{
						id: 9,
						name: 'Utah',
						url: '/destinations/utah-attractions-guides'
					},
					{
						id: 10,
						name: 'Washington',
						url: '/destinations/washington-attractions-guides'
					},
					{
						id: 11,
						name: 'Wyoming',
						url: '/destinations/wyoming-attractions-guides'
					}
				]
			}
		]
	},
	{
		id: 2,
		name: 'Europe Itineraries',
		categories: [
			{
				id: 1,
				name: 'By Country',
				pages: [
					{
						id: 1,
						name: 'Southern England',
						url:
							'/itineraries/southern-england-travel-itinerary-and-top-attractions'
					},
					{
						id: 2,
						name: 'France',
						url:
							'/itineraries/france-travel-itinerary-and-top-attractions-by-train'
					},
					{
						id: 3,
						name: 'Italy',
						url:
							'/itineraries/italy-travel-itinerary-and-top-attractions-by-train'
					},
					{
						id: 4,
						name: 'Portugal',
						url: '/itineraries/portugal-travel-itinerary-and-top-attractions'
					},
					{
						id: 5,
						name: 'Spain',
						url:
							'/itineraries/spain-travel-itinerary-and-top-attractions-by-train'
					}
				]
			},
			{
				id: 2,
				name: 'Regions',
				pages: [
					{
						id: 1,
						name: 'Western Europe',
						url:
							'/itineraries/western-europe-travel-itinerary-and-top-attractions-by-train'
					},
					{
						id: 2,
						name: 'Central Europe',
						url:
							'/itineraries/central-europe-travel-itinerary-and-top-attractions-by-train'
					},
					{
						id: 3,
						name: '1 Month in Europe',
						url:
							'/itineraries/1-month-in-europe-travel-itinerary-and-top-attractions-by-train'
					},
					{
						id: 4,
						name: '6 Weeks in Europe',
						url:
							'/itineraries/6-weeks-in-europe-travel-itinerary-and-top-attractions-by-train'
					},
					{
						id: 5,
						name: '2+ Months in Europe',
						url:
							'/itineraries/2-months-in-europe-travel-itinerary-and-top-attractions-by-train'
					}
				]
			},
			{
				id: 3,
				name: 'Combinations',
				pages: [
					{
						id: 1,
						name: 'France & Spain',
						url:
							'/itineraries/france-and-spain-travel-itinerary-and-top-attractions-by-train'
					},
					{
						id: 2,
						name: 'Spain & Portugal',
						url:
							'/itineraries/spain-and-portugal-travel-itinerary-and-top-attractions-by-train'
					},
					{
						id: 3,
						name: 'U.K. & Ireland',
						url:
							'/itineraries/uk-and-ireland-travel-itinerary-and-top-attractions'
					}
				]
			}
		]
	},
	{
		id: 3,
		name: 'US Road Trips',
		categories: [
			{
				id: 1,
				name: 'US States',
				pages: [
					{
						id: 1,
						name: 'Arizona',
						url:
							'/itineraries/arizona-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 2,
						name: 'California',
						url:
							'/itineraries/california-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 3,
						name: 'Highlights of California',
						url:
							'/itineraries/highlights-of-california-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 4,
						name: 'Northern California',
						url:
							'/itineraries/northern-california-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 5,
						name: 'Southern California',
						url:
							'/itineraries/southern-california-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 6,
						name: 'Colorado',
						url:
							'/itineraries/colorado-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 7,
						name: 'Oregon',
						url: '/itineraries/oregon-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 8,
						name: 'Utah',
						url: '/itineraries/utah-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 9,
						name: 'Washington',
						url:
							'/itineraries/washington-road-trip-itinerary-and-top-attractions'
					}
				]
			},
			{
				id: 2,
				name: 'Regions & Canada',
				pages: [
					{
						id: 1,
						name: 'British Columbia',
						url:
							'/itineraries/british-columbia-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 2,
						name: 'Pacific Coast US',
						url:
							'/itineraries/pacific-coast-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 3,
						name: 'Pacific Northwest',
						url:
							'/itineraries/pacific-northwest-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 4,
						name: 'Southwest US',
						url:
							'/itineraries/southwest-us-road-trip-itinerary-and-top-attractions'
					}
				]
			},
			{
				id: 3,
				name: 'Combinations',
				pages: [
					{
						id: 1,
						name: 'California + Arizona + Utah',
						url:
							'/itineraries/california-arizona-and-utah-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 2,
						name: 'Northern California + Oregon',
						url:
							'/itineraries/northern-california-and-oregon-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 3,
						name: 'Southern California + Arizona',
						url:
							'/itineraries/southern-california-and-arizona-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 4,
						name: 'Utah + Arizona',
						url:
							'/itineraries/utah-and-arizona-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 5,
						name: 'Utah + Colorado',
						url:
							'/itineraries/utah-and-colorado-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 6,
						name: 'Washington + Oregon',
						url:
							'/itineraries/washington-and-oregon-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 7,
						name: 'Wyoming + Montana',
						url:
							'/itineraries/wyoming-and-montana-road-trip-itinerary-and-top-attractions'
					},
					{
						id: 8,
						name: 'Wyoming + Utah',
						url:
							'/itineraries/wyoming-and-utah-road-trip-itinerary-and-top-attractions'
					}
				]
			}
		]
	}
];
