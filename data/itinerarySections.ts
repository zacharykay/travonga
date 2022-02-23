import {MapLinks, TabSections} from '../components/widgets/interfaces'

export interface ItineraryItemSections {
    [key: string]: SingleItinerarySection;
}

export interface SingleItinerarySection {
	id: string,
	itineraries: string | null,
	destinationName: string,
	stateName: string | null,
	region: string,
	anchor_tag: string | null,
	destination_link: string,
	attractionMapLinks: MapLinks,
	itinerary_guide_tabs?: TabSections[],
	attractions: ItinerarySectionAttractions[],

}

export interface ItinerarySectionAttractions {
	id?: string;
	carouselId?: string;
	itineraryCarousel?: string | null;
    attraction: string;
    image_url: string;
    image_alt: string;
    cc_image_url: string;
    cc_author_url: string;
    cc_author: string,
    cc_license_url?: string | null;
	cc_license?: string | null;
	cc_license_gnu_url?: string | null;
	cc_license_gnu?: string | null;
}

export const itinerarySections: ItineraryItemSections = {
	greater_vancouver: {
		id: 'greater_vancouver',
		itineraries: '',
		destinationName: 'Greater Vancouver',
		stateName: 'British Columbia',
		region: 'canada',
		anchor_tag: 'greater-vancouver-british-columbia',
		destination_link:
			'/destinations/british-columbia/greater-vancouver-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/ZaiFXmyVxoD2',
			all_attractions: 'https://goo.gl/maps/9muCHvrHYuq'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Squamish',
				tab_content: `<p>To the north of Vancouver is a seemingly endless landscape of massive mountains, vast green valleys, and glacial lakes located between Squamish and Mount Currie.</p>
                <p>Near Squamish is the majestic 1,100 foot (335 m) tall Shannon Falls, as well as the Sea to Sky Gondola which takes you up 2,900 feet (885 m) above the Howe Sound, with striking views, hiking, and a suspension bridge. Further north of Vancouver is the stunning Garibaldi Provincial Park, which offers long-distance hiking trails set amongst tall mountains and the beautiful Garibaldi Lake.</p>`
			},
			{
				tab_title: 'Whistler',
				tab_content: `<p>The town of Whistler hosts a vast amount of skiing trails in the winter, which are used as hiking trails in the summer. The High Note Trail on Whistler Mountain offers breathtaking views over the serene glacial blue Cheakamus Lake below.</p>`
			},
			{
				tab_title: 'Joffre Lakes',
				tab_content: `<p>Near Mount Currie is the Joffre Lakes Provincial Park, a small steep valley hosting a series of glacial lakes connected to one another via a series of river rapids and tiny waterfalls. The lakes are all vibrant bright blue in color and set within lush alpine forests.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Sea to Sky Gondola',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Greater-Vancouver-Squamish-Sea-to-Sky-Gondola.jpg',
				image_alt:
					'View from a Sea to Sky gondola looking down over Squamish and the Howe Sound near Vancouver',

				cc_image_url: 'https://www.flickr.com/photos/paulmccoubrie/38264982816/',
				cc_author_url: 'https://www.flickr.com/photos/paulmccoubrie/',
				cc_author: 'Paul McCoubrie',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'High Note Trail (Whistler Mountain)',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Greater-Vancouver-Whistler-Mountain-High-Note-Trail-Cheakamus-Lake-Southwest-View.jpg',
				image_alt:
					'Looking along the High Note Trail atop Whistler Mountain high above Cheakamus Lake near Vancouver, British Columbia',

				cc_image_url: 'https://www.flickr.com/photos/mfoubister/28585801368/',
				cc_author_url: 'https://www.flickr.com/photos/mfoubister/',
				cc_author: 'Murray Foubister',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Shannon Falls',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Greater-Vancouver-Shannon-Falls-Provincial-Park-Shannon-Falls.jpg',
				image_alt:
					'Massive and powerful Shannon Falls, one of the largest waterfalls in Canada, located near Vancouver',

				cc_image_url: 'https://www.flickr.com/photos/sagamiono/2476572392',
				cc_author_url: 'https://www.flickr.com/photos/sagamiono/',
				cc_author: 'Michael',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Joffre Lakes Provincial Park',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Greater-Vancouver-Joffre-Lakes-Provincial-Park-View-above-Upper-Joffre-Lake.jpg',
				image_alt:
					'Looking down over the three glacial Joffre Lakes from high above in British Columbia outside of Vancouver',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Joffre_Lakes.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Joffre_Lakes.jpg&action=history',
				cc_author: 'Madhumanti Mandal',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'The Black Tusk (Garibaldi Lake)',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Greater-Vancouver-Garibaldi-Provincial-Park-Garibaldi-Lake-The-Black-Tusk.jpg',
				image_alt:
					'Incredible Black Tusk mountain formation rising above the green forests and Garibaldi Lake, near Vancouver',

				cc_image_url: 'https://www.flickr.com/photos/iwona_kellie/3759839713/',
				cc_author_url: 'https://www.flickr.com/photos/iwona_kellie/',
				cc_author: 'iwona_kellie',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Brandywine Falls',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Greater-Vancouver-Brandywine-Falls-Provincial-Park-Brandywine-Falls.jpg',
				image_alt:
					'Beautiful and powerful Brandywine Falls flowing over a canyon surrounded by dense forests north of Vancouver',

				cc_image_url: 'https://www.flickr.com/photos/29638108@N06/5858518670/',
				cc_author_url: 'https://www.flickr.com/photos/29638108@N06/',
				cc_author: 'Jennifer C.',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	vancouver: {
		id: 'vancouver',
		itineraries: '',
		destinationName: 'Vancouver',
		stateName: 'British Columbia',
		region: 'canada',
		anchor_tag: 'vancouver-british-columbia',
		destination_link: '/destinations/british-columbia/vancouver-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/ZVgp5VJkCoH2',
			all_attractions: 'https://goo.gl/maps/aift4wjPPQ72'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Vancouver Attractions',
				tab_content: `<p>Vancouver is a stunning modern city of striking high-rise buildings surrounded by breathtaking scenery. Downtown Vancouver is the main hub of the city and is located on a peninsula, with lavish marinas along the southern and northern end of the peninsula and the vast Stanley Park located on the northwestern tip.</p>
                <p>The best way to tour the city is to bike along the Vancouver Seawall and Stanley Park, enjoying picturesque coastal views while passing sights such as the Totem Poles, Olympic Cauldron, Coal Harbour, and False Creek.</p>
                <p>Popular neighborhoods hosting excellent international cuisines as well as great bars and nightlife include Yaletown and Gastown, which are both located Downtown. Gastown also hosts the city's iconic Steam Clock, as well as the Vancouver Lookout from which you can enjoy panoramic views high above the city.</p>
                <p>In North Vancouver you'll find the famous Capilano Suspension Bridge, as well as vast forests hosting many hiking trails.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Coal Harbour',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-Coal-Harbour-Seawall-Water-Walk-View.jpg',
				image_alt:
					'Looking along the Vancouver Seawall at Coal Harbour lined with modern glass highrise buildings in Downtown Vancouver',

				cc_image_url: 'https://www.flickr.com/photos/tdlucas5000/15070603679/',
				cc_author_url: 'https://www.flickr.com/photos/tdlucas5000/',
				cc_author: 'tdlucas5000',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Gastown Steam Clock',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-Gastown-Steam-Clock.jpg',
				image_alt:
					'Iconic Gastown Steam Clock, a large antique clock powered by steam, seen at night in Downtown Vancouver',

				cc_image_url: 'https://www.flickr.com/photos/iqremix/37726855381/',
				cc_author_url: 'https://www.flickr.com/photos/iqremix/',
				cc_author: 'IQRemix',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Capilano Suspension Bridge',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-Capilano-River-Regional-Park-Capilano-Suspension-Bridge.jpg',
				image_alt:
					'Looking along the famous Capilano Suspension Bridge spanning a canyon, surrounded by lush green forests in North Vancouver',

				cc_image_url: 'https://www.flickr.com/photos/footloosiety/3547548303/',
				cc_author_url: 'https://www.flickr.com/photos/footloosiety/',
				cc_author: 'David J Laporte',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Vancouver Lookout (Harbour Centre)',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-Harbour-Centre-Building-Vancouver-Lookout.jpg',
				image_alt:
					'View overlooking many highrise buildings during sunset seen from atop the Vancouver Lookout at Harbour Centre',

				cc_image_url: 'https://www.flickr.com/photos/magnusl3d/6044910841/',
				cc_author_url: 'https://www.flickr.com/photos/magnusl3d/',
				cc_author: 'Magnus Larsson',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'False Creek',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-False-Creek-Marina.jpg',
				image_alt:
					"Stunning ultra-modern glass highrise buildings and yachts lining the marina at Downtown Vancouver's False Creek",

				cc_image_url: 'https://www.flickr.com/photos/regnatarajan/4287809070/',
				cc_author_url: 'https://www.flickr.com/photos/regnatarajan/',
				cc_author: 'Reg Natarajan',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Elsje Point (Kitsilano Beach)',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-Kitsilano-Beach-Kitsilano-Seawall-Elsje-Point.jpg',
				image_alt:
					'Boulders along the sandy Kitsilano beach at Elsje Point with Downtown Vancouver seen behind the water at golden hour',

				cc_image_url: 'https://www.flickr.com/photos/40870180@N02/35957354261/',
				cc_author_url: 'https://www.flickr.com/photos/40870180@N02/',
				cc_author: 'Alberto Cruz',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	victoria: {
		id: 'victoria',
		itineraries: '',
		destinationName: 'Victoria & Vancouver Island',
		stateName: 'British Columbia',
		region: 'canada',
		anchor_tag: 'victoria-british-columbia',
		destination_link: '/destinations/british-columbia/victoria-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/hqiiVGMjLUo',
			all_attractions: 'https://goo.gl/maps/etM4CeZzCTP2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Transportation',
				tab_content: `<p>Victoria is the capital city of British Columbia and is located at the eastern edge of the massive Vancouver Island, which sits off the coast of Canada. Due to its location, Victoria can only be reached by plane or ferry, which departs from both Vancouver and Port Angeles, Washington.</p>`
			},
			{
				tab_title: 'Victoria Attractions',
				tab_content: `<p>Victoria is known for its beautiful historic structures, including the magnificent BC Parliament Building and chateau-like Fairmont Express. The city also hosts the Royal BC Museum and the picturesque Fisherman's Wharf, which consists of several floating piers lined with shops, restaurants, and colorful floating homes.</p>
                <p>On the western outskirts of the city is the stunning 20th century Hatley Castle, which was once owned by the British Royal Family.</p>`
			},
			{
				tab_title: 'Greater Victoria',
				tab_content: `<p>North of Victoria are the Butchart Gardens, a gorgeous collection of well-manicured themed gardens with vibrantly colored flowers and plants, as well as mesmerizing fountains. West of Victoria along the Strait of Juan de Fuca are many beautiful beaches surrounded by tall dense forests. You can reach these scenic beaches via lush forested hiking trails.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Butchart Gardens',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-Island-Greater-Victoria-Brentwood-Bay-Butchart-Gardens.jpg',
				image_alt:
					'Vibrant colored flowers, plants, and trees of the famous Butchart Gardens of Vancouver Island in Brentwood Bay near Victoria',

				cc_image_url: 'https://www.flickr.com/photos/don34685/22888255967/',
				cc_author_url: 'https://www.flickr.com/photos/don34685/',
				cc_author: 'Don',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: "Fisherman's Wharf Park",
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-Island-Victoria-Fishermans-Wharf.jpg',
				image_alt:
					"Vibrant colorful buildings lining the docks along Victoria's Fisherman's Wharf Park on Vancouver Island",

				cc_image_url: 'https://www.flickr.com/photos/arbron/20044219993/',
				cc_author_url: 'https://www.flickr.com/photos/arbron/',
				cc_author: 'Jeff Hitchcock',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Fairmont Empress Hotel',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-Island-Victoria-Fairmont-Empress-Hotel.jpg',
				image_alt:
					"Horse and carriage in front of Victoria's beautiful Fairmont Express Hotel with vine-covered walls, on Vancouver Island",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:The_Empress,_Victoria,_BC.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:The_Empress,_Victoria,_BC.jpg&action=history',
				cc_author: 'Miladlaferrari',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Fisgard Lighthouse (Fort Rodd Hill)',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-Island-Victoria-Fort-Rodd-Hill-Fisgard-Lighthouse.jpg',
				image_alt:
					'Lovely little red/white Fisgard Lighthouse atop a tiny rocky peninsula at Fort Rodd Hill outside Victoria, Vancouver Island',

				cc_image_url: 'https://www.flickr.com/photos/arbron/20044219993/',
				cc_author_url: 'https://www.flickr.com/photos/arbron/',
				cc_author: 'Jeff Hitchcock',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Hatley Park National Historic Site',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-Island-Victoria-Hatley-Castle.jpg',
				image_alt:
					"Majestic stone exterior of the Hatley Castle near Victoria, which was the location for Xavier's School in most X-men films",

				cc_image_url: 'https://www.flickr.com/photos/arbron/19796275222/',
				cc_author_url: 'https://www.flickr.com/photos/arbron/',
				cc_author: 'Jeff Hitchcock',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'French Beach',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-Island-Strait-of-Juan-de-Fuca-French-Beach-Provincial-Park.jpg',
				image_alt:
					'Wooden logs along the rocky French Beach surrounded by dense forests along the Strait of Juan de Fuca on Vancouver Island',

				cc_image_url: 'https://www.flickr.com/photos/56705607@N00/34903768151/',
				cc_author_url: 'https://www.flickr.com/photos/56705607@N00/',
				cc_author: 'Blake Handley',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Mystic Beach',
				image_url:
					'https://www.travelimager.com/images/british-columbia/British-Columbia-Vancouver-Island-Strait-of-Juan-de-Fuca-Juan-de-Fuca-Provincial-Park-Mystic-Beach.jpg',
				image_alt:
					"View along the waterline of sandy Mystic Beach below forest-covered cliffs along Vancouver Island's Strait of Juan de Fuca",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Mystic_Beach,_Vancouver_Island,_Canada_10.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Podzemnik',
				cc_author: 'Michal Klajban',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			}
		]
	},

	hallstatt: {
		id: 'hallstatt',
		itineraries: '',
		destinationName: 'Hallstatt & Salzkammergut',
		stateName: 'Austria',
		region: 'europe',
		anchor_tag: 'hallstatt-austria',
		destination_link:
			'/destinations/austria/hallstatt-and-salzkammergut-attractions-guide',
		attractionMapLinks: {
			custom_attractions_1: 'https://goo.gl/maps/2qdb4f46mAD2',
			custom_attractions_1_text: 'Top Attractions (Train)',
			custom_attractions_2: 'https://goo.gl/maps/ADMYFLaVDzr',
			custom_attractions_2_text: 'All Attractions (Train)',
			custom_attractions_3: 'https://goo.gl/maps/KJy382zCXt42',
			custom_attractions_3_text: 'Top Attractions (Car)',
			custom_attractions_4: 'https://goo.gl/maps/JcLpoPKyW9M2',
			custom_attractions_4_text: 'All Attractions (Car)'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Hallstatt & Salzkammergut',
				tab_content: `<p>The Salzkammergut region is arguably one of the most beautiful areas of the world, with several serene lakeside villages set amongst tall gorgeous lush mountains.</p>
                <p>Among these villages Hallstatt is the most popular and is actually part of a UNESCO world heritage region. Be sure to walk around the village to enjoy its beauty, especially the charming Marktplatz square. In Hallstatt be sure to enjoy the views just above the village from the Wonderful View viewpoint, and just north of town be sure to enjoy the picturesque views of Hallstatt from the Classic Village Viewpoint.</p>
                <p>From Hallstatt you can take the funicular rail up the mountain to the Skywalk Hallstatt to enjoy views over the idyllic Hallstatter See Lake from high above. Next to the skywalk you can tour the Salt Mine Hallstatt from which the region's wealth historically arose. To enjoy more incredible views, take the ferry to nearby Obertraun, where you can take the chairlift up to breathtaking 5 Fingers Vista Point atop Krippenstein Mountain.</p>
                <p>One of the region's other most scenic towns is St. Wolfgang im Salzkammergut. This is another town you must walk around to admire, which features stunning traditional Austrian architecture. You can also take a small train from town up to the top Schafberg Mountain to enjoy majestic views over the lakes and villages below.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Classic Village Viewpoint (Hallstatt)',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Salzkammergut-Hallstatt-Classic-Village-Viewpoint.jpg',
				image_alt:
					'Highly photogenic viewpoint of the village of Hallstatt set amongst the Hallstattersee lake and tall mountains',

				cc_image_url: 'https://www.flickr.com/photos/sinava/42302985502/',
				cc_author_url: 'https://www.flickr.com/photos/sinava/',
				cc_author: 'sinava',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Marktplatz (Hallstatt)',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Salzkammergut-Hallstatt-Marktplatz-Market-Plaza.jpg',
				image_alt:
					'Lovely and colorful chateau-like buildings surrounding Marktplatz square in Hallstatt, Austria',

				cc_image_url: 'https://pixabay.com/en/hallstatt-austria-town-95953/',
				cc_author_url: 'https://pixabay.com/en/users/12019-12019/',
				cc_author: '12019',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Skywalk Hallstatt',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Salzkammergut-Hallstatt-Skywalk-Hallstatt.jpg',
				image_alt:
					'View over the Hallstattersee lake and surrounding mountains from the Skywalk Hallstatt observation platform up in the mountains above Hallstatt',

				cc_image_url:
					'https://www.flickr.com/photos/77295011@N06/22063146158/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/77295011@N06/',
				cc_author: 'Reisender1701',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'St. Wolfgang im Salzkammergut',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Salzkammergut-St-Wolfgang-im-Salzkammergut-1.jpg',
				image_alt:
					'Picturesque and iconic view of the buildings of the town of St. Wolfgang im Salzkammergut along the lake near Hallstatt',

				cc_image_url:
					'https://pixabay.com/en/lake-mountains-landscape-place-2769072/',
				cc_author_url: 'https://pixabay.com/en/users/shogun-1310047/',
				cc_author: 'shogun',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Schafberg Mountain (St. Wolfgang)',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Salzkammergut-St-Wolfgang-im-Salzkammergut-Schafberg-Mountain.jpg',
				image_alt:
					'Mountaintop viewpoint overlooking Wolfgangsee and many villages and mountains from atop Schafberg Mountain, which towers above the town of St. Wolfgang',

				cc_image_url:
					'https://www.flickr.com/photos/christophsammer/20841865126/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/christophsammer/',
				cc_author: 'Christoph Sammer',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	salzburg: {
		id: 'salzburg',
		itineraries: '',
		destinationName: 'Salzburg & Werfen',
		stateName: 'Austria',
		region: 'europe',
		anchor_tag: 'salzburg-austria',
		destination_link: '/destinations/austria/salzburg-and-werfen-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/efJdazYTDSF2',
			all_attractions: 'https://goo.gl/maps/qxHRuk7WkD72'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Top Attractions',
				tab_content: `<p>Salzburg is an incredibly beautiful city located in the Austrian Alps which is both the birthplace of Mozart and also the setting for The Sound of Music film. Among Salzburg's top attractions is the Mirabell Palace and its gorgeous manicured gardens, which feature views of the hilltop Hohensalzburg Fortress across the river.</p>
                <p>The massive medieval Hohensalzburg hosts a large variety of interesting exhibits and treasures within an extremely well-preserved 11th century fortress, from which you can also enjoy amazing views over the city while exploring.</p>
                <p>Below the Hohensalzburg Fortress is the stately Residenzplatz plaza, which is surrounded by lovely baroque structures including the Salzburg Cathedral and the lavish Salzburg Residenz palace. This stunning 17th century palace hosts extravagant ornate interiors and priceless fine art, which you can see with a tour.</p>
                <p>Also notable in town are two museums located in former homes of Mozart including the Mozart's Birthplace where the famous composer was born, and the Mozart Wohnhaus Museum where Mozart once lived. On the outskirts of Salzburg is the popular Schloss Hellbrunn, a lavish baroque villa with gardens, a large park, and even a zoo.</p>`
			},
			{
				tab_title: 'Werfen, Austria',
				tab_content: `<p>Just a short 40 minute drive or train ride from Salzburg is the town of Werfen, where you'll find the Hohenwerfen Castle, a stunning medieval rock castle that's extremely well-preserved and surrounded by fortified walls and towers. Werfen is also home to the Eisriesenwelt, which is the largest ice cave in the world. This attractions is extremely popular but also quite time-consuming to visit.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Hohensalzburg Fortress',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Salzburg-Hohensalzburg-Fortress.jpg',
				image_alt:
					'Stunning view of the massive Hohensalzburg hilltop fortified village, which sits high above the baroque buildings of Old Salzburg below, seen behind the river which runs through Salzburg, Austria',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Hohensalzburg-mw02.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Hohensalzburg-mw02.jpg&action=history',
				cc_author: 'Maria Wallner',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC-BY-SA 3.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2',
				cc_license_gnu: 'GNU 1.2'
			},

			{
				attraction: 'Mirabell Palace Gardens',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Salzburg-Mirabell-Palace-and-Gardens.jpg',
				image_alt:
					'Lovely well-manicured gardens of the Mirabell Palace, with view of the hilltop Hohensalzburg Fortress in the background, in Salzburg, Austria',

				cc_image_url: 'https://www.flickr.com/photos/janitors/9468890490/',
				cc_author_url: 'https://www.flickr.com/photos/janitors/',
				cc_author: 'Karlis Dambrans',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Schloss Hellbrunn Palace',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Salzburg-Schloss-Hellbrunn-Castle.jpg',
				image_alt:
					'Yellow exterior of the Schloss Hellbrunn Palace located near Salzburg, Austria',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Schloss_Hellbrunn.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Schloss_Hellbrunn.jpg&action=history',
				cc_author: 'Greymouser',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/at/deed.en',
				cc_license: 'CC BY-SA 3.0 AT'
			},

			{
				attraction: 'Hohenwerfen Castle (Werfen)',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Greater-Salzburg-Werfen-Hohenwerfen-Castle.jpg',
				image_alt:
					'Stunning fortified hilltop castle of Hohenwerfen, which is extremely well fortified and surrounded by dense forests, located in the town of Werfen near Salzburg',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Festung_Hohenwerfen.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/wiki/User:Memorator~commonswiki',
				cc_author: 'Memorator',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.5/legalcode',
				cc_license: 'CC BY-SA 2.5'
			}
		]
	},

	vienna: {
		id: 'vienna',
		itineraries: '',
		destinationName: 'Vienna',
		stateName: 'Austria',
		region: 'europe',
		anchor_tag: 'vienna-austria',
		destination_link: '/destinations/austria/vienna-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/svbgv4Z6rU12',
			all_attractions: 'https://goo.gl/maps/C9v1Kj3D4kp'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Hofburg Palace',
				tab_content: `<p>Austria's capital of Vienna is a magnificent city which hosts many festivals and palaces. In the city center is the vast royal 13th century Hofburg Palace, which sits upon both the grandiose Heldenplatz (Heroes Square) and Michaelerplatz plaza.</p>
                <p>The Hofburg Palace hosts the lavish Imperial Apartments, as well as the Imperial Treasury and the breathtaking Austrian National Library with its majestic grand hall. Also within the palace complex is the Albertina Museum, and adjacent to the palace you can tour the stately Vienna Operahouse.</p>`
			},
			{
				tab_title: 'Churches & Museums',
				tab_content: `<p>Just west of the Hofburg Palace is the Museum of Natural History and the Kunsthistorisches fine art museum, both housed within decadent highly ornate 19th century palaces. Nearby you can admire the towering gothic Rathaus city hall building, as well as the magnificent Burgtheater and the beautiful Votivkirche Church.</p>
                <p>Surrounding the Hofburg Palace are Vienna's most famous churches, including the elegant baroque St. Peter's Catholic Church, and the majestic Karlskirche church with its iconic towering columns and lavish interiors. Vienna's most important church however is the massive 12th century St. Stephen's Cathedral, with its colorful highly intricate patterned tiles and rooftop observation deck.</p>`
			},
			{
				tab_title: 'Palaces & Castles',
				tab_content: `<p>Be sure to also visit Vienna's stunning baroque Belvedere Palace, which consists of two extravagant palaces separated by giant formal gardens. Nearby is the vast Museum of Military History, hosted in a castle-like former arsenal.</p>
                <p>On the outskirts of Vienna is the city's most opulent and impressive palace, the UNESCO listed royal Schoenbrunn Palace, which is comparable to the Palace of Versailles. Surrounding the palace is an expansive garden hosting many fountains, monuments, smaller palaces, vast woodlands, and even the western world's oldest zoo, the Schoenbrunn Zoo.</p>
                <p>The Greater Vienna area hosts several lovely castles, most notably the medieval Kreuzenstein Castle in Leobendorf. Other notable castles just outside Vienna include the Franzensburg Castle and the Castle Liechtenstein.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Hofburg Palace (Michaelerplatz)',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Vienna-Michaelerplatz-Hofburg-Palace.jpg',
				image_alt:
					'Highly embellished brilliant white baroque exterior of the massive Hofburg Palace, seen from Michaelerplatz plaza in Vienna, Austria',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Michaelerplatz_in_Wien.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Dmottl',
				cc_author: 'Dmitry A. Motti',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Karlskirche Church',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Vienna-Karlskirche.jpg',
				image_alt:
					'Grandiose white Karlskirche church with its green dome and massive columns, looking highly photogenic behind a shallow stone pond in Vienna, Austria',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Karlskirche_Wien.jpg&action=history',
				cc_author_url: 'https://www.flickr.com/people/22062275@N00',
				cc_author: 'Patrick Hesse',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Belvedere Palace',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Vienna-Schloss-Belvedere-Palace.jpg',
				image_alt:
					'Sunset at the elegant Belvedere Palace, seen behind an extravagant fountain, in Vienna, Austria',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Belvedere_palace.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Olga1969',
				cc_author: 'Olga1969',

				cc_license_url: 'https://creativecommons.org/licenses/by/4.0/legalcode',
				cc_license: 'CC BY 4.0'
			},

			{
				attraction: 'Kunsthistorisches Museum',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Vienna-Kunsthistorisches-Museum-Exterior.jpg',
				image_alt:
					"Highly ornate exterior of Vienna's Kunsthistorisches Museum at golden hour",

				cc_image_url: 'https://www.flickr.com/photos/christophsammer/20678714500',
				cc_author_url: 'https://www.flickr.com/photos/christophsammer/',
				cc_author: 'Christopher Sammer',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Schönbrunn Palace Gardens',
				image_url:
					'https://www.travelimager.com/images/austria/Austria-Vienna-Schloss-Schoenbrunn-Palace-Gardens.jpg',
				image_alt:
					"Stunning yellow colonnade structure atop a tall grassy hill, with a grandiose monumental fountain in the foreground, part of the Schönbrunn Palace's vast gardens near Vienna",

				cc_image_url: 'https://www.flickr.com/photos/simonmatzinger/13596973143',
				cc_author_url: 'https://www.flickr.com/photos/simonmatzinger/',
				cc_author: 'Simon Matzinger',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	bruges: {
		id: 'bruges',
		itineraries: '',
		destinationName: 'Bruges',
		stateName: 'Belgium',
		region: 'europe',
		anchor_tag: 'bruges-belgium',
		destination_link: '/destinations/belgium/bruges-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/KnauAtvHUqG2',
			all_attractions: 'https://goo.gl/maps/pAtAY5mMdio'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Intro & Canals',
				tab_content: `<p>Bruges is a stunning city with countless medieval structures, best enjoyed by walking around and exploring. The large city center is the historic medieval area of Bruges, consisting of many islands created by many winding canals and rivers.</p>
                <p>A very popular activity in Bruges is to take a small boat ride along the medieval city's canals for a scenic sightseeing tour. Two of Bruges' most gorgeous canal viewpoints include the Brugge Fotoplaats Photo Point and the Wollestraat Bridge, which both overlook elegant medieval buildings along the canals, with the bridge offering picturesque views of the Church of Our Lady of Bruges.</p>`
			},
			{
				tab_title: 'Market Square',
				tab_content: `<p>The most impressive medieval buildings are centered around the the picturesque Markt Market Square which is surrounded by charming and intricate medieval buildings. Towering above the Market Square is the massive Belfry of Bruges tower, which you can climb for incredible city views.</p>
                <p>Near Markt Square you can admire the majestic and highly embellished Bruges City Hall (or Stadsbestuur) and visit the beautiful 850 year old Basilica of the Holy Blood. This famous church houses the Relic of the Precious Blood, a cloth said to be stained with the blood of Jesus Christ.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>To the south of Markt Square is the stunning gothic Church of Our Lady Bruges, which hosts the second largest brickwork tower in the world and a sculpture by Michelangelo. Near the Church you'll find the towering gothic Sint-Salvatorskathedraal church, the lovely stone Bonifacius Bridge, and the popular Groeningemuseum hosting a large collection of Flemish fine art.</p>
                <p>Bruges' Minnewaterpark hosts a wooded parkland alongside rivers and canals, with several medieval structures including a castle set amongst beautiful natural scenery. Near Minnewaterpark is the UNESCO listed Beguinage (or Begijnhuisje), a beautiful 13th century convent complex.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Medieval Canal Buildings',
				image_url:
					'https://www.travelimager.com/images/belgium/Belgium-Bruges-Brugge-Fotoplaats-Bruges-Canal-Photo-Point.jpg',
				image_alt:
					'Famous viewpoint along the canals in Bruges with several rustic medieval buildings along the water and the Belfry of Bruges in the background',

				cc_image_url:
					'https://pixabay.com/en/belfry-tower-bruges-canal-channel-2611575/',
				cc_author_url: 'https://pixabay.com/en/users/pixel2013-2364555/',
				cc_author: 'pixel2013',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Markt (Market Square)',
				image_url:
					'https://www.travelimager.com/images/belgium/Belgium-Bruges-Markt-Market-Square-North-View.jpg',
				image_alt:
					"Beautiful and colorful medieval buildings lined up along Bruges's massive Markt Square",

				cc_image_url: 'https://www.flickr.com/photos/sgerner/24871559029/',
				cc_author_url: 'https://www.flickr.com/photos/sgerner/',
				cc_author: 'Steven Gerner',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Canals & Church of Our Lady of Bruges',
				image_url:
					'https://www.travelimager.com/images/belgium/Belgium-Bruges-Wollestraat-Bridge-Church-of-Our-Lady-of-Bruges-Tower-Viewpoint.jpg',
				image_alt:
					'Night view looking down the still water of a wide canal, seen from the Wollestraat Bridge, with the massive lit up tower of the Church of Our Lady Bruges in the center and its perfect reflection seen in the water',

				cc_image_url: 'https://pixabay.com/en/bruges-belgium-mirroring-1745363/',
				cc_author_url: 'https://pixabay.com/en/users/B_kowsky-2854101/',
				cc_author: 'B_kowsky',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Stadsbestuur Medieval City Hall',
				image_url:
					'https://www.travelimager.com/images/belgium/Belgium-Bruges-De-Burg-Square-Stadsbestuur-Brugge-Bruges-City-Hall-Building.jpg',
				image_alt:
					'Highly embellished castle-like exterior of teh Stadsbestuur Bruges City Hall building',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Bruges_Belgium_Town-hall-of-Brugge-01.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Cccefalon',
				cc_author: 'CEphoto, Uwe Aranas',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Belfry of Bruges',
				image_url:
					'https://www.travelimager.com/images/belgium/Belgium-Bruges-Markt-Market-Square-Belfry-of-Bruges-Tower-1.jpg',
				image_alt:
					'Massive medieval tower of the Belfry of Bruges, located along Markt Square',

				cc_image_url: 'https://www.flickr.com/photos/wolfgangstaudt/2545785034/',
				cc_author_url: 'https://www.flickr.com/photos/wolfgangstaudt/',
				cc_author: 'Wolfgang Staudt',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	brussels: {
		id: 'brussels',
		itineraries: '',
		destinationName: 'Brussels',
		stateName: 'Belgium',
		region: 'europe',
		anchor_tag: 'brussels-belgium',
		destination_link: '/destinations/belgium/brussels-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/t8tWWPaA5rK2',
			all_attractions: 'https://goo.gl/maps/m9bM79VBncR2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Central Brussels',
				tab_content: `<p>The capital city of Belgium is known for its stunning architecture representing various time periods from the medieval era to the neoclassical and present. While in Brussels be sure to indulge in delicious Belgian waffles.</p>
                <p>The UNESCO listed Grand Place Square is the city's most iconic sight and is considered to be one of the finest squares in Europe, surrounded by strikingly elaborate and opulent medieval buildings, many of which are embellished with gold. A bit northeast of Grand Place is the decadent Royal Gallery of Saint Hubert, an elegant 19th century arcade-style shopping mall. Nearby is the St. Michael & St. Gudula Cathedral, a marvelous gothic medieval church.</p>
                <p>Just east of Grand Place is the Mont des Arts (Hill of Arts), a sloped urban complex built around a park and gardens which offers stunning views over the city. Nearby is the grandiose neoclassical Royal Palace of Brussels, an 18th century palace which you can tour in late Summer. The area around the Royal Palace also hosts the Royal Museum of Fine Arts, the Museum of Musical Instruments, and the beautiful Eglise Notre Dame du Sablon, a highly ornate gothic church.</p>`
			},
			{
				tab_title: 'More Top Attractions',
				tab_content: `<p>Among the most iconic and impressive sights in Brussels is the Parc du Cinquantenaire, which hosts a massive Triumphal Arch surrounded by grandiose colonnades. This vast opulent structure hosts the Autoworld museum, the Art & History Museum, and the Royal Museum of the Armed Forces.</p>
                <p>On the outskirts of Brussels is the popular Mini-Europe, a large park containing intricate scaled-down models of many famous European monuments and buildings. Adjacent to the Mini-Europe miniature theme park is the iconic Atomium, a massive stainless steel structure built for the 1958 World Fair. The Atomium is over 330 feet (100 m) tall and represents the structure of an iron crystal.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Grand Place Central Square',
				image_url:
					'https://www.travelimager.com/images/belgium/Belgium-Brussels-Grand-Place-Square-Flower-Carpet.jpg',
				image_alt:
					"Stunning assortment of colorful vast carpets of flower art laid out amongst Brussels's massinve Grand Place Central Square",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Grand_Place_Bruselas.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Grand_Place_Bruselas.jpg&action=history',
				cc_author: 'Francisco Conde Sanchez',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Atomium Sculpture',
				image_url:
					'https://www.travelimager.com/images/belgium/Belgium-Brussels-Atomium-Sculpture.jpg',
				image_alt:
					'Street leading down to the massive Atomium sculpture, a modern monument and iconic sight of Brussels whose size dwarves its surroundings',

				cc_image_url:
					'https://pixabay.com/en/atomium-heysel-park-brussels-959538/',
				cc_author_url: 'https://pixabay.com/en/users/821292-821292/',
				cc_author: '821292',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Parc du Cinquantenaire',
				image_url:
					'https://www.travelimager.com/images/belgium/Belgium-Brussels-Parc-du-Cinquantenaire-Triumphal-Arch.jpg',
				image_alt:
					'Grandiose and massive colonnade structure of the Parc du Cinquantenaire with a triumphal arch at its center, in Brussels',

				cc_image_url:
					'https://pixabay.com/en/belgium-brussels-cinquantenaire-park-3595338/',
				cc_author_url:
					'https://pixabay.com/en/users/dimitrisvetsikas1969-1857980/',
				cc_author: 'dimitrisvetsikas1969',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Mont des Arts',
				image_url:
					'https://www.travelimager.com/images/belgium/Belgium-Brussels-Mont-des-Arts-Park-View.jpg',
				image_alt:
					'View over fine gardens and many historic buildings of Central Brussels seen from the top of the Mont des Arts hill',

				cc_image_url:
					'https://pixabay.com/en/brussels-plaza-city-belgium-hdr-519965/',
				cc_author_url: 'https://pixabay.com/en/users/JoaquinAranoa-292186/',
				cc_author: 'Joaquin Aranoa',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	prague: {
		id: 'prague',
		itineraries: '',
		destinationName: 'Prague',
		stateName: 'Czech Republic',
		region: 'europe',
		anchor_tag: 'prague-czech-republic',
		destination_link: '/destinations/czech-republic/prague-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/1DjAex2zzZ52',
			all_attractions: 'https://goo.gl/maps/tEpxDYSVaz62'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Old Town',
				tab_content: `<p>Prague is a stunning Bohemian city and the capital of the Czech Republic, full of beautiful and historic Gothic, Renaissance, and Baroque style buildings.</p>
                <p>It's very scenic to walk amongst the many historical structures of Prague's Old Town, especially around the Old Town Square. This square hosts the famous medieval Prague Astronomical Clock, as well as the imposing 14th century gothic Church of Our Lady before Tyn and the lavish baroque St. Nicholas' Church. Be sure to climb to the top of the clock tower for fantastic views over the Old Town.</p>
                <p>Near the Old Town Square you can tour the elegant baroque Klementium Library which is famous for its gorgeous and highly ornate interior. Other highly recommended attractions in Old Town Prague include the stunning Powder Tower (a massive medieval city gate), and the extravagant intricately decorated Spanish Synagogue.</p>`
			},
			{
				tab_title: 'Prague Castle',
				tab_content: `<p>From the Old Town you can cross the city's Vltava River via the picturesque 14th century Charles Bridge to reach the Prague Castle Complex. This vast castle hosts the striking gothic St. Vitus Cathedral, the lovely 10th century St. George's Basilica, the lavish Old Royal Palace, and the grandiose Lobkowicz Palace Museum art.</p>
                <p>Additionally you can explore the many historically decorated medieval houses of the Golden Lane and enjoy amazing views above Prague from the hilltop castle complex.</p>`
			},
			{
				tab_title: 'Mala Strana',
				tab_content: `<p>Below the Prague Castle is the extremely scenic Mala Strana (Lesser Town) neighborhood, which hosts many palaces and baroque structures. Just below Prague Castle you can admire the elegant Waldstein Palace and the lovely adjacent Wallenstein Garden which hosts peacocks and owls. Mala Strana also hosts the baroque St. Nicholas Church with its highly embellished interiors.</p>
                <p>Be sure to walk around and explore Mala Strana and its streets, which are lined with countless colorful and elegant baroque palaces that make up Prague's Royal Route. On the western side of the river the Charles Bridge becomes Mostecka Street, which is lined with many beautiful baroque structures as well as the striking medieval Lesser Town Bridge Tower.</p>
                <p>Other scenic streets associated with the Royal Route in Mala Strana that you should walk along include Misenska and Mostecka near the Lesser Town Bridge Tower, as well as Trziste, Nerudova, and Karmelitska near the St. Nicholas Church.</p>
                <p>Additionally be sure to visit Mala Strana's Kampa Island, which sits along the river hosting wondrous views of the Old Town across the river.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>To the west of Prague Castle you'll find several more popular attractions, including the Strahov Monastery which features another incredibly beautiful and elaborate library, as well as a treasury and observation deck overlooking Prague. Nearby is the Loreta Complex, a popular pilgrimage site which hosts a baroque church and the highly intricate Holy Hut structure.</p>
                <p>Just south of Prague's Old Town along the river is the majestic National Theatre, which you can tour to see its decadent interiors. Further south along the river is an iconic architectural masterpiece designed by Frank Gehry, known as the Dancing House. Even further south along the river is a larger fortified hilltop complex known as Vysehrad, where you can admire a medieval church and enjoy exceptional views over Prague.</p>
                <p>On the norther outskirts of Prague is the famous Prague Zoo, which is recognized as one of the top 10 zoos in the world and houses many rare and endangered animal special. Adjacent to the zoo is the magnificent Trojsky Zamek (Troja Palace), a baroque 17th century palace loosely modeled after a Roman villa, which hosts a stunningly intricate fresco-covered interior and is surrounded by large formal gardens.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Old Town Square',
				image_url:
					'https://www.travelimager.com/images/czech-republic/Czechia-Czech-Republic-Prague-Old-Town-Square.jpg',
				image_alt:
					"Colorful baroque buildings and the Church of Our Lady Before Tyn lining the vast pedestrian Old Town Square at the center of Prague's Old Town",

				cc_image_url:
					'https://pixabay.com/photos/square-prague-hdr-city-3698563/',
				cc_author_url: 'https://pixabay.com/users/skitterphoto-324082/',
				cc_author: 'Skitterphoto',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Charles Bridge & Prague Castle',
				image_url:
					'https://www.travelimager.com/images/czech-republic/Czechia-Czech-Republic-Prague-Charles-Bridge-and-Prague-Castle-Aerial-View.jpg',
				image_alt:
					'Sunset aerial view overlooking the Charles Bridge walkway with the hilltop Prague Castle in the background in Prague, Czech Republic',

				cc_image_url:
					'https://pixabay.com/photos/prague-architecture-bridge-1845560/',
				cc_author_url: 'https://pixabay.com/users/pexels-2286921/',
				cc_author: 'Pexels',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Dancing House',
				image_url:
					'https://www.travelimager.com/images/czech-republic/Czechia-Czech-Republic-Prague-Frank-Gehry-Dancing-House-1.jpg',
				image_alt:
					"Frank Gehry's eccentric modern masterpiece, the Dancing House, in Prague, Czech Republic",

				cc_image_url:
					'https://www.flickr.com/photos/rmonty119/27346279814/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/rmonty119/',
				cc_author: 'Robert Montgomery',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Prague Castle (Winter Night)',
				image_url:
					'https://www.travelimager.com/images/czech-republic/Czechia-Czech-Republic-Prague-Prague-Castle-Complex-Winter-Night.jpg',
				image_alt:
					'Night time view of a snowy winter with the lit up Prague Castle complex behind the Charles Bridge, seen from across the river',

				cc_image_url:
					'https://pixabay.com/photos/prague-praha-winter-night-3010407/',
				cc_author_url: 'https://pixabay.com/users/julius_silver-4371822/',
				cc_author: 'Julius_Silver',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	bath: {
		id: 'bath',
		itineraries: '',
		destinationName: 'Bath',
		stateName: 'England',
		region: 'europe',
		anchor_tag: 'bath-england',
		destination_link: '/destinations/england/bath-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/orMTsd7DZNR2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Bath Attractions',
				tab_content: `<p>Bath is an ancient city known for its Roman bath complexes and stunning Georgian architecture that is also listed as a UNESCO world heritage site. The city's most popular attraction is The Roman Baths, a well-preserved ancient bath complex that also includes a Roman temple and museum. Next door is the imposing Bath Abbey, a gothic church with a very ornate exterior.</p>
                <p>One of the most popular modern baths is the Thermae Bath Spa, with several impressive pools and its famed balcony pool overlooking the city. Nearby you can also enjoy the riverfront Parade Gardens and view the marvelous shop-lined Pulteney Bridge. Adjacent to the bridge is the beautiful waterfall-like Pulteney Weir of the River Avon, which is best viewed from the eastern side of the river, set amongst a gorgeous Roman-style colonnade which lines the western side of the river.</p>
                <p>On the northern side of the city, you'll find several interesting curved structures, including the Royal Crescent and the Circus.</p>`
			},
			{
				tab_title: 'Castle Combe Village',
				tab_content: `<p>Another sight to consider is the picturesque Cotswolds village of Castle Combe, with its charming rustic English homes that line its main street and a small river that runs through town. Castle Combe is located about 1 hour north of Bath via public transportation.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Pulteney Bridge',
				image_url:
					'https://www.travelimager.com/images/england/England-Bath-Pulteney-Bridge.jpg',
				image_alt:
					'Stunning view of the old Pulteney Bridge spanning the river running through Bath, England with the Pulteney Weir in the foreground',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Puente_Pulteney,_Bath,_Inglaterra,_2014-08-12,_DD_51.JPG&action=history',
				cc_author_url: 'http://delso.photo/',
				cc_author: 'Diego Delso',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Parade Gardens',
				image_url:
					'https://www.travelimager.com/images/england/England-Bath-Parade-Gardens-1.jpg',
				image_alt:
					'Beautiful grassy field surrounded by historic structures of the Parade Gardens in Bath, England',

				cc_image_url: 'https://www.flickr.com/photos/jmenard48/2399718776/',
				cc_author_url: 'https://www.flickr.com/photos/jmenard48/',
				cc_author: 'John Menard',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'The Roman Baths Complex',
				image_url:
					'https://www.travelimager.com/images/england/England-Bath-The-Roman-Baths-Complex.jpg',
				image_alt:
					'Ancient Roman bath surroudned by columns, part of the ancient bath complex of Bath, England',

				cc_image_url: 'https://www.flickr.com/photos/dgoomany/9514210171/',
				cc_author_url: 'https://www.flickr.com/photos/dgoomany/',
				cc_author: 'Dineshraj Goomany',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Castle Combe Village',
				image_url:
					'https://www.travelimager.com/images/england/England-Wiltshire-Castle-Combe-Village.jpg',
				image_alt:
					'Beautiful rustic homes along a country road in the Cotswold village of Castle Combe in England near Bath',

				cc_image_url: 'https://www.flickr.com/photos/jmenard48/364932291/',
				cc_author_url: 'https://www.flickr.com/photos/jmenard48/',
				cc_author: 'John Menard',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	cambridge: {
		id: 'cambridge',
		itineraries: '',
		destinationName: 'Cambridge',
		stateName: 'England',
		region: 'europe',
		anchor_tag: 'cambridge-england',
		destination_link: '/destinations/england/cambridge-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/3REJXM6gMpH2',
			all_attractions: 'https://goo.gl/maps/JDAaJggi3Ls'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: "King's College Chapel",
				image_url:
					'https://www.travelimager.com/images/england/England-Cambridge-Kings-College-Chapel.jpg',
				image_alt:
					"Stunning castle-like King's College Chapel at sunset, part of Cambridge University",

				cc_image_url: 'https://www.flickr.com/photos/mtl_shag/2513910013/',
				cc_author_url: 'https://www.flickr.com/photos/mtl_shag/',
				cc_author: 'Oliver Mallich',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Bridge of Sighs',
				image_url:
					'https://www.travelimager.com/images/england/England-Cambridge-Bridge-of-Sighs.jpg',
				image_alt:
					'Paddleboat in front of the iconic Bridge of Sighs, a covered bridge connecting buildings above a river at Cambridge University',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Cambridge_-_Bridge_of_Sighs.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/wiki/User:Jean-Christophe_BENOIST',
				cc_author: 'Jean-Christophe Benoist',

				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0'
			},

			{
				attraction: 'Trinity College Great Court',
				image_url:
					'https://www.travelimager.com/images/england/England-Cambridge-Trinity-College-Great-Court.jpg',
				image_alt:
					'Cambridge University buildings of Trinity College surrounding the Great Court',

				cc_image_url:
					'https://www.flickr.com/photos/godhelm/21485662382/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/godhelm/',
				cc_author: 'Richard August',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Ely Cathedral (Ely)',
				image_url:
					'https://www.travelimager.com/images/england/England-Greater-Cambridge-Ely-Ely-Cathedral.jpg',
				image_alt: 'Elaborate 900 year-old Ely Cathedral near Cambridge, England',

				cc_image_url: 'https://www.flickr.com/photos/hunky_punk/7706770078/',
				cc_author_url: 'https://www.flickr.com/photos/hunky_punk/',
				cc_author: 'Spencer Means',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Wimpole Hall Estate (Arrington)',
				image_url:
					'https://www.travelimager.com/images/england/England-Greater-Cambridge-Arrington-Wimpole-Hall-Estate.jpg',
				image_alt:
					'Beautiful brick exterior of the 17th century Wimpole Hall Estate in Arrington near Cambridge',

				cc_image_url: 'https://www.flickr.com/photos/24874528@N04/28623823881/',
				cc_author_url: 'https://www.flickr.com/photos/24874528@N04/',
				cc_author: 'Airwolfhound',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	cotswolds: {
		id: 'cotswolds',
		itineraries: '',
		destinationName: 'Cotswolds',
		stateName: 'England',
		region: 'europe',
		anchor_tag: 'cotswolds-england',
		destination_link: '/destinations/england/cotswolds-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/UDxptt3ZwhJ2',
			all_attractions: 'https://goo.gl/maps/LrJ6J995xpG2'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Arlington Row (Bilbury)',
				image_url:
					'https://www.travelimager.com/images/england/England-Cotswolds-Bilbury-Arlington-Row.jpg',
				image_alt:
					'Iconic Arlington Row of country homes along the road at Bilbury, a small Cotswolds village',

				cc_image_url:
					'https://www.flickr.com/photos/wildlife_encounters/15143014488/',
				cc_author_url: 'https://www.flickr.com/photos/wildlife_encounters/',
				cc_author: 'Steve Slater',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'High Street Bridge (Bourton-on-the-Water)',
				image_url:
					'https://www.travelimager.com/images/england/England-Cotswolds-Bourton-on-the-Water-High-Street-Bridge-and-Homes.jpg',
				image_alt:
					'Lovely little stone bridge spanning the river near High Street with townhomes in background in the Cotswolds town of Bourton-on-the-Water',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Bourton_on_the_water.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Bourton_on_the_water.jpg&action=history',
				cc_author: 'Pieter wts wikivoyage',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'The Hill Street (Burford)',
				image_url:
					'https://www.travelimager.com/images/england/England-Cotswolds-Burford-The-Hill-Street-Sidewalk.jpg',
				image_alt:
					'View of the lovely townhomes along Hill Street seen from the sidewalk in the Cotswolds town of Burford',

				cc_image_url: 'https://www.flickr.com/photos/david_e_smith/6493240281/',
				cc_author_url: 'https://www.flickr.com/photos/david_e_smith/',
				cc_author: 'Dave_S.',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Hidcote Manor & Gardens',
				image_url:
					'https://www.travelimager.com/images/england/England-Cotswolds-Hidcote-Bartrim-Hidcote-Manor-and-Gardens.jpg',
				image_alt:
					'Lovely rustic Hidcote Manor house with overgrown greenery in the Cotswolds countryside',

				cc_image_url: 'http://www.geograph.org.uk/photo/3547560',
				cc_author_url: 'https://www.flickr.com/photos/davedixonphotos/',
				cc_author: 'David Dixon',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Lower Slaughter Village',
				image_url:
					'https://www.travelimager.com/images/england/England-Cotswolds-Lower-Slaughter-Bridge.jpg',
				image_alt:
					'Quaint bridge and lovely river with a swimming duck and old homes in the Cotswolds village of Lower Slaughter',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Lower_Slaughter_Bridge.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Saffron_Blaze',
				cc_author: 'Saffron Blaze',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC-BY-SA 3.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2',
				cc_license_gnu: 'GNU 1.2'
			},

			{
				attraction: 'Sudeley Castle',
				image_url:
					'https://www.travelimager.com/images/england/England-Cotswolds-Winchcombe-Sudeley-Castle.jpg',
				image_alt:
					'Small Sudeley Castle hidden behind its green gardens and hedges near Winchcombe, England',

				cc_image_url:
					'https://www.flickr.com/photos/gordon_robertson/5627973981/',
				cc_author_url: 'https://www.flickr.com/photos/gordon_robertson/',
				cc_author: 'Gordon Robertson',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	kent_dover: {
		id: 'kent_dover',
		itineraries: '',
		destinationName: 'Kent & Dover',
		stateName: 'England',
		region: 'europe',
		anchor_tag: 'kent-england',
		destination_link: '/destinations/england/kent-and-dover-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/hKGdCJkbKKF2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Kent',
				tab_content: `<p>Near the most southeastern point of England are several amazing attractions including stunning castles and cathedrals, as well as the White Cliffs of Dover. Several day-trip tours from London are available that combine many of these sights. Otherwise you might choose to see a few of these attractions on your own day-trip from London via rail.</p>`
			},
			{
				tab_title: 'Rochester',
				tab_content: `<p>Closest to London is Rochester, which hosts the imposing Romanesque Rochester Cathedral and the medieval Rochester Castle, an impressive 11th century riverside fortification.</p>`
			},
			{
				tab_title: 'Leeds & Canterbury',
				tab_content: `<p>A bit further southeast is the majestic Leeds Castle, one of the most popular castles to visit in England. This gorgeous structure sits atop an island on a small lake and contains lavish interiors.</p>
                <p>Further east you might visit the magnificent 950 year-old Canterbury Cathedral, an ornate medieval cathedral that has been designated as a UNESCO world heritage site.</p>`
			},
			{
				tab_title: 'Dover',
				tab_content: `<p>Furthest from London is the city of Dover, which is home to the massive Dover Castle, an important medieval stone fortress built in the 12th century. This well-preserved structure is the largest castle in England but is only open on certain days of the week.</p>
                <p>Nearby the Dover Castle are the famous White Cliffs of Dover, a breathtaking series of steep cliffs made of white chalk, which you can walk along while enjoying stunning views over the sea. It's also possible to take a boat tour in order to see these towering cliffs from below.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Leeds Castle',
				image_url:
					'https://www.travelimager.com/images/england/England-Southeastern-England-Kent-Maidstone-Leeds-Castle.jpg',
				image_alt:
					'Aerial view of the medieval Leeds Castle surrounded by a large pond in Maidstone, Kent, England',

				cc_image_url: 'https://www.flickr.com/photos/sugarmonster/5792680987',
				cc_author_url: 'https://www.flickr.com/photos/sugarmonster/',
				cc_author: 'Marc Evans',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'White Cliffs of Dover',
				image_url:
					'https://www.travelimager.com/images/england/England-Southeastern-England-Kent-Dover-White-Cliffs-of-Dover.jpg',
				image_alt:
					'Side-view of the iconic White Cliffs of Dover seen from atop the green grassy cliffs in Dover, Kent, England',

				cc_image_url:
					'https://pixabay.com/en/white-cliffs-cliffs-dover-sea-123476/',
				cc_author_url: 'https://pixabay.com/en/users/loggawiggler-15/',
				cc_author: 'LoggaWiggler',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Rochester Castle',
				image_url:
					'https://www.travelimager.com/images/england/England-Southeastern-England-Kent-Medway-Rochester-Rochester-Castle.jpg',
				image_alt:
					'Imposing exterior of the medieval Rochester Castke in Rochester, England',

				cc_image_url: 'https://www.flickr.com/photos/locosteve/6906948172',
				cc_author_url: 'https://www.flickr.com/photos/locosteve/',
				cc_author: 'Loco Steve',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Canterbury Cathedral',
				image_url:
					'https://www.travelimager.com/images/england/England-Southeastern-England-Kent-Canterbury-Canterbury-Cathedral.jpg',
				image_alt:
					'Aerial view of the vast Canterbury Cathedral of Canterbury, Kent, England',

				cc_image_url: 'https://www.flickr.com/photos/john_fielding/8636098050/',
				cc_author_url: 'https://www.flickr.com/photos/john_fielding/',
				cc_author: 'John Fielding',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Dover Castle',
				image_url:
					'https://www.travelimager.com/images/england/England-Southeastern-England-Kent-Dover-Dover-Castle-Aerial.jpg',
				image_alt:
					'Aerial view over the imposing fortress of Dover Castle along the coast in Dover, Kent, England',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Dover_Castle_aerial_view.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Lieven_Smits',
				cc_author: 'Lieven Smits',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	london: {
		id: 'london',
		itineraries: '',
		destinationName: 'London',
		stateName: 'England',
		region: 'europe',
		anchor_tag: 'london-england',
		destination_link: '/destinations/england/london-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/wAYbx8qKLpC2',
			all_attractions: 'https://goo.gl/maps/6DjJLAbN2bm'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Iconic Attractions',
				tab_content: `<p>London is a massive urban metropolis with thousands of years of history and countless things to do. The city is also known for its extremely diverse cuisine offerings from around the world, which includes an amazing variety of street food as well.</p>
                <p>You'll find many of London's most iconic sights in the Westminster neighborhood, including the Big Ben clock tower, the breathtaking Palace of Westminster, and the royal Buckingham Palace where you can witness the changing of the guard. Be sure to also visit the magnificent 900 year-old Westminster Abbey, which hosts the tombs of Charles Darwin, Isaac Newton, Charles Dickens, and more. Just across the River Thames from Big Ben is the famous London Eye Ferris Wheel, which offers stunning views high above the city.</p>
                <p>In the City of London neighborhood you'll find the famous riverfront Tower of London, a royal fortress and castle with an extensive 900 year-old history. Here you'll find many exhibitions and rooms to explore, including the priceless Crown Jewels collection.</p>
                <p>Adjacent to the Tower of London is the iconic Tower Bridge, which hosts a transparent glass floor you can walk along suspended between the bridge's towers. This area also hosts the Leadenhall Market, which was used portrayed as Diagon Alley in the Harry Potter films, as well as the colossal and extravagant St. Paul's Cathedral, which offers amazing views from the top. Just across the river is the tallest building in the European Union, the London Shard, which hosts incredible views over the city.</p>`
			},
			{
				tab_title: 'Museums',
				tab_content: `<p>London is also home to some of the best museums in the world, many of which are free to enter. The most notable of these free museums are the British Museum (which houses priceless treasures from around the world), the Victoria & Albert Museum (the world's largest decorative arts museum), the National Gallery (a fine art museum which sits on the iconic Trafalgar Square), and the Tate Museum of modern art.</p>
                <p>Additional major free museums include the Museum of Natural History, the Imperial War Museum, the Science Museum, and the British Library, which hosts a copy of the Magna Carta and original hand-written scores and lyrics by Mozart, Beethoven, and the Beatles.</p>
                <p>Be sure to also visit the gorgeous Hyde Park (near the Victoria & Albert Museum), a massive urban park where many famous historical figures once walked. The park also hosts the posh royal Kensington Palace.</p>`
			},
			{
				tab_title: 'Greater London',
				tab_content: `<p>If you're visiting London you should strongly consider visiting the 11th century Windsor Castle, a vast royal residence with ultra-lavish interiors located west of London. Also popular just outside London is the Warner Bros. Studio Tour London, where Harry Potter Fans can tour many of the sets used in the movie series and view important props from the films.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Big Ben & Westminster Palace',
				image_url:
					'https://www.travelimager.com/images/england/England-London-Big-Ben.jpg',
				image_alt:
					'Big Ben towering above the street with the Palace of Westmisnter behind it in London, England',

				cc_image_url: 'https://www.flickr.com/photos/kurt-b/8037548736/',
				cc_author_url: 'https://www.flickr.com/photos/kurt-b/',
				cc_author: 'Kurt Bauschardt',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Tower of London Castle',
				image_url:
					'https://www.travelimager.com/images/england/England-London-Tower-of-London-Castle.jpg',
				image_alt:
					'Vast Tower of London castle surrounded by its imposing medieval walls seen from above in London, England',

				cc_image_url: 'https://www.flickr.com/photos/duncanh1/8515883950/',
				cc_author_url: 'https://www.flickr.com/photos/duncanh1/',
				cc_author: 'Dun.can',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'London Shard Skyscraper',
				image_url:
					'https://www.travelimager.com/images/england/England-London-The-Shard-Tower.jpg',
				image_alt:
					'View of the London Shard skyscraper surrounded by other modern buildings, seen from across the Thames River in London, England',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:The_Shard,_11_Novembre_2012_(tone).jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Keraunoscopia',
				cc_author: 'Keraunoscopia',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Tower Bridge',
				image_url:
					'https://www.travelimager.com/images/england/England-London-Tower-Bridge.jpg',
				image_alt:
					'Iconic Tower Bridge seen from the river side in London, England',

				cc_image_url: 'https://www.flickr.com/photos/gianlucaponti/16039522147/',
				cc_author_url: 'https://www.flickr.com/photos/gianlucaponti/',
				cc_author: 'Gian Luca Ponti',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Westminster Abbey',
				image_url:
					'https://www.travelimager.com/images/england/England-London-Westminster-Abbey.jpg',
				image_alt:
					'Towering Westminster Abbey and its intricately designed facade in London, England',

				cc_image_url: 'https://www.flickr.com/photos/64352026@N02/8830926880/',
				cc_author_url: 'https://www.flickr.com/photos/64352026@N02/',
				cc_author: 'EOTours',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: "Millenium Bridge & St. Paul's Cathedral",
				image_url:
					'https://www.travelimager.com/images/england/England-London-Millenium-Bridge.jpg',
				image_alt:
					"Stunning view of the Millenium Bridge lit up at night, seen from below, with St. Paul's Cathedral towering in the background",

				cc_image_url: 'https://www.flickr.com/photos/benjamingillet/16484823825',
				cc_author_url: 'https://www.flickr.com/photos/benjamingillet/',
				cc_author: 'Benjamin Gillet',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Leadenhall Market',
				image_url:
					'https://www.travelimager.com/images/england/England-London-Leadenhall-Market.jpg',
				image_alt:
					'Vibrant and intricate Leadenhall Market, which was portrayed as Diagon Alley in Harry Potter',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Leadenhall_Market_In_London_-_Feb_2006_rotated.jpg&action=history',
				cc_author_url: 'https://en.wikipedia.org/wiki/User:Diliff',
				cc_author: 'David Iliff',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC-BY-SA 3.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2',
				cc_license_gnu: 'GNU 1.2'
			},

			{
				attraction: 'Windsor Castle',
				image_url:
					'https://www.travelimager.com/images/england/England-Greater-London-Windsor-Windsor-Castle.jpg',
				image_alt:
					'Aerial view of the vast Windsor Castle and its gardens outside of London, England',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Windsor_Castle_-_panoramio_(11).jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Windsor_Castle_-_panoramio_(11).jpg&action=history',
				cc_author: 'Heikki Immonen',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	oxford: {
		id: 'oxford',
		itineraries: '',
		destinationName: 'Oxford',
		stateName: 'England',
		region: 'europe',
		anchor_tag: 'oxford-england',
		destination_link: '/destinations/england/oxford-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/2FVp2rPdtDn'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Oxford Attractions',
				tab_content: `<p>Oxford is known for its elegant University of Oxford, the second oldest university in the world, as well as the city's many impressive buildings, which are best admired by walking around and exploring the city center, especially via a free walking tour. Among the university's most famous features is the historic Bodleian Library, which is the second largest library in the UK and hosts incredibly gorgeous finely detailed interiors.</p>
                <p>Nearby the Bodleian Library is the iconic Radcliffe Camera building, as well as the towering 13th century gothic University Church of St.Mary the Virgin, which is quite beautiful. On the southern side of the university you'll find the mesmerizing Tom Tower, as well as the remarkable Christ Church Cathedral. Both of these structures showcase fantastic medieval architecture.</p>
                <p>In the center of Oxford you can admire the 12th century Carfax Tower, a bell tower which you can climb for outstanding views over the city. Oxford also hosts excellent museums, including the Oxford University Museum of Natural History, and the Ashmolean Museum featuring many artifacts and sculptures in a grand neoclassical building. Also noteworthy in town is the lovely 18th century Covered Market and the partially-ruined medieval Oxford Castle.</p>`
			},
			{
				tab_title: 'Waddesdon Manor',
				tab_content: `<p>Nearby Oxford is the beautiful Waddesdon Manor, a stunning Renaissance palace which bears resemblance to the chateaus of France's Loire Valley. This incredible estate features extravagant interiors and lovely gardens. Waddesdon Manor is about 40 minutes from Oxford by car, or 2-2.5 hours via public transportation.</p>`
			}
		],
		attractions: [
			{
				attraction: 'University Church St. Mary the Virgin',
				image_url:
					'https://www.travelimager.com/images/england/England-Oxford-University-Church-of-St-Mary-the-Virgin.jpg',
				image_alt:
					'Giant tower of the University Church of St. Mary the Virgin at Oxford University',

				cc_image_url: 'https://www.flickr.com/photos/hrathmann/37545614281/',
				cc_author_url: 'https://www.flickr.com/photos/hrathmann/',
				cc_author: 'Hanno Rathmann',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Bodleian Library',
				image_url:
					'https://www.travelimager.com/images/england/England-Oxford-Bodleian-Library.jpg',
				image_alt:
					'Multi-level historic bookshelves spanning long corridors within the Bodelian Library of Oxford University',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Duke_Humfrey%27s_Library_Interior_5,_Bodleian_Library,_Oxford,_UK_-_Diliff.jpg&action=history',
				cc_author_url: 'https://en.wikipedia.org/wiki/User:Diliff',
				cc_author: 'David Iliff',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Radcliffe Camera',
				image_url:
					'https://www.travelimager.com/images/england/England-Oxford-Radcliffe-Camera.jpg',
				image_alt:
					'Exterior of the impressive rounded Radclfife Camera building at Oxford University',

				cc_image_url: 'https://www.flickr.com/photos/levettday/31957874423/',
				cc_author_url: 'https://www.flickr.com/photos/levettday/',
				cc_author: 'Alison Day',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Tom Tower',
				image_url:
					'https://www.travelimager.com/images/england/England-Oxford-Tom-Tower.jpg',
				image_alt:
					'Famous Tom Tower building and part of the campus of Oxford University',

				cc_image_url:
					'https://www.flickr.com/photos/nothingpersonal/36286499483/',
				cc_author_url: 'https://www.flickr.com/photos/nothingpersonal/',
				cc_author: 'Dmitry Dzhus',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Waddesdon Manor',
				image_url:
					'https://www.travelimager.com/images/england/England-Buckinghamshire-Waddesdon-Waddesdon-Manor.jpg',
				image_alt:
					'Gorgeous castle-like Waddesdon Manor with an extravagant monumental fountain in front of it, in Waddesdon, Buckinghamshire, England',

				cc_image_url:
					'https://www.flickr.com/photos/pikerslanefarm/2952143805/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/pikerslanefarm/',
				cc_author: 'Amanda Slater',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	stonehenge: {
		id: 'stonehenge',
		itineraries: '',
		destinationName: 'Stonehenge & Salisbury',
		stateName: 'England',
		region: 'europe',
		anchor_tag: 'stonehenge-england',
		destination_link:
			'/destinations/england/stonehenge-and-salisbury-attractions-guide',
		attractionMapLinks: {
			custom_attractions_1: 'https://goo.gl/maps/w1g5CQjkvq72',
			custom_attractions_1_text: 'Top Attractions (Train)',
			custom_attractions_2: 'https://goo.gl/maps/X8kmZ7MDWZ42',
			custom_attractions_2_text: 'Top Attractions (Car)'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Salisbury',
				tab_content: `<p>Note that it's possible to visit Stonehenge (along with Salisbury) via an inexpensive tour directly from London or Bath. Alternatively you might choose to visit the site via public transportation and include a few more sights along the way.</p>
                <p>Salisbury is home to the impressive Salisbury Cathedral, which houses the best surviving copy of the Magna Carta document, a very important historical document. You'll also find a beautiful ornate cloister here, which is the largest in England. Salisbury also hosts the Salisbury Museum, displaying archaeological finds from Stonehenge.</p>`
			},
			{
				tab_title: 'Stonehenge',
				tab_content: `<p>From Salisbury you can take a short bus ride to the mystical 5,000 year old Stonehenge. Only during the Summer Solstice Festival in mid-June can you get up close to the stones and walk amongst them, otherwise you can still admire these massive stones from approximately 100 feet (30 m) away. Also of interest near Salisbury is the Old Sarum site, the remains of a 2,400 year old hilltop fortress from the Iron Age.</p>`
			},
			{
				tab_title: 'Winchester',
				tab_content: `<p>After experiencing Stonehenge and Salisbury, you might consider visiting the city of Winchester, which is home to the magnificent 11th century Winchester Cathedral. This gothic church is one of the largest cathedrals in all of Europe, hosts the tomb of Jane Austen, and was one of the filming locations for the Da Vinci Code movie. Also in Winchester is the Great Hall, a medieval structure containing the alleged Round Table of the legendary King Arthur.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Stonehenge',
				image_url:
					'https://www.travelimager.com/images/england/England-Wiltshire-Salisbury-Amesbury-Stonehenge-Sun-Shining-through-Clouds.jpg',
				image_alt:
					'Stunning cloudy day view of the ancient Stonehenge, a wonder of the world, located in Amesbury, England',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Stonehenge,Amesbury,_Wiltshire.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Stonehenge,Amesbury,_Wiltshire.jpg&action=history',
				cc_author: 'Udit Kapoor',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Salisbury Cathedral (Magna Carta)',
				image_url:
					'https://www.travelimager.com/images/england/England-Wiltshire-Salisbury-Salisbury-Cathedral.jpg',
				image_alt:
					'Towering exterior of the historic Salisbury Cathedral, which houses a copy of the Magna Carta',

				cc_image_url: 'https://www.flickr.com/photos/8411024@N08/26987845298/',
				cc_author_url: 'https://www.flickr.com/photos/8411024@N08/',
				cc_author: 'Tony Buckley',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Winchester Cathedral',
				image_url:
					'https://www.travelimager.com/images/england/England-Hampshire-Winchester-Winchester-Cathedral.jpg',
				image_alt:
					'Stunning facade of the grand Winchester Cathedral in Winchester, England',

				cc_image_url:
					'https://www.maxpixel.net/Cathedral-Winchester-Historic-Britain-Sky-England-723474',
				cc_author_url: 'https://www.maxpixel.net/',
				cc_author: 'Max Pixel',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Avebury Stone Circle',
				image_url:
					'https://www.travelimager.com/images/england/England-Wiltshire-Malborough-Avebury-Stone-Circle.jpg',
				image_alt:
					'Close-up view of several of the up-right standing stones of the massive Avebury Stone Circle in Wiltshire, England',

				cc_image_url: 'https://www.flickr.com/photos/gordon_robertson/5620659988',
				cc_author_url: 'https://www.flickr.com/photos/gordon_robertson/',
				cc_author: 'Gordon Robertson',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Old Sarum Ruins',
				image_url:
					'https://www.travelimager.com/images/england/England-Wiltshire-Salisbury-Old-Sarum.jpg',
				image_alt:
					'Aerial view of the Old Sarum ancient henge ruins in Salisbury, England near Stonehenge',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Aerial_photograph_of_Old_Sarum_site,_on_departure_from_Old_Sarum_airfield.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Aerial_photograph_of_Old_Sarum_site,_on_departure_from_Old_Sarum_airfield.jpg&action=history',
				cc_author: 'Mark Edwards',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			}
		]
	},

	stratford: {
		id: 'stratford',
		itineraries: '',
		destinationName: 'Stratford-upon-Avon',
		stateName: 'England',
		region: 'europe',
		anchor_tag: 'stratford-upon-avon-england',
		destination_link: '/destinations/england/stratford-upon-avon-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/63N3mK3CY192'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: "Shakespeare's Birthplace",
				image_url:
					'https://www.travelimager.com/images/england/England-Stratford-upon-Avon-Shakespeares-Birthplace.jpg',
				image_alt:
					'Half-timbered home in which William Shakespeare was born in Stratford-upon-Avon, England',

				cc_image_url: 'https://www.flickr.com/photos/ell-r-brown/3639951854/',
				cc_author_url: 'https://www.flickr.com/photos/ell-r-brown/',
				cc_author: 'Elliott Brown',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: "Holy Trinity Church (Shakespeare's Tomb)",
				image_url:
					'https://www.travelimager.com/images/england/England-Stratford-upon-Avon-Church-of-the-Holy-Trinity.jpg',
				image_alt:
					'Impressive medieval Holy Trinity Church with its tall spired topped tower in Stratford-upon-Avon',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Stratford-upon-Avon,_Church_of_the_Holy_Trinity_01.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Stratford-upon-Avon,_Church_of_the_Holy_Trinity_01.jpg&action=history',
				cc_author: 'Palickap',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: "Anne Hathaway's Cottage",
				image_url:
					'https://www.travelimager.com/images/england/England-Stratford-upon-Avon-Anne-Hathaways-Cottage.jpg',
				image_alt:
					"Thatched roof half-timbered house in which William Shakespeare's wife grew up, located in Stratford-upon-Avon",

				cc_image_url:
					'https://www.flickr.com/photos/informationtakesover/7221692868/',
				cc_author_url: 'https://www.flickr.com/photos/informationtakesover/',
				cc_author: 'Tim Hodson',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: "Mary Arden's Farm",
				image_url:
					'https://www.travelimager.com/images/england/England-Stratford-upon-Avon-Mary-Ardens-Farm.jpg',
				image_alt:
					'Lovely half-timbered home belonging to the step-mother of William Shakespeare in Wilmcote, England',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Mary-Arden-s-01.JPG&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Immanuel_Giel',
				cc_author: 'Immanuel Giel',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Charlecote Park',
				image_url:
					'https://www.travelimager.com/images/england/England-Stratford-upon-Avon-Charlecote-Park.jpg',
				image_alt:
					'16th century Charlecote Park estate and gardens near Stratford-upon-Avon',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Charlecote_Park_2015.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Bs0u10e01',
				cc_author: 'Bs0u10e01',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Warwick Castle',
				image_url:
					'https://www.travelimager.com/images/england/England-Warwick-Warwick-Castle.jpg',
				image_alt:
					'Vast 1,000 year old Warwick Castle with its medieval walls seen behind a stream and lush greenery',

				cc_image_url: 'https://www.flickr.com/photos/chinagirlsz/4936193956/',
				cc_author_url: 'https://www.flickr.com/photos/chinagirlsz/',
				cc_author: 'gabriella szekely',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	avignon_arles: {
		id: 'avignon_arles',
		itineraries: '',
		destinationName: 'Avignon & Arles',
		stateName: 'France',
		region: 'europe',
		anchor_tag: 'avignon-arles-france',
		destination_link: '/destinations/france/avignon-and-arles-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/7aqZGYZLnyw'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Avignon',
				tab_content: `<p>Avignon's historical center is full of stunning UNESCO-listed medieval buildings, including the fortified Palais des Papes (Papal Palace), which is among the largest gothic structures built in the Middle Ages. During the 14th century, this palace was the seat of Western Christianity (instead of the Vatican) and was inhabited by several popes.</p>
                <p>Adjacent to the Papal Palace is the imposing 12th century Avignon Cathedral, as well as the Rocher des Doms, a beautiful hilltop park overlooking the Rhone River. Below the park is the stunning medieval Pont d'Avignon bridge, which only spans about two-thirds of the river, but offers excellent views of Avignon's Old Town from the other end of the bridge.</p>`
			},
			{
				tab_title: 'Arles',
				tab_content: `<p>Approximately 20 minutes south of Avignon by train is the city of Arles, a beautiful city in Provence which inspired many of the works of Vincent Van Gogh. Arles hosts two UNESCO listed ancient Roman amphitheaters, including the famous Arles Amphitheater and the smaller Theater Antique.</p>
                <p>Nearby these amphitheaters is the Place de la Republique square, which hosts the striking Romanesque 12th century Saint Trophime Church, and the towering 4th century Arles Obelisk at the center of the beautiful square.</p>`
			},
			{
				tab_title: 'Pont du Gard',
				tab_content: `<p>From Avignon you can reach one of Southern France's most iconic sights, the Pont du Gard, in about 1 hour via bus and a walk. This famous ancient Roman aqueduct is multi-leveled and is among the best preserved in the world. The Pont du Gard spans a lovely river canyon and is also a UNESCO world heritage site. Popular activities here include walking along the aqueduct and even renting a kayak to explore the river underneath the Pont du Gard.</p>`
			},
			{
				tab_title: 'Orange',
				tab_content: `<p>North of Avignon in the city of Orange you'll find another incredible UNESCO site, the Theatre Antique d'Orange. This ancient Roman theater is one of the best preserved in the world and even includes a stunning theater wall, which is rarely ever preserved. You can reach this theater in about 40 minutes from Avignon via train and walking.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Pont du Gard Aqueduct',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Avignon-Vers-Pont-du-Gard-Pont-du-Gard-Ancient-Roman-Aqueduct.jpg',
				image_alt:
					'Extremely well-preserved Pont du Gard ancient Roman aqueduct/ bridge spanning a river canyon, viewed from the river below near Avignon, France',

				cc_image_url:
					'https://pixabay.com/en/pont-du-gard-nimes-arles-ales-2493763/',
				cc_author_url: 'https://pixabay.com/en/users/2990108-2990108/',
				cc_author: '2990108',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Arles Amphitheater',
				image_url:
					'https://www.travelimager.com/images/france/France-Arles-Arles-Amphitheatre-Colosseum.jpg',
				image_alt:
					'Well-preserved ancient Arles Amphitheater viewed from the front in Arles, France',

				cc_image_url: 'https://www.flickr.com/photos/decar66/8620143470/',
				cc_author_url: 'https://www.flickr.com/photos/decar66/',
				cc_author: 'Salva Barbera',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Theatre Antique (Orange)',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Avignon-Orange-Theatre-Antique-Ancient-Roman-Theater.jpg',
				image_alt:
					'Stunningly well-preserved anicent Roman theatre of Orange near Avignon, France',

				cc_image_url: 'https://www.flickr.com/photos/tylerbell/2687047206',
				cc_author_url: 'https://www.flickr.com/photos/tylerbell/',
				cc_author: 'Tyler Bell',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Papal Palace (Avignon)',
				image_url:
					'https://www.travelimager.com/images/france/France-Avignon-Palais-des-Papes-Papal-Palace.jpg',
				image_alt:
					'Front view of the grand Medieval Papal Palace in Avignon, France',

				cc_image_url:
					'https://pixabay.com/en/palais-des-papes-avignon-france-hdr-116475/',
				cc_author_url: 'https://pixabay.com/en/users/12019-12019/',
				cc_author: '12019',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: "Pont d'Avignon Bridge",
				image_url:
					'https://www.travelimager.com/images/france/France-Avignon-Pont-dAvignon-Medieval-Bridge.jpg',
				image_alt:
					"Pont d'Avignon bridge and Papal Palace complex behind it, viewed from below the bridge near its end in Avignon, France",

				cc_image_url:
					'https://pixabay.com/en/bridge-of-avignon-vaucluse-france-862948/',
				cc_author_url: 'https://pixabay.com/en/users/gillag-354277/',
				cc_author: 'gillag',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	carcassonne: {
		id: 'carcassonne',
		itineraries: '',
		destinationName: 'Carcassonne & Narbonne',
		stateName: 'France',
		region: 'europe',
		anchor_tag: 'carcassonne-france',
		destination_link:
			'/destinations/france/carcassonne-and-narbonne-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/16HrAAE8WX72'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Cite de Carcassonne (Aerial View)',
				image_url:
					'https://www.travelimager.com/images/france/France-Carcassonne-Cite-de-Carcassonne-Aerial-View.jpg',
				image_alt:
					'Aerial view of the fortified medieval citadel of Carcassonne, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:1_carcassonne_aerial_2016.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Chensiyuan',
				cc_author: 'Chensiyuan',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Chateau Comtal (Carcassonne)',
				image_url:
					'https://www.travelimager.com/images/france/France-Carcassonne-Cite-de-Carcassonne-Chateau-de-Comtal.jpg',
				image_alt:
					'Chateau Comtal medieval castle within the fortified castle-like citadel of Carcassonne, France',

				cc_image_url:
					'https://pixabay.com/photos/carcassonne-france-tourism-ancient-3458973/',
				cc_author_url: 'https://pixabay.com/users/jolimaison-4076676/',
				cc_author: 'jolimaison',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Cite de Carcassonne (Wide View)',
				image_url:
					'https://www.travelimager.com/images/france/France-Carcassonne-Cite-de-Carcassonne-Wide-View.jpg',
				image_alt:
					'Wide view of the citadel walls of Carcassonne, France to understand the scale of this massive castle-like city',

				cc_image_url:
					'https://pixabay.com/photos/carcassonne-cloudiness-landscape-2805568/',
				cc_author_url: 'https://pixabay.com/users/elias_s-4912632/',
				cc_author: 'Elias_S',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: "Porte de l'Aude (Carcassonne)",
				image_url:
					' https://www.travelimager.com/images/france/France-Carcassonne-Cite-de-Carcassonne-Porte-de-lAude-Aude-Gate.jpg',
				image_alt:
					"Walkway leading up to the Porte de l'Aude, one of the two medieval entrances to the Cite de Carcassonne, a castle-like city in Occitanie, France",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Porte_de_l%27Aude_in_the_fortified_city_of_Carcassonne001.JPG&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Tournasol7',
				cc_author: 'Tournasol7',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	carcassonne_nimes: {
		id: 'carcassonne_nimes',
		itineraries: '',
		destinationName: 'Carcassonne & Nimes',
		stateName: 'France',
		region: 'europe',
		anchor_tag: 'carcassonne-france',
		destination_link: '/destinations/france/carcassonne-and-nimes-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/DPZ5epSA1J12'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Itinerary Note',
				tab_content: `<p>This itinerary combines the city of Nimes and the vast castle-like fortified Cite de Carcassonne together in one or two days. The distance between Nimes and Carcassonne is approximately 2 hours directly by train, which also departs about every 2 hours. Plan to start you day as early as possible and only very briefly explore Nimes, as you'll want several hours to explore Carcassonne during the day.</p>
                <p>If you're continuing to Barcelona, be aware that the last trains depart from Carcassonne quite early in the evening, however buses to Barcelona run later. Note that this bus takes twice as long as the 2.5 hour train ride between Carcassonne and Barcelona.</p>`
			},
			{
				tab_title: 'Nimes',
				tab_content: `<p>Nimes has been continuously occupied since it was an ancient Roman city. The city's most incredible attraction is the remarkably well-preserved 2,000 year old Arena of Nimes, which was originally built as an ancient bullfighting ring. Be sure to also see the Maison Caree, a beautifully restored ancient Roman temple with giant columns. Both of these attractions are located near Nimes' train station.</p>
                <p>Further from the train station is the elegant 17th century Jardin de la Fontaine (Gardens of the Fountain) park, which is built around the ruins of an ancient Roman bath house. The park also hosts the ruins of the ancient Temple of Diane, and a trail leading up to the La Tour Magne, an ancient Roman watchtower offering amazing panoramic views overlooking Nimes.</p>`
			},
			{
				tab_title: 'Carcassonne',
				tab_content: `<p>Among the most popular attractions in France is the Cite de Carcassonne, a massive fortified medieval city and UNESCO world heritage site. The citadel of Carcassonne is famous for its idealistic castle-like walls, which tower above the modern city.</p>
                <p>The Carcassonne citadel's most popular feature is the Chateau Comtal, a stunning 12th century castle located within the fortified city walls. This smaller castle features a museum and allows you access to walk atop part of Carcassonne's walls. Apart from exploring along the citadel's walls, be sure to see the striking gothic exterior of the 12th century Basilique Saint Nazaire church, as well as the citadel's two entrance gates, the Porte Narbonnaise and Porte de l'Aude.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Maison Caree Temple',
				image_url:
					'https://www.travelimager.com/images/france/France-Nimes-Maison-Caree-Ancient-Roman-Temple-1.jpg',
				image_alt: 'Ancient Roman temple of Maison Caree in Nimes, France',

				cc_image_url:
					'https://www.flickr.com/photos/rictor-and-david/42047981295/',
				cc_author_url: 'https://www.flickr.com/photos/rictor-and-david/',
				cc_author: 'Rictor Norton & David Allen',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Arena of Nimes',
				image_url:
					'https://www.travelimager.com/images/france/France-Nimes-Arena-of-Nimes.jpg',
				image_alt: 'Ancient Roman arena of Nimes, France',

				cc_image_url: 'https://www.flickr.com/photos/53074617@N00/2363559406',
				cc_author_url: 'https://www.flickr.com/photos/wolfgangstaudt/',
				cc_author: 'Wolfgang Staudt',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Cite de Carcassonne (Aerial View)',
				image_url:
					'https://www.travelimager.com/images/france/France-Carcassonne-Cite-de-Carcassonne-Aerial-View.jpg',
				image_alt:
					'Aerial view of the fortified medieval citadel of Carcassonne, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:1_carcassonne_aerial_2016.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Chensiyuan',
				cc_author: 'Chensiyuan',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Chateau Comtal (Carcassonne)',
				image_url:
					'https://www.travelimager.com/images/france/France-Carcassonne-Cite-de-Carcassonne-Chateau-de-Comtal.jpg',
				image_alt:
					'Chateau Comtal medieval castle within the fortified castle-like citadel of Carcassonne, France',

				cc_image_url:
					'https://pixabay.com/photos/carcassonne-france-tourism-ancient-3458973/',
				cc_author_url: 'https://pixabay.com/users/jolimaison-4076676/',
				cc_author: 'jolimaison',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Cite de Carcassonne',
				image_url:
					' https://www.travelimager.com/images/france/France-Carcassonne-Cite-de-Carcassonne-Viewpoint.jpg',
				image_alt:
					'Viewpoint of the eastern walls of the Cite de Carcassonne citadel, a castle-like city in Occitanie, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Carcassonne_-_Pont_Neuf_-_View_SSE_on_Old_Bridge_%26_Citadel_-_Porte_d%27Aude.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Txllxt_TxllxT',
				cc_author: 'Txllxt TxllxT',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			}
		]
	},

	colmar: {
		id: 'colmar',
		itineraries: '',
		destinationName: 'Colmar',
		stateName: 'France',
		region: 'europe',
		anchor_tag: 'colmar-france',
		destination_link: '/destinations/france/colmar-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/yU7pK9M1rAE2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Iconic Sights',
				tab_content: `<p>The old historic center of Colmar is full of lovely half-timbered medieval structures of many colors, making walking through the old town a very enjoyable and scenic experience. The highlight of Colmar's old town is La Petite Venise (or Little Venice), where you can see many of these elegant homes lined up along the canal.</p>
                <p>The best way to experience the extremely picturesque La Petite Venise is by taking a canal boat tour. Be sure to also walk around and admire the lovely homes along the canal from several amazing vantage points, including The Fishmonger District, the Rue Turenne Bridge, and the Pont St-Pierre Bridge. Colmar's most beautiful plazas are centered around fountains, include the Roesselmann Fountain and Fontaine Schwendi, both of which are surrounded by charming half-timbered medieval houses.</p>`
			},
			{
				tab_title: 'Museums & More',
				tab_content: `<p>The Rue des Marchands (Merchants Street) is also lined with gorgeous and colorful half-timbered buildings, which host many shops and restaurants. Also along Merchants Street is the iconic medieval Maison Pfister house. Colmar is home to several impressive 13th century churches, including the romanesque Saint Martin Church and the Eglise des Dominicains which is now an art museum.</p>
                <p>Colmar's popular Unterlinden Museum hosts an impressive collection of art, sculptures, and artifacts from the medieval and Renaissance eras within a 13th century Dominican monastery. Also notable is the Musee Bartholdi sculpture museum and the Toy Museum, which displays toys from the 1800s to present.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Fishmonger District (La Petite Venise)',
				image_url:
					'https://www.travelimager.com/images/france/France-Colmar-La-Petite-Venise-Fishmonger-District-Rue-des-Escoles-Bridge-View.jpg',
				image_alt:
					'Riverfront half-timbered homes lining a canal of the Fishmonger District of La Petite Venise in Colmar, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:La_Petite_Venise_Colmar_Alsace_tunliweb_04.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Smtunli',
				cc_author: 'Svein-Magne Tunli',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Rue des Marchands (Merchants Street)',
				image_url:
					'https://www.travelimager.com/images/france/France-Colmar-Rue-des-Marchands-Merchants-Shopping-Street.jpg',
				image_alt:
					'Half-timbered structures along the famous Rue des Marchands (Merchants Street) in Colmar, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Colmar_-_Alsace.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Tizianok',
				cc_author: 'Tizianok',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Rue Turenne View (La Petite Venise)',
				image_url:
					'https://www.travelimager.com/images/france/France-Colmar-La-Petite-Venise-Rue-Turenne-Bridge-View.jpg',
				image_alt:
					'Rue Turenne Bridge View over a colorful canal in La Petite Venise district of Colmar, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:La_petite_Venise_%C3%A0_Colmar_%C3%A0_No%C3%ABl.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:AlineRockstud68',
				cc_author: 'AlineRockstud68',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Saint Martin Church',
				image_url:
					'https://www.travelimager.com/images/france/France-Colmar-Eglise-Saint-Martin-Church.jpg',
				image_alt:
					'Saint Martin Church seen behind a walkway-lined canal and many coloful structures in Colmar, France',

				cc_image_url: 'https://www.flickr.com/photos/sinava/43833049001/',
				cc_author_url: 'https://www.flickr.com/people/22956445@N04',
				cc_author: 'Naval S',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	greater_paris: {
		id: 'greater_paris',
		itineraries: '',
		destinationName: 'Greater Paris',
		stateName: 'France',
		region: 'europe',
		anchor_tag: 'greater-paris-france',
		destination_link: '/destinations/france/greater-paris-attractions-guide',
		attractionMapLinks: {
			custom_attractions_1: 'https://goo.gl/maps/ML3p2yuGDt62',
			custom_attractions_1_text: 'Top Attractions (Train)',
			custom_attractions_2: 'https://goo.gl/maps/p3erUz7cQCC2',
			custom_attractions_2_text: 'Top Attractions (Car)'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Palace of Versailles',
				tab_content: `<p>In the area surrounding Paris you'll find several prominent attractions, including grand castle-like chateaus, Disneyland Paris, and the UNESCO-listed Chartes Cathedral. Among these attractions however, the most popular is the iconic Palace of Versailles, which is also the nearest to Paris and can be quite easily reached by car or public transportation.</p>
                <p>Be sure to purchase tickets for the Palace of Versailles at least one week in advance as it is extremely popular and impossible to visit without an advanced reservation. The Palace of Versailles is truly massive, hosting many highly ornate decadent rooms, most notably the Royal Apartments and opulent Hall of Mirrors.</p>
                <p>Surrounding Versailles is a seemingly endless expanse of landscaped gardens and parklands, which host many grandiose fountains, sculptures, several smaller lavish palaces, a towering artificial waterfall, and a gigantic man-made lake which you enjoy in a paddle boat.</p>`
			},
			{
				tab_title: 'Chateaus & Castles',
				tab_content: `<p>Southeast of Paris is the extravagant UNESCO listed Chateau de Fontainebleau, which served as a royal medieval residence for hundreds of years. This 12th century palace sits on a giant park with a lake and grand canal.</p>
                <p>Quite far southwest of Paris is the towering 12th century Chartres Cathedral, a UNESCO listed world heritage site famed for its beautifully ornate gothic architecture. and giant spired towers. This cathedral is among the finest and most important churches in France.</p>
                <p>North of Paris you can visit three palaces within a single long day, starting with the lavish Renaissance-style Chateau de Chantilly, which sits atop a man-made lake surrounded by fine gardens. From Chantilly you can continue to the opulent 18th century Palais de Compiegne. You'll need to take a short Uber or taxi ride to reach the final palace, the massive fairytale-like Chateau de Pierrefonds. This idyllic fortified castle is stunning and hosts impressive reconstructed medieval interiors.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Palace of Versailles​',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Paris-Versailles-Chateau-Palace-of-Versailles-Aerial.jpg',
				image_alt: 'Aerial View of Palace of Versailles outside of Paris, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_073.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:ToucanWings',
				cc_author: 'ToucanWings',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Chateau de Fontainebleau​',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Paris-Fontainebleau-Chateau-de-Fontainebleau-Palace-Exterior.jpg',
				image_alt:
					'Chateau de Fontainebleau​ Facade in town of Fontainebleau outside of Paris, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Escalier_du_Fer-%C3%A0-cheval_Fontainebleau.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Ymblanter',
				cc_author: 'Ymblanter',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Chateau de Pierrefonds​',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Paris-Pierrefonds-Chateau-de-Pierrefonds-Castle-1.jpg',
				image_alt:
					'Aerial view of castle-like Chateau de Pierrefonds outside of Paris, France',

				cc_image_url:
					'https://pixabay.com/en/pierrefonds-castle-aerial-view-462849/',
				cc_author_url: 'https://pixabay.com/en/users/remiou-469745/',
				cc_author: 'remiou',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Chateau de Chantilly​',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Paris-Chantilly-Chateau-de-Chantilly.jpg',
				image_alt:
					'Chateau de Chantilly castle surrounded by a pond outside of Paris, France',

				cc_image_url:
					'https://pixabay.com/en/chateau-chantilly-france-picardy-3115962/',
				cc_author_url: 'https://pixabay.com/en/users/SofiLayla-5331809/',
				cc_author: 'SofiLayla',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	loire_valley_train: {
		id: 'loire_valley_train',
		itineraries: '',
		destinationName: 'Loire Valley (By Train)',
		stateName: 'France',
		region: 'europe',
		anchor_tag: 'loire-valley-train-france',
		destination_link: '/destinations/france/loire-valley-by-train-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/NsEjGZKH21G2',
			all_attractions: 'https://goo.gl/maps/dUvWWMqY1dx'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Chateau de Chenonceau​',
				image_url:
					'https://www.travelimager.com/images/france/France-Loire-Valley-Chateau-de-Chenonceau-Castle.jpg',
				image_alt:
					'Chateau de Chenonceau​ palace built atop the water seen with its reflection from across the water, Loire Valley, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Chateau_de_Chenonceau.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Chateau_de_Chenonceau.jpg&action=history',
				cc_author: 'Yvan Lastes',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: "Chateau Royal d'Amboise",
				image_url:
					'https://www.travelimager.com/images/france/France-Loire-Valley-Amboise-Chateau-Royal-dAmboise-Castle-1.jpg',
				image_alt:
					"Chateau Royal d'Amboise​ castle seen from across the Loire River of the Loire Valley, France",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Ambuaz_IMG_1760.JPG&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Ambuaz_IMG_1760.JPG&action=history',
				cc_author: 'Vladimir Shelyapin',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Chateau de Chambord',
				image_url:
					'https://www.travelimager.com/images/france/France-Loire-Valley-Chateau-de-Chambord-Palace-1.jpg',
				image_alt:
					'Grand Chateau de Chambord palace reflecting over the water, Loire Valley, France',

				cc_image_url:
					'https://pixabay.com/en/chambord-reflection-castle-3195956/',
				cc_author_url: 'https://pixabay.com/en/users/edmondlafoto-7913128/',
				cc_author: 'edmondlafoto',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Chateau de Chaumont-sur-Loire',
				image_url:
					'https://www.travelimager.com/images/france/France-Loire-Valley-Chateau-Chaumont-sur-Loire-Castle.jpg',
				image_alt:
					"Castle-like Chateau de Chaumont-sur-Loire with its wide rounded towers topped with spire roofs in France's Loire Valley",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Chaumont_sur_Loire.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Chaumont_sur_Loire.jpg&action=history',
				cc_author: 'Felouch Kotek',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	lyon: {
		id: 'lyon',
		itineraries: '',
		destinationName: 'Lyon',
		stateName: 'France',
		region: 'europe',
		anchor_tag: 'lyon-france',
		destination_link: '/destinations/france/lyon-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/z6JY4uhDeVF2',
			all_attractions: 'https://goo.gl/maps/CBFsp3iaks82'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Iconic Sights',
				tab_content: `<p>The city of Lyon is the third largest city in France and features many beautiful buildings with similar architecture styles to Paris. Atop a hill overlooking the city is the magnificent white Basilique of Notre Dame de Fourviere, a uniquely designed Romanesque-Byzantine style basilica offering fantastic views over Lyon. Nearby is an archaeological site excavating the ancient Roman city of Lugdunum. This amazing site hosts the giant Gallo Roman Theatre, as well as other ruins and a museum displaying artifacts uncovered from the site.</p>
                <p>Below Fourviere Hill and the Notre Dame Basilica is the riverfront Vieux Lyon District, in which you'll find many lovely Renaissance-style buildings. Within this district is the 14th century Lyon Cathedral, a beautiful gothic church which sits adjacent to the ruins of a 5th century cathedral. Nearby is the unique and highly recommended Movies & Miniature Museum, which displays countless major film props from famous movies, along with many highly elaborate miniature scenes on display.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Be sure to visit Lyon's lovely squares, including the UNESCO listed Place Bellecour, which is the largest pedestrian square in Europe. Also notable is the Place des Jacobins square surrounded by elegant 19th century buildings, as well as the grandiose Place des Terreaux, which hosts the city's iconic Bartholdi Fountain and the majestic Hotel de Ville city hall building.</p>
                <p>Also on the Place des Terraux plaza is the Lyon Museum of Fine Arts, housed within a beautiful 17th century former Benedictine convent. Among Lyon's most iconic buildings is the extravagant Palais de la Bourse, a highly ornate and photogenic palace-like building.</p>
                <p>Just south of Lyon is the city of Vienne, which hosts several more ancient Roman ruins, including a stunning temple, a theatre, and a large archaeological complex.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Basilica Notre Dame de Fourviere',
				image_url:
					'https://www.travelimager.com/images/france/France-Lyon-Basilique-Notre-Dame-de-Fourviere-Basilica.jpg',
				image_alt:
					'Magnificent white Notre Dame Basilica de Fourviere towering above the cliffs of the city of Lyon, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Notre_Dame_de_Fourvi%C3%A8re.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/wiki/User:Cl%C3%A9ment_Bardot',
				cc_author: 'Clement Bardot',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Bartholdi Fountain',
				image_url:
					'https://www.travelimager.com/images/france/France-Lyon-Place-des-Terreaux-Fontaine-Bartholdi-Fountain.jpg',
				image_alt: 'Bartholdi Fountain lit up at night in Lyon, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Fontaine_Bartholdi_Place_des_Terreaux.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Fontaine_Bartholdi_Place_des_Terreaux.jpg&action=history',
				cc_author: 'Qmin',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Place des Jacobins Square',
				image_url:
					'https://www.travelimager.com/images/france/France-Lyon-Place-des-Jacobins-Plaza.jpg',
				image_alt:
					'Historic Place des Jacobins Square surrounded by elegant buildings in Lyon, France',

				cc_image_url: 'https://www.flickr.com/photos/liakadaweb/40884884220/',
				cc_author_url: 'https://www.flickr.com/people/liakadaweb/',
				cc_author: 'Herbert Frank',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Gallo Roman Ancient Theatre',
				image_url:
					'https://www.travelimager.com/images/france/France-Lyon-Fourviere-Theater-Antique-Gallo-Romain-Ancient-Roman-Theatre.jpg',
				image_alt:
					'Ancient Gallo Roman Theatre built into the hillside in Lyon, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Lyon_5_-_Th%C3%A9%C3%A2tre_antique_de_Fourvi%C3%A8re_01.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Pymouss',
				cc_author: 'Pymouss',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			}
		]
	},

	marseille: {
		id: 'marseille',
		itineraries: '',
		destinationName: 'Marseille & Cassis',
		stateName: 'France',
		region: 'europe',
		anchor_tag: 'marseille-france',
		destination_link: '/destinations/france/marseille-and-cassis-attractions-guide',
		attractionMapLinks: {
			custom_attractions_1: 'https://goo.gl/maps/9bcQZd3Kb4M2',
			custom_attractions_1_text: 'Top Attractions (Train)',
			custom_attractions_2: 'https://goo.gl/maps/XKAfhHX7rDm',
			custom_attractions_2_text: 'All Attractions (Train)',
			custom_attractions_3: 'https://goo.gl/maps/BxF8R2y9HuG2',
			custom_attractions_3_text: 'Top Attractions (Car)',
			custom_attractions_4: 'https://goo.gl/maps/BW2zV1YkH322',
			custom_attractions_4_text: 'All Attractions (Car)'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Marseille',
				tab_content: `<p>Marseille is the second largest city in France and is located within the Provence region along the Mediterranean Sea. Atop Marseille's tallest hill is the stunning Byzantine-style Basilique Notre-Dame de la Garde, a magnificent towering basilica with highly ornate interiors. This basilica offers incredible far-reaching views over Marseille and the coastline.</p>
                <p>The Old Port of Marseille is an extremely scenic waterfront area lined with many restaurants and historic buildings. Fort Saint-Jean sits at the Old Port's entrance, offering amazing panoramic views over the harbor and coastline. This fort is connected by bridge to Marseille's most prominent museum, the Museum of European & Mediterranean Civilizations (MuCEM). Also nearby is one of the largest and most beautiful churches in France, the Marseille Cathedral (or Cathedrale La Major), a brilliant and highly elaborate Byzantine-style church.</p>        
                <p>Take a short boat ride from the Old Port to the incredible 16th century Chateau d'If, a fortified castle perched atop a tiny island, which was the inspiration for the famous Count of Monte Cristo novel.</p>`
			},
			{
				tab_title: 'Calanques of Cassis',
				tab_content: `<p>Along the coastline between Marseille and the town of Cassis is Calanques National Park, which is known for its many stunning calanques. Calanques are long narrow bays surrounded by steep cliffs. Most of Cassis's calanques feature beautiful beaches and vibrant blue-green waters, surrounded by breathtaking scenery.</p>
                <p>The best and most convenient way to see all of the most popular calanques of Cassis is via boat tour from the Old Port of Marseille. Alternatively, most of the calanques can be reached via bus and hiking trails, however this is much more time consuming. Despite the challenge, you might still consider at least one calanque hike, as the trails are very scenic and offer gorgeous vantage points overlooking the calanques from high above, which most boat tours skip.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Old Port of Marseille',
				image_url:
					'https://www.travelimager.com/images/france/France-Marseille-Port-Vieux-Old-Port.jpg',
				image_alt:
					'Historic Port Vieux (or Old Port) harbor with the iconic hilltop Notre Dame de la Garde in the background in Marseille, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Marseille_-_Vieux-Port2.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Kulmalukko',
				cc_author: 'Tila Monto',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Marseille Cathedral',
				image_url:
					'https://www.travelimager.com/images/france/France-Marseille-Cathedrale-la-Major-Cathedral.jpg',
				image_alt:
					'Towering striped Marseille Cathedral with its elegant domes in Marseille, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Marseille.Cath%C3%A9drale_Sainte-Marie-Majeure,_dite_Nouvelle_Major(1).jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Charliemoon',
				cc_author: 'Charliemoon',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: "Calanque d'En-Vau (Northeast Overlook)",
				image_url:
					'https://www.travelimager.com/images/france/France-Cassis-Calanque-de-En-Vau-Northeast-Overlook.jpg',
				image_alt:
					"Incredible view over the steep cliffs and vibrant blue-green waters of the Calanque d'En-Vau located near Marseille, France",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Calanque_d%22En-vau.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:GabrielleMerk',
				cc_author: 'GabrielleMerk',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Calanque de Sugiton',
				image_url:
					'https://www.travelimager.com/images/france/France-Cassis-Calanque-de-Sugiton.jpg',
				image_alt:
					'Stunningly picturesque Calanque de Sugiton located along the coast between Cassiss and Marseille, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Panorama_calanque_de_Sugiton.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Panorama_calanque_de_Sugiton.jpg&action=history',
				cc_author: 'Paco de la trillade',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Calanque de Sormiou',
				image_url:
					'https://www.travelimager.com/images/france/France-Cassis-Calanque-de-Sormiou.jpg',
				image_alt:
					'High-definition view overlooking the stunning mix of light blue and dark blue waters of the Calanque de Sormiou and its beach from a viewpoint high above the coast near Marseille, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Marseille_Calanque_Sormiou.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Benh',
				cc_author: 'Benh Lieu Song',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Notre Dame de la Garde',
				image_url:
					'https://www.travelimager.com/images/france/France-Marseille-Basilique-Notre-Dame-de-la-Garde-Basilica.jpg',
				image_alt:
					'Famous towering Notre Dame de la Garde, a massive white cathedral with stripes, topped with a giant golden figure, located on a hill overlooking Marseille, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Notre_Dame_de_la_Garde.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Benh',
				cc_author: 'Benh Lieu Song',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	nice: {
		id: 'nice',
		itineraries: '',
		destinationName: 'Nice',
		stateName: 'France',
		region: 'europe',
		anchor_tag: 'nice-france',
		destination_link: '/destinations/france/nice-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/GKXw8bcYihm',
			all_attractions: 'https://goo.gl/maps/wggup12PkM42'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Iconic Sights',
				tab_content: `<p>Nice is the largest city along the French Riviera of Southern France, and is known for its many high-end resorts and beaches. Nice is located very close the the micro-state of Monaco, and just beyond Monaco is the beginning of the Italian Riviera.</p>
                <p>The city's iconic Place Massena is a vast plaza of checkerboard-patterned tiles lined with elegant 19th century Italian-esque buildings. Nearby is the baroque 17th century Nice Cathedral, as well as the beautiful lavish Basilique Notre-Dame de l'Assomption basilica. Nice's majestic St. Nicholas Russian Orthodox Cathedral is the largest Eastern Orthodox cathedral in Western Europe and is highly ornate.</p>
                <p>Towering above the coastline near Place Massena is Castle Hill, which hosts a striking waterfall, ruins, and stunning panoramic views overlooking Nice and the ocean. Just below Castle Hill is the scenic Nice Port Lympia, which is lined with many colorful historic buildings and filled with giant yachts. Rising above the other side of the port is Mont Alban, which offers truly breathtaking panoramic views over Nice and the neighboring peninsula of Saint-Jean-Cap-Ferrat.</p>`
			},
			{
				tab_title: 'Beaches & Villas',
				tab_content: `<p>Below the eastern side of Mont Alban is the lovely town of Villefranche-sur-Mer and its Plage Villefranche beach, which hosts clear vibrant waters surrounded by a stunningly picturesque bay.</p>
                <p>The Saint-Jean-Cap-Ferrat peninsula hosts the famous early 20th century Villa de Ephrussi de Rothschild, a grandiose mansion with decadent interiors and picturesque seaside gardens. Nearby is the Greek Villa Kerylos, an ultra-lavish and extravagant recreation of an ancient Greek villa which sits right on the water. Inside this extravagant home you'll find historically-accurate ancient Greek furnishings, as well as elaborate mosaics and ancient artifacts. Also notable on the peninsula is the tiny Paloma Beach, which offers gorgeous coastal views and clear light blue waters.</p>`
			},
			{
				tab_title: 'Village of Eze',
				tab_content: `<p>Be sure to visit the breathtaking medieval village of Eze, which sits high up in the hills overlooking the coast between Nice and Monaco. Explore the narrow streets of this charming rustic village and visit Eze's Exotic Garden, an elegant botanical garden hosting majestic views overlooking the coast. Although this village can be reached directly by bus, you might consider hiking the famous Nietzsche's Footpath, an extremely scenic trail leading up to the village from the coast.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Plage Villefranche Beach',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Nice-Villefranche-sur-Mer-Plage-Villefranche-Beach.jpg',
				image_alt:
					'Vibrant colorful waters and beach of Villefranche-sur-Mer near Nice, France',

				cc_image_url:
					'https://pixabay.com/en/villefranche-sur-mer-coast-beach-1265940/',
				cc_author_url: 'https://pixabay.com/en/users/bogitw-851103/',
				cc_author: 'bogitw',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Greek Villa Kerylos',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Nice-Beaulieu-sur-Mer-Greek-Villa-Kerylos.jpg',
				image_alt:
					'Exterior of the Recreated ancient Greek Villa Kerylos standing above the coast of the French Riviera near Nice, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:919_KER1006.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:919_KER1006.jpg&action=history',
				cc_author: 'Christophe Recoura',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC-BY-SA 3.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2',
				cc_license_gnu: 'GNU 1.2'
			},

			{
				attraction: 'Place Massena Plaza',
				image_url:
					'https://www.travelimager.com/images/france/France-Nice-Place-Massena-Plaza-Fontaine-du-Soleil-Fountain.jpg',
				image_alt:
					'Iconic Place Massena Placa with its checker-patterned floor, a central hub of the city of Nice, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Jean-M%C3%A9decin,_Nice,_France_-_panoramio_(11).jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Jean-M%C3%A9decin,_Nice,_France_-_panoramio_(11).jpg&action=history',
				cc_author: 'trolvag',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Eze Village',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Nice-Eze-Village.jpg',
				image_alt:
					'Mountaintop rustic village of Eze which sits high above Nice, Monaco, and the Mediterranean, towering above the coast with incredible views',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Eze_viewed_from_Grand_Corniche.JPG&action=history',
				cc_author_url: 'https://en.wikipedia.org/wiki/User:Jimi_magic',
				cc_author: 'Jimi magic',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Eze Village Pathways',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Nice-Eze-Village-Pathways.jpg',
				image_alt:
					'Rustic buildings along a tight medieval pathway within the village of Eze, France near Monaco',

				cc_image_url:
					'https://www.flickr.com/photos/dbaron/37464706641/in/photolist-Z5Cq2X-8trhPS-8Rd9Fv-cAtyws-xFoFur-qcAUKz-8tofpv-Sgp3WR-AyNnBT-ep6LUj-8trhty-AyNd4K-5Sv19V-8Rghro-qcMk24-xyKxrT-Xx6vCX-neo4w-WiHf2p-AvvGMU-67EPrj-67AHrB-AvvJmL-ScKCkQ-zAM2NA-YFSw6Q-eVSw2h-cjqMZS-4PYU8-uXbMs8-My4yvt-fFM9hx-nxYDD8-AwBARd-dhCMWb-RFFDVW-69RGxU-6Me3RF-6VsAjw-S2HyF5-57GndC-S2JjxJ-qBgSsv-qqKzAM-SgpqfH-oPBdw7-SgoL5e-AyNbwr-vd15KZ-72BN8q',
				cc_author_url: 'https://www.flickr.com/photos/dbaron/',
				cc_author: 'David Baron',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Villa Ephrussi de Rothschild',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Nice-Saint-Jean-Cap-Ferrat-Villa-Ephrussi-de-Rothschild-Villa-and-Gardens.jpg',
				image_alt:
					'Vibrant gardens and pond in front of the famous Villa Ephrussi de Rothschild in Saint-Jean-Cap-Ferrat near Nice, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Villa_Ephrussi_de_Rothschild_BW_2011-06-10_11-42-29a.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Berthold_Werner',
				cc_author: 'Berthold Werner',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	paris: {
		id: 'paris',
		itineraries: '',
		destinationName: 'Paris',
		stateName: 'France',
		region: 'europe',
		anchor_tag: 'paris-france',
		destination_link: '/destinations/france/paris-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/FXXMbq83ryq',
			main_attractions: 'https://goo.gl/maps/wvDAfviGnuN2',
			all_attractions: 'https://goo.gl/maps/mpTnebHfpi52',
			short_attractions: 'https://goo.gl/maps/cvbWLRiYLYr'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Iconic Sights',
				tab_content: `<p>The French capital of Paris is a massive city full of striking monuments, world-class museums, and lovely historic buildings. Paris also offers an amazing array of cuisines from around the world, especially from Southeast Asia. For several popular attractions it's necessary to book tickets in advance, including the Eiffel Tower's elevator, the Palace of Versailles, the Louvre and Musee d'Orsay Museums, and the Paris Catacombs.</p>
                <p>The iconic Eiffel Tower is over 1,050 feet (320 m) tall, hosting observation decks from which you can enjoy incredible panoramic views over the city. Visit the Montparnasse Tower's observation deck for stunning views high above the city and of the Eiffel Tower. Enjoy picturesque views below the tower from the expansive Champ de Mars park and the beautiful Trocadero Gardens.</p>
                <p>The magnificent Arc de Triomphe also hosts an observation deck towering above the famous Champs-Elysees, a grand avenue lined with high-end shops and boutiques. Just outside of Central Paris is the gorgeous and highly ornate Sacre-Couer basilica, which offers amazing views over the city.</p>
                <p>Paris's Ile de la Cite island in the Seine River hosts the famous Notre Dame Cathedral, an elegant and highly elaborate medieval church. Also on the island is the ultra-lavish 13th century Sainte-Chapelle, a former royal chapel with breathtaking stained-glass windows. Adjacent is the castle-like Conciergerie, a medieval royal palace later used as a prison, which features Marie Antoinette's preserved prison cell on display.</p>`
			},
			{
				tab_title: 'Major Museums',
				tab_content: `<p>The Louvre Museum is housed within an extravagant royal palace and is the most popular art museum in the world, containing an incredible collection of fine art, important artifacts and sculptures from around the world, and the Mona Lisa painting. Next to the Louvre are the elegant Tuileries Gardens hosting elegant statues and fountains, and the Place de la Concorde square with the towering 3,000 year old Egyptian Obelisk of Luxor at its center.</p>
                <p>Other major museums of Paris include the Orangerie Museum of impressionist art, the Musee d'Orsay of contemporary art with masterpieces by Van Gogh and Monet, the vast Picasso National Museum, and the extremely popular Le Centre Pompidou modern art museum.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Be sure to see the grandiose neoclassical Pantheon, with its extravagant marble interiors modeled after Rome's ancient Pantheon. The nearby Luxembourg Gardens, host the former royal Luxembourg Palace, surrounded by picturesque fine gardens with many fountains and sculptures.</p>
                <p>Near Tuileries Gardens you can admire the Pont Alexandre III, a lovely bridge adorned with grandiose copper and bronze sculptures, as well as elegant street lamps. Across the bridge is the beautiful and expansive Les Invalides complex, which hosts many military museums and the tomb of Napoleon.</p>
                <p>Other must-see attractions include the Paris Catacombs, a vast network of underground tunnels containing over 6 million human skeletons, and the world-famous Palais Garnier, a highly embellished opera house with incredibly grandiose interiors.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Eiffel Tower',
				image_url:
					'https://www.travelimager.com/images/france/France-Paris-Eiffel-Tower.jpg',
				image_alt: 'Eiffel Tower at Sunset, Paris, France',

				cc_image_url:
					'https://pixabay.com/en/eiffel-tower-paris-france-travel-3349075/',
				cc_author_url: 'https://pixabay.com/en/users/TheDigitalArtist-202249/',
				cc_author: 'TheDigitalArtist',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Notre Dame Cathedral',
				image_url:
					'https://www.travelimager.com/images/france/France-Paris-Ile-de-la-Cite-Notre-Dame-Cathedral-of-Paris.jpg',
				image_alt:
					'Seine River View, Notre Dame Cathedral of Paris, Ile de la Cite Island, Paris, France',

				cc_image_url:
					'https://www.flickr.com/photos/string_bass_dave/30438306655/',
				cc_author_url: 'https://www.flickr.com/photos/string_bass_dave/',
				cc_author: 'David Brossard',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Arc de Triomphe',
				image_url:
					'https://www.travelimager.com/images/france/France-Paris-Arc-de-Triomphe.jpg',
				image_alt: 'Arc de Triomphe (Triumphal Arch), Paris, France',

				cc_image_url: 'https://www.flickr.com/photos/32366606@N00/5168825019',
				cc_author_url: 'https://www.flickr.com/people/32366606@N00',
				cc_author: 'Jiuguang Wang',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Sacre-Couer Basilica',
				image_url:
					'https://www.travelimager.com/images/france/France-Paris-Sacre-Couer-Basilica-1.jpg',
				image_alt: 'Sacre-Couer Basilica, Paris, France',

				cc_image_url: 'https://www.flickr.com/photos/dhaun/13352815933/',
				cc_author_url: 'https://www.flickr.com/photos/dhaun/',
				cc_author: 'Dirk Haun',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Conciergerie Building',
				image_url:
					'https://www.travelimager.com/images/france/France-Paris-Ile-de-la-Cite-Conciergerie-Building.jpg',
				image_alt: 'Conciergerie Building, Ile de la Cite Island, Paris, France',

				cc_image_url: 'https://www.flickr.com/photos/pedrosz/42116290222',
				cc_author_url: 'https://www.flickr.com/photos/pedrosz/',
				cc_author: 'Pedro Szekely',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Tuileries Garden',
				image_url:
					'https://www.travelimager.com/images/france/France-Paris-Jardin-des-Tuileries-Gardens.jpg',
				image_alt: 'Jardin des Tuileries Gardens, Paris, France',

				cc_image_url: 'https://www.flickr.com/photos/carloszgz/20850594540',
				cc_author_url: 'https://www.flickr.com/photos/carloszgz/',
				cc_author: 'Carlos ZGZ',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	strasbourg: {
		id: 'strasbourg',
		itineraries: '',
		destinationName: 'Strasbourg',
		stateName: 'France',
		region: 'europe',
		anchor_tag: 'strasbourg-france',
		destination_link: '/destinations/france/strasbourg-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/S6TV3619WPB2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Iconic Sights',
				tab_content: `<p>Strasbourg is a major city in the Alsace region of Eastern France, a region known for its Alsatian wines and many lovely towns. The city of Strasbourg sits right on the German border, adjacent to the Rhine River. Strasbourg is know for its UNESCO listed historic center, which is located on Grand Ile, a large island surrounded by rivers in the middle of the city.</p>
                <p>Among Strasbourg's top attractions is the lovely Petite France district of the old town, where the river splits into multiple small rivers, forming several tiny long islands. Here you can admire the many gorgeous and colorful medieval houses that line the rivers. Nearby is the 17th century Barrage Vauban, a covered bridge which hosts a rooftop terrace overlooking Petite France and its medieval guard towers.</p>`
			},
			{
				tab_title: 'Museums & More',
				tab_content: `<p>Strasbourg's main square is the massive Kleber Square, which is lined with many elegant buildings. The city's medieval Strasbourg Cathedral showcases extremely complex gothic architecture and hosts one of the world's oldest astronomical clocks. This incredible cathedral was also the tallest building in the world for over 200 years, and hosts a tower that you can climb for fantastic views over the city. Another notable gothic church is the striking medieval Eglise Saint Thomas, which houses an organ played by Mozart.</p>
                <p>The baroque 18th century Palais Rohan palace hosts Strasbourg's Archaeological Museum, Fine Arts Museum, and Museum of Decorative Arts. Adjacent is the medieval Museum Oeuvre Notre-Dame, which houses an impressive collection of decorative and fine arts from the Middle Ages, including many sculptures. Strasbourg's Alsatian Museum showcases traditional rural life in France's Alsace region, and is housed across several beautiful historic mansions.</p>                   
                <p>Just outside of Strasbourg in the German town of Rust is Europa-Park, the second most popular amusement/theme park in Europe (after Disneyland Paris).</p>`
			}
		],
		attractions: [
			{
				attraction: 'Pont Saint-Martin View (Petite France)',
				image_url:
					'https://www.travelimager.com/images/france/France-Strasbourg-Petite-France-Pont-Saint-Martin-Bridge-View.jpg',
				image_alt:
					'Lovely half-timbered colorful homes along a river viewed from the Saint Martin Bridge in the Petite France district of Strasbourg, France',

				cc_image_url: 'https://www.flickr.com/photos/alexprevot/8018851413/',
				cc_author_url: 'https://www.flickr.com/photos/alexprevot/',
				cc_author: 'Alexandre Prevot',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Petite France Medieval Towers',
				image_url:
					'https://www.travelimager.com/images/france/France-Strasbourg-Petite-France-Ponts-Couverts-Barrage-Vauban-Tower-Bridges-Viewpoint-1.jpg',
				image_alt:
					'Medieval towers guarding the entrance to several canals and islands at the river entrance to La Petite France district of Strasbourg, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Strasbourg,_France,_Ponts_Couverts_seen_from_Barrage_Vauban.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Strasbourg,_France,_Ponts_Couverts_seen_from_Barrage_Vauban.jpg&action=history',
				cc_author: 'Elizaveta Butryn',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Place Benjamin Zix View (Petite France)',
				image_url:
					'https://www.travelimager.com/images/france/France-Strasbourg-Petite-France-Place-Benjamin-Zix-View.jpg',
				image_alt:
					'Place Benjamin Zix View over half-timbered homes lining a canal in Petite France, Strasbourg, France',

				cc_image_url: 'https://www.flickr.com/photos/dalbera/29107213725',
				cc_author_url: 'https://www.flickr.com/photos/dalbera/',
				cc_author: 'Jean-Pierre Dalbera',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Pont du Corbeau View (Grand Ile)',
				image_url:
					'https://www.travelimager.com/images/france/France-Strasbourg-Grand-Ile-Pont-du-Corbeau-View.jpg',
				image_alt:
					'Pont du Corbeau Bridge View along a river in Strasbourg, France',

				cc_image_url: 'https://www.flickr.com/photos/panic01/29981674465/',
				cc_author_url: 'https://www.flickr.com/photos/panic01/',
				cc_author: 'stefano Merli',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	berlin: {
		id: 'berlin',
		itineraries: '',
		destinationName: 'Berlin',
		stateName: 'Germany',
		region: 'europe',
		anchor_tag: 'berlin-germany',
		destination_link: '/destinations/germany/berlin-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/WuULM8nonaTkb58j9',
			all_attractions: 'https://goo.gl/maps/eLNiYBgickXP3LTG8'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Iconic Attractions',
				tab_content: `<p>The capital city of Germany is home to many great museums and monuments. Two great spots to view the Berlin Wall are at the Berlin Wall Memorial north of the city center and the longer East Side Gallery along the river east of the city center.</p>
                <p>Berlin's other three most iconic attractions are all located next to each other, including the Reichstag Building which you can climb to the top of for excellent views, the grandiose Brandenburg Gate, and the massive Holocaust Memorial to the Jews of Europe, a very striking and unique monument.</p>
                <p>Another very popular attraction is the Checkpoint Charlie preserved guardhouse, which sits on the former border between East and West Berlin. The massive Berliner Fernsehturm TV tower is an iconic symbol of Berlin which hosts a panoramic observation offering amazing views over the city.</p>`
			},
			{
				tab_title: 'Museum Island',
				tab_content: `<p>Berlin's Museum Island sits in the middle of the river in the city's center,  hosting Berlin's most important museums, as well as the stunning Berlin Cathedral Church and the reconstructed Berlin Palace. The island's most famous museum is the Pegamon Museum which hosts the Ishtar Gate of ancient Babylon and the Ancient Greek Pergamon Altar.</p>
                <p>Other museums of Museum Island include the Altes Museum hosting classical antiquities, the Neues Museum hosting ancient Egyptian artifacts, the Bode Museum hosting Byzantine art and ancient sculptures, and the Alte Nationalgalerie hosting fine art.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Adjacent to the Museum Island is the DDR Museum with exhibits on pre-unified Germany as well as the German Historical Museum. Also nearby is the beautiful Gendarmenmarkt Square, hosting striking neoclassical buildings. In Central Berlin you'll find more museums related to WWII, including the Topography of Terror Museum with exhibits on Nazi rule located within the former Gestapo headquarters, and the similarly themed Berlin Story Museum housed within a former war bunker.</p>
                <p>To the west of the city center within the vast Tiergarten Park is the expansive Zoo Berlin, which is the most popular zoo in Europe and among the best in the world with a wide array of species. Nearby you can admire the ruins of the incredible Kaiser Wilhelm Memorial Church. Further west is the lavish Charlottenburg Palace, a sprawling 17th century palace built in baroque and rococo styles.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Reichstag Building',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Berlin-Reichstag-Building.jpg',
				image_alt:
					'Cloudy day view of the facade of the Reichstag Building in Berlin, Germany',

				cc_image_url:
					'https://pixabay.com/en/berlin-bundestag-reichstag-1319648/',
				cc_author_url: 'https://pixabay.com/en/users/pixlord-1/',
				cc_author: 'PixLord',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Brandenburg Gate',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Berlin-Brandenburg-Gate-Sunset.jpg',
				image_alt:
					'Sunset colors glowing on the Brandenburg Gate, a neoclassical monument and top attraction in Berlin, Germany',

				cc_image_url:
					'https://www.flickr.com/photos/sgerner/29714543882/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/sgerner/',
				cc_author: 'Steven Gerner',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Berlin Cathedral & Fernsehturm Tower',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Berlin-Berliner-Dom-Berlin-Cathedral.jpg',
				image_alt:
					'Sunset colors behind the facade of the majestic Berliner Dom or Berlin Cathedral with  Fernsehturm Tower in background',

				cc_image_url:
					'https://pixabay.com/en/berlin-dom-berlin-cathedral-2651607/',
				cc_author_url: 'https://pixabay.com/users/athree23-6195572/',
				cc_author: 'athree23',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'East Side Gallery (Berlin Wall)',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Berlin-Berlin-Wall-East-Side.jpg',
				image_alt:
					'Murals and grafitti art along a preserved section of the Berlin Wall known as the East Side Gallery',

				cc_image_url: 'https://www.flickr.com/photos/jmenj/14371014334',
				cc_author_url: 'https://www.flickr.com/photos/jmenj/',
				cc_author: 'Jeanne Menjoulet',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Bode Museum (Museum Island)',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Berlin-Bode-Museum.jpg',
				image_alt:
					"Highly photogenic illuminated exterior of the Bode Museum located at the tip of Museum Island in Berlin's Spree River",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Bodemuseum_in_Berlin.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Marek_Heise',
				cc_author: 'Marek Heise Fotografie, Berlin',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			}
		]
	},

	fussen: {
		id: 'fussen',
		itineraries: '',
		destinationName: 'Füssen & Neuschwanstein Castle',
		stateName: 'Germany',
		region: 'europe',
		anchor_tag: 'neuschwanstein-castle-germany',
		destination_link: '/destinations/germany/cologne-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/X9n84RBKcXSw6AJP9',
			all_attractions: 'https://goo.gl/maps/AfayeCAeC7dZVenLA'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Füssen',
				tab_content: `<p>Southwest of Munich near the Austrian border you'll find the lovely town of Füssen and the village of Hohenschwangau, which hosts two magnificent castles that belonged to King Ludwig II of Bavaria. To reach Füssen you'll need to take 1 or 2 trains from Central Munich, which takes about 2 hours. It's highly recommended that you purchase your tickets for the castles ahead of time as they tend to be in very high demand, resulting in a long wait before being able to tour the castles.</p>
                <p>Before visiting the castles you can enjoy the beautiful medieval center of Füssen, where you'll find the impressive Hohes Schloss Füssen, a castle you can admire from outside. Adjacent is the beautiful 9th century Benedictine Monastery of St. Mang, which is best viewed from just across the river. Also nearby along this river is the beautiful Lechfall Waterfall.</p>`
			},
			{
				tab_title: 'Neuschwanstein Castle',
				tab_content: `<p>To reach the adjacent village of Hohenschwangau you can take a very short 10 minute bus ride from Füssen.</p>
                <p>In Hohenschwangau you'll find the fairytale-like Neuschwanstein Castle, which inspired Walt Disney's Cinderella Castle. The majestic Neuschwanstein Castle castle is one of Germany's top tourist attractions and hosts incredibly opulent and intricately decorated interiors, including a throne hall and a rocky grotto cave room. The castle's balcony offers breathtaking views overlooking the Alpsee Lake and surrounding lush hills.</p>
                <p>Be sure to continue beyond the castle up into the forested hills for many amazing views overlooking Neuschwanstein, with the most famous viewpoint being the Marienbrücke bridge. Further up are several additional viewpoints. You can even take the cable car up to the top of nearby Tegelberg Mountain, which offers picturesque views over both of Hohenschwangau's castles along the ride up. From the top you're rewarded with far-reaching views over Füssen and many lakes.</p>`
			},
			{
				tab_title: 'Hohenschwangau',
				tab_content: `<p>Also in the village of Hohenschwangau is the more quaint Hohenschwangau Castle which King Ludwig II (who built the Neuschwanstein Castle) grew up in. The castle sits just above the idyllic Alpsee Lake, which you can walk around for extremely scenic views or even explore via paddleboat rental. To learn more about the royal family who lived in these castles you can visit the village's Museum of the Bavarian Kings.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Neuschwanstein Castle (Fall Marienbrücke View)',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Fussen-Hohenschwangau-Schloss-Neuschwanstein-Castle-Fall.jpg',
				image_alt:
					'Schloss Neuschwanstein Castle rising above autumn trees seen from Marienbruecke Bridge in Hohenschwangau, Bavaria, Germany',

				cc_image_url: 'https://www.flickr.com/photos/jiuguangw/5134934131',
				cc_author_url: 'https://www.flickr.com/photos/jiuguangw/',
				cc_author: 'Jiuguang Wang',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Neuschwanstein Castle Balcony View of Alpsee',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Fussen-Hohenschwangau-Schloss-Neuschwanstein-Castle-Balcony-Alpsee-Lake-View.jpg',
				image_alt:
					"Idyllic view overlooking Alpsee Lake amongst the forested hills behind the columned arches of Neuschwanstein Castle's balcony",

				cc_image_url:
					'https://www.flickr.com/photos/stanhua/5387137415/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/stanhua/',
				cc_author: 'stanhua',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Castles & Alpsee seen from Tegelbergbahn Cable Car',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Fussen-Tegelbergbahn-View-of-Schloss-Neuschwanstein-and-Hohenschwangau-Castles-2.jpg',
				image_alt:
					'View of Neuschwanstein and Hohenschwangau Castles with Alpsee surrounded by tall mountains from Tegelberg Cable Car',

				cc_image_url:
					'https://pixabay.com/en/castle-neuschwanstein-castle-2602195/',
				cc_author_url: 'https://pixabay.com/users/Helmut_Kroiss-6107472/',
				cc_author: 'Helmut_Kroiss',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Schloss Hohenschwangau Castle',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Fussen-Hohenschwangau-Schloss-Hohenschwangau-Castle-Tower.jpg',
				image_alt:
					'Main tower of Schloss Hohenschwangau Castle in Bavaria, Southern Germany',

				cc_image_url:
					'https://web.archive.org/web/20161012095513/http://www.panoramio.com/photo/17482846',
				cc_author_url:
					'https://web.archive.org/web/20161012095515/http://www.panoramio.com/user/2601511?with_photo_id=17482846',
				cc_author: 'Gregorini Demetrio',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Neuschwanstein Viewpoint',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Fussen-Hohenschwangau-Schloss-Neuschwanstein-Castle-Neuschwanstein-Viewpoint.jpg',
				image_alt:
					'Neuschwanstein Viewpoint overlooking the Schloss Neuschwanstein Castle from the mountains high above in Bavaria',

				cc_image_url:
					'https://www.flickr.com/photos/maelick/13034978923/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/maelick/',
				cc_author: 'Maëlick',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	heidelberg: {
		id: 'heidelberg',
		itineraries: '',
		destinationName: 'Heidelberg',
		stateName: 'Germany',
		region: 'europe',
		anchor_tag: 'heidelberg-germany',
		destination_link: '/destinations/germany/heidelberg-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/gm3yEHb5HNsDGawF6',
			all_attractions: 'https://goo.gl/maps/Qr1nBZGdfbASS3eF6'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Heidelberg Old Town (Philosopher’s Walk View)',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Heidelberg-Philosophengaerchen-Philosophers-Walk-Altstadt-Old-Town-Overlook.jpg',
				image_alt:
					"View over Old Town Heidelberg, the Old Bridge, and Heidelberg Palace / Castle below mountains from Philosopher's Walk Garden",

				cc_image_url:
					'https://pixabay.com/en/heidelberg-castle-neckar-city-2753813/',
				cc_author_url: 'https://pixabay.com/users/Heidelbergerin-1425977/',
				cc_author: 'Heidelbergerin',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Alte Brücke Bridge (Night)',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Heidelberg-Alte-Bruecke-Old-Bridge-Heidelberg-Night.jpg',
				image_alt:
					'Night-time Neckar River view of illuminated Old Town Heidelberg, Alte Bruecke Old Bridge and Heidelberg Palace / Castle',

				cc_image_url:
					'https://pixabay.com/en/heidelberg-castle-night-germany-3829261/',
				cc_author_url: 'https://pixabay.com/users/kleinicke-10759686/',
				cc_author: 'kleinicke',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Heidelberg Palace Complex',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Heidelberg-Schloss-Heidelberg-Castle-Complex.jpg',
				image_alt:
					'Distant view overlooking the hilltop complex of Schloss Heidelberg Palace / Castle above Heidelberg, Germany',

				cc_image_url:
					'https://pixabay.com/en/heidelberg-heidelberger-schloss-3312229/',
				cc_author_url: 'https://pixabay.com/en/users/heidelbergerin-1425977/',
				cc_author: 'Heidelbergerin',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Otteinrich Building (Heidelberg Palace)',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Heidelberg-Schloss-Heidelberg-Castle-Ottheinrich-Building-Facade.jpg',
				image_alt:
					'Partially-ruined facade of the Otteinrich Building of Heidelberg Palace / Castle in Germany',

				cc_image_url:
					'https://pixabay.com/en/heidelberg-germany-castle-palace-103164/',
				cc_author_url: 'https://pixabay.com/users/12019-12019/',
				cc_author: '12019',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	munich: {
		id: 'munich',
		itineraries: '',
		destinationName: 'Munich',
		stateName: 'Germany',
		region: 'europe',
		anchor_tag: 'munich-germany',
		destination_link: '/destinations/germany/munich-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/t3DYA7YSry2j2y9d7',
			all_attractions: 'https://goo.gl/maps/r3m1AukfKYqLLpEF6'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Museums',
				tab_content: `<p>Munich is the capital of Bavaria in Southern Germany, a city with many attractions including palaces and many museums. Try to visit Munich on Sunday as many museums offer free entrance or reduced prices, including the Glypothek, Pinakothek der Moderne, Alte Pinakothek, and Bavarian National Museum.</p>
                <p>Most of the city's museums are concentrated just northwest of the historic center in the Kunstareal art district. The Alte Pinakothek contains art from the 14th-18th centuries, the Neue Pinakothek contains art from the 18th and 19th centuries, and the Pinakothek der Moderne is a modern and contemporary art museum.</p>
                <p>Also in Kunstareal is the Egyptian Museum Munich, the Glypothek containing ancient Greek and Roman sculptures, the Lenbachhaus museum of contemporary art, and more. The latter two museums sit on the striking King's Square.</p>
                <p>To the southeast of the historic center you'll find the Deutsches Museum, the largest science and technology museum in the world. Further out from the city center to the north are the incredible futuristic structures of the BMW Welt and BMW Museum showcasing many vehicles.</p>`
			},
			{
				tab_title: 'Central Munich',
				tab_content: `<p>Munich's most impressive buildings are centered around the Marienplatz plaza, including the majestic gothic New Town Hall building and the towering St. Peter's Church, among other buildings. Nearby you'll find the famous outdoor Victuals Market and the extremely popular Hofbrauhaus Munchen brewery and restaurant. Just to the south is Asam's Church, a small church with a stunning highly elaborate interior.</p>
                <p>Also in the town's Altstadt historic center you'll find the Munich Residenz, a grandiose royal palace that you can explore, located adjacent to the royal Hofgarten gardens and the lavish Odeonsplatz plaza.</p>`
			},
			{
				tab_title: 'Parks',
				tab_content: `<p>Just north of the Munich Residenz and gardens is the city's vast English Garden park. At the very front end of the park near the Munich Residenz is the park's most famous feature, the Eisbachwelle continuous river wave where you can watch people surfing, a very fascinating sight. The park also hosts the lovely Monopteros structure and the striking Chinese Tower.</p>
                <p>Nearby the BMW Museum is the expansive Olympiapark, which was constructed to host the 1972 Summer Olympics. Enjoy stunning views over the park and its futuristic structures from atop the Olympiaberg Hill Terrace.</p>`
			},
			{
				tab_title: 'Palaces & Dachau',
				tab_content: `<p>On the western outskirts of Munich you'll find the grandiose 17th century Nymphenburg Palace, an expansive baroque palace surrounded by lakes and vast formal gardens. The palace hosts opulent finely detailed interiors as well as several museums. Within the gardens you'll find several mini-palaces and sturctures, as well as monument and beautiful botanical gardens. North of Munich is the similar 17th century Schleissheim Palace Complex consisting of three palaces separated by vast baroque gardens and lakes.</p>
                <p>Northwest of Munich are the remains of the infamous Dachau Concentration Camp Memorial Site, where you can learn about and peer into a darker time in history.</p>`
			}
		],
		attractions: [
			{
				attraction: 'BMW Welt',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Munich-BMW-Welt.jpg',
				image_alt:
					'Glowing futuristic exterior of the BMW Welt museum seen at night in MUnich, Germany',

				cc_image_url:
					'https://pixabay.com/en/munich-bmw-welt-architecture-953613/',
				cc_author_url: 'https://pixabay.com/users/designerpoint-554875/',
				cc_author: 'designerpoint',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Marienplatz Square',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Munich-Marienplatz-Square.jpg',
				image_alt:
					'View overlooking the medieval buildings around Marienplatz square, the main square in Munich, Germany in Bavaria',

				cc_image_url:
					'https://pixabay.com/en/munich-marienplatz-town-hall-1572429/',
				cc_author_url: 'https://pixabay.com/users/designerpoint-554875/',
				cc_author: 'designerpoint',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Neues Rathaus & Marienplatz',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Munich-Neues-Rathaus-New-Town-Hall-and-Marienplatz-View.jpg',
				image_alt:
					"Overlooking the giant Neues Rathaus New City Hall building towering above Munich's Marienplatz square",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Neues_Rathaus_und_Marienplatz_M%C3%BCnchen.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Chris_73',
				cc_author: 'Chris 73',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.3',
				cc_license_gnu: 'GNU 1.3'
			},

			{
				attraction: 'Olympiaberg Hill (Olympic Park)',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Munich-Olympic-Park-Olympiaberg-Hill-Overlook.jpg',
				image_alt:
					"Sunset-colored sky and Munich skyline seen behind the Olympiapark's Olympiaberg tower, seen from Olympiaberg Hill",

				cc_image_url:
					'https://pixabay.com/en/munich-olympic-stadium-olympic-park-2516492/',
				cc_author_url: 'https://pixabay.com/users/designerpoint-554875/',
				cc_author: 'designerpoint',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	rhine_river_valley: {
		id: 'rhine_river_valley',
		itineraries: '',
		destinationName: 'Rhine River Valley',
		stateName: 'Germany',
		region: 'europe',
		anchor_tag: 'rhine-river-valley-germany',
		destination_link: '/destinations/germany/rhine-river-valley-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/j4xJc9o4sNS89xwf8',
			all_attractions: 'https://goo.gl/maps/gu8LBM3n1F5qmJJi7'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Burg Rheinstein Castle (Trechtingshausen)',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Rhine-River-Valley-Trechtingshausen-Burg-Rheinstein-Castle.jpg',
				image_alt:
					"Golden hour lighting up the Burg Rheinstein Castle as it clings to the green hillside above Germany's Rhine River Valley",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Rheinstein.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Manfred_Heyde',
				cc_author: 'Manfred Heyde',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2',
				cc_license_gnu: 'GNU 1.2'
			},

			{
				attraction: 'Postenturm Tower View (Bacharach)',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Rhine-River-Valley-Bacharach-Postenturm-Tower-View.jpg',
				image_alt:
					'Iconic view overlooking Bacharach, Germany and the Rhine River Valley seen from the Postenturm medieval tower',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Bacharach_from_the_Postenturm.jpg&action=history',
				cc_author_url: 'http://jw.nebulis.org/',
				cc_author: 'Jiuguang Wang',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Pfalzgrafenstein & Gutenfels Castles (Kaub)',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Rhine-River-Valley-Kaub-Burg-Pfalzgrafenstein-Castle-and-Burg-Gutenfels-Castle.jpg',
				image_alt:
					'Medieval Burg Pfalzgrafenstein Castle along the Rhine River seen below Burg Gutenfels Castle in Kaub, Germany',

				cc_image_url:
					'https://www.flickr.com/photos/poly-image/8502788937/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/poly-image/',
				cc_author: 'Polybert49',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Mainz Cathedral',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Mainz-Mainzer-Dom-Cathedral-Sunny.jpg',
				image_alt:
					'Stunning pink castle-like exterior of the Mainzer Dom or Mainz Cathedral seen from Marktplatz in Mainz, Germany',

				cc_image_url:
					'https://www.flickr.com/photos/poly-image/8217398174/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/poly-image/',
				cc_author: 'Polybert49',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Sankt Goarshausen Village',
				image_url:
					'https://www.travelimager.com/images/germany/Germany-Rhine-River-Valley-Sankt-Goarshausen-Burg-Katz-Castle-and-Village.jpg',
				image_alt:
					'Rhine River view of the village of Sankt Goarshausen below the medieval Burg Katz Castle in Germany',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Sankt_Goarshausen_Burg_Katz_2012.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Felix_Koenig',
				cc_author: 'Felix König',

				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2',
				cc_license_gnu: 'GNU 1.2'
			}
		]
	},

	dublin: {
		id: 'dublin',
		itineraries: '',
		destinationName: 'Dublin',
		stateName: 'Ireland',
		region: 'europe',
		anchor_tag: 'dublin-ireland',
		destination_link: '/destinations/ireland/dublin-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/7owQ9jbASjB2',
			all_attractions: 'https://goo.gl/maps/z2mdsfCGfUJ2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Central Dublin',
				tab_content: `<p>Among Dublin's top attractions is the country's largest church, the 800 year old gothic St. Patrick's Cathedral. Nearby are several stunning medieval structures, including the Christ Church Cathedral and Dublin Castle. Adjacent to these historic structures is the popular Temple Bar District, which is known for its many pubs and thriving nightlife scene.</p>
                <p>In Central Dublin you'll find the Irish Whiskey Museum offering tours and tastings, the incredible Trinity College Book of Kells Library with its famous Long Room, and the marvelous 17th century St. Stephen's Green, a beautiful tranquil park in the middle of the city. Nearby is the National Museum of Ireland Archaeology featuring many important artifacts and treasures, as well as the National Gallery of fine art.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Along the River Liffey near the the Dublin Port is the popular EPIC Irish Emigration Museum, featuring excellent interactive exhibits detailing the mass emigrations that took place in Ireland's past. Nearby you can admire the sleek contemporary Samuel Beckett Bridge.</p>
                <p>No trip to Dublin is complete without a visit to the famous Guinness Storehouse where you can learn about the beer brewing process and sip a fresh Guinness with great views over the city at the end of the tour. Be sure to also visit the Jameson Distillery which offers brewery tours and tastings. On the western outskirts of Dublin you'll find the striking Kilmainham Gaol, a 19th century prison which now serves as a museum. Nearby is Europe's largest European park, the lush green Phoenix Park with free-roaming deer.</p>`
			}
		],
		attractions: [
			{
				attraction: "St. Patrick's Cathedral",
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-Dublin-St-Patricks-Cathedral-1.jpg',
				image_alt:
					"Striking gothic exterior of the famous St. Patrick's Cathedral in Dublin, Ireland",

				cc_image_url: 'https://www.flickr.com/photos/90412460@N00/21589264886',
				cc_author_url: 'https://www.flickr.com/photos/90412460@N00/',
				cc_author: 'Bro. Jeffrey Pioquinto, SJ',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Temple Bar District',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-Dublin-Temple-Bar-1.jpg',
				image_alt:
					"Busy streets at night outside the famous red Temple Bar, at the heart of Dublin's Temple Bar District",

				cc_image_url:
					'https://pixabay.com/en/temple-bar-pub-bar-beer-cafe-2344400/',
				cc_author_url: 'https://pixabay.com/en/users/Skitterphoto-324082/',
				cc_author: 'Skitterphoto',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Book of Kells Library (Trinity College)',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-Dublin-Trinity-College-Book-of-Kells.jpg',
				image_alt:
					"Iconic two-story hall of the famous Book of Kells Library, part of Dublin's Trinity College",

				cc_image_url: 'https://www.flickr.com/photos/90412460@N00/22717685055/',
				cc_author_url: 'https://www.flickr.com/photos/90412460@N00/',
				cc_author: 'Bro. Jeffrey Pioquinto, SJ',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: "St. Stephen's Green Park",
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-Dublin-St-Stephens-Green-Park.jpg',
				image_alt:
					"Aerial view looking directly down over the lush St. Stephen's Green Park surrounded by urbanized Central Dublin",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Dublin_Stephen%27s_Green-44_edit.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Dronepicr',
				cc_author: 'Dronepicr',

				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0'
			},

			{
				attraction: 'Guinness Storehouse',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-Dublin-Guinness-Storehouse-Brewery.jpg',
				image_alt:
					"Old industrial exterior of Dublin's popular Guinness Storehouse on a cloudy day",

				cc_image_url: 'https://www.flickr.com/photos/bobfamiliar/8329436535/',
				cc_author_url: 'https://www.flickr.com/photos/bobfamiliar/',
				cc_author: 'Bob Familiar',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	galway_cliffs_of_moher: {
		id: 'galway_cliffs_of_moher',
		itineraries: '',
		destinationName: 'Galway & Cliffs of Moher',
		stateName: 'Ireland',
		region: 'europe',
		anchor_tag: 'galway-cliffs-of-moher-ireland',
		destination_link:
			'/destinations/ireland/galway-and-cliffs-of-moher-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/hqiiVGMjLUo',
			all_attractions: 'https://goo.gl/maps/etM4CeZzCTP2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Tour Option',
				tab_content: `<p>Rather than exploring Galway and the Cliffs of Moher on your own, the cheapest and most efficient option is to take an inexpensive day-trip tour from Dublin. Alternatively you can stay in Galway and take a very cheap tour to the Cliffs of Moher, which includes sights such as the Burren that are normally only accessible via car.</p>`
			},
			{
				tab_title: 'Galway',
				tab_content: `<p>Galway is a picturesque city in Western Ireland that you must walk around to truly enjoy. Popular sights in Galway include the colorful and vibrant buildings of the Latin Quarter, the majestic Galway Cathedral, and the beautiful walkway along the River Corrib featuring lush green scenery.</p>`
			},
			{
				tab_title: 'Cliffs of Moher',
				tab_content: `<p>After enjoying Galway you can take the bus to the iconic Cliffs of Moher. These breathtaking ocean cliffs are one of Ireland's most popular tourist spots, featuring trails along the edges of these lush steep cliffs from which you can enjoy gorgeous views above the rugged coastline. A shuttle bus connects both ends of the 8 mile (12.9 km) trail along the cliffs from the towns of Doolin to the north and Kilconnell to the south. In the middle of the cliffs is the giant visitor center and the castle-like O'Brien's Tower overlooking the cliffs and coastline.</p>
                <p>If you have plenty of time leftover after enjoying the Cliffs of Moher, you might consider visiting the medieval Dunguaire Castle, which looks picturesque set amongst the coastline. Many tours to the Cliffs of Moher also stop at this idyllic seaside castle.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Cliffs of Moher (Southwest View)',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-County-Clare-Cliffs-of-Moher-Southwest-View.jpg',
				image_alt:
					'Looking along the grass-covered jagged steep Cliffs of Moher towering above the ocean in County Clare, Ireland near Galway',

				cc_image_url:
					'https://pixabay.com/en/costa-sea-body-of-water-ocean-3270119/',
				cc_author_url: 'https://pixabay.com/en/users/hjrivas-6383351/',
				cc_author: 'hjrivas',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Cliffs of Moher (Northeast View)',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-County-Clare-Cliffs-of-Moher-Northeast-View.jpg',
				image_alt:
					"Sunset over the a section of the Ciffs of Moher with the tiny O'Brien's Tower in the background in County Clare, Ireland",

				cc_image_url:
					'https://pixabay.com/en/cliffs-sea-ireland-moher-landscape-3760571/',
				cc_author_url: 'https://pixabay.com/en/users/renegossner-10236719/',
				cc_author: 'ReneGossner',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: "O'Brien's Tower (Cliffs of Moher)",
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-County-Clare-Cliffs-of-Moher-OBriens-Tower.jpg',
				image_alt:
					"Patterns in the long grasses atop the Cliffs of Moher from the wind with O'Brien's Tower in background, in County Clare, Irelamd",

				cc_image_url:
					'https://www.flickr.com/photos/brianpowersphotography/15853767814/',
				cc_author_url: 'https://www.flickr.com/photos/brianpowersphotography/',
				cc_author: 'Brian Powers',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'River Corrib Walk (Galway)',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-County-Galway-Galway-River-Corrib-Walk.jpg',
				image_alt:
					'Wooden pathway offering a scenic walk atop the River Corrib in Galway, Ireland',

				cc_image_url:
					'https://www.flickr.com/photos/infomatique/28337049274/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/infomatique/',
				cc_author: 'William Murphy',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Poulnabrone Dolmen Neolithic Tomb (Tour/Car Only)',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-County-Clare-Poulnabrone-Dolmen-Tomb.jpg',
				image_alt:
					'Massive table-like stone construction of the Neolithic Poulnabrone Dolmen tomb in The Burren, Ireland',

				cc_image_url: 'https://www.flickr.com/photos/76416192@N06/15409726706',
				cc_author_url: 'https://www.flickr.com/photos/76416192@N06/',
				cc_author: 'Abdullah Bin Sahl',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	ireland_tours: {
		id: 'ireland_tours',
		itineraries: '',
		destinationName: 'Ireland Tours',
		stateName: 'Ireland',
		region: 'europe',
		anchor_tag: 'ireland-tours-ireland',
		destination_link: '/destinations/ireland/county-cork-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/Ka2DRTVGMQk'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Cliffs of Moher',
				tab_content: `<p>The iconic Cliffs of Moher are one of Ireland's most popular tourist attractions, featuring trails along the edges of these lush steep cliffs from which you can enjoy gorgeous views above the rugged coastline. Many tours to the CLiffs of Moher also include a stop in the picturesque seaside town of Galway, which is known for its vibrant green scenery and lovely historic buildings.</p>`
			},
			{
				tab_title: "Giant's Causeway",
				tab_content: `<p>Two of Northern Ireland's top attractions can be seen if you book a tour that includes both, which is highly recommended. One of these attractions is the Giant's Causeway, where you can admire breathtaking natural step formations consisting of geometric rock columns along the coast with extremely beautiful views. The round-trip distance hiking along these surreal formations is approximately 2.4 miles (3.9 km) round-trip.</p>
                <p>The other Northern Ireland attraction is the Carrick-a-Rede Rope Bridge. This bridge connects to a tiny island and can be reached via a walk of approximately 1.5 miles (2.4 km) round-trip that provides views over one of the most gorgeous parts of the coast in Ireland, with vivid blue-green water and lush grassy cliffs.</p>`
			},
			{
				tab_title: 'Blarney Castle',
				tab_content: `<p>Another popular day tour from Dublin is the Blarney Castle, which is located just northwest of Cork. This small partially ruined medieval castle is home to the famous Blarney Stone, which is kissed in order for one to be gifted with eloquence. You should explore the grounds surrounding the castle as well where you'll find beautiful gardens and the castle-like Blarney Castle House.</p>
                <p>If you book the right Blarney Castle tour then they'll also take you to two more castles, the Rock of Cashel and Cahir Castle. The Rock of Cashel is a magnificent 900 year old medieval fortress that has been quite well preserved with multiple structures within its walls. The Cahir Castle is a stunning 12th century fortress that sits right on a small island in a river just south of Cashel.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Cliffs of Moher (Southwest View)',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-County-Clare-Cliffs-of-Moher-Southwest-View.jpg',
				image_alt:
					'Looking along the grass-covered jagged steep Cliffs of Moher towering above the ocean in County Clare, Ireland near Galway',

				cc_image_url:
					'https://pixabay.com/en/costa-sea-body-of-water-ocean-3270119/',
				cc_author_url: 'https://pixabay.com/en/users/hjrivas-6383351/',
				cc_author: 'hjrivas',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: "Giant's Causeway (Northern Ireland)",
				image_url:
					'https://www.travelimager.com/images/northern-ireland/Northern-Ireland-Causeway-Coast-Bushmills-Giants-Causeway.jpg',
				image_alt:
					"Famous Giant's Causeway coastal formations consisting of thousands of perfect geometric rock columns rising out of the sea",

				cc_image_url:
					'https://www.flickr.com/photos/38703275@N06/4617532691/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/38703275@N06/',
				cc_author: 'rosario fiore',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Carrick-a-Rede Rope Bridge (Northern Ireland)',
				image_url:
					'https://www.travelimager.com/images/northern-ireland/Northern-Ireland-Causeway-Coast-Ballycastle-Carrick-a-Rede-Bridge.jpg',
				image_alt:
					"Clifftop view of the Carrick-a-Rede Rope Bridge spanning the water connecting a small island along Ireland's Causeway Coast",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Carrick-a-Rede_Rope_Bridge,_Northern_Ireland_-_Diliff.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Diliff',
				cc_author: 'David Iliff',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Blarney Castle (Blarney Stone)',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-County-Cork-Blarney-Blarney-Castle.jpg',
				image_alt:
					'Famous partially-ruined medieval Blarney Castle, set amongst vibrant gardens and the morning fog, near Cork, Ireland',

				cc_image_url: 'https://www.flickr.com/photos/donncha/21893993463',
				cc_author_url: 'https://www.flickr.com/photos/donncha/',
				cc_author: 'Donncha O Caoimh',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Rock of Cashel',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-County-Tipperary-Cashel-Rock-of-Cashel.jpg',
				image_alt:
					'Looking up at the incredible medieval stone castle ruins of the Rock of Cashel in County Tipperary, Ireland',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Rock_of_Cashel_-_Tipperary,_Ireland_-_August_16,_2008.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:GiorgioGaleotti',
				cc_author: 'Giorgio Galeotti',

				cc_license_url: 'https://creativecommons.org/licenses/by/4.0/legalcode',
				cc_license: 'CC BY 4.0'
			},

			{
				attraction: 'Cahir Castle',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-County-Tipperary-Cahir-Cahir-Castle.jpg',
				image_alt:
					'Beautiful view along the river of the Cahir Castle which sits on a tiny river island in County Tipperary, Ireland',

				cc_image_url: 'https://www.flickr.com/photos/jonnyb558/6961416840/',
				cc_author_url: 'https://www.flickr.com/photos/jonnyb558/',
				cc_author: 'John5199',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	ring_of_kerry: {
		id: 'ring_of_kerry',
		itineraries: '',
		destinationName: 'Ring of Kerry',
		stateName: 'Ireland',
		region: 'europe',
		anchor_tag: 'ring-of-kerry-ireland',
		destination_link: '/destinations/ireland/ring-of-kerry-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/r6jhibjz8J32',
			all_attractions: 'https://goo.gl/maps/RwftfcoK9Xx'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Great Skellig Island',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-Ring-of-Kerry-Great-Skellig-Michael-Island.jpg',
				image_alt:
					'Rocky crag mountains sticking out of the steep green fields atop tiny Great Skellig Island off the coast of Ring of Kerry',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Skellig_Michael_2014.JPG&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Niki.L',
				cc_author: 'Niki.L',

				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0'
			},

			{
				attraction: 'Ballinskelligs Castle',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-Ring-of-Kerry-Ballinskelligs-Castle.jpg',
				image_alt:
					"Tiny medieval ruins of Ballinskelligs Castle along the scenic coast with islands in background, along Ireland's Ring of Kerry",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Ballinskelligs_Castle.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Ballinskelligs_Castle.jpg&action=history',
				cc_author: 'Kmcnamee',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Ring of Kerry Lookout (Balleen)',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-Ring-of-Kerry-Balleen-Ring-of-Kerry-Lookout.jpg',
				image_alt:
					'Golden hour view overlooking many islands and stunning coastline of the Ring of Kerry seen in Balleen, Ireland',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Derrynane_(Ring_of_Kerry,_Co._Kerry).jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Derrynane_(Ring_of_Kerry,_Co._Kerry).jpg&action=history',
				cc_author: 'Raul Corral',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: "St. Fionan's Monastery (Great Skellig Island)",
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-Ring-of-Kerry-Great-Skellig-Michael-Island-St-Fionans-Monastery.jpg',
				image_alt:
					"7th century stone dome structures of St. Fionan's Monastery atop the UNESCO listed Great Skellig Island near Ring of Kerry",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Skellig_hives.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Skellig_hives.jpg&action=history',
				cc_author: 'Towel401',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Ballycarbery Castle',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-Ring-of-Kerry-Ballycarbery-Castle.jpg',
				image_alt:
					'Stunning ruins of the 16th century Ballycarbery Castle along the Ring of Kerry coast surrounded by grazing cows',

				cc_image_url: 'https://www.flickr.com/photos/93017481@N00/142314724',
				cc_author_url: 'https://www.flickr.com/photos/cesar/',
				cc_author: 'Cesar Gonzalez Palomo',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Rossbeigh Strand Beach',
				image_url:
					'https://www.travelimager.com/images/ireland/Ireland-Ring-of-Kerry-Rossbeigh-Strand-Beach.jpg',
				image_alt:
					'Incredibly picturesque Rossbeigh Strand Beach with its vibrant blue waters and green mountains along the Ring of Kerry',

				cc_image_url: 'https://www.flickr.com/photos/boblinsdell/27747996756/',
				cc_author_url: 'https://www.flickr.com/photos/boblinsdell/',
				cc_author: 'Robert Lindsell',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	amalfi_coast: {
		id: 'amalfi_coast',
		itineraries: 'italy, europe-6w, europe-1m, europe-2m',
		destinationName: 'Amalfi Coast',
		stateName: 'Italy',
		region: 'europe',
		anchor_tag: 'amalfi-coast-italy',
		destination_link: '/destinations/italy/amalfi-coast-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/44YxxZPCFJZyrQ6a8',
			all_attractions: 'https://goo.gl/maps/hMmu969f1kPi9uGc7'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Intro',
				tab_content: `<p>Sorrento is known for its stunning marinas, which sit below sheer cliffs topped with elegant buildings. The cliffs are best admired from the town's ferry terminal as well as the Spiaggia Sorento beach of Marina Grande. The town also hosts the lovely Cathedral of Sorrento with its ornate interiors, as well as the Vallone dei Mulini, a valley gorge containing the ruins of an ancient mill covered in lush green plants. From town you can hike to a natural ocean pool, the striking Regina Giovanna Bath.</p>
                <p>Positano is famous for its gorgeous beaches which sit below the many colorful houses built onto the sides of the mountains. Both the Positano Spiaggia and Fornillo Beaches are excellent places to swim and enjoy the best views of the town.</p>`
			},
			{
				tab_title: 'Sorrento & Positano',
				tab_content: `<p>Sorrento is known for its stunning marinas, which sit below sheer cliffs topped with elegant buildings. The cliffs are best admired from the town's ferry terminal as well as the Spiaggia Sorento beach of Marina Grande. The town also hosts the lovely Cathedral of Sorrento with its ornate interiors, as well as the Vallone dei Mulini, a valley gorge containing the ruins of an ancient mill covered in lush green plants. From town you can hike to a natural ocean pool, the striking Regina Giovanna Bath.</p>
                <p>Positano is famous for its gorgeous beaches which sit below the many colorful houses built onto the sides of the mountains. Both the Positano Spiaggia and Fornillo Beaches are excellent places to swim and enjoy the best views of the town.</p>`
			},
			{
				tab_title: 'Amalfi & Atrani',
				tab_content: `<p>Much further east is Amalfi, which hosts a small beach and harbor wall from which you can enjoy majestic views of the city. The 9th century Amalfi Cathedral is incredibly gorgeous and highly ornate, hosting the crypt of Saint Andrew, a lovely white cloister, and an elegant bell tower. This picturesque cathedral towers above the charming Piazza Duomo plaza. For views high above Amalfi, you can hike up to the Torre dello Ziro, a medieval watch tower high above the coast which you can reach via trail from northern Amalfi.</p>
                <p>From Amalfi you can take the bus or drive to Pianillo, which hosts the trailhead for the Sentiero degli Dei (Path of the Gods). This path follows along the cliffs high above the coast offer truly breathtaking views, with a one-way-distance of about 4.5 miles between the bus stop in Pianillo and the bus stop in Arienzo, a tiny village adjacent to Positano.</p>
                <p>Next to Amalfi is the village of Artani with its rustic Piazzetta square, the charming seaside Collegiata Santa Maria Maddalena church, and the Atrani Beach, from which you can enjoy majestic views of the village.</p>`
			},
			{
				tab_title: 'Ravello & More',
				tab_content: `<p>High above Atrani in the mountains is the town of Ravello, which is known for its stunning villas and gardens, especially the Villa Rufolo. The 800 year old Moorish castle-like Villa Rufolo hosts elegant gardens with sweeping views over the Amalfi Coast. The Villa Cimbrone is a hotel however you can pay a small fee to access its Terrazza Dell'Infinito, a cliff-top terrace offering magnificent far-reach views over the coast. Be sure to also visit the town's lovely Ravello Cathedral.</p>
                <p>Just east of Ravello in the town of Minori you can explore the quaint remains of an ancient Roman Villa and enjoy mesmerizing views over the town from the Sentiero Dei Limoni, which requires a short hike to reach. Lastly is the town of Cetara, another picturesque Amalfi Coast town which is best admired from the its harbor walls along the Porto di Cetara. One of the town's landmarks is the castle-like Torre di Cetara tower, which sits above the coast.</p>
                <p>Approximately 1-2 hours via train and/or bus from the Amalfi Coast is the Paestum Archaeological Park. This UNESCO world heritage site which hosts three of the most incredibly well-preserved Ancient Greek temples in the world, which are between 2,500-2,600 years old.</p>`
			}
		],
		attractions: [
			{
				id: 'amalfi-coast-16',
				carouselId: 'amalfi',
				itineraryCarousel: 'amalfi-coast-italy',
				attraction: 'Amalfi Cathedral',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Amalfi-Coast-Amalfi-Duomo-di-Amalfi-Cathedral.jpg',
				image_alt:
					'Iconic Duomo di Amalfi Cathedral with its zebra-like patterns below the tall mountains of the Amalfi Coast',
				cc_image_url:
					'https://pixabay.com/en/amalfi-italy-church-cathedral-631698/',
				cc_author_url: 'https://pixabay.com/users/YvM-762090/',
				cc_author: 'YvM',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'amalfi-coast-10',
				carouselId: 'positano',
				itineraryCarousel: 'amalfi-coast-italy',
				attraction: 'Positano Spiaggia Beach',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Amalfi-Coast-Positano-Positano-Spiaggia-Beach-View.jpg',
				image_alt:
					"Looking down the coastline along Positano's Spiaggia Beach below the village of Positano along Italy's Amalfi Coast",
				cc_image_url:
					'https://www.pexels.com/photo/photography-of-beach-near-mountain-919233/',
				cc_author_url: 'https://www.pexels.com/@myersmc16',
				cc_author: 'Gotta Be Worth It',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'amalfi-coast-20',
				carouselId: 'amalfi',
				itineraryCarousel: 'amalfi-coast-italy',
				attraction: 'Atrani (Saracen Tower View)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Amalfi-Coast-Atrani-Village-Saracen-Tower-View.jpg',
				image_alt:
					"View overlooking the stunning seaside village of Atrani from Amalfi's Sacaren Tower along Italy's Amalfi Coast",
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Atrani_(Costiera_Amalfitana,_23-8-2011).jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Paolostefano1412',
				cc_author: 'Paolo Costa Baldi',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC-BY-SA 3.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2',
				cc_license_gnu: 'GNU 1.2'
			},
			{
				id: 'amalfi-coast-23',
				carouselId: 'ravello',
				itineraryCarousel: 'amalfi-coast-italy',
				attraction: 'Villa Rufolo Terrace Garden (Ravello)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Amalfi-Coast-Ravello-Villa-Rufolo-Terrace-Garden-View.jpg',
				image_alt:
					'Overlooking the beautiful fine gardens on a terrace with incredible views high above the Amalfi Coast in background',
				cc_image_url:
					'https://www.flickr.com/photos/imcountingufoz/5117170017/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/imcountingufoz/',
				cc_author: 'Stephanie Chapman',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'amalfi-coast-12',
				carouselId: 'path-of-the-gods',
				itineraryCarousel: 'amalfi-coast-italy',
				attraction: 'Path of the Gods',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Amalfi-Coast-Path-of-the-Gods-Trailhead-View-over-Positano.jpg',
				image_alt:
					'Heavenly view over the Amalfi coastline of the Sorrentine Peninsula and the village of Positano from the Path of the Gods',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Path_of_the_Gods_-_Italy.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Alanthebox',
				cc_author: 'Alanthebox',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},

			{
				id: 'amalfi-coast-3',
				carouselId: 'sorrento',
				itineraryCarousel: 'amalfi-coast-italy',
				attraction: 'Villa Comunale Park View (Sorrento)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Sorrento-Villa-Comunale-Park-Marina-Piccola-and-Port-of-Sorrento-Overlook.jpg',
				image_alt:
					"Picturesque view overlooking Marina Piccola and the Bay of Naples from Srrento's Villa Comunale Park",
				cc_image_url: 'https://www.flickr.com/photos/pss/3636040095/',
				cc_author_url: 'https://www.flickr.com/photos/pss/',
				cc_author: 'Paul Stevenson',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'amalfi-coast-32',
				carouselId: 'paestum',
				itineraryCarousel: 'amalfi-coast-italy',
				attraction: 'Temples of Hera (Paestum)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Salerno-Province-Paestum-Paestum-Archaeological-Park-Temples-of-Hera.jpg',
				image_alt:
					"The two well-preserved ancient Greek Temples of Hera at Italy's Paestum Archaeological Park in Salerno Province",
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Veduta_di_Paestum_2010.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Oliver-Bonjoch',
				cc_author: 'Oliver-Bonjoch',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC-BY-SA 3.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2',
				cc_license_gnu: 'GNU 1.2'
			}
		]
	},
	capri: {
		id: 'capri',
		itineraries: 'italy, europe-6w, europe-1m, europe-2m',
		destinationName: 'Capri',
		stateName: 'Italy',
		region: 'europe',
		anchor_tag: 'capri-italy',
		destination_link: '/destinations/italy/capri-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/4LKqpCwDgAHyM69P7',
			all_attractions: 'https://goo.gl/maps/s8rkQxhufRG8tdxo8'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Central Capri',
				tab_content: `<p>The picturesque island of Capri is located just off the coast of the Amalfi Coast and is only accessible via ferry from Naples, Sorrento, or Amafli. This tiny island can be easily explored on foot, although it is also recommended to explore Capri's coastline with a boat tour, to see sights such as the Faraglioni sea arch and the vibrant blue Grotta Azzurra sea cave. Additional sea caves include the Grotta Verde and Grotta Bianca (Green and White Caves).</p>
                <p>Capri's ferry arrives in Marina Grande, a gorgeous port which sits below the island's mountains. From Marina Grande you can walk up to the Piazetta main square which hosts many restaurants and shops, along with fantastic coastal views.</p>
                <p>Near Piazzetta you can visit the Giardini di Augusto, a beautiful clifftop botanical garden with views overlooking the Fraglioni sea arch. From the garden you can hike down to the stunning Marina Piccola Beach or hike up to the Belvedere Tragara viewpoint, which overlooks Marina Piccola from high above.</p>`
			},
			{
				tab_title: 'Eastern Capri',
				tab_content: `<p>On the eastern side of the island is the stunning Arco Naturale formation, a brilliant natural arch which sits at the edge of the cliffs above the coast. Nearby you can explore the ruins of the Villa Jovis, an ancient palace built by Roman Emperor Tiberius. Also close-by is the neoclassical Villa Lysis mansion which offers incredible views overlooking Marina Grande.</p>`
			},
			{
				tab_title: 'Western Capri',
				tab_content: `<p>From Marina Grande near the center of the island you can walk up the ancient Phoenician Steps to one of Capri's most popular attractions, the Villa San Michele mansion. This striking villa hosts ancient artifacts and a lovely garden with gorgeous views overlooking Marina Grande from the west.</p>
                <p>Nearby the villa is the Monte Solaro Chairlift which takes you up to the highest point on the island, offering truly breathtaking panoramic views over much of Capri and stretching out to the Amalfi Coast.</p>`
			}
		],
		attractions: [
			{
				id: 'capri-14',
				carouselId: 'villa-san-michele-monte-solaro',
				itineraryCarousel: 'capri-italy',
				attraction: 'Monte Solaro View',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Capri-Monte-Solaro-Statue-and-View.jpg',
				image_alt:
					"Picturesque views over Capri stretching to the Sorrentine Peninsula and Italian Mainland from Capri Island's Monte Solaro",
				cc_image_url:
					'https://www.flickr.com/photos/99852712@N04/28715129842/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/99852712@N04/',
				cc_author: 'Veselina Dzhingarova',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'capri-1',
				carouselId: 'marina-grande',
				itineraryCarousel: 'capri-italy',
				attraction: 'Marina Grande Harbor',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Capri-Marina-Grande-Harbor-View-West.jpg',
				image_alt: "Picturesque sea view of Capri Island's Marina Grande Harob",
				cc_image_url:
					'https://pixabay.com/en/capri-italy-mediterranean-coast-2584749/',
				cc_author_url: 'https://pixabay.com/users/falco-81448/',
				cc_author: 'falco',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'capri-13',
				carouselId: 'villa-san-michele-monte-solaro',
				itineraryCarousel: 'capri-italy',
				attraction: 'Villa San Michele Gardens View',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Capri-Villa-San-Michele-Gardens-View.jpg',
				image_alt:
					'Stunning views overlooking Capri from high above seen from the Gardens of Villa San Michele',
				cc_image_url:
					'https://commons.wikimedia.org/wiki/File:Overlooking_Capri_harbour_from_the_rotunda_in_Villa_San_Michele_Anacapri_BW_2013-05-14_13-55-21.jpg',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Berthold_Werner',
				cc_author: 'Berthold Werner',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'capri-7',
				carouselId: 'marina-piccola-east-capri',
				itineraryCarousel: 'capri-italy',
				attraction: 'Marina Piccola',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Capri-Marina-Piccola-Sunset.jpg',
				image_alt:
					"Breathtaking sunset view overlooking Capri's Marina Piccola and the island's coastline",
				cc_image_url: 'https://www.flickr.com/photos/jikatu/37639825755/',
				cc_author_url: 'https://www.flickr.com/photos/jikatu/',
				cc_author: 'Jimmy Baikovicius',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'capri-4',
				carouselId: 'marina-grande',
				itineraryCarousel: 'capri-italy',
				attraction: 'Gardens of Augustus View',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Capri-Gardens-of-Augustus-Viewpoint.jpg',
				image_alt:
					"View overlooking the Faraglioni Sea Rocks and Marina Piccola from Capri's Gardens of Augustus",
				cc_image_url: 'https://pixabay.com/en/italy-capri-panorama-port-2484493/',
				cc_author_url: 'https://pixabay.com/users/DEZALB-1045091/',
				cc_author: 'DEZALB',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	cinque_terre: {
		id: 'cinque_terre',
		itineraries: 'italy, europe-6w, europe-1m, europe-2m',
		destinationName: 'Cinque Terre',
		stateName: 'Italy',
		region: 'europe',
		anchor_tag: 'cinque-terre-italy',
		destination_link: '/destinations/italy/cinque-terre-attractions-guide',
		attractionMapLinks: {},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>Cinque Terre consists of five picturesque towns/villages along the coast which are surrounded by steep mountains and cliffs along the Italian Riviera. These idyllic towns are among the most beautiful places in the world, and are all connected and reached within minutes via a fast and efficient train which also connects to Sestri Levante to the northwest and La Spezia to the southeast.</p>
                <p>The five villages of Cinque Terre from northwest to southeast are Monterosso al Mare (the largest town), Vernazza, Corniglia, Manarola, and Riomaggiore. Also frequently visited with Cinque Terre is the beautiful town of Portovenere, located just southeast of the villages on the tip of a peninsula.</p>
                <p>If you'd like to experience the towns of Cinque Terre from a different perspective (and in a short amount of time), consider taking a boat tour along the coast to admire these gorgeous villages from the ocean.</p>
                <p>The best way to experience the Cinque Terre coast is to hike along the Sentiero Azzuro Trail, which connects the five towns and features stunning coastal views along the way. This trail and others require a permit to hike along (which can be easily and cheaply purchased online) and can be combined with train rides between the villages. Another amazing trail is the High Trail which travels high up in the mountains above the Cinque Terre villages, offering breathtaking views over the coastline and towns.</p>`
			},
			{
				tab_title: 'North Villages',
				tab_content: `<p>Monterosso features two long sandy beaches (in contrast to the rocky beaches of the other towns) and the gothic striped Chiesa di San Giovanni Battista church.</p>
                <p>Vernazza hosts a much smaller beach but an incredibly beautiful port surrounded by clusters of rustic colorful buildings. On one side of Vernazza's port near the water is the 14th century Santa Margherita di Antiochia Church, while the other side hosts the hilltop Castello Doria castle, which sits high above the coast offering breathtaking views over the city. You can also enjoy excellent views of Vernazza from the town's harbor walls and the Vista Virtuale viewpoint in the hills just northwest of the train station as well.</p>`
			},
			{
				tab_title: 'South Villages',
				tab_content: `<p>The small village of Corniglia is very tiny but dense, consisting of many colorful homes and buildings which sit atop the cliffs overlooking the ocean. The best views of Corniglia can be admired along the road leading down to the village, while the View Point Corniglia provides great coastal views.</p>
                <p>Manarola is regraded to be among the most beautiful of the five towns, with colorful homes and structures clustered atop rocky steep cliffs around the town's tiny marina. The breathtaking Manarola Scenic Viewpoint is the best location to enjoy views of the this highly photogenic town.</p>
                <p>The most southeastern town of Cinque Terre is Riomaggiore, which is the second largest of the five towns. Riomaggiore features a sizable beach, a picturesque harbor surrounded by colorful buildings, and the 13th century Castello di Riomaggiore, a small hilltop castle with partial views overlooking the town. You can enjoy the most amazing views of Riomaggiore from the breakwater along the harbor.</p>`
			},
			{
				tab_title: 'Portovenere',
				tab_content: `<p>The UNESCO listed Portovenere Old Town is best known for its incredible Church of St. Peter which is connected to the town via a medieval causeway. Portovenere is also known for its picturesque colorful homes along the water, and the large castle above the town which offers amazing coastal views. Additionally you can swim or take a very short ferry to the island of Palmaria just off the coast of Portovenere.</p>`
			}
		],
		attractions: [
			{
				id: 'cinque-terre-14',
				carouselId: 'riomaggiore',
				itineraryCarousel: 'cinque-terre-italy',
				attraction: 'Riomaggiore Coast',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Cinque-Terre-Riomaggiore-Harbor-View.jpg',
				image_alt:
					'View looking up at the colorful buildings along the Riogmaggiore harbor in Cinque Terre',
				cc_image_url:
					'https://www.flickr.com/photos/31387329@N07/35941596534/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/31387329@N07/',
				cc_author: 'Chris Johnston',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'cinque-terre-13',
				carouselId: 'corniglia-and-manarola',
				itineraryCarousel: 'cinque-terre-italy',
				attraction: 'Manarola Scenic Viewpoint (Sunset)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Cinque-Terre-Manarola-Manarola-Scenic-Viewpoint-Sunset.jpg',
				image_alt:
					'Sunset view overlooking the idyllic Cinque Terre Village of Manarola above the coast from the Manarola Scenic Viewpoint',
				cc_image_url:
					'https://pixabay.com/photos/vernazza-town-scenery-reflection-1914919/',
				cc_author_url: 'https://pixabay.com/users/AlwaysWanderlust-3858945/',
				cc_author: 'AlwaysWanderlust',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'cinque-terre-2',
				carouselId: 'monterosso-al-mare',
				itineraryCarousel: 'cinque-terre-italy',
				attraction: 'Monterosso al Mare Beach & Scoglio Rock',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Cinque-Terre-Monterosso-al-Mare-Beach-and-Scoglio-Rock.jpg',
				image_alt:
					'Overlooking the vibrant blue waters and Scoglio Rock along the sandy beach of Monterosso al Mare in Cinque Terre',
				cc_image_url:
					'https://pixabay.com/en/seashore-sea-beach-travel-water-3097822/',
				cc_author_url: 'https://pixabay.com/users/kirkandmimi-763448/',
				cc_author: 'kirkandmimi',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'cinque-terre-7',
				carouselId: 'vernazza',
				itineraryCarousel: 'cinque-terre-italy',
				attraction: 'Torre Doria View at Sunset (Vernazza)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Cinque-Terre-Vernazza-Harbor-View-Sunset.jpg',
				image_alt:
					'Iconic view overlooking the village of Vernazza and its colorful rustic buildings along the Cinque Terre coast',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:View_of_Vernazza.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Smtunli',
				cc_author: 'Svein-Magne Tunli - tunliweb.no',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'cinque-terre-25',
				carouselId: 'portovenere',
				itineraryCarousel: 'cinque-terre-italy',
				attraction: 'Church of St. Peter (Doria Castle View)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Cinque-Terre-Portovenere-Church-of-St-Peter-Castello-Doria-Castle-View.jpg',
				image_alt:
					"Early evening view overlooking the Church of St. Peter and pathway leading to it from Portovenere's Castle Doria",
				cc_image_url: 'https://www.flickr.com/photos/lccasartelli/14253783805/',
				cc_author_url: 'https://www.flickr.com/photos/lccasartelli/',
				cc_author: 'Luca Casartelli',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'cinque-terre-20',
				carouselId: 'portovenere',
				itineraryCarousel: 'cinque-terre-italy',
				attraction: 'Portovenere Old Town (Port View)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Cinque-Terre-Portovenere-Port-View-of-Village.jpg',
				image_alt:
					"Harbor view of the colorful rustic buildings lining Portovenere's Old Town seafront promenade",
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:1_porto_venere_2012.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Chensiyuan',
				cc_author: 'Chensiyuan',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2',
				cc_license_gnu: 'GNU 1.2'
			}
		]
	},
	florence: {
		id: 'florence',
		itineraries: 'italy, europe-6w, europe-1m, europe-2m',
		destinationName: 'Florence',
		stateName: 'Italy',
		region: 'europe',
		anchor_tag: 'florence-italy',
		destination_link: '/destinations/italy/florence-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/eXkWiUBjR6DQovBD8',
			all_attractions: 'https://goo.gl/maps/oc92wyCiVpWoggB9A'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Florence Cathedral',
				tab_content: `<p>Florence is the capital of Italy's Tuscany region and is considered the birthplace of the Renaissance. Within the city's historic center you'll find many rustic Renaissance-style buildings and plazas, the most popular square being the Piazza del Duomo. This square hosts the magnificent 13th century Duomo Cathedral, the Giotto's Bell Tower which you can climb for stunning views over the city, and the lavish and intricately decorated Baptistery of St. John.</p>
                <p>The Museum of Opera houses all of the art works from the Duomo Cathedral including statues by Michelangelo. It's also possible to climb up to the cathedral's Brunelleschi Dome for more fantastic views.</p>`
			},
			{
				tab_title: 'Iconic Attractions',
				tab_content: `<p>Just south of the Duomo Cathedral are two more stunning piazza squares, the Piazza della Repubblica and the Piazza della Signoria, the latter of which hosts many fine statues and monuments, including an exact replica of Michelangelo's David. Also on this piazza is the imposing castle-like Palazzo Vecchio, a 13th century palace hosting exquisite interiors.</p>
                <p>Nearby the Piazza della Signoria is the famous Uffizi Gallery, which is home to the world's largest collection of Renaissance-era art hosted within a grandiose 16th century structure. Adjacent is the Museo Galileo museum of historic scientific instruments. Very close-by is the city's iconic Ponte Vecchio bridge, one of the few remaining covered bridges in the world.</p>
                <p>Within the Galleria dell'Accademia you'll find Michelangelo's original David sculpture and other Renaissance art. Nearby is the San Marco Museum with similar collections. Also interesting is the Galileo Museum featuring a plethora of instruments created by the famous astronomer and physicist.</p>`
			},
			{
				tab_title: 'Churches',
				tab_content: `<p>Just north of the Duomo Cathedral you can tour the 15th century Riccardi Medici Palace and marvel at the elaborate art-filled interior of the Basilica di San Lorenzo. This basilica hosts the Laurentian Medici Library designed by Michelangelo and the opulent Medici Chapel, which houses the Medici family's tombs.</p>
                <p>Other must-see churches in Florence include the striking 15th century Basilica di Santa Maria Novella west of the Duomo Cathedral and the gorgeous Basilica of Santa Croce east of the Duomo, which houses the tombs of both Galileo and Michelangelo.</p>`
			},
			{
				tab_title: 'More',
				tab_content: `<p>Across the Arno River you can enjoy the most incredible and iconic views over Florence from the Piazzale Michelangelo terrace, which provides breathtaking views both during the day and night. Adjacent is the Giardino delle Rose terraced rose gardens and the impressive 11th century Abbazia di San Miniato al Monte medieval abbey.</p>
                <p>The southern side of the river also hosts the exquisite Pitti Palace, a vast royal palace once occupied by Napoleon which hosts a collection of Renaissance masterpieces. Nearby you can enjoy the beautiful 15th century Boboli Gardens and take in amazing views from the Forte di Belvedere hilltop fortress. Also close-by are the hillside Giardino Bardini gardens and villa offering more views over the city.</p>`
			}
		],
		attractions: [
			{
				id: 'florence-28',
				carouselId: 'piazzale-michelangeo',
				itineraryCarousel: 'florence-italy',
				attraction: 'Piazzale Michelangelo (Sunset)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Florence-Firenze-Piazzale-Michelangelo-View-Sunset.jpg',
				image_alt:
					"Sunset view from Piazzale Michelangelo over Arno River and rustic buildings of Florence, Italy and Florence Cathedral's Dome",
				cc_image_url:
					'https://pixabay.com/en/florence-skyline-sunset-cityscape-1289364/',
				cc_author_url: 'https://pixabay.com/users/MustangJoe-2162920/',
				cc_author: 'MustangJoe',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'florence-1',
				carouselId: 'piazza-del-duomo',
				itineraryCarousel: 'florence-italy',
				attraction: 'Piazza del Duomo',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Florence-Firenze-Piazza-del-Duomo-Florence-Cathedral-and-Giottos-Bell-Tower.jpg',
				image_alt:
					"Tourists crowding the popular Piazza del Duomo below the towering Florence Cathedral and Giotto's Bell Tower",
				cc_image_url:
					'https://pixabay.com/en/florence-duomo-tower-baptistry-2104754/',
				cc_author_url: 'https://pixabay.com/users/kirkandmimi-763448/',
				cc_author: 'kirkandmimi',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'florence-9',
				carouselId: 'medici-palace-and-ponte-vecchio',
				itineraryCarousel: 'florence-italy',
				attraction: 'Ponte Vecchio Bridge',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Florence-Firenze-Ponte-Vecchio-Bridge.jpg',
				image_alt:
					"Medieval-era Ponte Vecchio bridge, one of Florence's most iconic attractions spanning the Arno River",
				cc_image_url:
					'https://pixabay.com/en/italy-bridge-water-florence-3984986/',
				cc_author_url: 'https://pixabay.com/users/ErvinGjata-5075933/',
				cc_author: 'ErvinGjata',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'florence-37',
				carouselId: 'florence-churches',
				itineraryCarousel: 'florence-italy',
				attraction: 'Basilica di Santa Croce',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Florence-Firenze-Basilica-Santa-Croce.jpg',
				image_alt:
					'Picturesque view of the lavish facade of the Basilica di Santa Croce in Florence, Italy',
				cc_image_url:
					'https://pixabay.com/en/santa-croce-basilica-santa-croce-2226191/',
				cc_author_url: 'https://pixabay.com/users/kirkandmimi-763448/',
				cc_author: 'kirkandmimi',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'florence-2',
				carouselId: 'piazza-del-duomo',
				itineraryCarousel: 'florence-italy',
				attraction: 'Florence Cathedral',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Florence-Firenze-Duomo-Florence-Cathedral-and-Rooftops-Distant-View.jpg',
				image_alt:
					'Distant view of the massive Florence Cathedral and its dome seen from Piazzale Michelangelo in Florence, Italy',
				cc_image_url:
					'https://pixabay.com/en/florence-italy-city-urban-skyline-1747356/',
				cc_author_url: 'https://pixabay.com/users/12019-12019/',
				cc_author: '12019',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	lake_como: {
		id: 'lake_como',
		itineraries: 'italy, europe-6w, europe-1m, europe-2m',
		destinationName: 'Lake Como',
		stateName: 'Italy',
		region: 'europe',
		anchor_tag: 'lake-como-italy',
		destination_link: '/destinations/italy/lake-como-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/C2Ju7n6C8ANq9ktb7',
			all_attractions: 'https://goo.gl/maps/CvzqMD5KHu37rvbaA'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Como',
				tab_content: `<p>Northern Italy's Lake Como is extremely scenic and lined with small towns and villages along the mountainous coastlines. The main towns and villages of Lake Como are accessible from Como and Lecco via bus or ferry.</p>
                <p>Como is the largest city on the lake and located just north of Milan. Como's historic center is entered through the Porta Terre, a medieval gate tower. Within the old town you'll find the beautiful gothic Como Cathedral and the romanesque Chiesa di San Fedele church. From Como you can take the funicular rail up to the village of Brunate and hike up to Volta's Lighthouse, from which you can enjoy breathtaking panoramic views over Lake Como.</p>
                <p>The city of Como also hosts two decadent structures along the lakeshore, including the neoclassical Tempio Voltiano museum with its stately marble interior, as well as the elegant Villa Olmo, a luxurious 18th century villa.</p>`
			},
			{
				tab_title: 'Bellagio & Villas',
				tab_content: `<p>The nearest recommended town to Como is Tremezzo, which hosts the regions two most popular and lavish lakeside villas, Villa Carlotta and Villa del Balbianello. Both villas feature opulent interiors and historic furnishings, as well as majestic views over Lake Como and the surrounding mountains. The Villa del Balbianello has even been featured in films including Star Wars and Casino Royale.</p>
                <p>Across the water from Tremezzo is the idyllic town of Bellagio, which sits at the tip of a peninsula between two arms of Lake Como. You can enjoy the stunning views of the town from the ferry terminal, and walk along the lake via the Lungolago Europa walkway to reach the mesmerizing lakeside gardens of the Villa Melzi. Be sure to also walk to the tip of the peninsula at Punta Spartivento, where you can enjoy incredibly gorgeous views over the lake.</p>`
			},
			{
				tab_title: 'Varenna',
				tab_content: `<p>Take the ferry from Bellagio to the nearby town of Varenna, which hosts the rustic 14th century St. George's Church and the incredibly beautiful Villa Monastero. Enjoy more gorgeous views over Lake Como from the villa's lakeside terraced gardens.</p>
                <p>From Varenna you can take a moderately challenging hike up to the ruins of the stunning 12th century Castello di Vezio, an impressive hilltop castle which offers more picturesque views over Lake Como and hosts a dungeon.</p>`
			},
			{
				tab_title: 'Lecco',
				tab_content: `<p>From Varenna you can take the train to Lecco, a city which sits on the shores of the southeastern arm of Lake Como and is connected directly to Milan by train. You can enjoy amazing views of the town framed in front of the towering mountains from the Ramo di Lecco viewpoint near the ferry terminaland the Lungolago di Lecco lakeside walkway. Nearby you can admire the stately interiors of Lecco's Basilica of St. Nicholas, and climb the St. Nicholas Campanile tower for sweeping panoramic views over the city and lake.</p>
                <p>For incredible views high above the city, take the bus up into the hills to the Funivia Piani d'Erna funicular rail, which travels up into the Piani d'Erna mountaintop park, offering far-reaching views and access to hiking trails. Alternatively you can hike up to the Sasso della Vecchia viewpoint just southwest of Lecco for views over Lake Como.</p>`
			}
		],
		attractions: [
			{
				id: 'lake-como-29',
				carouselId: 'lecco',
				itineraryCarousel: 'lake-como-italy',
				attraction: 'Lungolago di Lecco Harbor View',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Lake-Como-Lecco-Lecco-Beach-Harbor-View.jpg',
				image_alt:
					'Gorgeous view of the shoreline of the Lake Como town of Lecco below tall mountainsalong the Lungolago di Lecco path',
				cc_image_url:
					'https://pixabay.com/en/lecco-lake-como-manzoni-italy-3718033/',
				cc_author_url: 'https://pixabay.com/users/alefolsom-4137852/',
				cc_author: 'alefolsom',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'lake-como-17',
				carouselId: 'bellagio',
				itineraryCarousel: 'lake-como-italy',
				attraction: 'Lungolago Europa Path View (Bellagio)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Lake-Como-Bellagio-Lungolago-Europa-Path-Bellagio-Village-View.jpg',
				image_alt:
					'Picturesque view of Bellagio, Italy along the shores of Lake Como seen from the Lungolago Europa lakeside pathway',
				cc_image_url:
					'https://pixabay.com/photos/village-bellagio-italy-lake-1878351/',
				cc_author_url: 'https://pixabay.com/users/gayulo-3585927/',
				cc_author: 'gayulo',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'lake-como-13',
				carouselId: 'west-lake-como',
				itineraryCarousel: 'lake-como-italy',
				attraction: 'Villa del Balbianello (Tremezzina)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Lake-Como-Tremezzo-Villa-del-Balbianello.jpg',
				image_alt:
					'View of the grand lakefront Villa del Balbianello seen from Lake Como near Tremezzina, Italy',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Villa_Balbianello_3729.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Hamster28',
				cc_author: 'Henry Kellner',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'lake-como-19',
				carouselId: 'bellagio',
				itineraryCarousel: 'lake-como-italy',
				attraction: 'Gardens of Villa Melzi (Bellagio)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Lake-Como-Bellagio-Giardini-di-Villa-Melzi-Garden-Columns-and-Lake-View.jpg',
				image_alt:
					'Breathtaking view of Lake Como seen behind columns in the lakeside gardens of the Villa Melzi in Bellagio, Italy',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Villa_Melzi_(Bellagio)_-_DSC02786.JPG&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Daderot',
				cc_author: 'Daderot',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'lake-como-7',
				carouselId: 'como-and-brunate',
				itineraryCarousel: 'lake-como-italy',
				attraction: 'Baradello Castle View (Como)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Lake-Como-Como-Castello-Baradello-Castle-Lake-View.jpg',
				image_alt:
					'Picturesque view overlooking Como and Lake Como from the Baradello Castle above the town of Como, Italy',
				cc_image_url:
					'https://pixabay.com/en/como-landscape-lake-como-clouds-1524680/',
				cc_author_url: 'https://pixabay.com/users/DCube-1678241/',
				cc_author: 'DCube',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'lake-como-22',
				carouselId: 'varenna-and-vezio',
				itineraryCarousel: 'lake-como-italy',
				attraction: 'Varenna Village',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Lake-Como-Varenna-Village.jpg',
				image_alt:
					'Colorful rustic buildings of the village of Varenna below tall cliffs along the shores of Lake Como, Italy',
				cc_image_url:
					'https://web.archive.org/web/20161022124926/http://www.panoramio.com/photo/58664308',
				cc_author_url:
					'https://web.archive.org/web/20161022124928/http://www.panoramio.com/user/440234?with_photo_id=58664308',
				cc_author: 'Schoella Schwarz',
				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	milan: {
		id: 'milan',
		itineraries: 'italy, europe-6w, europe-1m, europe-2m',
		destinationName: 'Milan',
		stateName: 'Italy',
		region: 'europe',
		anchor_tag: 'milan-italy',
		destination_link: '/destinations/italy/milan-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/rc47oCFEXYBTozq89',
			all_attractions: 'https://goo.gl/maps/9nnHeuD8sweXxtqU7'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Iconic Attractions',
				tab_content: `<p>Milan is the second largest city in Italy, located in the north just below the Italian Alps and Italy's Lake Como and Lake Maggiore. This city is also an important global hub of the fashion industry.</p>
                <p>Milan contains many incredible historic buildings and churches, the most iconic being the stunning 14th century Milan Duomo Cathedral in the city center, which is the third largest cathedral in the world and showcases astonishingly complex gothic architecture.</p>
                <p>Adjacent to the cathedral you'll find the opulent neoclassical Royal Palace of Milan, as well as the ultra-lavish Galleria Vittorio Emanuele II, a breathtaking 19th century arcade-style shopping mall. Other fashion destinations nearby include the glamorous La Rinascente department store and the boutique-lined Via Montenapoleone shopping street.</p>
                <p>Within Milan's vast Sempione Park you can admire the colossal 15th century Sforzesco Castle, which houses several museums, most notably the Civic Collection of Ancient Art and The Museum of Rondanini which houses Michelangelo's last sculpture. On the other side of the park is the Arco della Pace, which bears a striking resemblance to the Arc du Triomphe in Paris.</p>`
			},
			{
				tab_title: 'Churches & Museums',
				tab_content: `<p>One of Milan's most important churches is the UNESCO listed 15th century Santa Maria dell Grazie, which houses Da Vinci's Last Supper masterpiece.</p>
                <p>Among Milan's best museums is the giant Pinacoteca di Brera, which contains one of the foremost collations of Northern Italian fine art housed within an exquisite palace. Also popular is the Museum of Science & Technology Leonardo da Vinci, which is dedicated to the famous scientist and displays scale models of Da Vinci's futuristic contraptions he designed.</p>
                <p>Nearby the Da Vinci Museum is the ancient Basilica di Sant'Ambrogio, a striking romanesque church originally built in the 4th century. In the are you'll find two more significant churches, the 16th century San Maurizio al Monastero Maggiore with its highly elaborate frescoed interior, and the incredible 5th century Basilica San Lorenzo Maggiore which also hosts beautiful Roman columns ruins in front of it.</p>`
			}
		],
		attractions: [
			{
				id: 'milan-1',
				carouselId: 'milan-cathedral-and-center',
				itineraryCarousel: 'milan-italy',
				attraction: 'Milan Cathedral & Piazza del Duomo',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Milan-Duomi-di-Milano-Milan-Cathedral-and-Piazza-del-Duomo.jpg',
				image_alt:
					'Cloudy day at the Piazza del Duomo with the striking Milan Cathedral towering above it in Central Milan, Italy',
				cc_image_url: 'https://pixabay.com/en/italy-milano-duomo-square-3523635/',
				cc_author_url: 'https://pixabay.com/users/dimitrisvetsikas1969-1857980/',
				cc_author: 'dimitrisvetsikas1969',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'milan-22',
				carouselId: 'sforza-castle-and-more',
				itineraryCarousel: 'milan-italy',
				attraction: 'Sforza Castle (Aerial)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Milan-Castello-Sforzesco-Sforza-Castle-Aerial.jpg',
				image_alt:
					'Golden hour aerial view overlooking the Sforza Castle Complex of Milan, Italy',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Castello_Sforzesco_da_alto.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Castello_Sforzesco_da_alto.jpg&action=history',
				cc_author: 'zheng.yan',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'milan-11',
				carouselId: 'milan-churches',
				itineraryCarousel: 'milan-italy',
				attraction: "Basilica of Sant'Ambrogio",
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Milan-Basilica-di-Sant-Ambrogio.jpg',
				image_alt:
					"Looking up at the two bell towers of the Basilica of Sant'Ambrogio from the church courtyard in Milan, Italy",
				cc_image_url: 'https://www.flickr.com/photos/randihausken/4627811354/',
				cc_author_url: 'https://www.flickr.com/photos/randihausken/',
				cc_author: 'Randi Hausken',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'milan-4',
				carouselId: 'milan-cathedral-and-center',
				itineraryCarousel: 'milan-italy',
				attraction: 'Galleria Vittorio Emanuele II',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Milan-Galleria-Vittorio-Emanuele-II.jpg',
				image_alt:
					'Lavish covered shopping mall of the Galleria Vittorio Emanuele II in Milan, Italy',
				cc_image_url:
					'https://pixabay.com/en/architecture-building-city-3531655/',
				cc_author_url: 'https://pixabay.com/users/dimitrisvetsikas1969-1857980/',
				cc_author: 'dimitrisvetsikas1969',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'milan-5',
				carouselId: 'milan-cathedral-and-center',
				itineraryCarousel: 'milan-italy',
				attraction: 'Galleria Vittorio Emanuele II Pegasus',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Milan-Galleria-Vittorio-Emanuele-II-Pegasus.jpg',
				image_alt:
					"Stunning pegasus sculpture inside Milan's Galleria Vittorio Emanuele II",
				cc_image_url:
					'https://pixabay.com/en/milan-pegasus-gallery-statue-705880/',
				cc_author_url: 'https://pixabay.com/users/IgorSaveliev-50922/',
				cc_author: 'IgorSaveliev',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	naples: {
		id: 'naples',
		itineraries: 'italy, europe-6w, europe-1m, europe-2m',
		destinationName: 'Naples',
		stateName: 'Italy',
		region: 'europe',
		anchor_tag: 'naples-italy',
		destination_link: '/destinations/italy/naples-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/Ydh77kpWVT96Ksg78',
			all_attractions: 'https://goo.gl/maps/pcmHe1bNhaRvg2UT9'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Central Naples',
				tab_content: `<p>There's a saying that while Rome may be the heart of Italy, Naples is the soul. The city holds much beauty and is located near many ancient Roman ruins such as Pompeii and Herculaneum, as well as the Amafli coast and the island of Capri (which can be reached by ferry from Naples).</p>
                <p>Near the coast you'll find the grandiose Royal Palace of Naples, which lies on the impressive Piazza del Plebiscito across from the monumental San Francesco di Paoloa Basilica, a giant domed church with Greek-style columns and magnificent stunning interiors. The Royal Palace of Naples contains incredibly lavish royal apartments filled with historic furnishings.</p>
                <p>Adjacent to the palace is the stately 18th century San Carlo Theatre, as well as the elegant Galleria Umberto I, a stunning glass-domed mall similar to the famous Galleria in Milan. Also nearby you can visit the majestic Zevallos Stigliano Palace.</p>`
			},
			{
				tab_title: 'Castles',
				tab_content: `<p>Along the coast of Central Naples you'll find two large fortress castles, including the imposing 13th century Castel Nuovo, and the incredible Ovo Castle, which sits on a peninsula in the harbor and offers excellent views from the top. Atop a hill is the massive 14th century Castel Sant'Elmo, which offers breathtaking views over the city and the Bay of Naples all the way to the Amafli coast. Adjacent to the castle is the popular Certosa e Museo di San Martino, a lovely monastery and museum hosting more excellent coastal views.</p>
                <p>Be sure to visit Granada's Calle Caldereria Nueva street, which resembles a souk marketplace and is lined with shops selling remarkable Moroccan and Middle Eastern goods such as hookahs, intricate lamps and decorations, clothing, accessories and much more.</p>
                <p>Northwest of Granada is a stunning 14th century hilltop castle, the Fortaleza de la Mota. This massive fortified complex mainly consists of medieval ruins, as well as an old church and watchtower, from which you can enjoy amazing views.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Naples is home to several outstanding museums, including the Naples National Archaeological Museum with extensive Roman artifacts, and the lavish Capodimonte Museum, which is located in a grand palace and contains fine Neapolitan art from the 13th-19th centuries.</p>
                <p>Naples is also known for its vast catacombs near the Capidomonte Museum, including the Catacombs of San Gennaro and nearby Catacombs of San Gaudioso, both which were founded over 1,600 years ago and can be toured. The Napoli Sotterranea and Bourbon Tunnels contain a labryinth of ancient and medieval tunnels used throughout the city's history.</p>
                <p>In Central Naples is the smaller but extremely popular Capella Sansevero Museum, which houses brilliant sculptures amongst an extremely opulent and gorgeous chapel. Nearby you'll find the striking Church of Gesu Nuovo with an extremely unique pyramid-patterned exterior. Adjacent is the elegant cloister of the 14th century Monastero di Santa Chiara monastery, known for its highly ornate and vibrant Majorca tile art designs.</p>
                <p>Be sure to also visit the 13th century gothic Naples Cathedral (Cathedral Santa Maria Assunta) as well, which features magnificent interiors as well as the Museum of the Treasure of San Gennaro, which hosts priceless jewelry and religious artifacts.</p>`
			},
			{
				tab_title: 'Greater Naples',
				tab_content: `<p>From the Port of Naples, you can take a ferry to the island of Ischia, where you'll find the picturesque Aragonese Castle, a massive towering fortress which sits on its own tiny island connected to Ischia by bridge.</p>
                <p>West of Naples is one of the largest Roman amphitheaters, the stunningly well-preserved Flavian Amphitheater. you can explore. To the north of Naples in the city of Caserta is the Royal Palace of Caserta, which features grandiose interiors and is surrounded by beautiful gardens and woodland parks, along with a long man-made lake and many fountains and monuments.</p>`
			}
		],
		attractions: [
			{
				id: 'naples-11',
				carouselId: 'naples-castles',
				itineraryCarousel: 'naples-italy',
				attraction: "Sant'Elmo Castle View",
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Naples-Castel-Sant-Elmo-Castle-View.jpg',
				image_alt:
					"Incredible view from Sant'Elmo Castle overlooking the city and coastline of Naples, Italy with Mount Vesuvius in background",
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Certosa_desde_Sant%27Elmo_10.JPG&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:MiguelHermoso',
				cc_author: 'Miguel Hermoso Cuesta',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'naples-5',
				carouselId: 'naples-iconic-sights',
				itineraryCarousel: 'naples-italy',
				attraction: 'Galleria Umberto I Mall',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Naples-Galleria-Umberto-I-Mall.jpg',
				image_alt:
					'Lookingup at the intricate glass and iron dome covering the grandiose Galleria Umberto I Mall of Naples',
				cc_image_url:
					'https://www.flickr.com/photos/dexxus/14133651758/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/dexxus/',
				cc_author: 'paul bica',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'naples-1',
				carouselId: 'naples-iconic-sights',
				itineraryCarousel: 'naples-italy',
				attraction: 'Royal Basilica San Francesco da Paola',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Naples-Basilica-San-Francesco-di-Paola.jpg',
				image_alt:
					"Vast rounded colonnades of the Royal Basilica San Francesco da Paola on Naples' Piazza del Plebiscito",
				cc_image_url:
					'https://web.archive.org/web/20161025150205/http://www.panoramio.com/photo/87084683',
				cc_author_url:
					'https://web.archive.org/web/20161025150108/http://www.panoramio.com/user/31742?with_photo_id=87084683',
				cc_author: 'Sergey Ashmarin',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'naples-16',
				carouselId: 'naples-catacombs-and-underground',
				itineraryCarousel: 'naples-italy',
				attraction: 'Bourbon Tunnels Cistern',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Naples-Bourbon-Tunnel-Galleria-Borbonica-Cistern-Grotto.jpg',
				image_alt:
					'Illuminated emerald-colored waters of an old cistern within the Bourbon Tunnels beneath Naples, Italy',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Galleria_borbonica_-_Cistern_(Naples).jpg&action=history',
				cc_author_url: 'http://www.galleriaborbonica.com/',
				cc_author: 'Ass. Culturale Borbonica Sotterranea',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'naples-32',
				carouselId: 'greater-naples',
				itineraryCarousel: 'naples-italy',
				attraction: 'Aragonese Castle (Ischia Island)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Greater-Naples-Isola-dIschia-Ischia-Castello-Aragonese-Castle-2.jpg',
				image_alt:
					'Countless small boats in the harbor below the Aragonese Castle of Ischia Island off the coast of Naples, Italy',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Ischia_castello_Aragonese.JPG&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/wiki/User:Otrebor81~commonswiki',
				cc_author: 'Otrebor81~commonswiki',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'naples-30',
				carouselId: 'greater-naples',
				itineraryCarousel: 'naples-italy',
				attraction: 'Flavian Amphitheater of Pozzuoli',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Greater-Naples-Pozzuoli-Anfiteatro-Neroniano-Flavio-Flavian-Amphitheatre.jpg',
				image_alt:
					'Stunning interior of the ancient Roman Flavian Amphitheater of Pozzuoli just outside Naples, Italy',
				cc_image_url: 'https://www.flickr.com/photos/pamontgo/25880565160',
				cc_author_url: 'https://www.flickr.com/photos/pamontgo/',
				cc_author: 'Andy Montgomery',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	pisa: {
		id: 'pisa',
		itineraries: 'italy, europe-6w, europe-1m, europe-2m',
		destinationName: 'Pisa',
		stateName: 'Italy',
		region: 'europe',
		anchor_tag: 'pisa-italy',
		destination_link: '/destinations/italy/pisa-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/tWNXhnGSWybALCRY8',
			all_attractions: 'https://goo.gl/maps/aaLR3u6eTTZ721GG9'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Pisa Attractions',
				tab_content: `<p>The city of Pisa is a must-see quick stop for any trip to Italy, located west of Florence and southeast of Cinque Terre. Pisa's most popular attraction is the iconic Leaning Tower of Pisa, an elegant and ornate bell tower which sits on the city's Piazza del Duomo, plaza adjacent to the gorgeous romanesque Pisa Cathedral.</p>
                <p>The piazza also hosts the lovely medieval Pisa Baptistery, a striking round domed structure. Be sure to climb to the top of the Leaning Tower to enjoy amazing views over the piazza, cathedral, and sections of the medieval walls that surround the city. Other notable attractions in Pisa are located along the Arno River, including the Blu Palace and the Church of Santa Maria della Spina.</p>`
			}
		],
		attractions: [
			{
				id: 'pisa-1',
				carouselId: 'pisa-piazza-del-duomo',
				itineraryCarousel: 'pisa-italy',
				attraction: 'Leaning Tower of Pisa',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Pisa-Piazza-del-Duomo-Leaning-Tower-of-Pisa.jpg',
				image_alt:
					'Iconic Leaning Tower of Pisa seen beside the Duomo di Pisa Cathedral in Pisa, Italy',
				cc_image_url:
					'https://www.flickr.com/photos/reservasdecoches/8224991327/',
				cc_author_url: 'https://www.flickr.com/photos/reservasdecoches/',
				cc_author: 'Alquiler de Coches',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'pisa-2',
				carouselId: 'pisa-piazza-del-duomo',
				itineraryCarousel: 'pisa-italy',
				attraction: 'Pisa Cathedral',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Pisa-Piazza-del-Duomo-Cathedral-and-Leaning-Tower-of-Pisa.jpg',
				image_alt:
					'Opulent marble Duomo di Pisa Cathedral seen beside the Leaning Tower of Pisa along the Piazza del Duomo',
				cc_image_url:
					'https://www.flickr.com/photos/150594450@N07/36361332576/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/150594450@N07/',
				cc_author: 'Med Cruise Guide',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'pisa-3',
				carouselId: 'pisa-piazza-del-duomo',
				itineraryCarousel: 'pisa-italy',
				attraction: 'Pisa Baptistery',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Pisa-Piazza-del-Duomo-Baptistery-and-Duomo-Cathedral-of-Pisa.jpg',
				image_alt:
					'Beautiful white rounded Pisa Baptistery in front of the Pisa Cathedral along the Piazza del Duomo',
				cc_image_url:
					'https://web.archive.org/web/20161013132421/http://www.panoramio.com/photo/25899088',
				cc_author_url:
					'https://web.archive.org/web/20161013132423/http://www.panoramio.com/user/3384745?with_photo_id=25899088',
				cc_author: 'trukdotcom',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'pisa-9',
				carouselId: 'pisa-more-attractions',
				itineraryCarousel: 'pisa-italy',
				attraction: 'Palazzo Blu',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Pisa-Palazzo-Blu-Blue-Palace.jpg',
				image_alt:
					'Deep blue exterior of the Palazzo Blu (Blue Palace) along the Arno River in Pisa, Italy',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Palazzo_Giuli_Rosselmini_Gualandi_Pisa.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Japs_88',
				cc_author: 'Japs 88',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'pisa-10',
				carouselId: 'pisa-more-attractions',
				itineraryCarousel: 'pisa-italy',
				attraction: 'Church of Santa Maria della Spina',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Pisa-Chiesa-di-Santa-Maria-della-Spina-Church.jpg',
				image_alt:
					'Ornate marble Church of Santa Maria della Spina along the Arno River in Pisa, Italy',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Chiesa_di_Santa_Maria_della_Spina,_Pisa,1.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Mongolo1984',
				cc_author: 'Mongolo1984',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	pompeii: {
		id: 'pompeii',
		itineraries: 'italy, europe-6w, europe-1m, europe-2m',
		destinationName: 'Pompeii',
		stateName: 'Italy',
		region: 'europe',
		anchor_tag: 'pompeii-italy',
		destination_link: '/destinations/italy/pompeii-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/6TWmqNTXvMhUf1Z2A',
			all_attractions: 'https://goo.gl/maps/XLXrrtQx1arrcSyT7'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Pompeii',
				tab_content: `<p>The ancient Roman city of Pompeii is definitely the most popular archaeological site around Naples, but definitely not the only one. This vast ancient Roman city was buried in ash nearly 2,000 years ago following the eruption of the nearby Mt. Vesuvius. As a result, many of the structures of ancient Pompeii have been quite well-preserved including theatre, stadiums, monuments, and countless houses and villas that you could explore for multiple days.</p>
                <p>Nearby Pompeii are the very well-preserved ruins of Villa Oplontis, an elegant villa used by the wife of Emperor Nero.</p>`
			},
			{
				tab_title: 'Herculaneum & Vesuvius',
				tab_content: `<p>Closer to Naples is the large ancient Roman archaeological site of Herculaneum, which is small in comparison with Pompeii, but hosts even better-preserved multi-story ancient structures.</p>
                <p>From Ercolano (the town which Herculaneum is located in) you can take a bus or even hike up to the summit of the volcano that buried these ancient cities, Mt. Vesuvius, and walk around the crater. On a clear day you can enjoy breathtaking panoramic views over Naples, the Amalfi Coast, and even Capri from an elevation of about 4,200 feet (1,280 m) above the coast.</p>`
			}
		],
		attractions: [
			{
				id: 'pompeii-8',
				carouselId: 'ancient-pompeii',
				itineraryCarousel: 'pompeii-italy',
				attraction: 'Quadroportico (Pompeii)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Pompeii-Pompeii-Archaeological-Park-Quadriportico-Quadriporch.jpg',
				image_alt:
					'Rectangular quadriporch known as Quadriportico surrounded by ancient Roman columns at Pompeii Archaeological Park',
				cc_image_url:
					'https://pixabay.com/en/pompeii-italy-roman-ancient-travel-2375124/',
				cc_author_url: 'https://pixabay.com/users/Graham-H-5475750/',
				cc_author: 'Graham-H',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'pompeii-2',
				carouselId: 'ancient-pompeii',
				itineraryCarousel: 'pompeii-italy',
				attraction: 'Pompeii Streets',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Pompeii-Pompeii-Archaeological-Park-Via-di-Nola-Street.jpg',
				image_alt:
					'Ancient Roman streets lined with ruins of houses and buildings buried by the eruption of Mount Vesuvius at Pompeii, Italy',
				cc_image_url:
					'https://pixabay.com/en/pompeii-italy-roman-ancient-travel-2375135/',
				cc_author_url: 'https://pixabay.com/users/Graham-H-5475750/',
				cc_author: 'Graham-H',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'pompeii-5',
				carouselId: 'ancient-pompeii',
				itineraryCarousel: 'pompeii-italy',
				attraction: 'House of Merander (Pompeii)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Pompeii-Pompeii-Archaeological-Park-Peristyle-House-of-Menander.jpg',
				image_alt:
					'Lush courtyard gardens surrouned by columns of the Peristyle House of Merander at the Pompeii Archaeological Park',
				cc_image_url:
					'https://www.flickr.com/photos/carolemage/15165295152/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/carolemage/',
				cc_author: 'Carole Raddato',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'pompeii-11',
				carouselId: 'vesuvius-and-herculaneum',
				itineraryCarousel: 'pompeii-italy',
				attraction: 'Mount Vesuvius Peak',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Greater-Naples-Parco-Nazionale-del-Vesuvio-Mount-Vesuvius-View.jpg',
				image_alt:
					"Walkway beside the crater atop the peak of Mount Vesuvius within Italy's Mount Vesuvius National Park",
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Somma-Vesuvio_and_Miglio_d%E2%80%99oro_Biosphere_Reserve,_Italy_(2).jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Somma-Vesuvio_and_Miglio_d%E2%80%99oro_Biosphere_Reserve,_Italy_(2).jpg&action=history',
				cc_author: 'Sebastian Mierzwa',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'pompeii-14',
				carouselId: 'vesuvius-and-herculaneum',
				itineraryCarousel: 'pompeii-italy',
				attraction: 'Herculaneum Palaestra Ruins',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Greater-Naples-Ercolano-Parco-Archeologico-di-Ercolano-Herculaneum-Palaestra-Ruins.jpg',
				image_alt:
					'Striking columns and ruined structures of the Palaestra at Ancient Herculaneum Archaeological Park near Pompeii, Italy',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Herculaneum-palaestra.JPG&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Mboesch',
				cc_author: 'Mboesch',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	rome: {
		id: 'rome',
		itineraries: 'italy, europe-6w, europe-1m, europe-2m',
		destinationName: 'Rome',
		stateName: 'Italy',
		region: 'europe',
		anchor_tag: 'rome-italy',
		destination_link: '/destinations/italy/rome-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/1GzLCirG1EzRJzHS8',
			all_attractions: 'https://goo.gl/maps/Xdj1aXF9a2T1JgBbA',
			main_attractions: 'https://goo.gl/maps/CmyhdjCLSiPK2hjJ9',
			short_attractions: 'https://goo.gl/maps/TWFkDRq2Ysock3NV9'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Colosseum & Forum',
				tab_content: `<p>Italy's capital city is also known as the eternal city as it contains many well-preserved ancient structures alongside medieval, Renaissance, and modern buildings.</p>
                <p>Rome's most famous sight is the ancient Roman Colosseum, a strikingly well-preserved amphitheater that's over 2,000 years old and quite large. Be sure to visit the Colosseum in the day, but also see the structure at night when it lights up. Adjacent to the Colosseum is the imposing Arch of Constantine, as well as the entrance to the massive Roman Forum area.</p>
                <p>The Roman Forum contains countless ancient structures from different time periods including ancient temples, palaces, squares, government buildings, and much more spread out over a massive area. The entire Forum is incredibly stunning, and would take many hours to fully explore and enjoy.</p>
                <p>Across from the Roman Forum are the ancient remains of the Trajan Forum and Trajan's Market which sit just below the streets with balconies providing views over the ruins. Both the Roman and Trajan Forum are open for night tours when the ancient structures are majestically lit up.</p>`
			},
			{
				tab_title: 'Vatican City',
				tab_content: `<p>Within Vatican City you'll find the magnificent St. Peter's Basilica, the ultra-lavish main church of the Catholic religion with incredibly ornate interiors. The basilica sits upon the grand column-lined St. Peter's Square, a very iconic plaza.</p>
                <p>North of the basilica are the stunning Vatican Museums, which contain a wealth of important Renaissance art and sculptures within a truly majestic building, which leads to the famous Sistine Chapel with Michelangelo's iconic painted ceiling. The Vatican Museums and Sistine Chapel can only be entered with a tour guide.</p>
                <p>Near the Vatican you'll find the 1,900 year old Castel Sant'Angelo castle, which was originally built as a Roman emperor's tomb and later converted into a military fortress.</p>`
			},
			{
				tab_title: 'Iconic Sights',
				tab_content: `<p>Behind the Roman Forum is the majestic Altar of the Fatherland, a picturesque neoclassical landmark of the city  hosting a rooftop terrace overlooking the Roman Forum. The Altar sits on the Piazza Venezia plaza adjacent to the Capitoline Museums, which house many extremely important ancient Roman treasures and fine art within an extravagant 15th century palace.</p>
                <p>South of the Roman Colosseum are the 1,800 year old ruins of the Baths of Caracalla, an ancient Roman bath house. Further south are the Catacombs of St. Callixtus and Domitilla, two vast underground catacomb complexes built in the 2nd and 3rd centuries which you can tour.</p>
                <p>The iconic Trevi Fountain lights up beautifully at night and is located south of the Piazza di Spagna, a grandiose plaza which hosts the famous Spanish Steps. Further north is the Piazza del Popolo, which features a towering ancient Egyptian obelisk in the center. Take in excellent views above the city from the Terrazza del Pinicio terrace above the plaza. Behind the terrace is the vast Villa Borghese park featuring stunning gardens and monuments.</p>
                <p>Rome's most famous plaza is the massive Piazza Navona, which features three gorgeous marble fountains surrounded by colorful historic buildings. Nearby is the Pantheon temple, an ancient architectural masterpiece built over 2,000 years ago which is still topped with the world's largest unreinforced concrete dome. The dome has a giant hole in the center from which light shines into the majestic marble interior.</p>
                <p>The ancient ruins of Largo di Torre Argentina square contains part of the theatre where Julius Caesar was believed to have been assassinated.</p>`
			},
			{
				tab_title: 'Churches',
				tab_content: `<p>Rome is home to the four most important churches of Roman Catholocism, the Major Papal Basilicas, one of which is St. Peter's Basilica in Vatican City.</p>
                <p>Near the central Roma Termini train station you'll find one of these major basilicas, the Papal Basilica of Santa Maria Maggiore, a magnificent 5th century church containing incredibly elaborate lavish interiors and intricate mosaics.</p>
                <p>Even more important than the Vatican's St. Peter's Basilica is the 1,700 year old Arcbasilica of San Giovanni in Laterano, which features magnificent highly elaborate interiors and is headed by the Pope, hosting his throne.</p>
                <p>Much further south of Central Rome is the fourth major basilica, the Papal Basilica San Paolo fuori le Mura, another extravagant 4th century church with a majestic colonnade courtyard, which also houses the tomb of St. Paul. In addition, Rome hosts countless magnificent minor basilicas.</p>`
			}
		],
		attractions: [
			{
				id: 'rome-1',
				carouselId: 'rome-colosseum-and-forum',
				itineraryCarousel: 'rome-italy',
				attraction: 'Roman Colosseum(Evening)',
				image_alt:
					'Ancient Roman Colosseum seen illuminated just after sunset in Rome, Italy',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Rome-Roman-Colosseum.jpg',
				cc_image_url:
					'https://www.flickr.com/photos/turyddu/8426009187/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/turyddu/',
				cc_author: 'Umberto Rotundo',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'rome-22',
				carouselId: 'rome-iconic-sights',
				itineraryCarousel: 'rome-italy',
				attraction: 'Trevi Fountain',
				image_alt:
					"Beautifully illuminated vibrant blue waters and baroque sculptures of Rome's famouse Trevi Fountain",
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Rome-Trevi-Fountain.jpg',
				cc_image_url:
					'https://pixabay.com/en/trevi-fountain-water-blue-rome-1921697/',
				cc_author_url: 'https://pixabay.com/users/kirkandmimi-763448/',
				cc_author: 'kirkandmimi',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'rome-40',
				carouselId: 'vatican-city',
				itineraryCarousel: 'rome-italy',
				attraction: "Vatican Square (Viewed from St. Peter's Dome)",
				image_alt:
					"Iconic view of Vatican Square surrounded by grandiose colonnades seen from the dome of St. Peter's Basilica in Vatican City",
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Rome-Vatican-City-Vatican-Square.jpg',
				cc_image_url:
					'https://pixabay.com/en/rome-vatican-piazza-square-2472617/',
				cc_author_url: 'https://pixabay.com/users/josepons28-5483923/',
				cc_author: 'josepons28',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'rome-5',
				carouselId: 'rome-colosseum-and-forum',
				itineraryCarousel: 'rome-italy',
				attraction: 'Roman Forum',
				image_alt:
					'Overlooking the towering columns and ancient ruins of the Roman Forum surrounded by grassy fields in Rome, Italy',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Rome-Roman-Forum.jpg',
				cc_image_url:
					'https://pixabay.com/en/rome-forum-roman-coloseum-ruins-2305365/',
				cc_author_url: 'https://pixabay.com/users/kirkandmimi-763448/',
				cc_author: 'kirkandmimi',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'rome-14',
				carouselId: 'capitoline-hill',
				itineraryCarousel: 'rome-italy',
				attraction: 'Victor Emmanuel II National Monument',
				image_alt:
					'Iconic neo-Roman style Victor Emmanuel II National Monument and Altar of the Fatherland with its massive columns and statues',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Rome-Piazza-Venezia-Victor-Emmanuel-II-National-Monument-Altar-of-the-Fatherland.jpg',
				cc_image_url:
					'https://pixabay.com/photos/rome-roma-travel-italy-italian-3552509/',
				cc_author_url: 'https://pixabay.com/it/users/moshehar-7046690/',
				cc_author: 'moshehar',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'rome-28',
				carouselId: 'sant-angelo-castle',
				itineraryCarousel: 'rome-italy',
				attraction: "Castle Sant'Angelo",
				image_alt:
					"Picturesque view of the Castle Sant'Angelo seen behind the Sant'Angelo Bridge with statues lining it in Rome, Italy",
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Rome-Castello-Sant-Angelo-Castle.jpg',
				cc_image_url:
					'https://pixabay.com/it/photos/roma-castel-sant-angelo-italia-2462105/',
				cc_author_url: 'https://pixabay.com/it/users/canonfan-5786499/',
				cc_author: 'canonfan',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	venice: {
		id: 'venice',
		itineraries: 'italy, europe-6w, europe-1m, europe-2m',
		destinationName: 'Venice',
		stateName: 'Italy',
		region: 'europe',
		anchor_tag: 'venice-italy',
		destination_link: '/destinations/italy/venice-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/7CH1Zuf47C1i4ejc6',
			all_attractions: 'https://goo.gl/maps/hHbBAPTDTcFiRxWXA'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Canals',
				tab_content: `<p>The picturesque city of Venice features stunning and rustic Venetian architecture set amongst countless canals and public squares. Be sure to wander the canals and streets while you're in Venice to enjoy the brilliant architecture of the magnificent city.</p>
                <p>The wide Canal Grande winds through the city and is lined with many historic lovely structures. Only a few bridges span the Canal Grande, including the Scalzi Bridge near the train station, and the iconic Rialto Bridge, which leads to the Piazza San Marco (St. Mark's Square).</p>`
			},
			{
				tab_title: "St. Mark's Square",
				tab_content: `<p>Venice's top attractions can be found around the iconic St. Mark's Square, including the incredibly ornate and gorgeous Saint Mark's Basilica, the lavish Doge's Palace, and the imposing St. Mark's Campanile bell tower, which rises high above the square with amazing views from the top if you're willing to climb the tower's many stairs. Inside the massive Doge's Palace you'll find highly intricate ultra-lavish interiors which are absolutely stunning.</p>
                <p>Nearby you can admire the Scala Conarini del Bovolo, an elegant and iconic rounded stair tower. Also in this area is the extravagant and lovely Teatro la Fenice theater which you can tour.</p>`
			},
			{
				tab_title: 'Museums & Churches',
				tab_content: `<p>Southwest of St. Mark's Square at the entrance to the Canal Grande is the stunning baroque Basilica di Santa Maria della Salute with its massive dome and beautiful architecture. Be sure to see two of Venice's largest gothic churches, the elegant 14th century Basilica dei Friari, and the Basilica dei Santi Giobanni e Paolo. The Church of Santa Maria dei Miracoli is also known as the Marble Church for its lavish marble-covered interior.</p>
                <p>Venice's Peggy Guggenheim Collection is a modern art museum which features a renowned collection of 20th century fine art along with interesting modern sculptures, housed within an exquisite 18th century palace. Also in this area is another important art museum, the Gallerie dell'Accademia, which hosts fine Ventian art from the 13th-18th centuries. The Scuola Grande di San Rocco is a fine Renaissance art museum displayed amongst opulent highly detailed interiors.</p>
                <p>In front of the Gallerie Museum is the Ponte dell'Accademia bridge, which offers lovely views of the Canal Grande. You might also consider visiting the nearby 17th century Grassi Palace museum, which contains an impressive contemporary art collection amongst its stunning pink interior.</p>`
			},
			{
				tab_title: 'Islands',
				tab_content: `<p>From St. Mark's Square you can take a ferry across to San Giorgio Maggiore Island, which hosts the massive Chiesa di San Giorgio Maggiore church. This church features a similar-looking tower to St. Mark's Campanie which can also be climbed for breathtaking views looking back at Venice.</p>
                <p>Also noteworthy is the island of Burano, which is isolated quite far away from the rest of Venice but can be reached via ferry near the Basilica dei Santi Giovanni e Paolo in about 45 minutes. This island is known for its stunning vibrantly colored houses lined along its canals, creating a very picturesque setting to explore.</p>`
			}
		],
		attractions: [
			{
				id: 'venice-3',
				carouselId: 'piazza-san-marco',
				itineraryCarousel: 'venice-italy',
				attraction: "St. Mark's Campanile Tower",
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Venice-Venezia-Piazza-San-Marco-St-Marks-Square-St-Marks-Campanile.jpg',
				image_alt:
					"Gondola boats along the water in front of St. Mark's Square with St. Mark's Campanile towering above it in Venice, Italy",
				cc_image_url: 'https://pixabay.com/photos/sky-rock-stone-1905062/',
				cc_author_url: 'https://pixabay.com/users/kirkandmimi-763448/',
				cc_author: 'kirkandmimi',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'venice-9',
				carouselId: 'venice-bridges',
				itineraryCarousel: 'venice-italy',
				attraction: 'Entrance to Canal Grande (Grand Canal)',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Venice-Venezia-Canal-Grande-Entrance.jpg',
				image_alt:
					"Picturesque sunset view looking down Venice's Grand Canal from the canal entrance with Basilica de Santa Maria della Saulte",
				cc_image_url:
					'https://pixabay.com/photos/channel-venice-gondolas-italy-3547224/',
				cc_author_url: 'https://pixabay.com/users/bogitw-851103/',
				cc_author: 'bogitw',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'venice-14',
				carouselId: 'venice-churches',
				itineraryCarousel: 'venice-italy',
				attraction: 'Island of San Giorgio Maggiore',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Venice-Venezia-Basilica-di-San-Giorgio-Maggiore-a-Venezia-Church.jpg',
				image_alt:
					'Tiny Island of San Giorgio Maggiore with its main feature being its massive basilica, in Venice, italy',
				cc_image_url:
					'https://pixabay.com/en/venice-italy-boats-flying-bird-1606937/',
				cc_author_url: 'https://pixabay.com/users/Mariamichelle-165491/',
				cc_author: 'Mariamichelle',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'venice-37',
				carouselId: 'burano',
				itineraryCarousel: 'venice-italy',
				attraction: 'Burano Colorful Houses',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Venice-Venezia-Burano-Island-Colorful-Houses-3.jpg',
				image_alt:
					'Stunning sunset colors looking down the coloful hosues lining a tiny canal of the Burano Islands in Venice, Italy',
				cc_image_url:
					'https://pixabay.com/photos/venice-italy-burano-island-2225423/',
				cc_author_url: 'https://pixabay.com/users/12019-12019/',
				cc_author: '12019',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'venice-19',
				carouselId: 'venice-churches',
				itineraryCarousel: 'venice-italy',
				attraction: 'Basilica of Santi Giovanni & Paolo',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Venice-Venezia-Basilica-dei-Santi-Giovanni-e-Paolo.jpg',
				image_alt:
					"Stunning exterior of the Basilica of Santi Giovanni and Paolo where many of Venice's doges are buried",
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Exterior_of_Santi_Giovanni_e_Paolo_(Venice)_from_Campo_San_Zanipolo.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/wiki/User:Archaeodontosaurus',
				cc_author: 'Didier Descouens',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'venice-5',
				carouselId: 'piazza-san-marco',
				itineraryCarousel: 'venice-italy',
				attraction: "Doge's Palace (Palazzo Ducale)",
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Venice-Venezia-Palazzo-Ducal-Doge-Palace.jpg',
				image_alt:
					"Beautiful loggia-style Doge's Palace along the water at Venice's St. Mark's Square",
				cc_image_url: 'https://pixabay.com/photos/venice-palazzo-ducal-1750046/',
				cc_author_url: 'https://pixabay.com/users/a_lanzini-3549508/',
				cc_author: 'a_lanzini',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	verona: {
		id: 'verona',
		itineraries: 'italy, europe-6w, europe-1m, europe-2m',
		destinationName: 'Verona',
		stateName: 'Italy',
		region: 'europe',
		anchor_tag: 'verona-italy',
		destination_link: '/destinations/italy/verona-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/SApWFrsrYHPJfvcD6',
			all_attractions: 'https://goo.gl/maps/LoVsfTX65tWXNjLE9'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				id: 'verona-4',
				carouselId: 'verona-gates-and-arena',
				itineraryCarousel: 'verona-italy',
				attraction: 'Verona Arena',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Verona-Verona-Arena-Exterior.jpg',
				image_alt:
					'Exterior of the massive ancient Roman Verona Arena in Verona, Italy on a cloudy day',
				cc_image_url: 'https://www.flickr.com/photos/kevinpoh/5749303217',
				cc_author_url: 'https://www.flickr.com/photos/kevinpoh/',
				cc_author: 'Kevin Poh',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'verona-2',
				carouselId: 'verona-gates-and-arena',
				itineraryCarousel: 'verona-italy',
				attraction: 'Porta Borsari Ancient Roman Gate',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Verona-Porta-Borsari-Gate-2.jpg',
				image_alt:
					'Porta Borsari Ancient Roman Gate to the former walled town of Verona, Italy',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Porta_Borsari_(Verona).jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/wiki/User:Archaeodontosaurus',
				cc_author: 'Didier Descouens',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'verona-7',
				carouselId: 'casa-giulietta-and-verona-piazzas',
				itineraryCarousel: 'verona-italy',
				attraction: "Casa di Giulietta (Juliet's House)",
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Verona-Casa-di-Giulietta-Juliets-Balcony.jpg',
				image_alt:
					"Famous balcony of the Casa di Giulitetta (Juliet's House) popular with Romeo and Juliet fans",
				cc_image_url:
					'https://web.archive.org/web/20161112115510/http://www.panoramio.com/photo/48221787',
				cc_author_url:
					'https://web.archive.org/web/20161112115508/http://www.panoramio.com/user/2256207?with_photo_id=48221787',
				cc_author: 'Radu Costel',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'verona-24',
				carouselId: 'castelvecchio',
				itineraryCarousel: 'verona-italy',
				attraction: 'Castelvecchio Scaligero Bridge',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Verona-Castelvecchio-Ponte-Scaligero-Bridge-River-View.jpg',
				image_alt:
					'Golden hour colors lighting up the Ponte Scaligero bridge over the Adige River to the Castelvecchio Castle in Verona, Italy',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:The_Keep_of_Castelvecchio_and_Ponte_Scaligero_Verona_Italy.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/wiki/User:%D0%92%D0%B2%D0%BB%D0%B0%D1%81%D0%B5%D0%BD%D0%BA%D0%BE',
				cc_author: 'Vvlasenko',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'verona-19',
				carouselId: 'san-pietro-castle-and-bridge',
				itineraryCarousel: 'verona-italy',
				attraction: 'Ponte Pietra Bridge',
				image_url:
					'https://www.travelimager.com/images/italy/Italy-Verona-Ponte-Pietra-Bridge-Cloudy.jpg',
				image_alt:
					"Overcast view of the Ponte Pietra Ancient Roman bridge spanning the Adige River to Verona's Old Town",
				cc_image_url:
					'https://web.archive.org/web/20161029090824/http://www.panoramio.com/photo/90108282',
				cc_author_url:
					'https://web.archive.org/web/20161029140418/http://www.panoramio.com/user/5152111?with_photo_id=90108345',
				cc_author: 'Mister No',
				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},

	amsterdam: {
		id: 'amsterdam',
		itineraries: '',
		destinationName: 'Amsterdam',
		stateName: 'Netherlands',
		region: 'europe',
		anchor_tag: 'amsterdam-netherlands',
		destination_link: '/destinations/netherlands/amsterdam-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/8pcvUHBovE42',
			main_attractions: 'https://goo.gl/maps/cWvdKn1x7E42',
			all_attractions: 'https://goo.gl/maps/94GnMytf7Xz'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>Amsterdam is a stunning city consisting of countless lovely canals lined with many charming historic buildings. Most of the city's sights are concentrated around the city's center and the Museumplein square. The best ways to enjoy the city are to walk or bike around and enjoy the beautiful scenery and canals, and to also take a boat tour through the canals. Amsterdam is also the city of bikes, and many sightseeing tours via bike are available.</p>`
			},
			{
				tab_title: 'Dam Square',
				tab_content: `<p>Witness the impressive structures that line the city's Dam Square, including the opulent Royal Palace which you can tour, and the Nieuwe Kerk (New Church), as well as the many entertaining street performers which attract large crowds on the square. Nearby you can admire one of Amsterdam's most iconic rows of crooked canal houses, located along Damrak Street. Also in this area is the popular Amsterdam Museum detailing the city's history.</p>
                <p>To the west of Dam Square is one of the city's most popular attractions, the Anne Frank House in which the infamous girl lived in hiding during German occupation in WWII. To avoid long waits it's recommended to purchase a ticket to visit the house ahead of time. The canal in front of the Anne Frank House (along Prinsengracht Street) is also very scenic to walk along.</p>`
			},
			{
				tab_title: 'Red Light Area',
				tab_content: `<p>Near Dam Square you can walk through the city's famous Red Light District, where you'll find the medieval Oude Church, the stunning Church of Saint Nicholas, and the Ons Lieve Heer op Solder, a 17th century canal house which now operates as a museum and hosts a small but beautiful pink church on its top floor. The Red Light District also hosts many bars and a thriving nightlife scene.</p>
                <p>Near the monumental Rembrandtplein square you can tour the beautiful 17th century Rembrandt House Museum in which the famous artist once lived. Other notable museums in this area include a branch of Russia's famous Hermitage Museum of art, and two grandiose 19th century canal houses, the Museum Willet-Holthuysen and the Museum Van Loon.</p>`
			},
			{
				tab_title: 'Museums',
				tab_content: `<p>To the south of Dam Square near Museumplein square are Amsterdam's most important museums, including the incredible Van Gogh Museum containing the largest collections of works by Van Gogh in the world, alongside personal items and trinkets which tell the story of the famous painter's life. Equally popular is the Rijksmuseum, which houses an expansive collection of fine art, historical artifacts, and treasures in a grandiose building.</p>
                <p>The iconic Iamsterdam Sign once stood in front of the Rijksmuseum, but was moved in late 2018 to the city's Schipol Airport. The spot where the sign was located is still quite scenic however. Museumplein also hosts the Stedelijk Museum of modern and contemporary art, as well as the quaint Moco Museum hosting eccentric works by Dali and Banksy.</p>
                <p>Near Museumplein you can walk around and relax amongst the many ponds and lush greenery of the giant Vondelpark. Also near Museumplein is the Heineken Experience, which offers tours of the famous Heineken Brewery and tastings.</p>
                <p>Several other notable museums are located east of Dam Square, including the stunning contemporary NEMO Science Museum, the Het Scheepvaartmuseum which hosts a maritime museum and replicated 18th century merchant ship, and the beautiful Tropenmuseum with rotating exhibits. North of Dam Square you might like to visit the sleek ultra-contemporary Eye Film Museum.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Prinsensluis Bridge Canal View',
				image_url:
					'https://www.travelimager.com/images/netherlands/Netherlands-Amsterdam-Prinsensluis-Prinsenstraat-Bridge-South-View-Sunset.jpg',
				image_alt:
					'Lovely evening views looking down a Central Amsterdam canal lined with historic row houses and trees, with an oncoming tour boat, seen from the Preisensluis Bridge',

				cc_image_url:
					'https://pixabay.com/en/amsterdam-channel-netherlands-1089646/',
				cc_author_url: 'https://pixabay.com/en/users/neshom-447256/',
				cc_author: 'neshom',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Damrak Street Crooked Houses',
				image_url:
					'https://www.travelimager.com/images/netherlands/Netherlands-Amsterdam-Damrak-Street-Canal-Crooked-Slanted-Houses.jpg',
				image_alt:
					'Iconic crooked row townhouses along the Damrak Street Canal in Amsterdam',

				cc_image_url:
					'https://pixabay.com/en/amsterdam-netherlands-reflection-3031921/',
				cc_author_url: 'https://pixabay.com/en/users/troverbay21-7468696/',
				cc_author: 'troverbay21',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Amsterdam Canal Boats (Night)',
				image_url:
					'https://www.travelimager.com/images/netherlands/Netherlands-Amsterdam-Canal-Boats-Night.jpg',
				image_alt:
					'Many small boats lined up along the sides of a smaller Amsterdam canal at night',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Amsterdam_(8698448254).jpg&action=history',
				cc_author_url: 'https://www.flickr.com/photos/sergesegal/',
				cc_author: 'Sergey Galyonkin',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Rijksmuseum',
				image_url:
					'https://www.travelimager.com/images/netherlands/Netherlands-Amsterdam-Rijksmuseum-Museum-Exterior.jpg',
				image_alt:
					'Grand exterior of the famous Rijksmuseum in Asmterdam seen during a partly cloudy day ',

				cc_image_url:
					'https://pixabay.com/en/rijksmuseum-amsterdam-museum-2127625/',
				cc_author_url: 'https://pixabay.com/en/users/kirkandmimi-763448/',
				cc_author: 'kirkandmimi',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Van Gogh Museum',
				image_url:
					'https://www.travelimager.com/images/netherlands/Netherlands-Amsterdam-Van-Gogh-Museum-Amsterdam.jpg',
				image_alt:
					"Ultra-modern glass and metal structure housing the entrance to Amsterdam's Van Gogh Museum",

				cc_image_url: 'https://www.flickr.com/photos/callmewhatever/31371838831',
				cc_author_url: 'https://www.flickr.com/photos/callmewhatever/',
				cc_author: 'Daniel Zimmermann',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	greater_amsterdam: {
		id: 'greater_amsterdam',
		itineraries: '',
		destinationName: 'Greater Amsterdam',
		stateName: 'Netherlands',
		region: 'europe',
		anchor_tag: 'greater-amsterdam-netherlands',
		destination_link: '/destinations/netherlands/greater-amsterdam-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/8jiiRWB8hbB2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Zaanse Schans',
				tab_content: `<p>Just outside of Amsterdam are many amazing attractions which are easily reached via public transportation or car. Additionally, tours from Amsterdam are available which combine several of these popular attractions.</p>
                <p>One of the most iconic sights of the Netherlands is Zaanse Schans, which hosts many historic windmills and houses along the Zans River, set amongst the idyllic Dutch countryside and many small canals.</p>`
			},
			{
				tab_title: 'Keukenhof Gardens',
				tab_content: `<p>Near the town of Lisse is one of the world's largest flower gardens, the famous Keukenhof Gardens, which hosts many vibrant colored flowers set amongst lush gardens and streams. The Keukenhof Gardens even hosts a small castle and a lovely traditional windmill.</p>`
			},
			{
				tab_title: 'Castles',
				tab_content: `<p>You might also consider a visit to the country's most stunning castle, the Castle De Haar, which is located just outside of Utrecht. This fairytale-like castle sits atop a small lake surrounded by beautiful manicured gardens and woodlands.</p>
                <p>Just outside of Amsterdam in the town of Muiden is the Muiderslot Castle, a picturesque 13th century castle surrounded by a moat and lovely gardens. The castle along with its moat and gardens sit on a larger island in the middle of a river.</p>`
			},
			{
				tab_title: 'Haarlem',
				tab_content: `<p>Just west of Amsterdam is the scenic city of Haarlem, which features canals and many medieval buildings, especially around the Grote Markt square.</p>
                <p>Popular attractions include the towering St. Bavo Church on Grote Markt Square, the breathtaking and colorful Basilica Cathedral of St. Bavo on the western edge of the city, and the castle-like Amsterdamse Poort medieval gate on the eastern side of the city. Near the Amsterdamse Poort gate you can admire the charming riverfront Windmill De Adriaan as well.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Zaanse Schans Windmills',
				image_url:
					'https://www.travelimager.com/images/netherlands/Netherlands-Greater-Amsterdam-Zaanse-Schans-Windmills.jpg',
				image_alt:
					'Lovely colored windmills seen along the water in the Dutch countryside of Zaanse Schans, Netherlands',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Zaanse_Schans_-_panoramio_-_cisko66.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/wiki/User:Erik_Zachtehttps://commons.wikimedia.org/w/index.php?title=File:Zaanse_Schans_-_panoramio_-_cisko66.jpg&action=history',
				cc_author: 'cisko66',

				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0'
			},

			{
				attraction: 'Castle de Haar (Utrecht)',
				image_url:
					'https://www.travelimager.com/images/netherlands/Netherlands-Utrecht-Kasteel-de-Haar-Castle.jpg',
				image_alt:
					'Aerial view of the fairytale-like Castle de Haar in Utrecht, Netherlands',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Kasteel_de_Haar._Luchtfoto_5.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Kasteel_de_Haar._Luchtfoto_5.jpg&action=history',
				cc_author: 'Jan Koning',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/nl/deed.en',
				cc_license: 'CC BY-SA 3.0 NL'
			},

			{
				attraction: 'Keukenhof Gardens',
				image_url:
					'https://www.travelimager.com/images/netherlands/Netherlands-Greater-Amsterdam-Lisse-Keukenhof-Gardens.jpg',
				image_alt:
					'Vibrant flowers and streams surrounded by parkland within the Keukenhof Gardens of Lisse, Netherlands',

				cc_image_url:
					'https://pixabay.com/en/garden-flower-garden-flowers-3345970/',
				cc_author_url: 'https://pixabay.com/en/users/MabelAmber-1377835/',
				cc_author: 'MabelAmber',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Keukenhof Gardens Molen Windmill',
				image_url:
					'https://www.travelimager.com/images/netherlands/Netherlands-Greater-Amsterdam-Lisse-Keukenhof-Gardens-Keukenhofmolen-Windmill.jpg',
				image_alt:
					'Molen Windmill behind fields of flowers within the Keukenhof Gardens of Lisse, Netherlands',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Keukenhof,_view_to_the_windmill.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Dguendel',
				cc_author: 'Dguendel',

				cc_license_url: 'https://creativecommons.org/licenses/by/4.0/legalcode',
				cc_license: 'CC BY 4.0'
			},

			{
				attraction: 'Amsterdamse Poort (Haarlem)',
				image_url:
					'https://www.travelimager.com/images/netherlands/Netherlands-Haarlem-Amsterdamse-Poort-Medieval-Gate.jpg',
				image_alt:
					'Castle-like medieval gate, the Amsterdamse Poort, in Haarlem, Netherlands',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Haarlem_Amsterdamse_Poort_03.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Zairon',
				cc_author: 'Zairon',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			}
		]
	},

	algarve_coast: {
		id: 'algarve_coast',
		itineraries: 'portugal',
		destinationName: 'Algarve Coast',
		stateName: 'Portugal',
		region: 'europe',
		anchor_tag: 'algarve-coast-portugal',
		destination_link: '/destinations/portugal/algarve-coast-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/t9gNpxxjzByaLmbX9',
			all_attractions: 'https://goo.gl/maps/CzcY4nYkKLUp7z8y6'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>The Algarve Coast region is located along Portugal's picturesque southern coast and is known for its many captivatingly beautiful sandy beaches and vibrant blue-green waters. The main beach cities along the coast from west to east to include Lagos, Portimão, Carvoeiro, Lagoa, and Albufeira. Albufeira is home to the Falesia Beach, a long beach which sits below stunning red and white cliffs with golden sand.</p>`
			},
			{
				tab_title: 'Lagoa & Carvoeiro',
				tab_content: `<p>In Lagoa you'll find the Algarve Coast's most famous beach, Marinha Beach, which features large sandy beaches and clear waters below the cliffs. Marinha Beach is most popular however for its incredible natural double sea arch along the cliffs, called Arco Natural. You can even take a short hike east from Marinha Beach to see another impressive sea arch.</p>
                <p>To the west of Marinha Beach is the Algarve Coast's other most iconic sight, the breathtaking Benagil Caves, which are only accessible via paddle boat or SOP, which you can rent from the nearby Benagil Beach. This incredibly scenic section of the coastal cliffs between Marinha Beach and continuing west beyond the Benagil Caves is known as the Seven Hanging Valleys Trail, and is perhaps the most beautiful coastline in Portugal, featuring many coves, beaches, and ocean sinkholes along the cliffs.</p>
                <p>You can extend the Seven Hanging Valleys Trail further west to the popular Algar Seco coastal area, consisting of a maze of walkways and caves along a strikingly rugged and unique section of the coastline. Just beyond this is the popular beach town of Carvoeiro.</p>`
			},
			{
				tab_title: 'Portimão',
				tab_content: `<p>In Portimão you can visit the popular Praia do Vau beach and adjacent Praia do Alemão beach, both of which feature striking rock formations sticking out of the water. A bit to the west of Praia do Vau is the famous Prainha Beach, known for its gorgeous cliffs and caves rising above the sand. Be sure to take the incredibly scenic walk along the cliffs between Prainha and Praia do Vau to admire the stunning coastal features including many arches, pillars, sea caves, and coves with tiny sandy beaches.</p>`
			},
			{
				tab_title: 'Lagos',
				tab_content: `<p>Lagos is perhaps the most famous town along the Algarve Coast, known for its breathtakingly scenic coastline featuring countless sea caves, arches, and cliffs. The best way to see this picturesque coastline is via one of the many boat tours, which can be found along the harbor boardwalk next to the town. These boat tours wind through the labyrinth of coves, caves, and sea rocks and are quite an incredible experience.</p>
                <p>The most beautiful sandy beaches below the the cliffs of Lagos include the picturesque Camilo Beach and adjacent Praia Dona Ana beach, which both feature many rock formations and caves that you can explore along the coast. Walk south along the extremely scenic cliffs from these beaches to the Farol da Ponta da Piedade Lighthouse, which sits above the majestic Karst of Ponta da Piedade caves and a breathtaking cove with several sea arches.</p>
                <p>To the west of Lagos at the very southwestern tip of Portugal is the Cape of Saint-Vincent (or Cabo São Vicente), which features a lovely lighthouse and is set amongst dramatic steep cliffs that you can hike along.</p>`
			}
		],
		attractions: [
			{
				id: 'algarve-coast-55',
				carouselId: 'marinha-beach',
				itineraryCarousel: 'algarve-coast-portugal',
				attraction: 'Arcos Naturais Natural Arches (Marinha Beach)',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Algarve-Coast-Lagoa-Praia-da-Marinha-Beach-Arco-Natural-Sea-Arches.jpg',
				image_alt:
					"Iconic double sea arch of Arcos Naturais along the cliffs of the Algarve Coast's Marinha Beach in Lagoa, Southern Portugal",
				cc_image_url: 'https://www.flickr.com/photos/107521854@N05/16307543387',
				cc_author_url: 'https://www.flickr.com/photos/107521854@N05/',
				cc_author: 'Luis Ascenso',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'algarve-coast-23',
				carouselId: 'portimao',
				itineraryCarousel: 'algarve-coast-portugal',
				attraction: 'Praia do Vau Beach',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Algarve-Coast-Portimao-Praia-do-Vau-Beach.jpg',
				image_alt:
					"Reddish cliffs above the sandy beach of Praia do Vau in Portimao along Southern Portugal's Algarve Coast",
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Praias_do_Vau_e_do_Alem%C3%A3o_(4314265710).jpg&action=history',
				cc_author_url: 'https://www.flickr.com/people/31212180@N08',
				cc_author: 'Aires Almeida',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'algarve-coast-51',
				carouselId: 'benagil-caves',
				itineraryCarousel: 'algarve-coast-portugal',
				attraction: 'Benagil Caves',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Algarve-Coast-Lagoa-Benagil-Caves.jpg',
				image_alt:
					"Iconic Benagil Caves with a sandy beach inside, located along the Seven Hanging Valleys of Portugal's Algarve Coast in Lagoa",
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Benagil_Cave,_July_2012.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Benagil_Cave,_July_2012.jpg&action=history',
				cc_author: 'Hurtuv',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'algarve-coast-5',
				carouselId: 'lagos',
				itineraryCarousel: 'algarve-coast-portugal',
				attraction: 'Praia Dona Ana Beach',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Algarve-Coast-Lagos-Praia-Dona-Ana-Beach.jpg',
				image_alt:
					'Stunning natural rock stack formations of Praia Dona Ana Beach along the Algarve Coast in Lagos, Portugal',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Praia_da_Dona_Ana_(Lagos).jpg&action=history',
				cc_author_url: 'https://de.wikipedia.org/wiki/Benutzer:Felix_K%C3%B6nig',
				cc_author: 'Felix König',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC-BY-SA 3.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2',
				cc_license_gnu: 'GNU 1.2'
			},
			{
				id: 'algarve-coast-27',
				carouselId: 'portimao',
				itineraryCarousel: 'algarve-coast-portugal',
				attraction: 'Prainha Beach Arches',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Algarve-Coast-Portimao-Prainha-Beach-Arches.jpg',
				image_alt:
					'Two natural arches on the sandy Prainha Beach along the water of the Algarve Coast in Portimao, Portugal',
				cc_image_url:
					'https://pixabay.com/photos/portugal-algarve-sea-rocks-coast-2046351/',
				cc_author_url: 'https://pixabay.com/users/moniek58-4360441/',
				cc_author: 'moniek58',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'algarve-coast-59',
				carouselId: 'albufeira',
				itineraryCarousel: 'algarve-coast-portugal',
				attraction: 'Falesia Beach (Albufeira)',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Algarve-Coast-Albufeira-Praia-Falesia-Beach.jpg',
				image_alt:
					'Stunning red and white cliffs surrounding the boardwalk leading to Praia Falesia Beach in Albufeira, Algarve Coast, Portugal',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Praia_da_Fal%C3%A9sia_Beach_Walkway_(36312535632).jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Praia_da_Fal%C3%A9sia_Beach_Walkway_(36312535632).jpg&action=history',
				cc_author: 'xlibber',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'algarve-coast-42',
				carouselId: 'carvoeiro',
				itineraryCarousel: 'algarve-coast-portugal',
				attraction: `Praia de Vale Covo Beach\u00a0&\u00a0Sea\u00a0Cave`,
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Algarve-Coast-Lagoa-Carvoeiro-Praia-de-Vale-Covo-Cove-Beach-View-of-Sea-Cave.jpg',
				image_alt:
					'View of a massive sea cave along the cliffs, seen from the beach of Praia de Vale Covo in Lagoa, Algarve Coast, Portugal',
				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'algarve-coast-7',
				carouselId: 'lagos',
				itineraryCarousel: 'algarve-coast-portugal',
				attraction: 'Praia do Camilo Beach & Sea Arch',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Algarve-Coast-Lagos-Praia-do-Camilo-Staircase-and-Sea-Arch.jpg',
				image_alt:
					'Staircase leading to Praia do Camilo Beach with view of sea arch along the Algarve Coast in Lagos, Portugal',
				cc_image_url: 'https://www.flickr.com/photos/tiborbkovacs/15244207416/',
				cc_author_url: 'https://www.flickr.com/photos/tiborbkovacs/',
				cc_author: 'Tibor Kovacs',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'algarve-coast-10',
				carouselId: 'ponta-da-piedade',
				itineraryCarousel: 'algarve-coast-portugal',
				attraction: 'Karst of Ponta da Piedade',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Algarve-Coast-Lagos-Karst-of-Ponta-da-Piedade-Caves-and-Sea-Arches.jpg',
				image_alt:
					'Overlooking the natural sea arches and caves amongst vibrant waters at Ponta da Piedade in Lagos, Algarve Coast, Portugal',
				cc_image_url: 'https://www.flickr.com/photos/girolame/3483687399/',
				cc_author_url: 'https://www.flickr.com/photos/girolame/',
				cc_author: 'Jerome Bon',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	lisbon: {
		id: 'lisbon',
		itineraries: 'portugal',
		destinationName: 'Lisbon',
		stateName: 'Portugal',
		region: 'europe',
		anchor_tag: 'lisbon-portugal',
		destination_link: '/destinations/portugal/lsibon-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/n4pFBggo29K2',
			all_attractions: 'https://goo.gl/maps/RSVXuyv3uxq'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Baixa',
				tab_content: `<p>Portugal's charming seaside capital is quite picturesque and offers an amazing cuisine. The Baixa neighborhood hosts several marvelous historic squares, including the vast waterfront Comercio Plaza surrounded by lavish buildings, as well as the Praca Luis de Camoes and Rossio Square. Baixa also hosts the stunning freso-covered Church of Sao Roque, and the mesmerizing ruins of the 14th century Carmo Convent.</p>`
			},
			{
				tab_title: 'Alfama-Castillo',
				tab_content: `<p>The Alfama-Castillo neighborhood hosts the landmark Lisbon Cathedral, as well as the 11th century Sao Jorge Castle, with its imposing Moorish walls that you can walk along while enjoying coastal views. Nearby are two lovely baroque structures, the elegant National Pantheon, and the Church of Sao Vicente of Fora, which hosts a rooftop terrace with fantastic views.</p>
                <p>This hilly neighborhood also hosts three extremely popular viewpoints overlooking the city and coast, including the Miradouros de Santa Luzia, Nossa Senhora do Monte, and Sophia de Mello Breyner Andresen.</p>`
			},
			{
				tab_title: 'Belem',
				tab_content: `<p>Lisbon's Belem neighborhood hosts several UNESCO sites, including the gorgeous 15th century Jeronimos Monastery complex and the elegant castle-like Belem Tower along the coast. Additional sights in Belem include the iconic waterfront Monument to the Discoveries, the fabulously ornate National Coach Museum of royal carriages, and the decadent neoclassical Ajuda National Palace.</p>`
			},
			{
				tab_title: 'Lisbon Outskirts',
				tab_content: `<p>Highly recommended attractions outside the city-center include the magnificent rococo-style Queluz National Palace, and the Lisbon Oceanarium, which is the largest indoor aquarium in Europe and one of the best in the world. Across the Tagus River from Lisbon is the hilltop National Sanctuary of Christ the King, from which you can enjoy sweeping views over the city.</p>`
			}
		],
		attractions: [
			{
				id: 'lisbon-19',
				carouselId: 'belem',
				itineraryCarousel: 'lisbon-portugal',
				attraction: 'Belem Tower',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Lisbon-Belem-Tower.jpg',
				image_alt:
					"Elegant castle-like Belem Tower, one of Lisbon's most iconic sights, set amongst the riverfront",
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Torre_Bel%C3%A9m_April_2009-1.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Alvesgaspar',
				cc_author: 'Alvesgaspar',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'lisbon-5',
				carouselId: 'alfama-castillo',
				itineraryCarousel: 'lisbon-portugal',
				attraction: 'Miradouro de Santa Luzia Viewpoint',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Lisbon-Miradouro-de-Santa-Luzia-Viewpoint.jpg',
				image_alt:
					'Striking view overlooking the city and coastline of Lisbon from high above, seen from the garden-covered colonnade of the Miradouro de Santa Luzia',
				cc_image_url:
					'https://www.flickr.com/photos/amanessinger/23159779874/in/photostream/',
				cc_author_url: 'https://www.flickr.com/people/24201453@N04',
				cc_author: 'Andreas Manessinger',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'lisbon-1',
				carouselId: 'alfama-castillo',
				itineraryCarousel: 'lisbon-portugal',
				attraction: 'Sao Jorge Castle​ Medieval Walls',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Lisbon-Castelo-de-Sao-Jorge-Castle-1.jpg',
				image_alt:
					'View of the imposing medieval walls of the vast hilltop Sao Jorge Castle complex seen from below in Lisbon, Portugal',
				cc_image_url: 'https://www.flickr.com/photos/islandjoe/5580389329/',
				cc_author_url: 'https://www.flickr.com/photos/islandjoe/',
				cc_author: 'islandjoe',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'lisbon-25',
				carouselId: 'bairro-alto-almada-and-queluz',
				itineraryCarousel: 'lisbon-portugal',
				attraction: 'Queluz National Palace (Gardens)',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Lisbon-Queluz-National-Palace.jpg',
				image_alt:
					'Gorgeous Neptune Fountain in front of the majestic and colorful Queluz National Palace, located in a suburb of Lisbon',
				cc_image_url: 'https://www.flickr.com/photos/pedrocaetano/29838154532/',
				cc_author_url: 'https://www.flickr.com/photos/pedrocaetano/',
				cc_author: 'Pedro',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'lisbon-9',
				carouselId: 'baixa',
				itineraryCarousel: 'lisbon-portugal',
				attraction: 'Comercio Plaza',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Lisbon-Comercio-Plaza-1.jpg',
				image_alt:
					'Drone shot overlooking the vast Comercio Plaza from the river in Lisbon, Portugal',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Lisbon_main_square_(36622604910).jpg&action=history',
				cc_author_url: 'https://www.flickr.com/people/158619309@N03',
				cc_author: 'Deensel',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'lisbon-15',
				carouselId: 'belem',
				itineraryCarousel: 'lisbon-portugal',
				attraction: 'Jeronimos Monastery',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Lisbon-Jeronimos-Monastery.jpg',
				image_alt:
					"Striking white exterior of Lisbon's expansive Jeronimos Monastery, one of the city's most popular attractions",
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Lisboa_(P)_-_Mosteiro_dos_Jer%C3%B3nimos_(tone-mapping).jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Guido_Radig',
				cc_author: 'Guido Radig',
				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	porto: {
		id: 'porto',
		itineraries: 'portugal',
		destinationName: 'Porto',
		stateName: 'Portugal',
		region: 'europe',
		anchor_tag: 'porto-portugal',
		destination_link: '/destinations/portugal/porto-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/t9gNpxxjzByaLmbX9',
			all_attractions: 'https://goo.gl/maps/CzcY4nYkKLUp7z8y6'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Iconic Attractions',
				tab_content: `<p>Porto is Portugal's second largest city and located in the northern part of the country. The city's historic centre is a UNESCO world heritage and hosts most of Porto's main attractions. One of the city's most famous attractions is the highly intricate and gorgeous Livraria Lello, a bookstore which inspired settings for the Harry Potter movies.</p>
                <p>Nearby you can admire the lovely Square Carlos Alberto, and the beautiful baroque Clerigos Church, with its grandiose interiors and Clerigos Tower (one of the symbols of Porto).</p>`
			},
			{
				tab_title: 'Azulejo Tiles',
				tab_content: `<p>Porto is known for its azulejo tiled churches, which are covered in countless blue and white tiles, creating highly elaborate and elegant works of art on the exteriors of these lovely baroque churches. The city's most famous azulejo churches include the Igreja do Carmo, Church of Saint Ildefonso, and Chapel of Souls.</p>
                <p>Other noteworthy azulejo structures include the Porto Sao Bento Rail Station and the Saint Anthony's Church Congregados. Porto's main church however is the towering Porto Cathedral, which features an imposing romanesque exterior and a remarkable gothic cloister.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Nearby the Porto Cathedral you can view and walk along the remnants of Porto's medieval Muralha Fernandina city walls. These walls tower above the Douro River below, which is spanned by another Porto landmark, the Luis I Bridge. From across the bridge you can enjoy breathtaking panoramic views over Porto from the roof of the Mosteiro da Serra do Pilar monastery.</p>
                <p>Porto's most famous palace is the 19th century Bolsa Palace, which showcases incredibly lavish ornate interiors that you can tour. Next door to the palace is the impressive baroque 14th century Monument Church of St. Francis, which features underground catacombs and extravagant interiors covered in gold. Also noteworthy are the 19th Gardens of the Crystal Palace, which feature beautiful manicured gardens overlooking the river.</p>`
			}
		],
		attractions: [
			{
				id: 'porto-2',
				carouselId: 'livraria-lello-and-clerigos',
				itineraryCarousel: 'porto-portugal',
				attraction: 'Livraria Lello Bookshop',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Porto-Livraria-Lello-Bookshop.jpg',
				image_alt:
					'View looking up at the walls and extremely elegantly designed ceilings and carvings of the Livraria Lello Bookshop, whbich inspired Harry Potter, located in Porto, Porugal',
				cc_image_url: 'https://www.flickr.com/photos/nanpalmero/27990938057/',
				cc_author_url: 'https://www.flickr.com/photos/nanpalmero/',
				cc_author: 'Nan Palmero',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'porto-8',
				carouselId: 'porto-azulejo',
				itineraryCarousel: 'porto-portugal',
				attraction: 'Chapel of Souls',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Porto-Chapel-of-Souls-Capela-das-Almas.jpg',
				image_alt:
					'Lovely little Chapel of Souls, whose exterior is almost entirely covered in finely detailed painted azulejo tiles, in Porto, Portugal',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Capela_de_Santa_Catarina_66.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Capela_de_Santa_Catarina_66.jpg&action=history',
				cc_author: 'Antonio Amen',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},
			{
				id: 'porto-16',
				carouselId: 'ribeira',
				itineraryCarousel: 'porto-portugal',
				attraction: 'Serra do Pilar Monastery Viewpoint',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Porto-Miradouro-da-Serra-do-Pilar-Monastery-Viewpoint.jpg',
				image_alt:
					'Gorgeous view overlooking Central Porto and the Luis I Bridge from across the river, seen from atop the Serra do Pilar Monastery',
				cc_image_url:
					'https://en.wikipedia.org/w/index.php?title=File:Puente_Don_Luis_I,_Oporto,_Portugal,_2012-05-09,_DD_13.JPG&action=history',
				cc_author_url: 'http://delso.photo/',
				cc_author: 'Diego Delso',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'porto-6',
				carouselId: 'porto-azulejo',
				itineraryCarousel: 'porto-portugal',
				attraction: 'Igreja do Carmo Convent',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Porto-Igreja-do-Carmo-Church.jpg',
				image_alt:
					'Stunning exterior of the Igreja do Carmo Convent in Porto, with its painted azulejo tile side',
				cc_image_url: 'https://www.flickr.com/photos/46604778@N00/14004037901/',
				cc_author_url: 'https://www.flickr.com/photos/46604778@N00/',
				cc_author: 'domjisch',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'porto-11',
				carouselId: 'ribeira',
				itineraryCarousel: 'porto-portugal',
				attraction: 'Porto Cathedral',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Porto-Se-Porto-Cathedral.jpg',
				image_alt:
					'Castle-like Romanesque extrior of the Porto Cathedral paritally obscured by other buildings',
				cc_image_url: 'https://www.flickr.com/photos/arqpalazzo/14683713283',
				cc_author_url: 'https://www.flickr.com/photos/arqpalazzo/',
				cc_author: 'Pedro Paulo Palazzo',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	sintra: {
		id: 'sintra',
		itineraries: 'portugal',
		destinationName: 'Sintra',
		stateName: 'Portugal',
		region: 'europe',
		anchor_tag: 'sintra-portugal',
		destination_link: '/destinations/portugal/sintra-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/ppedRzp3srq'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Pena Palace',
				tab_content: `<p>You'll find several brilliant fairytale-like castles and palaces within the UNESCO listed Sintra-Cascais Natural Park, which is located in the forest-covered hills west of Lisbon.</p>
                <p>The most popular and impressive palace within the park is the colorful and breathtaking Romanticist-style National Palace of Pena, which sits atop a mountain surrounded by vast lush gardens. This fantastical multi-colored palace looks like a giant fortified castle and features many intricate lavish rooms with historic furnishings, as well as a lovely cloister.</p>`
			},
			{
				tab_title: 'Quinta de Regaleira',
				tab_content: `<p>The next most popular palace is the extravagant royal Sintra National Palace, a medieval-era palace containing intricate azulejo tile-work and beautiful highly embellished interiors.</p>
                <p>Nearby is the equally popular Quinta da Regaleira, a majestic and highly ornate gothic estate surrounded by dense forests and parkland. This palace also hosts a labyrinth-like Grotto and the stunning Inciatic Well, which hosts a circular stone staircase leading to underground tunnels that you can explore.</p>`
			},
			{
				tab_title: 'Moors Castle',
				tab_content: `<p>Another must-see is the hilltop Castle of the Moors, which was originally constructed in the 8th century. This stunning medieval castle features imposing stone-built fortified walls that you can walk along while enjoying amazing views over the Greater Lisbon area.</p>
                <p>Deeper into the park you'll find the 19th century Monserrate Palace, which showcases many fine Moorish and Indian inspired architectural elements. This palace contains elegant lavish interiors and is surrounded by a lovely botanical garden.</p>`
			},
			{
				tab_title: 'Sintra Coast',
				tab_content: `<p>After enjoying the palaces and castles of Sintra, you can take the bus to the coast to see the sunset at Cabo da Roca, a lovely cape with a small lighthouse set atop striking cliffs, which marks continental Europe's westernmost point.</p>
                <p>Nearby Cabo da Roca is the stunning Ursa Beach, which requires a short extremely scenic walk to reach from the lighthouse, with breathtaking views along the way. You can even hike further along the cliffs to the large sandy beach of Praia da Adraga, hiking along an exceptionally gorgeous section of Portgual's coastline.</p>`
			}
		],
		attractions: [
			{
				id: 'sintra-12',
				carouselId: 'sintra-pena-palace',
				itineraryCarousel: 'sintra-portugal',
				attraction: 'National Palace of Pena',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Sintra-Park-and-National-Palace-of-Pena-1.jpg',
				image_alt:
					"Massive and colorful fairytale-like exterior of Sintra's incredible National Palace of Pena, located atop a mountain north of Lisbon",
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Sintra_Portugal_Pal%C3%A1cio_da_Pena-01.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/wiki/User:Cccefalon/Profile',
				cc_author: 'CEphoto, Uwe Aranas',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'sintra-7',
				carouselId: 'castle-of-the-moors',
				itineraryCarousel: 'sintra-portugal',
				attraction: `Castle of the Moors Medieval Walls`,
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Sintra-Castle-of-the-Moors-View-of-Hilltop-Medieval-Walls-and-Towers.jpg',
				image_alt:
					'Overlooking the vast winding walls along the mountaintop of the Castle of the Moors in Sintra, Portugal',
				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'sintra-3',
				carouselId: 'sintra-national-palace-and-quinta-da-regaleira',
				itineraryCarousel: 'sintra-portugal',
				attraction: 'Quinta da Regaleira Estate',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Sintra-Quinta-da-Regaleira-Palace-1.jpg',
				image_alt:
					'Striking building set amongst the gardens of the Quinta da Regaleira in Sinta',
				cc_image_url: 'https://www.flickr.com/photos/sinava/39610221594/',
				cc_author_url: 'https://www.flickr.com/photos/sinava/',
				cc_author: 'Naval S',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'sintra-4',
				carouselId: 'sintra-national-palace-and-quinta-da-regaleira',
				itineraryCarousel: 'sintra-portugal',
				attraction: 'Iniciatic Well (Quinta da Regaleira)',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Sintra-Quinta-da-Regaleira-Iniciatic-Well.jpg',
				image_alt:
					"Looking down the deep rounded-staircase of the Inciatic Well of Sintra's Quinta da Regaleira gardens",
				cc_image_url: 'https://www.flickr.com/photos/glynlowe/16277476688/',
				cc_author_url: 'https://www.flickr.com/photos/glynlowe/16277476688/',
				cc_author: 'Photo YourSpace',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'sintra-17',
				carouselId: 'monserrate-palace-and-more',
				itineraryCarousel: 'sintra-portugal',
				attraction: 'Palace of Monserrate',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Sintra-Park-and-Palace-of-Monserrate.jpg',
				image_alt:
					'Stunningly detailed Moorish architecture of the Palace of Monserrate in Sintra',
				cc_image_url: 'https://www.flickr.com/photos/29946195@N07/7730029906',
				cc_author_url: 'https://www.flickr.com/photos/29946195@N07/',
				cc_author: 'kkmarais',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'sintra-22',
				carouselId: 'cabo-da-roca-and-beaches',
				itineraryCarousel: 'sintra-portugal',
				attraction: 'Cabo da Roca Cape View',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Sintra-Coast-Cabo-da-Roca-View.jpg',
				image_alt:
					'Incredibly picturesque view of the cliffs and rock formations along the coast seen from Cabo da Roca near Sintra, Portugal',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Cabo_da_Roca,_Sintra-Cascais_Natural_Park,_Portugal_(12_May_2007).jpg&action=history',
				cc_author_url: 'https://en.wikipedia.org/wiki/User:Husond',
				cc_author: 'Husond',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'sintra-23',
				carouselId: 'cabo-da-roca-and-beaches',
				itineraryCarousel: 'sintra-portugal',
				attraction: 'Ursa Beach',
				image_url:
					'https://www.travelimager.com/images/portugal/Portugal-Sintra-Coast-Praia-da-Ursa-Beach.jpg',
				image_alt:
					'Striking coastal pyramid-like rock formations seen from the sand below the cliffs at Ursa Beach near Sintra',
				cc_image_url:
					'https://www.flickr.com/photos/rosino/4092828417/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/rosino/',
				cc_author: 'Rosino',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},

	belfast: {
		id: 'belfast',
		itineraries: '',
		destinationName: 'Belfast',
		stateName: 'Northern Ireland',
		region: 'europe',
		anchor_tag: 'belfast-northern-ireland',
		destination_link: '/destinations/northern-ireland/belfast-attractions-guide',
		attractionMapLinks: {
			custom_attractions_1: 'https://goo.gl/maps/CdpXYN5kqr52',
			custom_attractions_1_text: ' Top Attractions (Train)',
			custom_attractions_2: 'https://goo.gl/maps/b4EKgu9dKR42',
			custom_attractions_2_text: 'Top Attractions (Car)'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Belfast City Hall',
				image_url:
					'https://www.travelimager.com/images/northern-ireland/Northern-Ireland-Belfast-Belfast-City-Hall-Exterior.jpg',
				image_alt:
					'Grandiose baroque exterior of the iconic Belfast City Hall building in Northern Ireland',

				cc_image_url: 'https://www.flickr.com/photos/macnolete/997055128/',
				cc_author_url: 'https://www.flickr.com/photos/macnolete/',
				cc_author: 'Macnolete',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Titanic Belfast Museum',
				image_url:
					'https://www.travelimager.com/images/northern-ireland/Northern-Ireland-Belfast-Titanic-Belfast-Museum.jpg',
				image_alt:
					'Striking ultra-modern architecture of the Titanic Belfast Museum along the water in Belfast',

				cc_image_url: 'https://www.flickr.com/photos/infomatique/27779258066',
				cc_author_url: 'https://www.flickr.com/photos/infomatique/',
				cc_author: 'William Murphy',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Belfast Castle',
				image_url:
					'https://www.travelimager.com/images/northern-ireland/Northern-Ireland-Belfast-Belfast-Castle.jpg',
				image_alt:
					'Beautiful exterior of the Belfast Castle surrounded by its fine gardens near Cave Hill Park',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Belfast_Castle,_August_2011.jpg&action=history',
				cc_author_url: 'https://en.wikipedia.org/wiki/User:Johnnykimble',
				cc_author: 'Johnnykimble',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: "McArt's Fort (Cave Hill Park)",
				image_url:
					'https://www.travelimager.com/images/northern-ireland/Northern-Ireland-Belfast-Cave-Hill-Country-Park-McArts-Fort.jpg',
				image_alt:
					"View over Belfast and the lush green hills above the city, seen from McArt's Fort atop Cave Hill",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	edinburgh: {
		id: 'edinburgh',
		itineraries: '',
		destinationName: 'Edinburgh',
		stateName: 'Scotland',
		region: 'europe',
		anchor_tag: 'edinburgh-scotland',
		destination_link: '/destinations/scotland/edinburgh-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/o85rLG2bDCF2',
			all_attractions: 'https://goo.gl/maps/rGYXBH5rLNG2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Old Town & Castle',
				tab_content: `<p>Within the UNESCO listed Old Town of Scotland's capital city you'll find many incredible attractions, including the medieval gothic St. Giles' Cathedral, the lovely Victorian Balmoral Hotel, the intricate towering Scott Monument, and the scenic Royal Mile street, which is lined with many historic buildings.</p>
                <p>Rising above the Old Town is the rocky hilltop Edinburgh Castle, a massive fortress which hosts the Royal Palace, and stunning views over the city. Below the castle are the elegant Princess Street Gardens, an excellent place to admire the castle.</p>
                <p>Within Edinburgh's Old Town be sure to take the Real Mary King's Close Tour, which explores the historic underground below the Royal Mile. Popular free museums in the Old Town include the Scottish National Gallery, the Scottish National Portrait Gallery, and the vast National Museum of Scotland featuring a variety of exhibits. Also popular is the popular Camera Obscura, offering a virtual tour of Edinburgh, various optical illusions, and a mirror maze.</p>`
			},
			{
				tab_title: "Calton Hill & Arthur's Seat",
				tab_content: `<p>Overlooking the Old Town on the eastern side is Calton Hill, which contains several striking monuments set amongst amazing views over the city. Adjacent to Calton Hill is one of the royal British residences, the 16th century Palace of Holyroodhouse, which contains lavish interiors and the remains of a beautiful 900 year old abbey behind it. Also nearby is the iconic Arthur's Seat, a sheer cliff which is the highest point in the city, offering stunning panoramic views.</p>`
			},
			{
				tab_title: 'More',
				tab_content: `<p>On the western side of Edinburgh is Dean Village, a small neighborhood of charming historic homes you should walk around and explore. Dean Village also hosts the scenic riverside Water of Leith Walkway trail. In Northern Edinburgh you might like to visit the lush Royal Botanic Garden or the Royal Yacht Brittania, which formerly served as the royal yacht of Queen Elizabeth II.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Old Town Edinburgh',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Edinburgh-Old-Town-Edinburgh-1.jpg',
				image_alt:
					'View overlooking many historic tall buildings of Old Town Edinburgh with iconic Arthurs Seat hilltop in the background',

				cc_image_url: 'https://www.flickr.com/photos/liakadaweb/37729397685/',
				cc_author_url: 'https://www.flickr.com/photos/liakadaweb/',
				cc_author: 'Herbert Frank',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Princes Street Gardens & Edinburgh Castle',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Edinburgh-Princes-Street-Gardens.jpg',
				image_alt:
					'Picturesque view of the hilltop Edinburgh Castle, seen from behind a lovely fountain in the Princes Street Gardens',

				cc_image_url: 'https://www.flickr.com/photos/glenbowman/2409425484/',
				cc_author_url: 'https://www.flickr.com/photos/glenbowman/',
				cc_author: 'Glen Bowman',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Calton Hill',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Edinburgh-Calton-Hill.jpg',
				image_alt:
					"Small monument atop Edinburgh's Calton Hill with fantastic views overlooking the city behind it",

				cc_image_url: 'https://www.flickr.com/photos/91425144@N04/19544351748/',
				cc_author_url: 'https://www.flickr.com/photos/91425144@N04/',
				cc_author: 'Arran Bee',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: "Arthur's Seat",
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Edinburgh-Arthurs-Seat.jpg',
				image_alt:
					"Vibrant grass with the sheer cliff of Arthur's Seat rising above it in Edinburgh",

				cc_image_url: 'https://www.flickr.com/photos/evocateur/12583320123/',
				cc_author_url: 'https://www.flickr.com/photos/evocateur/',
				cc_author: 'Daniel Stockman',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Dean Village',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Edinburgh-Dean-Village-1.jpg',
				image_alt:
					"Lovely historic buildings lining the river at Edinburgh's Dean Village",

				cc_image_url: 'https://www.flickr.com/photos/garyullah/37952869852',
				cc_author_url: 'https://www.flickr.com/photos/garyullah/',
				cc_author: 'Gary Campbell-Hall',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	glasgow: {
		id: 'glasgow',
		itineraries: '',
		destinationName: 'Glasgow',
		stateName: 'Scotland',
		region: 'europe',
		anchor_tag: 'glasgow-scotland',
		destination_link: '/destinations/scotland/glasgow-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/owpTraZnRuB2',
			all_attractions: 'https://goo.gl/maps/mLA2K9Tuqgm'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'George Square',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Glasgow-George-Square.jpg',
				image_alt:
					"Stunning Glasgow City Chambers building and monuments towering above George Square in Scotland's capital",

				cc_image_url: 'https://www.flickr.com/photos/kucinski/4696981115/',
				cc_author_url: 'https://www.flickr.com/photos/kucinski/',
				cc_author: 'Ben Kucinski',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Gilbert Scott Building (University of Glasgow)',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Glasgow-University-of-Glasgow-Gilbert-Scott-Museum.jpg',
				image_alt:
					'Giant gothic spired tower of the Gilber Scott Building at Glasgow University lit-up at night',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:University_of_Glasgow_Gilbert_Scott_Building_-_Feb_2008-2.jpg&action=history',
				cc_author_url: 'https://en.wikipedia.org/wiki/User:Diliff',
				cc_author: 'David Iliff',

				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0'
			},

			{
				attraction: "People's Palace & Winter Gardens",
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Glasgow-Peoples-Palace-and-Winter-Garden.jpg',
				image_alt:
					"Beautiful fountain in front of Glasgow's People's Palace and Winter Gardens",

				cc_image_url: 'https://www.flickr.com/photos/dun_deagh/6080525655',
				cc_author_url: 'https://www.flickr.com/photos/dun_deagh/',
				cc_author: 'dun_deagh',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Glasgow Science Centre',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Glasgow-Glasgow-Science-Centre.jpg',
				image_alt:
					'Picturesque night-time view of the ultra-modern Glasgow Science Centre along the water',

				cc_image_url: 'https://www.flickr.com/photos/80018584@N06/8150158717/',
				cc_author_url: 'https://www.flickr.com/photos/80018584@N06/',
				cc_author: 'Seo J Kim',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Kelvingrove Art Gallery & Museum',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Glasgow-Kelvingrove-Art-Gallery-and-Museum-Exterior.jpg',
				image_alt:
					"Photogenic castle-like exterior of Glasgow's baroque-style Kelvingrove Museum",

				cc_image_url: 'https://www.flickr.com/photos/wm_archiv/36947263324/',
				cc_author_url: 'https://www.flickr.com/photos/wm_archiv/',
				cc_author: 'Allie_Caulfield',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	greater_edinburgh: {
		id: 'greater_edinburgh',
		itineraries: '',
		destinationName: 'Greater Edinburgh',
		stateName: 'Scotland',
		region: 'europe',
		anchor_tag: 'greater-edinburgh-scotland',
		destination_link: '/destinations/scotland/greater-edinburgh-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/69Cz6K6Kzoo'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Rosslyn Chapel',
				tab_content: `<p>Just outside of Edinburgh are several amazing attractions, all of which can be reached from Edinburgh quite easily via public transportation. The Rosslyn Chapel is the famous church featured in the Da Vinci Code which has ties to the Knights Templar.</p>`
			},
			{
				tab_title: 'Contemporary Art',
				tab_content: `<p>The Keplies Helix Project is a stunning contemporary art installation consisting of two massive horse heads made of steel that are around 100 feet (30 m) tall. The Jupiter Artland open-air museum hosts many incredible art installations set amongst a fantasy-like artificial landscape.</p>`
			},
			{
				tab_title: 'Castles & Palaces',
				tab_content: `<p>Near the Keplies Helix Project is the elegant French chateau-like Callendar House. Another majestic residence is the Linlithgow Palace, a picturesque castle surrounded by grassy hills and ponds.</p>
                <p>Other enticing castles include the Tantallon Castle Ruins and the Blackness Castle, both of which sit beside the ocean. Also impressive is the massive hilltop complex of the Stirling Castle.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Rosslyn Chapel',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Greater-Edinburgh-Rosslyn-Chapel.jpg',
				image_alt:
					'Exterior of the famous Rosslyn Chapel near Edinburgh which was featured in the Da Vinci Code movie',

				cc_image_url:
					'https://www.flickr.com/photos/68943672@N00/27660295269/in/photostream/',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Bwag',
				cc_author: 'Jason Raia',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Jupiter Artland',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Greater-Edinburgh-Jupiter-Artland.jpg',
				image_alt:
					'Stunning grass walkway between two ponds leading to a green mound, part of a massive outdoor art exhibit',

				cc_image_url:
					'https://www.flickr.com/photos/r00s/20258902181/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/r00s/',
				cc_author: 'Rosa Menkman',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Linlithgow Palace',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Greater-Edinburgh-Linlithgow-Palace.jpg',
				image_alt:
					'Majestic ruins of the medieval Linlithgow Palace behind an idyllic country lake, near Edinburgh, Scotland',

				cc_image_url: 'https://www.flickr.com/photos/jmts/17159816206/',
				cc_author_url: 'https://www.flickr.com/photos/jmts/',
				cc_author: 'Jeremy Sutcliffe',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Callendar House',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Greater-Edinburgh-Falkirk-Callendar-House.jpg',
				image_alt:
					'Stunning castle-like facade of the Callendar House in Falkirk, near Edinburgh',

				cc_image_url: 'https://www.flickr.com/photos/pipsroadster/27245046484/',
				cc_author_url: 'https://www.flickr.com/photos/pipsroadster/',
				cc_author: '4652 Paces',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Kelpies Helix Project',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Greater-Edinburgh-Falkirk-Kelpies-Helix-Project.jpg',
				image_alt:
					'Massive ultra-modern art installation featuring two fierce giant steel horse heads in Falkirk ner Edinburgh',

				cc_image_url: 'https://www.flickr.com/photos/st33vo/14353905825/',
				cc_author_url: 'https://www.flickr.com/photos/st33vo/',
				cc_author: 'Steven Straiton',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	inverness_loch_ness: {
		id: 'inverness_loch_ness',
		itineraries: '',
		destinationName: 'Inverness & Loch Ness',
		stateName: 'Scotland',
		region: 'europe',
		anchor_tag: 'loch-ness-scotland',
		destination_link:
			'/destinations/scotland/inverness-and-loch-ness-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/W7XRKAjH76E2',
			all_attractions: 'https://goo.gl/maps/KHV1pcEkS2J2'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Urquhart Castle',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Inverness-Loch-Ness-Urquhart-Castle.jpg',
				image_alt:
					'Iconic lakeside ruins of Urquhart Castle with Loch Ness and the beautiful rolling hills behind it in the Scottish Highlands',

				cc_image_url: 'https://www.flickr.com/photos/sodele/14316562701/',
				cc_author_url: 'https://www.flickr.com/photos/sodele/',
				cc_author: 'sodele',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Dunrobin Castle',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Inverness-Loch-Ness-Dunrobin-Castle.jpg',
				image_alt:
					'Stunning gairytale-like Dunrobin Castle seen behind beautiful fine gardens ',

				cc_image_url: 'https://www.flickr.com/photos/13422316@N00/2524820749',
				cc_author_url: 'https://www.flickr.com/people/13422316@N00/',
				cc_author: 'Paul Wordingham',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Loch Ness View Point (Fort Augustus)',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Inverness-Loch-Ness-Fort-Augustus-Loch-Ness-View-Point.jpg',
				image_alt:
					'Picturesque view overlooking Loch Ness from Fort Augustus with steep hills rising above both sides of the lake',

				cc_image_url: 'https://www.flickr.com/photos/conner395/2388165430/',
				cc_author_url: 'https://www.flickr.com/photos/conner395/',
				cc_author: 'Dave Conner',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Ness Islands (Inverness)',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Inverness-Loch-Ness-Ness-Islands.jpg',
				image_alt:
					'Lush woodland trail along the riverside on the small Ness Island surrounded by the River Ness in Inverness',

				cc_image_url: 'http://www.geograph.org.uk/photo/5568413',
				cc_author_url: 'https://www.geograph.org.uk/profile/9616',
				cc_author: 'Julian Paren',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Inverness Castle',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Inverness-Loch-Ness-Inverness-Castle.jpg',
				image_alt:
					'Sunset over Inverness Castle behind the River Ness in Scotland',

				cc_image_url: 'https://www.flickr.com/photos/conner395/4974893903/',
				cc_author_url: 'https://www.flickr.com/photos/conner395/',
				cc_author: 'Dave Conner',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Caledonian Canal (Fort Augustus)',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Inverness-Loch-Ness-Fort-Augustus-Caledonian-Canal.jpg',
				image_alt:
					'Small boat travelling down the tight Caledonian Canal which leads to Loch Ness via Fort Augustus',

				cc_image_url: 'https://www.flickr.com/photos/leandrociuffo/6194579565/',
				cc_author_url: 'https://www.flickr.com/photos/leandrociuffo/',
				cc_author: 'Leandro Neumann Ciuffo',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	isle_of_skye: {
		id: 'isle_of_skye',
		itineraries: '',
		destinationName: 'Isle of Skye',
		stateName: 'Scotland',
		region: 'europe',
		anchor_tag: 'isle-of-skye-scotland',
		destination_link: '/destinations/scotland/isle-of-skye-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/8uqM5mDyuyj',
			all_attractions: 'https://goo.gl/maps/dDV7bEW12Sz'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'The Quiraing Trail',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Isle-of-Skye-Quiraing.jpg',
				image_alt:
					'Stunning vibrant green landscape of the Quiraing with many ridges, cliffs, and small lakes, on the Isle of Skye',

				cc_image_url: 'https://www.flickr.com/photos/107521854@N05/14942990740',
				cc_author_url: 'https://www.flickr.com/photos/107521854@N05/',
				cc_author: 'Luis Ascenso',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Eilean Donan Castle',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Isle-of-Skye-Eilean-Donan-Castle.jpg',
				image_alt:
					'Famous medieval Eilean Donan Castle set amongst the coast and mountains, just before reaching Skye',

				cc_image_url: 'https://www.flickr.com/photos/hisgett/37623644806/',
				cc_author_url: 'https://www.flickr.com/photos/hisgett/',
				cc_author: 'Tony Hisgett',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Sligachan Old Bridge',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Isle-of-Skye-Sligachan-Old-Bridge.jpg',
				image_alt:
					'Picturesque old Sligachan Bridge crossing a small river set amongst the gorgeous Isle of Skye landscape',

				cc_image_url: 'https://www.flickr.com/photos/cosmicherb70/29573082102/',
				cc_author_url: 'https://www.flickr.com/photos/cosmicherb70/',
				cc_author: 'Chris Combe',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Sgurr na Stri Mountain',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Isle-of-Skye-Sgurr-na-Stri.jpg',
				image_alt:
					'Breathtaking view from Sgurr na Stri Mountain overlooking a lake and tall mountains along the rugged coastline, Isle of Skye',

				cc_image_url: 'https://www.flickr.com/photos/127130111@N06/34145182255/',
				cc_author_url: 'https://www.flickr.com/photos/127130111@N06/',
				cc_author: 'john mcsporran',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Old Man of Storr',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Isle-of-Skye-Old-Man-of-Storr.jpg',
				image_alt:
					'Stunning craggy rocks of Old Man of Storr sticking out of the vibrant green hilly landscape above the Isle of Skye',

				cc_image_url: 'https://www.flickr.com/photos/127130111@N06/15270494205/',
				cc_author_url: 'https://www.flickr.com/photos/127130111@N06/',
				cc_author: 'john mcsporran',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Neist Point',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Isle-of-Skye-Neist-Point-Lighthouse.jpg',
				image_alt:
					'Iconic view of the steep cliffs of Neist Point towering above the sea with lighthouse at end, on Isle of Skye',

				cc_image_url: 'https://www.flickr.com/photos/127130111@N06/25711187192/',
				cc_author_url: 'https://www.flickr.com/photos/127130111@N06/',
				cc_author: 'john mcsporran',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Castle Ewen (Fairy Glen)',
				image_url:
					'https://www.travelimager.com/images/scotland/Scotland-Isle-of-Skye-Fairy-Glen-Castle-Ewen.jpg',
				image_alt:
					'Winding pathway leading to the Castle Ewen rock formation atop the small cliffs overlooking Fairy Glen on Isle of Skye',

				cc_image_url: 'https://www.flickr.com/photos/pellesten/4808338158',
				cc_author_url: 'https://www.flickr.com/photos/pellesten/',
				cc_author: 'Pelle Sten',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	avila_salamanca: {
		id: 'avila_salamanca',
		itineraries: '',
		destinationName: 'Avila & Salamanca',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'avila-salamanca-spain',
		destination_link: '/destinations/spain/avila-and-salamanca-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/STQ1jQdgnHt'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Walls of Avila',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Avila-Avila-Walls.jpg',
				image_alt:
					'View of the imposing medieval walls of Avila stretching for kilometers in Avila, Spain',

				cc_image_url: 'https://www.flickr.com/photos/jlcernadas/19082333530',
				cc_author_url: 'https://www.flickr.com/photos/jlcernadas/',
				cc_author: 'Jose L. Cernadas Iglesias',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Avila Cathedral',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Avila-Catedral-de-Avila-Cathedral.jpg',
				image_alt: 'Facade of the beautiful Romanesque Avila Cathedral',

				cc_image_url: 'https://www.flickr.com/photos/graeme/37861442311/',
				cc_author_url: 'https://www.flickr.com/photos/graeme/',
				cc_author: 'Graeme Churchard',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Plaza Mayor de Salamanca',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Salamanca-Plaza-Mayor-de-Salamanca.jpg',
				image_alt: "Plaza Mayor, Salamanca's main plaza seen at sunset",

				cc_image_url: 'https://www.flickr.com/photos/gfdezr/38348167474/',
				cc_author_url: 'https://www.flickr.com/photos/gfdezr/',
				cc_author: 'Gabriel Fdez.',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Puente Romano Bridge (Salamanca)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Salamanca-Puente-Romano-Roman-Bridge.jpg',
				image_alt:
					'Old Puente Romano Roman bridge seen from across the river with the towering New Salamanca Cathedral behind it in Salamanca, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Salamanque-Nouvelle_Cath%C3%A9drale-1967_08_07.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/wiki/User:Daniel_VILLAFRUELA',
				cc_author: 'Daniel Villafruela',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	barcelona: {
		id: 'barcelona',
		itineraries: '',
		destinationName: 'Barcelona',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'barcelona-spain',
		destination_link: '/destinations/spain/barcelona-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/CJos2ZRtbP62',
			main_attractions: 'https://goo.gl/maps/zVEA9nfTvhF2',
			all_attractions: 'https://goo.gl/maps/QLbNGJ8yniG2',
			short_attractions: 'https://goo.gl/maps/H1HzJCWj3vn'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Gaudi',
				tab_content: `<p>Barcelona is a massive city and the capital of Catalonia and is best known for its many wondrous and highly intricate structures designed by the famous Antoni Gaudi, which comprise many of Barcelona's top attractions. Be sure to make advanced reservations for Gaudi's most popular attractions, including La Sagrada Familia, Casa Battlo, Casa Mila (or La Pedrera) and Parc Guell.</p>
                <p>The fairytale-like Casa Batllo is a highly eccentric building featuring many fantasy-like elements, with very trippy and colorful rooms. Nearby is Casa Mila (or La Pedrera), a tall building known for its fantastical spire-covered roof, which features winding walkways and terraces set amongst surreal architectural features.</p>
                <p>La Sagrada Familia is a towering basilica that's nearly 560 feet (170 m) tall and has been under construction for nearly 140 years. The basilica's exterior showcases a hyper-complex mix of gothic and art nouveau architecture, with multiple giant towers. This basilica's interior is breathtakingly aesthetic, with vibrant rainbow-colored stained glass windows, and massive white columns that support highly intricate geometric flower-like patterns on the ceiling.</p>
                <p>In the foothills of Barcelona is Gaudi's iconic Parc Guell, a fantasy-like park with many amazing and colorful unique structures, including the famous mosaic tile terrace overlooking Barcelona. The park also hosts oddities such as it gingerbread-like houses, Doric column rooms, and palm tree-like colonnaded footpaths.</p>`
			},
			{
				tab_title: 'Gothic Quarter',
				tab_content: `<p>Barcelona's Gothic Quarter is the city's historic center, which contains many elegant old Gothic-style buildings, and is also known for its many great bars and restaurants.</p>
                <p>Within the Gothic Quarter are two of Barcelona's most stunning and intricate cathedrals, the Cathedral of Barcelona which hosts a rooftop observation deck, and the Basilica of Santa Maria del Mar with its striking brick-work interior and more amazing city views.</p>
                <p>The Gothic Quarter also hosts the expansive Picasso Museum within a medieval palace, as well as the gorgeous UNESCO listed Palau de Musica Catalana, an elegant art nouveau-style concert hall.</p>`
			},
			{
				tab_title: 'Montjuic',
				tab_content: `<p>Rising above the coast near the Gothic Quarter is Montjuic hill, which features several amazing attractions. The massive Torres Venecianes (Venetian Towers) are replicas of Venice's famous St. Mark's Campanile tower, which sit on one end of the short but extravagant avenue leading to Montjuic. At the other end of this avenue is the giant Magic Fountain, which puts on a spectacular light and water show at night.</p>
                <p>Behind the Magic Fountain are series of grandiose staircases, waterfalls, and columns, leading up to the magnificent Palau Nacional (National Palace). This palace hosts the National Art Museum of Catalunya, which contains one of the world's foremost collections of Catalonian and Romanesque art, along with many other significant fine artworks.</p>
                <p>Beyond the National Palace is the Funicular cable car, which provides incredible views along the way up to the Montjuic Castle. This striking 17th century fortress towers above the coastline, offering excellent views over the city's harbor.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Barcelona's Ciutadella Park hosts the magnificent neoclassical Cascada Monumental Fountain, and nearby you can admire the iconic Arco de Triunfo de Barcelona, a stunning triumphal arch. Close to the park you can visit La Barceloneta, a long and beautiful sandy beach lined with a boardwalk.</p>
                <p>Just west of the Gothic Quarter is the famous La Rambla Street, which is lined with many shops, restaurants, and cafes. Along this street is the popular Mercado de la Boqueria food market, the lovely Placa Reial square, and the highly ornate Guell Palace, an incredible mansion designed by Gaudi.</p>
                <p>Also popular in Barcelona is the UNESCO listed Hospital de la Santa Creu, an incredible Modernisme-style complex of highly ornate and fantastical buildings.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Parc Guell',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Barcelona-Parc-Guell-Park-Gaudi-1.jpg',
				image_alt:
					"Looking at a fantastical gingerbread house from the famous tiled balcony in Gaudi's Parc Guell in Barcelona, Spain",

				cc_image_url: 'https://www.flickr.com/photos/unicoletti/3956777358',
				cc_author_url: 'https://www.flickr.com/photos/unicoletti/',
				cc_author: 'Umberto Nicoletti',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'La Sagrada Familia Basilica (Exterior)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Barcelona-La-Sagrada-Familia-Basilica-Exterior-1.jpg',
				image_alt:
					"Stunningly beautiful shot of Gaudi's La Sagrada Familia Basilica partially hidden behind trees and flowers in Barcelona, Spain",

				cc_image_url: 'https://pixabay.com/en/sagrada-familia-cathedral-552084/',
				cc_author_url: 'https://pixabay.com/en/users/patrice_audet-604833/',
				cc_author: 'Patrice_Audet',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Palau Nacional Palace & Art Museum',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Barcelona-Palau-Nacional-National-Palace-Museu-Nacional-dArt-de-Catalunya-Museum.jpg',
				image_alt:
					'Picturesque view of the Palau Nacional at the entrance to Montjuic, which houses the National Museum of Catalonian Art in Barcelona, Spain',

				cc_image_url: 'https://www.flickr.com/photos/juanedc/9800194965',
				cc_author_url: 'https://www.flickr.com/photos/juanedc/',
				cc_author: 'Juanedc.com',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Casa Battlo',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Barcelona-Casa-Batllo-Gaudi-1.jpg',
				image_alt:
					"Stunning and intricately decorated facade of the Casa Battlo, one of Antoni Gaudi's most famous works in Barcelona, Spain",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Batllo_House.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Batllo_House.jpg&action=history',
				cc_author: 'Matinibz',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'La Barceloneta Beach',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Barcelona-La-Barceloneta-Beach.jpg',
				image_alt:
					'Looking down the beautiful Mediterranean La Barceloneta Beach on a sunny day in Barcelona, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Barceloneta_(8870724057).jpg&action=history',
				cc_author_url: 'https://www.flickr.com/people/39513725@N02',
				cc_author: 'Juanedc.com',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Ciutadella Park',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Barcelona-Parc-de-la-Ciutadella-Cascada-Monumental-Fountain.jpg',
				image_alt:
					"Viewing the grandiose monument and waterfalls of Barcelona's Ciutadella Park",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Richelieu_Wing,_Louvre_Museum,_Paris_October_2013_-_panoramio.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Richelieu_Wing,_Louvre_Museum,_Paris_October_2013_-_panoramio.jpg&action=history',
				cc_author: 'trolvag',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	cordoba: {
		id: 'cordoba',
		itineraries: '',
		destinationName: 'Cordoba',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'cordoba-spain',
		destination_link: '/destinations/spain/cordoba-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/4sawMfjbqTU2',
			all_attractions: 'https://goo.gl/maps/SgTBBFTrYmx'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Mosque-Cathedral',
				tab_content: `<p>Cordoba is a beautiful ancient city of Arab and Roman influences. The city's most iconic sight is the UNESCO listed Mosque-Cathedral of Cordoba, a massive religious structure originally built as a grand mosque by Moorish rulers in the Middle Ages. Later this incredible site was expanded into a Christian cathedral, retaining many features including its iconic series of Moorish arches and beautiful giant courtyard.</p>
                <p>Nearby you can admire the stunning UNESCO listed Roman Bridge of Cordoba, which features both ancient Roman and medieval Moorish elements.</p>`
			},
			{
				tab_title: 'Alcazar & Patios',
				tab_content: `<p>Located in Cordoba's San Basilo district is an incredible 14th century castle-like palace known for its majestic gardens and fountains, the UNESCO listed Alcazar of the Christian Monarchs. The San Basilo district is also known for its many lovely flower-covered patios (courtyards), called the the Patios Cordobeses. Near San Basilo you can take a scenic walk alongside Cordoba's historic city wall, which are lined with beautiful cascading ponds.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Cordoba also hosts remarkable plazas, including the elegant 20th century Plaza de las Tendillas and the arch-lined 17th century Plaza de la Corredera. In between the two plazas are the remains of stunning 2,000 year old Roman Temple. Cordoba's Archaeological Museum hosts an impressive collection of local artifacts, including ancient Roman statues and the ruins of an ancient Roman theatre.</p>
                <p>Uptown you can visit the beautiful Palacio de Viana palace, which hosts many lovely patios elaborately decorated with mosaics, fountains, and lush plants. On the western outskirts of Cordoba are the ruins of a vast medieval palace complex, the UNESCO listed Medina Azahara. This Moorish palace complex was built over 1,000 years ago and is known for its many stunning Islamic columns and portals, as well as its large gardens.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Roman Bridge of Cordoba',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Cordoba-Puente-Romano-Roman-Bridge.jpg',
				image_alt:
					'View of the old Roman Bridge as it crosses the river witht the Mosque-Cathedral behind it, lit up at night, in Cordoba, Spain',

				cc_image_url: 'https://www.flickr.com/photos/seko2323/29277731522',
				cc_author_url: 'https://www.flickr.com/photos/seko2323/',
				cc_author: 'Sergio S.C',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Mosque-Cathedral of Cordoba',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Cordoba-Mosque-Cathedral-of-Cordoba.jpg',
				image_alt: 'Aerial view of the cast Mosque-Cathedral of Cordoba, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Mezquita_de_C%C3%B3rdoba_desde_el_aire_(C%C3%B3rdoba,_Espa%C3%B1a).jpg&action=history',
				cc_author_url: 'https://www.flickr.com/people/88113683@N00',
				cc_author: 'Toni Castillo Quero',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Alcazar of the Christian Monarchs',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Cordoba-Alcazar-de-los-Reyes-Cristianos-Christian-Monarchs-Palace.jpg',
				image_alt:
					'Beautiful lavish gardens of the Alcazar of the Christian Monarchs castle in Cordoba, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Gardens_of_the_Alc%C3%A1zar_de_los_Reyes_Cristianos._C%C3%B3rdoba,_Spain.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/wiki/User:%D0%92%D0%B2%D0%BB%D0%B0%D1%81%D0%B5%D0%BD%D0%BA%D0%BE',
				cc_author: 'Vllasenko',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Patios Cordobeses Courtyards',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Cordoba-Patios-Cordobeses-Courtyards.jpg',
				image_alt:
					'Famous flower-covered patio/courtyard, which is part of the Patios Codobeses of Cordoba, Spain',

				cc_image_url: 'https://www.flickr.com/photos/canalsurradioytv/',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Tower_of_Gold.jpg&action=history',
				cc_author: 'Fotografias Canal Sur Radio',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Mosque-Cathedral of Cordoba (Interior)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Cordoba-Mosque-Cathedral-of-Cordoba-Interior.jpg',
				image_alt:
					"Stunning Moorish arches of the Mosque-Cathedral of Cordoba's interior",

				cc_image_url: 'https://www.flickr.com/photos/alexristea/5963976823/',
				cc_author_url: 'https://www.flickr.com/photos/alexristea/',
				cc_author: 'Alex Ristea',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	costa_blanca: {
		id: 'costa_blanca',
		itineraries: '',
		destinationName: 'Costa Blanca',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'costa-blanca-spain',
		destination_link: '/destinations/spain/costa-blanca-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/qt8emfqqboN2',
			all_attractions: 'https://goo.gl/maps/VzWDfBbvLQm'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Alicante & Villajoyosa',
				tab_content: `<p>Spain's incredibly scenic Costa Blanca (White Coast) is a popular vacation destination lined with gorgeous beaches and amazing resort towns, including Alicante, La Villajoyosa, Benidorm, and Calpe. Additional popular towns are Altea, Moraira, Denia, and more.</p>
                <p>Towering over the coastal city of Alicante is the 9th century Santa Barbara Castle, a massive hilltop fortification surrounded by expansive medieval walls, which offers majestic panoramic views over the scenic coastline. Just below the castle is the sandy El Postiguet Beach, which features a long promenade and fantastic views looking up at the castle.</p>
                <p>Further up the coast is the picturesque town of Villajoysa (or La Vila Joiosa), which is best known for the vibrant colorful homes which line the Paseo de Sant Pere boardwalk behind its beautiful sandy beach.</p>`
			},
			{
				tab_title: 'Benidorm',
				tab_content: `<p>The popular resort town of Benidorm hosts beaches lined with stunning tall high-rise buildings. Benidorm's stunning Playa de Poniente beach features clear waters and amazing scenery, as well as a long colorful boardwalk. The city's most famous attraction is the Balcon de Mediterraneo (Mediterranean Balcony), a lavish and extremely photogenic large balcony along the cliffs which offers incredible panoramic views over the city and coastline.</p>
                <p>Be sure to hike or take a taxi up to La Creu Benidorm a hilltop viewpoint offering breathtaking views over the city. You can take an extremely scenic coastal hike beyond this hilltop following along the cliffs of Serra Gelada Natural Park.</p>`
			},
			{
				tab_title: 'Calpe',
				tab_content: `<p>Northeast along the coast from Benidorm is another great resort town, Calpe. At the northern end of Calpe is a massive peninsular rock which sticks out from the coastline, known as Penyal d'Ifac. This enormous rock looks gorgeous from many different angles, especially from the Playa de la Fossa beach and the ancient Roman Bano de la Reina site along the coast. It's also possible to hike to the top of this rock and enjoy incredible views over Calpe.</p>`
			}
		],
		attractions: [
			{
				attraction: 'El Postiguet Beach (Alicante)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Costa-Blanca-Alicante-El-Postiguet-Beach-1.jpg',
				image_alt:
					'Stunning view from the water looking back at the sandy El Postiguet beach with the Santa Barbara Castle towering high above it in Alicante, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Castillo_de_Santa_B%C3%A1rbara,_Alicante_-_panoramio.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Castillo_de_Santa_B%C3%A1rbara,_Alicante_-_panoramio.jpg&action=history',
				cc_author: 'Eduardo Manchon',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Playa de Poniente Beach (Benidorm)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Costa-Blanca-Benidorm-Playa-de-Poniente.jpg',
				image_alt:
					"Skyscrapers line the beautiful long sandy Playa de Poniente Beach and its vibrant blue-green waters in the popular resort town of Benidorm along Spain's Costa Blanca",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Benidorm_-_Playa_de_Poniente_26.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Zarateman',
				cc_author: 'Zarateman',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Balcon del Mediterraneo Balcony (Benidorm)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Costa-Blanca-Benidorm-Balcon-del-Meditteraneo-Balcony.jpg',
				image_alt:
					'Elegant white tiled seaside clifftop balcony, known as the Balcon del Mediterraneo, in the Costa Blanca town of Benidorm',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Balc%C3%B3n_del_Mediterr%C3%A1neo,_Benidorm,_Espa%C3%B1a,_2014-07-02,_DD_09.JPG&action=history',
				cc_author_url: 'http://delso.photo/',
				cc_author: 'Diego Delso',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Playa de la Fossa Beach (Calpe)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Costa-Blanca-Calp-Penyal-dIfac-Rock-Playa-de-la-Fossa-Beach.jpg',
				image_alt:
					"Gorgeous golden hour views lighting up the Penyal d'Ifac rock, seen looking down Calpe's Playa de la Fossa Beach",

				cc_image_url: 'https://www.flickr.com/photos/darkummy/14507912018/',
				cc_author_url: 'https://www.flickr.com/photos/darkummy/',
				cc_author: 'Ramon Lozano Rodas',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Villajoyosa Boardwalk',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Costa-Blanca-La-Vila-Joiosa-Villajoyosa-Boardwalk-1.jpg',
				image_alt:
					"Beautiful colorful row homes along the beachfront boardwalk in Villajoyosa, along Spain's Costa Blanca",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Les_maisons_multicolores_de_villajoiosa_-_panoramio.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Les_maisons_multicolores_de_villajoiosa_-_panoramio.jpg&action=history',
				cc_author: 'chisloup',

				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0'
			},

			{
				attraction: 'Cova Tallada Sea Cave (Denia)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Costa-Blanca-Denia-Xabia-Cova-Tallada-Sea-Caves.jpg',
				image_alt:
					"Stunning views inside Denia's massive and complex Cova Tallade Sea Cave, seen after sunset, along Spain's Costa Blanca",

				cc_image_url: 'https://www.flickr.com/photos/98810885@N07/9396232074',
				cc_author_url: 'https://www.flickr.com/photos/98810885@N07/',
				cc_author: 'Jordi nll',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	granada: {
		id: 'granada',
		itineraries: '',
		destinationName: 'Granada',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'granada-spain',
		destination_link: '/destinations/spain/granada-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/92zYDdrHFzy',
			all_attractions: 'https://goo.gl/maps/Cfr6S1aB8qK2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Alhambra',
				tab_content: `<p>The city of Granada is known for its incredible medieval Arabic architecture, which stems from the city's historic Moorish occupation. Granada's most famous attraction is the UNESCO listed Alhambra, a massive hilltop complex constructed in the 13th century which contains several sprawling palaces. The iconic Alhambra showcases breathtaking and highly intricate Islamic architecture, with brilliant mosaics and elaborate designs throughout its many ornate patios and palaces.</p>
                <p>The Alhambra complex is surrounded by imposing medieval walls which contain many beautiful gardens, as well as the ruins of an Alcazaba fortress. From the Alhambra's Torre de la Vela tower you can enjoy sweeping panoramic views over Granada. Adjacent to the Alhambra are the gorgeous Generalife Gardens and lavish Generalife Villa hosting more elegant patios.</p>
                <p>Below the Alhambra is the Paseo de los Tristes promenade, which offers views of the Alhambra and hosts the 11th century El Banuelo Arab bath complex. For stunning views of the Alhambra you can walk up to the Mirador San Nicolas viewpoint.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Within the historic center of Granada is the magnificent 16th century Granada Cathedral with its lavish interiors. Adjacent is the intricate Royal Chapel of Granada, which houses the mausoleum of the Spanish monarchs Ferdinand and Isabella.</p>
                <p>Be sure to visit Granada's Calle Caldereria Nueva street, which resembles a souk marketplace and is lined with shops selling remarkable Moroccan and Middle Eastern goods such as hookahs, intricate lamps and decorations, clothing, accessories and much more.</p>
                <p>Northwest of Granada is a stunning 14th century hilltop castle, the Fortaleza de la Mota. This massive fortified complex mainly consists of medieval ruins, as well as an old church and watchtower, from which you can enjoy amazing views.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Patio de los Leones',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Granada-Alhambra-Nasrid-Palaces-Patio-de-los-Leones-1.jpg',
				image_alt:
					"Extremely complex architectural designs of the Alhambra's Patio de los Leones  in Granada, Spain",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Alhambra_L%C3%B6wenhof_mit_L%C3%B6wenbrunnen_2014.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Tuxyso',
				cc_author: 'Tuxyso',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Patio de la Acequia (Generalife Gardens)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Granada-Alhambra-Generalife-Gardens-Patio-de-la-Acequia.jpg',
				image_alt:
					"Iconic view of the Generalife Gardens' Patio de la Acequia in Granada, Spain",

				cc_image_url: 'https://www.flickr.com/photos/125945909@N05/15620137129/',
				cc_author_url: 'https://www.flickr.com/photos/125945909@N05/',
				cc_author: 'Min Zhou',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Mirador San Nicolas Viewpoint',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Granada-Mirador-San-Nicolas-Alhambra-Overlook.jpg',
				image_alt:
					'Alhambra during sunset seen from the Mirador San Nicolas Viewpoint in Granada, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Jebulon',
				cc_author: 'Jebulon',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'El Partal Patio',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Granada-Alhambra-El-Partal-Patio.jpg',
				image_alt:
					'Beautiful El Partal Patio and pool of the Alhambrain Granada, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:El_Partal_Palace,_Alhambra,_Spain.JPG&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:El_Partal_Palace,_Alhambra,_Spain.JPG&action=history',
				cc_author: 'Choniron',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Palace of Charles V',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Granada-Alhambra-Palace-of-Charles-V-Courtyard-1.jpg',
				image_alt:
					"Rounded column-lined courtyard of the Alhambra's Palace of Charles V lit up at night in Granada, Spain",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Collonnaded_courtyard_Alhambra,_Granada.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Collonnaded_courtyard_Alhambra,_Granada.jpg&action=history',
				cc_author: 'MarkGarrucha',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Patio de la Sultana (Generalife Gardens)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Granada-Alhambra-Generalife-Gardens-Patio-de-la-Sultana.jpg',
				image_alt:
					"View overlooking the Generalife Gardens' Patio de la Sultana in Granada, Spain",

				cc_image_url: 'https://www.flickr.com/photos/shadowgate/26392713408/',
				cc_author_url: 'https://www.flickr.com/photos/shadowgate/',
				cc_author: 'Shadowgate',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	ibiza: {
		id: 'ibiza',
		itineraries: '',
		destinationName: 'Ibiza',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'ibiza-spain',
		destination_link: '/destinations/spain/ibiza-attractions-guide',
		attractionMapLinks: {
			custom_attractions_1: 'https://goo.gl/maps/GuzNCSR1w1p',
			custom_attractions_1_text: 'Top Attractions & Clubs',
			custom_attractions_2: 'https://goo.gl/maps/PK8UQrrVW762',
			custom_attractions_2_text: 'All Attractions & Clubs'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Ibiza Old Town',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Ibiza-Eivissa-Ibiza-Town-Dalt-Vila-Old-Town.jpg',
				image_alt:
					"Stunning view of Ibiza's Old Town near the entrance to the city's harbor",

				cc_image_url: 'https://www.flickr.com/photos/comunicati/7103009701',
				cc_author_url: 'https://www.flickr.com/photos/comunicati/',
				cc_author: 'Michela Simoncini',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Playa den Bossa Beach',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Ibiza-Eivissa-Playa-Den-Bossa-Beach-1.jpg',
				image_alt:
					'Beautiful beach and coastline of Playa Den Bossa in Ibiza, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Playa_den_Bossa,_again_(2616170566).jpg&action=history',
				cc_author_url: 'https://www.flickr.com/people/12489345@N02',
				cc_author: 'Alex Harries',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Ibiza Old Town Harbor',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Ibiza-Eivissa-Ibiza-Town-Dalt-Vila-Old-Town-Harbor-1.jpg',
				image_alt: "Ibiza Old Town viewed from the city's harbor with many boats",

				cc_image_url: 'https://www.flickr.com/photos/erju/34698979915',
				cc_author_url: 'https://www.flickr.com/photos/erju/',
				cc_author: 'Sergi Coll',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: "Cala d'Hort Beach",
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Ibiza-Eivissa-Sant-Josep-de-sa-Talaia-Cala-dHort-Beach.jpg',
				image_alt:
					"Cala d'Hort Beach with massive rock island just off the coast in the background in Ibiza, Spain",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:View_of_Es_Vedr%C3%A0_from_Cala_D%27hort_and_flowers.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Itelchan',
				cc_author: 'Itelchan',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Playa Cala Xarraca Beach',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Ibiza-Eivissa-Sant-Joan-de-Labritja-Playa-Cala-Xarraca-Bay-Beach.jpg',
				image_alt:
					'Stunning blue and green waters of the Playa Cala Xaracca Beach with views across the cala in Ibiza, Spain',

				cc_image_url:
					'https://www.flickr.com/photos/travelbusy/26541758205/in/photostream/',
				cc_author_url: 'http://www.travelbusy.com/gallery/',
				cc_author: 'Travelbusy.com',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	madrid: {
		id: 'madrid',
		itineraries: '',
		destinationName: 'Madrid',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'madrid-spain',
		destination_link: '/destinations/spain/madrid-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/S6quPonbpsy',
			all_attractions: 'https://goo.gl/maps/6acuBxrBiXt'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Royal Palace',
				tab_content: `<p>Spain's capital city is located in the center of the country and acts as a transportation hub to many other destinations within Spain. Among Madrid's top attractions is the massive Royal Palace of Madrid, an ultra-lavish and highly embellished baroque palace which also hosts the Royal Armoury of Madird, as well as the lovely Sabatini Gardens and Campo del Moro garden.</p>
                <p>Directly across from the palace is the majestic Almudena Cathedral with its romanesque crypt, and nearby you can admire intricate frescoes painted by Goya at the royal San Francisco el Grande basilica.</p>`
			},
			{
				tab_title: 'Plazas & Parks',
				tab_content: `<p>Near the palace is the incredible ancient Egyptian Temple of Debod, which was deconstructed in Aswan, Egypt and reconstructed in Madrid. The city is also known for its stunning public squares, including the Plaza de Espana, Plaza Mayor, and Puerta del Sol. Be sure to visit Madrid's expansive El Retiro Park, which hosts the iconic Monument to Alfonso XII colonnade overlooking the lake, as well as the elegant Crystal Palace and many lovely gardens.</p>`
			},
			{
				tab_title: 'Museums',
				tab_content: `<p>Madrid is famous for its incredible museums, with its top three making up the Golden Triangle of Art. These three enormous fine art museums include the Prado Museum, the Queen Sofia Museum, and the Thyssen-Bornemisza Museum, all of which host substantial collections of important artworks. Also notable nearby is the Naval Museum and the National Archaeological Museum.</p>`
			},
			{
				tab_title: 'More Palaces',
				tab_content: `<p>Just outside of Madrid are two extravagant UNESCO royal palaces, including the massive Royal Seat of San Lorenzo de El Escorial, which was allegedly designed based on the ancient King Solomon's Temple. The El Escorial complex is extremely decadent, hosting a royal palace, grand library, basilica, several museums, fine gardens, and the Royal Pantheon.</p>
                <p>Also near Madrid is the Royal Palace of Aranjuez, a Renaissance-style palace loosely inspired by the Palace of Versailles.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Royal Palace of Madrid',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Madrid-Palacio-Real-Royal-Palace-of-Madrid-1.jpg',
				image_alt: 'Exterior of the vast and lavish Royal Palace of Madrid',

				cc_image_url:
					'https://pixabay.com/en/madrid-palace-royal-architecture-3544029/',
				cc_author_url: 'https://pixabay.com/en/users/rubyriojano-1153085/',
				cc_author: 'rubyriojano',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'El Retiro Park',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Madrid-El-Retiro-Park-Monument-to-Alfonso-XII.jpg',
				image_alt:
					'View of the grand collonaded monument of El Retiro Park behind the lake with many boaters in the El Retiro Park, Madrid, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Monumento_a_Alfonso_XII_de_Espa%C3%B1a_en_los_Jardines_del_Retiro_-_04.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Kadellar',
				cc_author: 'Carlos Delgado',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Temple of Debod',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Madrid-Temple-of-Debod.jpg',
				image_alt:
					'Ancient Egyptian Temple of Debod with its refelction in the rectangular pond that surrounds it, in Madrid, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:El_Templo_de_Debod.JPG&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:El_Templo_de_Debod.JPG&action=history',
				cc_author: 'Choniron',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/es/deed.en',
				cc_license: 'CC BY-SA 3.0 ES'
			},

			{
				attraction: 'Plaza Mayor',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Madrid-Plaza-Mayor-Square-1.jpg',
				image_alt: 'Looking over the historical Plaza Mayor of Madrid, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Plaza_Mayor_de_Madrid_02.jpg&action=history',
				cc_author_url: 'https://de.wikipedia.org/wiki/Benutzer:Sebatan',
				cc_author: 'Sebastian Dubiel',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/de/deed.en',
				cc_license: 'CC BY-SA 3.0 DE'
			},

			{
				attraction: 'Royal Seat of San Lorenzo de El Escorial',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Greater-Madrid-Royal-Seat-of-San-Lorenzo-de-El-Escorial-Monastery.jpg',
				image_alt:
					'Distant view of the absolutely massive Royal Seat of San Lorenzo de El Escorial complex which can only be photographed in a single shot from a distance, located outside of Madrid, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:El_escorial_blick_von_oben.jpg&action=history',
				cc_author_url: 'http://www.reserv-art.de/',
				cc_author: 'Hans Peter Schaefer',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Prado Museum',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Madrid-Museo-Nacional-del-Prado-Museum.jpg',
				image_alt:
					'Exterior of the massive and famous Prado Museum of Madrid, Spain',

				cc_image_url:
					'https://pixabay.com/en/madrid-prado-museum-architecture-1758045/',
				cc_author_url: 'https://pixabay.com/en/users/donfalcone-2904665/',
				cc_author: 'donfalcone',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	malaga: {
		id: 'malaga',
		itineraries: '',
		destinationName: 'Malaga',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'malaga-spain',
		destination_link: '/destinations/spain/malaga-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/K3fzNvbuyXT2'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Teatro Romano Ancient Theatre​',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Malaga-Teatro-Romano-Roman-Theatre.jpg',
				image_alt:
					'Ancient Roman theatre of Malaga seen below the Malaga Alcazaba',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Alcazaba_de_M%C3%A1laga_y_Teatro_Romano_(9033307980).jpg&action=history',
				cc_author_url: 'https://www.wikidata.org/wiki/Q30564104',
				cc_author: 'Emilio J. Rodriguez Posada',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Castillo Gibralfaro Castle Viewpoint',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Malaga-Castillo-Gibralfaro-Castle-Mirador-Viewpoint.jpg',
				image_alt:
					'Wide view overlooking Malaga and the coast from the Gibralfaro Castle in Malaga, Spain',

				cc_image_url: 'https://www.flickr.com/photos/schwanhals/40803969831/',
				cc_author_url: 'https://www.flickr.com/photos/schwanhals/',
				cc_author: 'Johannes Schwanbeck',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Malaga Alcazaba',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Malaga-Malaga-Alcazaba.jpg',
				image_alt:
					"Walls of the Malaga Alcazaba seen above the city's ancient Roman theatre",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Alcazaba_de_M%C3%A1laga_desde_el_puerto.JPG&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Alcazaba_de_M%C3%A1laga_desde_el_puerto.JPG&action=history',
				cc_author: 'Jose Luis Parra Olmo',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/es/deed.en',
				cc_license: 'CC BY-SA 3.0 ES'
			},

			{
				attraction: 'Malaga Cathedral',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Malaga-Catedral-de-la-Encarnacion-de-Malaga-Cathedral.jpg',
				image_alt:
					'View of the gigantic Malaga Cathedral from above at sunset in Malaga, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:La_manquita_(catedral_de_malaga).JPG&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:La_manquita_(catedral_de_malaga).JPG&action=history',
				cc_author: 'Danielmlg86',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/es/deed.en',
				cc_license: 'CC BY-SA 3.0 ES'
			},

			{
				attraction: 'Palmeral de las Sorpresas Promenade',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Malaga-Palmeral-de-las-Sorpresas-Promenade.jpg',
				image_alt:
					'Underneath the Palmeral de las Sorpresas sturcture along the Malaga waterfront Promenada in Andalucia, Spain',

				cc_image_url: 'https://www.flickr.com/photos/zedzap/15335652676',
				cc_author_url: 'https://www.flickr.com/photos/zedzap/',
				cc_author: 'Nick Kenrick',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	segovia: {
		id: 'segovia',
		itineraries: '',
		destinationName: 'Segovia',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'segovia-spain',
		destination_link: '/destinations/spain/segovia-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/2L1aZzaSUT22'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Aqueduct',
				tab_content: `<p>Located northwest of Madrid is the walled city of Segovia, which is a UNESCO world heritage site. The incredible Aqueduct of Segovia is among the best-preserved ancient Roman aqueducts in the world, towering above the entrance to the walled historic city center. Adjacent to the aqueduct you can even walk along part of Segovia's walls while enjoying excellent views.</p>`
			},
			{
				tab_title: 'Castle',
				tab_content: `<p>On the other end of the city's historic center is the Alcazar de Segovia, a fairytale-like castle which literally inspired Disney's Cinderella Castle. Within the castle you can admire its historic medieval interiors and intricate halls. Be sure to also hike to the various viewpoints overlooking this picturesque castle, including the Mirador de la Pradera de San Marcos (north view) and the Mirador del Alcazar y los dos Valles (west view).</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Within the city's historic center you'll also find the massive 16th century Cathedral of Segovia showcasing brilliant and complex gothic architecture. Climb the cathedral's giant bell tower for stunning panoramic views overlooking the city.</p>
                <p>Segovia also hosts several lovely squares surrounded by historic buildings, including the Plaza Mayor and Plaza de Medina del Campo. Other city sights include the striking Casa de Los Picos house and Spains first mechanized coin-producing factory, the Royal Mint House of Coins.</p>`
			},
			{
				tab_title: 'La Granja Palace',
				tab_content: `<p>Take a short bus ride from Segovia to the nearby 18th century Royal Palace of La Granja of San Ildefonso, an opulent baroque palace and former royal residence. This massive summer residence was modeled after the Palace of Versailles and is among the most magnificent palaces in Spain. The palace is also surrounded by vast elegant gardens that you can explore, where you'll find many extravagant fountains and dense woodlands.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Alcazar de Segovia Castle',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Segovia-Alcazar-de-Segovia-Castle-Mirador-del-Alcazar-y-los-dos-Valles-Viewpoint.jpg',
				image_alt:
					'View from across a small valley from the viewpoint known as the Mirador de Alcazar y los dos Valles of the Alcazar de Segovia Castle in Segovia, Spain',

				cc_image_url: 'https://www.flickr.com/photos/luis_fernandez/16193485811',
				cc_author_url: 'https://www.flickr.com/photos/luis_fernandez/',
				cc_author: 'Luis A. Fernandez Corral',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Aqueduct of Segovia',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Segovia-Aqueduct-of-Segovia-1.jpg',
				image_alt:
					'Below the incredibly well-preserved ancient aquduct of Segovia, Spain',

				cc_image_url: 'https://www.flickr.com/photos/tomasfano/6851856425',
				cc_author_url: 'https://www.flickr.com/photos/tomasfano/',
				cc_author: 'Tomas Fano',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Segovia Cathedral',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Segovia-Segovia-Cathedral.jpg',
				image_alt:
					'View of the massive Segovia Cathedral from the Plaza Mayor in Segovia, Spain',

				cc_image_url: 'https://www.flickr.com/photos/graeme/23945908938/',
				cc_author_url: 'https://www.flickr.com/photos/graeme/',
				cc_author: 'Graeme Churchard',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Alcazar de Segovia Castle',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Segovia-Alcazar-de-Segovia-Castle-Mirador-de-la-Pradera-de-San-Marcos-Viewpoint.jpg',
				image_alt:
					'View from below from the grassy field viewpoint known as the Mirador de la Pradera de San Marcos of the Alcazar de Segovia Castle in Segovia, Spain',

				cc_image_url: 'https://www.flickr.com/photos/jgonzac/14728202065',
				cc_author_url: 'https://www.flickr.com/photos/jgonzac/',
				cc_author: 'Jaime Gonzalez',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Segovia Aqueduct Viewpoint',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Segovia-Mirador-Aqueduct-of-Segovia-Viewpoint.jpg',
				image_alt:
					'Viewpoint overlooking the top and side of the anicent aqueduct of Segovia, Spain',

				cc_image_url: 'https://www.flickr.com/photos/mpeinadopa/9285155959/',
				cc_author_url: 'https://www.flickr.com/photos/mpeinadopa/',
				cc_author: 'DM.Peinado',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Royal Palace of La Granja of San Ildefonso',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Segovia-Royal-Palace-of-La-Granja-of-San-Ildefonso.jpg',
				image_alt:
					'Gardens of the Royal Palace of La Granja of San Ildefonso outside Segovia, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Palacio_y_jardines_de_San_Ildefonso.JPG&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Palacio_y_jardines_de_San_Ildefonso.JPG&action=history',
				cc_author: 'Choniron',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/es/deed.en',
				cc_license: 'CC BY-SA 3.0 ES'
			}
		]
	},

	seville: {
		id: 'seville',
		itineraries: '',
		destinationName: 'Seville',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'seville-spain',
		destination_link: '/destinations/spain/seville-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/qrJVAC7NCeJ2',
			all_attractions: 'https://goo.gl/maps/HhALBSsHgQF2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Plaza de España',
				tab_content: `<p>Seville is among the largest cities in Southern Spain and is the capital of the Andalusia region. The city's most iconic sight is the breathtakingly gorgeous Plaza de España, which is so massive that it hosts a canal you can paddleboat in. Spanning the plaza's canal are several highly ornate and colorful bridges, and towering above the plaza is a mesmerizing colossal structure lined with columns and arches.</p>`
			},
			{
				tab_title: 'Palaces',
				tab_content: `<p>Another iconic city sight is the UNESCO listed Royal Alcazar of Seville, a fortified palace containing incredible decadent interiors with extremely complex architectural features and mosaic tile designs. The Alcazar is also known for its stunning Moorish patios and exotic fine gardens.</p>
                <p>Other popular palaces of Seville include the Palace of the Dukes of Alba, Palace of the Countess of Lebrija, and the Casa de Pilatos, which was used in filming Lawrence of Arabia. All three of these highly ornate palaces host elegant Moorish patios and ancient artifacts, along with highly elaborate tile-works.</p>`
			},
			{
				tab_title: 'More',
				tab_content: `<p>The expansive 15th century Seville Cathedral is another UNESCO site which was once the largest cathedral in the world and hosts the tomb of Christopher Columbus. You can climb the cathedral's giant bell tower for amazing views over the city.</p>
                <p>Another iconic sight in Seville is the Metropol Parasol (or Las Setas), a stunning and unique ultra-contemporary structure which features an open walkway atop the structure. Along Seville's scenic riverfront you can admire the ornate 13th century Torre del Oro watchtower, and the lovely Puente de Triana bridge.</p>`
			},
			{
				tab_title: 'Italica Roman Ruins',
				tab_content: `<p>Just outside of Seville is the Conjunto Arquelogico de Italica, which hosts the remains of the ancient Roman city of Italica, the birthplace of famous Roman emperors Hadrian and Trajan. Within the site you'll find a massive amphitheater, many columns, beautiful elaborate mosaics, and the foundations of countless ancient buildings.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Plaza de España',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Seville-Plaza-de-Espana.jpg',
				image_alt:
					'Stunningly beautiful sunset view of the massive Plaza de Espana in Seville, Spain',

				cc_image_url: 'https://www.flickr.com/photos/koli79/9819787455',
				cc_author_url: 'https://www.flickr.com/photos/koli79/',
				cc_author: 'Francisco Colinet',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Royal Alcazar of Seville (Patio)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Seville-Real-Alcazar-de-Sevilla-Royal-Alcazar-Patio-1.jpg',
				image_alt:
					'Intricately designed architectural elements of a patio within the Royal Alcazar in Seville, Spain',

				cc_image_url: 'https://www.flickr.com/photos/seko2323/29277731522',
				cc_author_url: 'https://www.flickr.com/photos/seko2323/',
				cc_author: 'Sergio S.C',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Cathedral of Sevilla',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Seville-Sevilla-Cathedral-1.jpg',
				image_alt: 'View of the giant Cathedral of Seville',

				cc_image_url: 'https://www.flickr.com/photos/54214210@N04/19470818718',
				cc_author_url: 'https://www.flickr.com/photos/54214210@N04/',
				cc_author: 'Sevilla Congress & Conv.',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Metropol Parasol (Las Setas)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Seville-Plaza-de-la-Encarnacion-Metropol-Parasol-Las-Setas-de-Sevilla-1.jpg',
				image_alt:
					'Unique ultra-modern public installation in Seville, Spain knwon as the Metropol Parasol or Las Setas',

				cc_image_url: 'https://www.flickr.com/photos/hernanpc/17193358720',
				cc_author_url: 'https://www.flickr.com/photos/hernanpc/',
				cc_author: 'Hernan Pinera',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Italica Conjunto Roman Archaeological Site',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Seville-Santiponce-Conjunto-Arquelogico-de-Italica-Ancient-Roman-Archaeological-Site.jpg',
				image_alt:
					'Ancient Roman stadium in the former city of Italica, part of the Conjunto Archaeological Park near Seville, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Italica_amphitheatre_Santiponce_Andalucia_Spain.JPG&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Pufacz',
				cc_author: 'Pufacz',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	toledo: {
		id: 'toledo',
		itineraries: '',
		destinationName: 'Toledo',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'toledo-spain',
		destination_link: '/destinations/spain/toledo-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/V4rcoRoYA3s',
			all_attractions: 'https://goo.gl/maps/aQNz93ar5zm'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Iconic Sights',
				tab_content: `<p>Toledo is a picturesque medieval city built atop a hill, which is surrounded on three sides by a giant bend in the Tagus River. The old town of Toledo is located within this river bend and is surrounded by impressive fortified walls, which contain many charming rustic buildings. Consider the short hike to the Mirador del Valle viewpoint, which provides the iconic views overlooking Toledo from behind the river featured in many postcards.</p>
                <p>The stunning Alcantara Bridge is one of the historic city entrances, which offers views looking up at the Alcazar palace and the city's walls. The massive 16th century Alcazar de Toledo is a former royal palace which now serves as an Army Museum of historic weaponry and armors.</p>
                <p>On the opposite side of Toledo is the picturesque San Martin's Bridge leading out of the city, which features an exciting zipline over the Tagus River. It's also possible to take an extremely scenic walk along the river below Toledo between the two bridges.</p>`
			},
			{
				tab_title: 'Churches & More',
				tab_content: `<p>Be sure to visit the towering 13th century Toledo Cathedral, an extremely elaborate and stunning gothic cathedral. Nearby you can enjoy outstanding views over Toledo's skyline from the tower of the baroque Jesuit Church of San Ildefonso. Toledo is home to many highly ornate medieval religious structures, including the 1,000 year-old Mezquita del Cristo de La Luz mosque, the Synagogue of El Transito, and the oldest preserved synagogue in Europe, the Synagogue of Santa Maria La Blanca.</p>
                <p>Other popular attractions include the recreated house of the famous Spanish artist El Greco, and the intricate gothic Monasterio de San Juan de los Reyes monastery with its lovely cloister. Toledo also hosts several impressive medieval gates, including the Puerta del Sol and Puerta de Bisagra.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Alcantara Bridge',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Toledo-Puente-de-Alcantara-Bridge.jpg',
				image_alt:
					'Famous Alcantara Bridge, a medieval entrance to the walled city of Toledo with the Alcazar de Toledo in the background',

				cc_image_url: 'https://www.flickr.com/photos/tomasfano/6851856425',
				cc_author_url: 'https://www.flickr.com/photos/fran1978/',
				cc_author: 'Fran Santiago',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Alcazar de Toledo Palace',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Toledo-Alcazar-de-Toledo-Palace.jpg',
				image_alt:
					'Massive and imposing exterior of the Alcazar de Toledo Palace towering above the old city',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Alc%C3%A1zar_de_Toledo_-_03.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Kadellar',
				cc_author: 'Carlos Delgado',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/es/deed.en',
				cc_license: 'CC BY-SA 3.0 ES'
			},

			{
				attraction: 'Mirador del Valle Viewpoint',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Toledo-Mirador-del-Valle-Viewpoint.jpg',
				image_alt:
					'Iconic view overlooking Toledo at sunset from the Mirador del Valle Viewpoint',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Toledo_from_the_El_Greco_View_Point.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Jiuguang_Wang',
				cc_author: 'Jiuguang Wang',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/es/deed.en',
				cc_license: 'CC BY-SA 3.0 ES'
			},

			{
				attraction: 'Toledo Cathedral',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Toledo-Toledo-Cathedral.jpg',
				image_alt:
					"Towering exterior of the Toledo Cathedral in the heart of Toledo's historic walled town",

				cc_image_url: 'https://www.flickr.com/photos/sonofgroucho/11451378674',
				cc_author_url: 'https://www.flickr.com/photos/sonofgroucho/',
				cc_author: 'Son of Groucho',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	valencia: {
		id: 'valencia',
		itineraries: '',
		destinationName: 'Valencia',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'valencia-spain',
		destination_link: '/destinations/spain/valencia-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/aHw5yedDWvF2',
			all_attractions: 'https://goo.gl/maps/f4obBKR8tzj'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Old Town',
				tab_content: `<p>Valencia is Spain's third largest city and is located on the country's eastern coast, along the Mediterranean Sea.</p>
                <p>Within Valencia's Ciutat Vella Old Town is the picturesque Plaza de la Virgen, which features a brilliant fountain and the stunning 13th century Valencia Cathedral, with its unique Colosseum-like arcade arches. This incredible cathedral also hosts an ancient relic which is claimed to be the actual Holy Grail. Climb the cathedral's Torre del Micalet tower for spectacular views overlooking the Old Town.</p>
                <p>Popular attractions near the Plaza de la Virgen include the Archaeological Center of Almoina, which hosts the ruins of an ancient Roman bath complex, and the UNESCO listed La Lonja de la Seda, a lavish and highly elaborate medieval building. Also nearby is the beautiful art-nouveau style Central Market of Valencia, one of the largest public markets in Europe. Be sure to also see the iconic Torres de Serranos, a towering and imposing medieval gate to the Old Town.</p>`
			},
			{
				tab_title: 'City of Arts & Sciences',
				tab_content: `<p>Valencia's most iconic sight is the City of Arts & Sciences, a massive complex of stunning ultra-contemporary structures, surrounded by light blue pools of water which are so large that you can kayak in them. This incredible complex contains a science museum, Imax theater, opera house, and convention center. The complex also hosts the vast Oceanografic Aquarium, which is the largest aquarium of its kind in Europe, divided into different areas to represent all major marine ecosystems on Earth.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Valencia also hosts one of Europe's top zoos, the Valencia Bioparc, which is known for its immersive naturalistic animal exhibits. Popular museums around Valencia include the Museu de Belles Artes (Fine Arts Museum), and the Museu Nacional de Ceramica (National Museum of Ceramics). Also noteworthy is Valencia's Plaza of the City Hall, which is surrounded by lovely and historic modernisme-style buildings.</p>`
			}
		],
		attractions: [
			{
				attraction: 'City of Arts & Sciences',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Valencia-City-of-Arts-and-Sciences-Complex-Ciudad-de-las-Artes-y-las-Ciencias.jpg',
				image_alt:
					"Stunning futuristic whale skeleton-like structure surrounded by water at Valencia's ultra-modern City of Arts and Sciences complex",

				cc_image_url: 'https://www.flickr.com/photos/wwarby/34150942904',
				cc_author_url: 'https://www.flickr.com/photos/wwarby/',
				cc_author: 'William Warby',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Plaza de la Virgen',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Valencia-Plaza-de-la-Virgen-1.jpg',
				image_alt:
					"Gorgeous Plaza de la Virgen located at the center of Valencia's Old Town, with its beautiful fountain, lovely pink church, and the striking Valencia Cathedral",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Plaza_de_la_Virgen,_Valencia,_Espa%C3%B1a,_2014-06-30,_DD_163.JPG&action=history',
				cc_author_url: 'http://delso.photo/',
				cc_author: 'Diego Delso',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'City of Arts & Sciences (Night)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Valencia-City-of-Arts-and-Sciences-Buildings-Evening-Lights.jpg',
				image_alt:
					"Evening view of the illuminated futuristic buildings of Valencia's City of Arts and Sciences in Eastern Spain",

				cc_image_url:
					'https://pixabay.com/photos/valencia-spain-calatrava-sunset-1049389/',
				cc_author_url: 'https://pixabay.com/users/papagnoc-1605484/',
				cc_author: 'papagnoc',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Oceanografic Aquarium',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Valencia-Oceanografic-Aquarium.jpg',
				image_alt:
					"Striking contemporary rounded structure of Valencia's Oceanografic Museum, somewhat reminiscent of a small Syndey Opera House",

				cc_image_url: 'https://www.flickr.com/photos/timove/2855042155',
				cc_author_url: 'https://www.flickr.com/photos/timove/',
				cc_author: 'TimOve',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'La Lonja de la Seda Building',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Valencia-La-Lonja-de-la-Seda-Medieval-Silk-Market.jpg',
				image_alt:
					"Intricately carved wooden ceilings of the medieval Lonja de la Seda building in Valencia's Old Town",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Lonja_de_la_Seda,_Valencia,_Espa%C3%B1a,_2014-06-29,_DD_28.JPG&action=history',
				cc_author_url: 'http://delso.photo/',
				cc_author: 'Diego Delso',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Torres de Serranos Gate',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Valencia-Torres-de-Serranos-Medieval-Gate.jpg',
				image_alt:
					"The towering Torres de Serranos Gate, a medieval gate to the Old town of Valencia, which is also among the city's most iconic sights",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Torres_de_Serranos_(Valencia).jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Torres_de_Serranos_(Valencia).jpg&action=history',
				cc_author: 'Juandetorres',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/es/deed.en',
				cc_license: 'CC BY-SA 3.0 ES'
			}
		]
	},

	zaragoza: {
		id: 'zaragoza',
		itineraries: '',
		destinationName: 'Zaragoza',
		stateName: 'Spain',
		region: 'europe',
		anchor_tag: 'zaragoza-spain',
		destination_link: '/destinations/spain/zaragoza-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/iN7Y8LY1Cgq',
			all_attractions: 'https://goo.gl/maps/VS7F4ZDjEvy'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Basilica de Nuestro Senora del Pilar',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Zaragoza-Basilica-de-Nuestra-Senora-del-Pilar.jpg',
				image_alt:
					'View of the massive Basilica del Pilar from across the river in the morning fog in Zaragoza, Spain',

				cc_image_url:
					'https://www.flickr.com/photos/juanedc/29087439923/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/juanedc/',
				cc_author: 'Juanedc.com',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Stone Bridge',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Zaragoza-Stone-Bridge.jpg',
				image_alt:
					'Stunning evening view of the old Stone Bridge spanning the river with the Basilica del Pilar in the background in Zaragoza, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Basilica_del_Pilar-sunset.jpg&action=history',
				cc_author_url: 'https://www.flickr.com/photos/99181891@N00',
				cc_author: 'Paulo Brandao',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Aljaferia Palace',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Zaragoza-Aljaferia-Palace.jpg',
				image_alt:
					'Imposing medieval outer walls of the UNESCO listed Aljaferia Palace in Zaragoza, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Zaragoza-Aljaferia-exterior-2.JPG&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Zaragoza-Aljaferia-exterior-2.JPG&action=history',
				cc_author: 'Misburg3014',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Hispanidad Fountain & San Pablo Church',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Zaragoza-Plaza-del-Pilar-Fuente-de-la-Hispanidad-Fountain-1.jpg',
				image_alt:
					'View of the massive ultra-modern Fuente de la Hispanidad fountain on the Plaza del Pilar in Zaragoza, Spain',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Fuente_de_la_Hispanidad_-_P1410182.jpg&action=history',
				cc_author_url: 'https://www.flickr.com/people/121084837@N08',
				cc_author: 'Francis Raher',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Basilica del Pilar (Tower View)',
				image_url:
					'https://www.travelimager.com/images/spain/Spain-Zaragoza-Basilica-de-Nuestra-Senhora-del-Pilar-Torre-Tower-View.jpg',
				image_alt:
					'View over the city of Zaragoza and the river from high up in the tower of the Basilica del Pilar',

				cc_image_url: 'https://www.flickr.com/photos/nh53/38384195272/',
				cc_author_url: 'https://www.flickr.com/photos/nh53/',
				cc_author: 'NH53',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	lucerne: {
		id: 'lucerne',
		itineraries: '',
		destinationName: 'Lucerne',
		stateName: 'Switzerland',
		region: 'europe',
		anchor_tag: 'lucerne-switzerland',
		destination_link: '/destinations/switzerland/lucerne-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/tpTG3ZM4siD2',
			all_attractions: 'https://goo.gl/maps/f8DwkLXUvZS2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>Lucerne is a majestic city which sits on the western shore of the massive and extremely scenic Lake Lucerne located just below the Swiss Alps. All of the attractions around Lucerne (including gondola lifts) can be reached quickly and easily via public transportation.</p>`
			},
			{
				tab_title: 'Old Town',
				tab_content: `<p>Walk the streets of the Alstadt Old Town of Lucerne to admire its lovely historic buildings and charming covered wooden bridges, including the iconic 700 year old Chapel Bridge, and the Spreuerbruecke Bridge. Notable buildings include the medieval Altes Luzerner Rathaus (Old City Hall), the baroque Jesuitenkirche, and the spired gothic Church of St. Leodegar.</p>
                <p>The Old Town is bordered by the stunning Museggmauer medieval walls and their nine towers, some of which you can climb for views. Another iconic city sight is the Lion Monument, which is caved out of a cliff-face.</p>`
			},
			{
				tab_title: 'Mountains',
				tab_content: `<p>Lucerne is surrounded by many vibrant light blue lakes and towering mountains, with several mountains featuring gondola lifts to access incredible viewpoints. The closest mountain to Lucerne with some of the most breathtaking views over the lake is Mount Pilatus. Other highly recommended mountains include Rigi and Bürgenstock, with Rigi overlooking both Lake Lucerne and Zugersee Lake. Bürgenstock can be reached via the popular Hammetschwand Lift, the tallest exterior elevator in Europe.</p>
                <p>Also notable is Stanserhorn Mountain, which hosts two-story cable cars with roofless upper decks. All of these mountains surrounding Lucerne host excellent hiking trails and are surrounded by gorgeous natural beauty.</p>
                <p>South of Lucerne is the extremely popular 10,600 foot (3,200 m) tall Mount Titlis. Atop this mountain you’ll find one of the highest suspension bridges in Europe, the Titlis Cliff Walk, as well as the Titlis Glacier Cave, a fantastic ice cave you can walk through. From the top you can take in heavenly views over the Alps and surrounding lush landscapes.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Chapel Bridge',
				image_url:
					'https://www.travelimager.com/images/switzerland/Switzerland-Lucerne-Kapellbruecke-Chapel-Bridge-Southwest-Viewpoint.jpg',
				image_alt:
					'Iconic covered Chapel Bridge with its pointed towers crossing the Reuss River in Lucerne, Switzerland',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Luzern_Kapellbruecke.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Ikiwaner',
				cc_author: 'Ikiwaner',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC-BY-SA 3.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2',
				cc_license_gnu: 'GNU 1.2'
			},

			{
				attraction: 'Altstadt Luzern Old Town',
				image_url:
					'https://www.travelimager.com/images/switzerland/Switzerland-Lucerne-Altstadt-Luzern-Old-Town.jpg',
				image_alt:
					'View above the lovely historic buildings along the water in the Alstadt Luzern Old Town in Lucerne, Switzerland',

				cc_image_url:
					'https://pixabay.com/en/lucerne-lake-lucerne-region-3540529/',
				cc_author_url: 'https://pixabay.com/en/users/Werni-54897/',
				cc_author: 'Werni',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Mount Pilatus',
				image_url:
					'https://www.travelimager.com/images/switzerland/Switzerland-Greater-Lucerne-Alpnach-Mount-Pilatus-Lake-Lucerne-View.jpg',
				image_alt:
					'Far-reaching views over Lake Lucerne and many surrounding mountains seen from the top of Mount Pilatus',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:View_from_Pilatus.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:View_from_Pilatus.jpg&action=history',
				cc_author: 'Fabrice Blanc',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Museggmauer City Walls (River View)',
				image_url:
					'https://www.travelimager.com/images/switzerland/Switzerland-Lucerne-Museggmauer-Luzern-Stadtmauer-City-Walls-River-View.jpg',
				image_alt:
					'Striking medieval walls of Lucerne seen from their start point at the river',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Stadtbefestigung_Luzern,_Luegislandturm,_M%C3%A4nnliturm,_N%C3%B6lliturm_IMG_4797.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Stadtbefestigung_Luzern,_Luegislandturm,_M%C3%A4nnliturm,_N%C3%B6lliturm_IMG_4797.jpg&action=history',
				cc_author: 'WES1947',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Lion Monument',
				image_url:
					'https://www.travelimager.com/images/switzerland/Switzerland-Lucerne-Loewendenkmal-Lion-Monument.jpg',
				image_alt:
					'Iconic Loewendenkmal Lion Monument carved into the side of a cliff above a small pond in Lucerne, Switzerland',

				cc_image_url:
					'https://pixabay.com/en/swiss-lucerne-empty-of-lion-1560621/',
				cc_author_url: 'https://pixabay.com/en/users/pkh470-2685442/',
				cc_author: 'pkh470',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	budapest: {
		id: 'budapest',
		itineraries: '',
		destinationName: 'Budapest',
		stateName: 'Hungary',
		region: 'europe',
		anchor_tag: 'budapest-hungary',
		destination_link: '/destinations/europe/budapest-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/PuaSZ2cs2cN2',
			all_attractions: 'https://goo.gl/maps/d3a9woHVM4y',
			custom_attractions_1: 'https://goo.gl/maps/Bo6F9RQjWsk',
			custom_attractions_1_text: 'Greater Budapest'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Danube Riverfront',
				tab_content: `<p>Hungary's capital city is an amazing and beautiful place, which is actually comprised of two historic cities Buda and Pest on opposite sides of the Danube River, which together make up the modern city. Perhaps the best way to see the city is from a small river cruise along the Danube, of which there are many options to choose from.</p>
                <p>The city's most iconic attractions are located along the Danube River, including the massive gothic Hungarian Parliament Building, the Szechenyi Chain Bridge, and the expansive Buda Castle.</p>`
			},
			{
				tab_title: 'Buda Castle',
				tab_content: `<p>Within the Buda Castle complex you can enjoy several museums, the magnificent Matthias Church with its colorful mosaic tile roof, and the fairytale-like Fisherman's Bastion terrace with stunning views overlooking Budapest. Just south of the castle is the hilltop Citadella fortress, another excellent place from which to enjoy amazing views over the city and river.</p>`
			},
			{
				tab_title: 'More Top Attractions',
				tab_content: `<p>Within Budapest's vast City Park you'll find several more iconic sights, including the impressive Heroes' Square Monument, the Transylvania-inspired Vajdahunyad Castle, and the famous Szechenyi Thermal Bath, which is known for its wild nighttime pool parties. Near the Citadella is another popular bath complex, the Gellert Thermal Bath, which is hosted within an elegant art-nouveau hotel.</p>
                <p>Other major attractions of Budapest include the extravagant Hungarian State Opera, the neoclassical St. Stephen's Basilica, the highly ornate Dohany Street Synagogue, and several museums, including the Hungarian National Museum and House of Terror documenting the country's 20th century communist regime.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Hungarian Parliament Building',
				image_url:
					'https://www.travelimager.com/images/hungary/Hungary-Budapest-Hungarian-Parliament-Building.jpg',
				image_alt:
					'Angled night view of the lit up Hungarian Parliament Building seen from the river in Budapest, Hungary',

				cc_image_url: 'https://www.flickr.com/photos/wongwt/27825126932/',
				cc_author_url: 'https://www.flickr.com/photos/wongwt/',
				cc_author: 'Wei-Te Wong',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: "Fisherman's Bastion (View)",
				image_url:
					'https://www.travelimager.com/images/hungary/Hungary-Budapest-Fishermans-Bastion-View.jpg',
				image_alt:
					"Winter view overlooking the city from the Fisherman's Bastion of Buda Castle in Budapest, Hungary",

				cc_image_url: 'https://www.flickr.com/photos/anieto2k/8262965486/',
				cc_author_url: 'https://www.flickr.com/photos/anieto2k/',
				cc_author: 'Andres Nieto Porras',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Szechenyi Thermal Bath',
				image_url:
					'https://www.travelimager.com/images/hungary/Hungary-Budapest-Szechenyi-Thermal-Baths.jpg',
				image_alt:
					'Vast pools and sprawling complex of the Szechenyi Thermal Baths at City Park in Budapest, Hungary',

				cc_image_url:
					'https://www.flickr.com/photos/8771870@N06/33443049426/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/8771870@N06/',
				cc_author: 'Ibolya',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Buda Castle',
				image_url:
					'https://www.travelimager.com/images/hungary/Hungary-Budapest-Buda-Castle.jpg',
				image_alt:
					'Vast hilltop Buda Castle complex seen behind the river in Budapest, Hungary',

				cc_image_url:
					'https://pixabay.com/en/budapest-castle-buda-castle-danube-2637906/',
				cc_author_url: 'https://pixabay.com/en/users/veronikasz-4536335/',
				cc_author: 'veronikasz',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Szechenyi Chain Bridge',
				image_url:
					'https://www.travelimager.com/images/hungary/Hungary-Budapest-Szechenyi-Chain-Bridge-1.jpg',
				image_alt:
					'Night-time aerial view overlooking the lit up Szechenyi Chain bridge and Hungarian Parliament Building from high above in Budapest, Hungary',

				cc_image_url: 'https://pixabay.com/en/szechenyi-chain-bridge-1758196/',
				cc_author_url: 'https://pixabay.com/en/users/12019-12019/',
				cc_author: '12019',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	luxembourg_city: {
		id: 'luxembourg_city',
		itineraries: '',
		destinationName: 'Luxembourg City',
		stateName: 'Luxembourg',
		region: 'europe',
		anchor_tag: 'luxembourg-city-luxembourg',
		destination_link: '/destinations/europe/luxembourg-city-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/wXxUH5yenwT2',
			all_attractions: 'https://goo.gl/maps/eDsPgFnNWh12'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Vianden Castle (Southern Viewpoint)',
				image_url:
					'https://www.travelimager.com/images/luxembourg/Luxembourg-Vianden-Vianden-Castle-Road-322-Southern-Viewpoint.jpg',
				image_alt:
					"Incredible side-view of Luxembourg's most amazing castle, the Vianden Castle, seen rising above the densely forested hills",

				cc_image_url: 'https://www.flickr.com/photos/28169156@N03/22351832041',
				cc_author_url: 'https://www.flickr.com/photos/28169156@N03/',
				cc_author: 'Frans Berkelaar',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Grund District',
				image_url:
					'https://www.travelimager.com/images/luxembourg/Luxembourg-Luxembourg-City-Grund-District-Alzette-River.jpg',
				image_alt:
					'Lovely view of the historic buildings along the river which runs through the Grund District, an urbanized canyon below the city center of Luxembourg City',

				cc_image_url: 'https://www.flickr.com/photos/wolfgangstaudt/2273767071',
				cc_author_url: 'https://www.flickr.com/photos/wolfgangstaudt/',
				cc_author: 'Wolfgang Staudt',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Chemin de la Corniche Melhor Vista',
				image_url:
					'https://www.travelimager.com/images/luxembourg/Luxembourg-Luxembourg-City-Chemin-de-la-Corniche-Grund-District-Overlook.jpg',
				image_alt:
					'Stunning view over the Grund District of Luxembourg City which sits in a river canyon below the city center, seen from the Chemin de la Corniche Melhor Vista viewpoint',

				cc_image_url: 'https://www.flickr.com/photos/archer10/12726240694',
				cc_author_url: 'https://www.flickr.com/photos/archer10/',
				cc_author: 'Dennis Jarvis',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Neumünster Abbey',
				image_url:
					'https://www.travelimager.com/images/luxembourg/Luxembourg-Luxembourg-City-Grund-District-Neumunster-Abbey.jpg',
				image_alt:
					'Massive yellow Neumuenster Abbey of the Grund District seen from above in Luxembourg City',

				cc_image_url:
					'https://pixabay.com/en/luxembourg-city-landscape-cityscape-2648046/',
				cc_author_url: 'https://pixabay.com/en/users/djedj-59194/',
				cc_author: 'djedj',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	monaco: {
		id: 'monaco',
		itineraries: '',
		destinationName: 'Monaco',
		stateName: null,
		region: 'europe',
		anchor_tag: 'monaco-monaco',
		destination_link: '/destinations/europe/monaco-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/eQtT9g8HjxB2',
			all_attractions: 'https://goo.gl/maps/cLQz3z66s8P2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Iconic Sights',
				tab_content: `<p>The micro-state nation of Monaco is only about at large as a small city. Monaco sits on the coast along the French Riviera and is completely surrounded by France adjacent to the city of Nice. The country is located between Nice and the Italian border. Monaco is among the richest countries in the world and is filled with extravagance, with luxurious high-rise buildings lining the streets, and mega-yachts and gardens lining the coastline.</p>
                <p>Monaco's top attraction is the famous Casino Monte-Carlo, an elegant 19th century casino overlooking the ocean with ultra-lavish interiors. The next most popular attraction is the 12th century Prince's Palace of Monaco, a decadent fortified palace in which the Monacan royals of have lived for over 700 years. You can see part of this opulent palace via guided tour. Nearby you can also enjoy the breathtaking views overlooking Port Hercule, and admire the beautiful Romanesque Saint Nicholas Cathedral with its lavish interiors.</p>`
			},
			{
				tab_title: 'Museums & More',
				tab_content: `<p>Monaco's top museum is the grand baroque Oceanographic Museum, which houses several whale skeletons, model ships, and a sizable aquarium perched atop a cliff. Nearby you can enjoy amazing views over Monaco's coastline from the 18th century Fort Antoine.</p>
                <p>Also popular is the Monaco Top Cars Collection, which hosts a luxurious collection of nearly 100 rare classic cars and race cars. High above Monaco atop a steep cliff you'll find the stunning Exotic Gardens of Monaco, a beautiful succulent and cacti garden offering breathtaking views over the city below.</p>`
			},
			{
				tab_title: 'Village of Menton',
				tab_content: `<p>Just a short train ride up the coast from Monaco is the scenic French town of Menton, which is located very close to the Italian border. This picturesque seaside town is known for its lovely promenade, which you can admire from the Plage des Sablettes Beach.</p>`
			}
		],
		attractions: [
			{
				attraction: "Prince's Palace of Monaco",
				image_url:
					'https://www.travelimager.com/images/monaco/Monaco-Princes-Palace-of-Monaco.jpg',
				image_alt:
					"Medieval castle-like Prince's Palace of Monaco, the royal seat of power of the micro-state of Monaco",

				cc_image_url: 'https://www.flickr.com/photos/thegirlsny/6187295190',
				cc_author_url: 'https://www.flickr.com/photos/thegirlsny/',
				cc_author: 'Kim',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Port Hercule Overlook',
				image_url:
					'https://www.travelimager.com/images/monaco/Monaco-Port-Hercule-Porte-de-entree-au-Rocher-Viewpoint.jpg',
				image_alt:
					"Popular viewpoint overlooking the majestic Port Hercule, filled with mega yachts in one of Monaco's harbors",

				cc_image_url:
					'https://hu.wikipedia.org/w/index.php?title=F%C3%A1jl:Monaco_kikoto.jpg&action=history',
				cc_author_url: 'https://hu.wikipedia.org/wiki/Szerkeszt%C5%91:Katonams',
				cc_author: 'Katonams',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.5/legalcode',
				cc_license: 'CC BY-SA 2.5'
			},

			{
				attraction: 'Casino Monte Carlo',
				image_url:
					'https://www.travelimager.com/images/monaco/Monaco-Casino-Monte-Carlo.jpg',
				image_alt: 'Front view of the famous Casino of Monte Carlo in Monaco',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Casino_de_Monte-Carlo.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Piponwa',
				cc_author: 'Piponwa',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Exotic Garden of Monaco',
				image_url:
					'https://www.travelimager.com/images/monaco/Monaco-Jardin-Exotique-Exotic-Garden-of-Monaco.jpg',
				image_alt:
					'Beautiful Mediterranean Exotic Garden of Monaco with sweeping views high above the city-state and marinas below',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Monaco002.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:JoJan',
				cc_author: 'Georges Jansoone',

				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0'
			},

			{
				attraction: 'Plage des Sablettes Beach (Menton)',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Nice-Menton-Plage-des-Sablettes-Beach.jpg',
				image_alt:
					'View of the colorful buildings which tower over Plage des Sablettes Beach from the breakwall in the town of Menton, France',

				cc_image_url:
					'https://pixabay.com/en/chin-french-riviera-mediterranean-3675042/',
				cc_author_url: 'https://pixabay.com/en/users/Fabien3X9-4176172/',
				cc_author: 'Fabien3X9',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'View over Monaco (La Turbie)',
				image_url:
					'https://www.travelimager.com/images/france/France-Greater-Nice-La-Turbie-View-Over-Monaco-Overlook.jpg',
				image_alt:
					'Breathtaking High elevation view over the country of Monaco and its coastline from the city of La Turbie, France',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Panorama_von_Monaco-La_Turbie.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Tobi_87',
				cc_author: 'Tobi 87',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	bratislava: {
		id: 'bratislava',
		itineraries: '',
		destinationName: 'Bratislava',
		stateName: 'Slovakia',
		region: 'europe',
		anchor_tag: 'bratislava-slovakia',
		destination_link: '/destinations/europe/bratislava-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/Uuw7uSYgDJr'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Main Square',
				image_url:
					'https://www.travelimager.com/images/slovakia/Slovakia-Bratislava-Hlavne-Namestie-Main-Square.jpg',
				image_alt:
					"Colorful elegant buildings lining Bratislava's Main Square, with the hilltop Bratislava Castle towering above in the background, in Slovakia",

				cc_image_url: 'https://www.flickr.com/photos/robhurson/35096533142/',
				cc_author_url: 'https://www.flickr.com/photos/robhurson/',
				cc_author: 'Rob Hurson',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Bratislava Castle',
				image_url:
					'https://www.travelimager.com/images/slovakia/Slovakia-Bratislava-Bratislava-Castle.jpg',
				image_alt:
					'Beautiful white hilltop Bratislava Castle seen behind a river in Slovakia',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:2014-03-26_-_panoramio_(6).jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:2014-03-26_-_panoramio_(6).jpg&action=history',
				cc_author: 'Valery Ded',

				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0'
			},

			{
				attraction: 'Blue Church of St. Elizabeth',
				image_url:
					'https://www.travelimager.com/images/slovakia/Slovakia-Bratislava-Blue-Church-of-St-Elizabeth.jpg',
				image_alt:
					'Beautiful vibrant light blue Church of St. Elizabeth with white embellishments in Bratislava, Slovakia',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Blue_Church,_Bratislava_02.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Thomas_Ledl',
				cc_author: 'Thomas Ledl',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Hrad Devin Castle',
				image_url:
					'https://www.travelimager.com/images/slovakia/Slovakia-Bratislava-Hrad-Devin-Castle.jpg',
				image_alt:
					'Ruins of the tall rocky hilltop Hrad Devin Castle which towers above the river below near Bratislava, Slovakia',

				cc_image_url: 'https://www.flickr.com/photos/kurt-b/8055531491',
				cc_author_url: 'https://www.flickr.com/photos/kurt-b/',
				cc_author: 'Kurt Bauschardt',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	canyon_de_chelly: {
		id: 'canyon_de_chelly',
		itineraries: 'arizona, ut-az',
		destinationName: 'Canyon de Chelly National Monument',
		stateName: 'Arizona',
		region: 'usa',
		anchor_tag: 'canyon-de-chelly-arizona',
		destination_link: '/destinations/arizona/canyon-de-chelly-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/vqozJ8yHSKWFPGyC6'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				id: 'canyon-de-chelly-4',
				carouselId: 'canyon-de-chelly',
				itineraryCarousel: null,
				attraction: 'White House Ruin Trail',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Canyon-de-Chelly-National-Monument-White-House-Ruins-Trail.jpg',
				image_alt:
					'Close-up view of the White House ruins and cliff dwellings seen along the White House Ruin Trail of Canyon de Chelly',
				cc_image_url: 'https://www.flickr.com/photos/vanhoosear/5514114729/',
				cc_author_url: 'https://www.flickr.com/photos/vanhoosear/',
				cc_author: 'Todd Van Hoosear',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},
			{
				id: 'canyon-de-chelly-5',
				carouselId: 'canyon-de-chelly',
				itineraryCarousel: null,
				attraction: 'Spider Rock Overlook',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Canyon-de-Chelly-National-Monument-Spider-Rock-Overlook-Wide-View.jpg',
				image_alt:
					'Iconic view overlooking the massive towers of Spider Rock in Canyon de Chelly National Monument, Northern Arizona',
				cc_image_url:
					'https://pixabay.com/photos/spider-rock-canyon-de-chelly-3022990/',
				cc_author_url: 'https://pixabay.com/fr/users/ducken99-6930886/',
				cc_author: 'ducken99',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'canyon-de-chelly-7',
				carouselId: 'canyon-de-chelly',
				itineraryCarousel: null,
				attraction: 'Mummy Cave Overlook',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Canyon-de-Chelly-National-Monument-Mummy-Cave-Overlook.jpg',
				image_alt:
					'Native American cliff dwellings in the alcoves of Canyon de Chelly National Monument seen from the Mummy Cave Overlook',
				cc_image_url:
					'https://www.flickr.com/photos/jeffhollettvancouverwa/8691214586/',
				cc_author_url: 'https://www.flickr.com/photos/jeffhollettvancouverwa/',
				cc_author: 'Jeff Hollett',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'canyon-de-chelly-3',
				carouselId: 'canyon-de-chelly',
				itineraryCarousel: null,
				attraction: 'White House Overlook',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Canyon-de-Chelly-National-Monument-White-House-Overlook.jpg',
				image_alt:
					'Distant view from White House Overlook of Native American cliff dwellings amongst the Canyon de Chelly',
				cc_image_url: 'https://www.flickr.com/photos/12535240@N05/4926188326/',
				cc_author_url: 'https://www.flickr.com/photos/12535240@N05/',
				cc_author: 'carlfbagge',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	flagstaff: {
		id: 'flagstaff',
		itineraries: 'arizona, ut-az',
		destinationName: 'Flagstaff',
		stateName: 'Arizona',
		region: 'usa',
		anchor_tag: 'flagstaff-arizona',
		destination_link: '/destinations/arizona/flagstaff-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/2ngTsRi9g3F2'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				id: 'flagstaff-2',
				carouselId: 'flagstaff',
				itineraryCarousel: null,
				attraction: 'Lowell Observatory (Pluto Discovery)',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Flagstaff-Lowell-Observatory.jpg',
				image_alt:
					'Exterior of the famous Lowell Observatory in Flagstaff, Arizona where Pluto was discovered',
				cc_image_url: 'https://www.flickr.com/photos/vanhoosear/5523258977/',
				cc_author_url: 'https://www.flickr.com/photos/vanhoosear/',
				cc_author: 'Todd Van Hoosear',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'flagstaff-6',
				carouselId: 'greater-flagstaff',
				itineraryCarousel: null,
				attraction: 'Sunset Crater Volcano National Monument',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Flagstaff-Sunset-Crater-Volcano-National-Monument.jpg',
				image_alt:
					'Black volcanic landscape of the Sunset Crater Volcano National Monument near Flagstaff, Arizona',
				cc_image_url:
					'https://www.flickr.com/photos/jeffhollettvancouverwa/27089838392/',
				cc_author_url: 'https://www.flickr.com/photos/jeffhollettvancouverwa/',
				cc_author: 'Jeff Hollett',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'flagstaff-7',
				carouselId: 'greater-flagstaff',
				itineraryCarousel: null,
				attraction: 'Wupatki National Monument',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Flagstaff-Wupatki-National-Monument.jpg',
				image_alt:
					'Massive 1,000 year old Native American structure containing many rooms at Wupatki National Monument near Flagstaff, Arizona',
				cc_image_url: 'https://www.flickr.com/photos/jared422/34900877554/',
				cc_author_url: 'https://www.flickr.com/photos/jared422/',
				cc_author: 'Jared',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'flagstaff-8',
				carouselId: 'greater-flagstaff',
				itineraryCarousel: null,
				attraction: 'Meteor Crater',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Flagstaff-Meteor-Crater.jpg',
				image_alt:
					'Overlooking the vast well-preserved 50,000 year old Meteor Crater in the Northern Arizona desert between Flagstaff and Winslow',
				cc_image_url: 'https://www.flickr.com/photos/gee01/9905669604/',
				cc_author_url: 'https://www.flickr.com/photos/gee01/',
				cc_author: 'Graeme Maclean',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'flagstaff-5',
				carouselId: 'greater-flagstaff',
				itineraryCarousel: null,
				attraction: 'Walnut Canyon National Monument',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Flagstaff-Walnut-Canyon-National-Monument.jpg',
				image_alt:
					'Pre-Colombian Native American cliff dwellings seen along a trail at Walnut Canyon National Monument in Flagstaff, Arizona',
				cc_image_url: 'https://www.flickr.com/photos/sfbaywalk/8204449495/',
				cc_author_url: 'https://www.flickr.com/photos/sfbaywalk/',
				cc_author: 'sfbaywalk',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	north_rim_grand_canyon: {
		id: 'north_rim_grand_canyon',
		itineraries: 'arizona, utah, ut-az',
		destinationName: 'North Rim Grand Canyon',
		stateName: 'Arizona',
		region: 'usa',
		anchor_tag: 'north-rim-grand-canyon-arizona',
		destination_link:
			'/destinations/arizona/north-rim-grand-canyon-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/LQWiDRQaP9B2'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				id: 'north-rim-grand-canyon-5',
				carouselId: 'cape-royal-and-north-rim-viewpoints',
				itineraryCarousel: null,
				attraction: 'Cape Royal',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-North-Rim-Grand-Canyon-National-Park-Cape-Royal.jpg',
				image_alt:
					"Iconic Cape Royal viewpoint along the Grand Canyon's North Rim overlooking the massive Wotans Throne butte",
				cc_image_url:
					'https://www.flickr.com/photos/grand_canyon_nps/9346181170/',
				cc_author_url: 'https://www.flickr.com/photos/grand_canyon_nps/',
				cc_author: 'Grand Canyon National Park',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'north-rim-grand-canyon-6',
				carouselId: 'cape-royal-and-north-rim-viewpoints',
				itineraryCarousel: null,
				attraction: 'Angels Window',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-North-Rim-Grand-Canyon-National-Park-Angels-Window.jpg',
				image_alt:
					"Natural window/bridge in the cliffs near Cape Royal known as the Angels Window along the Grand Canyon's North Rim",
				cc_image_url: 'https://www.flickr.com/photos/87666397@N07/22295212998/',
				cc_author_url: 'https://www.flickr.com/photos/87666397@N07/',
				cc_author: 'Chris Tillman',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'north-rim-grand-canyon-10',
				carouselId: 'cape-royal-and-north-rim-viewpoints',
				itineraryCarousel: null,
				attraction: 'Point Imperial',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-North-Rim-Grand-Canyon-National-Park-Point-Imperial.jpg',
				image_alt:
					"Stunning view overlooking a complex rugged section of the Grand Canyon from Point Imperial along the canyon's northern rim",
				cc_image_url: 'https://www.flickr.com/photos/azwegers/7912923972/',
				cc_author_url: 'https://www.flickr.com/photos/azwegers/',
				cc_author: 'Arian Zwegers',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'north-rim-grand-canyon-1',
				carouselId: 'bright-angel-point',
				itineraryCarousel: null,
				attraction: 'Bright Angel Point',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-North-Rim-Grand-Canyon-National-Park-Bright-Angel-Point.jpg',
				image_alt:
					"View overlooking the Grand Canyon from Bright Angel Point along the national park's northern rim",
				cc_image_url: 'https://www.flickr.com/photos/dvs/34080599563/',
				cc_author_url: 'https://www.flickr.com/photos/dvs/',
				cc_author: 'dvs',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'north-rim-grand-canyon-9',
				carouselId: 'cape-royal-and-north-rim-viewpoints',
				itineraryCarousel: null,
				attraction: 'Roosevelt Point Overlook',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-North-Rim-Grand-Canyon-National-Park-Roosevelt-Point-Overlook.jpg',
				image_alt:
					"View of the endless flat desert behind the Grand Canyon seen from the Roosevelt Point along the Grand Canyon's northern rim",
				cc_image_url: 'https://www.flickr.com/photos/kenlund/3741359572/',
				cc_author_url: 'https://www.flickr.com/photos/kenlund/',
				cc_author: 'Ken Lund',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},
	page_az: {
		id: 'page_az',
		itineraries: 'arizona, utah, ut-az',
		destinationName: 'Page',
		stateName: 'Arizona',
		region: 'usa',
		anchor_tag: 'page-arizona',
		destination_link: '/destinations/arizona/page-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/AUU16cZUBhp',
			all_attractions: 'https://goo.gl/maps/pGFwj1AS9RR2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Page, AZ Attractions',
				tab_content: `<p>The city of Page is located in Northern Arizona very close to the Utah border and the extremely scenic Lake Powell, in an area of immense natural beauty. Page is surrounded by stunning geological formations such as the gorgeous Horseshoe Bend, a massive and picturesque canyon bend in the Colorado River that's approximately 1,000 feet (300 m) tall.</p>
                <p>Just east of Page are the iconic Upper and Lower Antelope Canyons, which consist of incredibly beautiful winding red slot canyons. Upper Antelope Canyon is known for the famous beams of light that shine into the canyon, however both canyons are extremely scenic and used in images such as screensavers around the world.</p>
                <p>Around Page you'll find many other mesmerizing places, some of which are only accessible via special tours, such as Rainbow Bridge National Monument, Secret Canyon, and X Canyon.</p>`
			}
		],
		attractions: [
			{
				id: 'page-arizona-5',
				carouselId: 'horseshoe-bend-and-antelope-canyons',
				itineraryCarousel: null,
				attraction: 'Upper Antelope Canyon',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Page-Upper-Antelope-Canyon.jpg',
				image_alt:
					'Bright light shining through the opening between the walls of Upper Antelope Canyon and making the canyon walls glow',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Antelope_Canyon_Navajo_park.jpg&action=history',
				cc_author_url: 'https://www.flickr.com/people/aigle_dore/',
				cc_author: 'Moyan Brenn',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'page-arizona-1',
				carouselId: 'horseshoe-bend-and-antelope-canyons',
				itineraryCarousel: null,
				attraction: 'Horseshoe Bend',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Page-Horseshoe-Bend.jpg',
				image_alt:
					"Red glowing canyons of the Colorado River's Horseshoe Bend along Glen Canyon near Page, Arizona and Lake Powell",
				cc_image_url: 'https://www.flickr.com/photos/35131425@N08/37429674460/',
				cc_author_url: 'https://www.flickr.com/photos/35131425@N08/',
				cc_author: 'nieman und nichts',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'page-arizona-3',
				carouselId: 'horseshoe-bend-and-antelope-canyons',
				itineraryCarousel: null,
				attraction: 'Lower Antelope Canyon',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Page-Lower-Antelope-Canyon.jpg',
				image_alt:
					'Famous view looking up at the smooth twisting gorge walls of Lower Antelope Canyon in Page, Arizona',
				cc_image_url: 'https://www.flickr.com/photos/x-oph/22620219150/',
				cc_author_url: 'https://www.flickr.com/photos/x-oph/',
				cc_author: 'Krzysztof Belczynski',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'page-arizona-10',
				carouselId: 'lake-powell-and-more-slot-canyons',
				itineraryCarousel: null,
				attraction: 'Wahweap Overlook',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Page-Wahweap-Overlook.jpg',
				image_alt:
					'Stunning view over the cliffs and islands of Lake Powell from atop the Wahweap Overlook on the Utah side of the lake',
				cc_image_url: 'https://www.flickr.com/photos/markbyzewski/4038192986/',
				cc_author_url: 'https://www.flickr.com/photos/markbyzewski/',
				cc_author: 'mark byzewski',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'page-arizona-4',
				carouselId: 'horseshoe-bend-and-antelope-canyons',
				itineraryCarousel: null,
				attraction: 'Lower Antelope Canyon',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Page-Lower-Antelope-Canyon-2.jpg',
				image_alt:
					'Famous lady and hair bust-like rock formation seen along the walls of Lower Antelope Canyon in Page, Arizona',
				cc_image_url:
					'https://pixabay.com/photos/antelope-canyon-sandstone-canyon-1128815/',
				cc_author_url: 'https://pixabay.com/users/patternpictures-622877/',
				cc_author: 'PatternPictures',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'page-arizona-11',
				carouselId: 'lake-powell-and-more-slot-canyons',
				itineraryCarousel: null,
				attraction: 'Rainbow Bridge (Boat Tour Only)',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Page-Rainbow-Bridge-National-Monument.jpg',
				image_alt:
					'Looking out at the Rainbow Bridge National Monument inside a remote canyon only accessible via Lake Powell',
				cc_image_url: 'https://www.flickr.com/photos/volvob12b/14091907751/',
				cc_author_url: 'https://www.flickr.com/photos/volvob12b/',
				cc_author: 'Bernard Spragg, NZ',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	petrified_forest: {
		id: 'petrified_forest',
		itineraries: 'arizona, ut-az',
		destinationName: 'Petrified Forest National Park',
		stateName: 'Arizona',
		region: 'usa',
		anchor_tag: 'petrified-forest-national-park-arizona',
		destination_link:
			'/destinations/arizona/petrified-forest-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/TFUxDPokyuk9NXC3A'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Petrified Forest N.P. Attractions',
				tab_content: `<p>This remote area of Arizona hosts the Petrified Forest National Park, a vast scenic area of colorful hills and ancient petrified wood fossils that are over 200 million years old. The landscape of the national park is part of the beautiful Painted Desert.</p>
                <p>This national park is known for its surreal landscapes, such as the Crystal Forest Trail which is full of countless crystallized ancient logs. Also incredible is the Blue Mesa Trail, named for its fantasy-like bluish-purple colored barren desert hills.</p>`
			}
		],
		attractions: [
			{
				id: 'petrified-forest-6',
				carouselId: 'petrified-forest-drive',
				itineraryCarousel: null,
				attraction: 'Blue Mesa Trail',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Petrified-Forest-National-Park-Blue-Mesa-Trail.jpg',
				image_alt:
					"Stunning blue and purples hills and cliffs seen along the Blue Mesa Trail of Arizona's Petrified Forest National Park",
				cc_image_url: 'https://www.flickr.com/photos/tlposcharsky/5674893826/',
				cc_author_url: 'https://www.flickr.com/photos/tlposcharsky/',
				cc_author: 'Tlposcharsky',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'petrified-forest-9',
				carouselId: 'petrified-forest-drive',
				itineraryCarousel: null,
				attraction: 'Crystal Forest Trail',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Petrified-Forest-National-Park-Crystal-Forest.jpg',
				image_alt:
					'Close-up view of a petrified wooden log seen along the Crystal Forest Trail at golden hour in Petrified Forest National Park',
				cc_image_url:
					'https://www.flickr.com/photos/jeffhollettvancouverwa/26886997980/',
				cc_author_url: 'https://www.flickr.com/photos/jeffhollettvancouverwa/',
				cc_author: 'Jeff Hollett',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'petrified-forest-8',
				carouselId: 'petrified-forest-drive',
				itineraryCarousel: null,
				attraction: 'Jasper Forest',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Petrified-Forest-National-Park-Jasper-Forest.jpg',
				image_alt:
					"Ancient petrified wood logs along the purplish landscape of Petrified Forest National Park' Jasper Forest in Northern Arizona",
				cc_image_url:
					'https://www.flickr.com/photos/andrew_kearns_photography/14736525130/',
				cc_author_url: 'https://www.flickr.com/photos/andrew_kearns_photography/',
				cc_author: 'Andrew Kearns',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'petrified-forest-2',
				carouselId: 'painted-desert-viewpoints',
				itineraryCarousel: null,
				attraction: 'Kachina Point',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Petrified-Forest-National-Park-Kachina-Point.jpg',
				image_alt:
					'Colorful hilly landscape of the Painted Desert seen from Kachina Point in Petrified Forest National Park',
				cc_image_url:
					'https://www.flickr.com/photos/petrifiedforestnps/34290446523/',
				cc_author_url: 'https://www.flickr.com/photos/petrifiedforestnps/',
				cc_author: 'Petrified Forest NPS',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	phoenix: {
		id: 'phoenix',
		itineraries: 'arizona, ut-az',
		destinationName: 'Phoenix',
		stateName: 'Arizona',
		region: 'usa',
		anchor_tag: 'phoenix-arizona',
		destination_link: '/destinations/arizona/phoenix-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/NLEw3boHahN2',
			all_attractions: 'https://goo.gl/maps/3LN5oDyP6mS2',
			custom_attractions_1: 'https://goo.gl/maps/6bNq5FBRMJq',
			custom_attractions_1_text: 'Greater Phoenix Attractions'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Phoenix Attractions',
				tab_content: `<p>Phoenix is the capital of Arizona and a major city within the USA that's surrounded by mountains and desert. The city's Downtown area features great restaurants, bars, and shopping. Among the city’s top attractions is Papago Park, which showcases a beautiful desert environment and hosts the lush Desert Botanical Garden.</p>
                <p>In order to enjoy views over the city you can hike up into the surrounding mountains, via the extremely popular Camelback Mountain Trail or the Piestewa Peak Trail. Drive up to the Dobbins Lookout atop South Mountain for more sweeping views over the city.</p>`
			},
			{
				tab_title: 'Greater Phoenix',
				tab_content: `<p>On the eastern outskirts of Phoenix are the gorgeous Superstition Mountains and Lost Dutchman State Park, hosting the highly recommended Flat Iron Trail as well as the Goldfield Ghost Town. Another excellent hiking area is Gold Canyon, which hosts the stunning Peralta Trail and more. National Monuments outside of Phoenix include the 14th century Native American Casa Grande structure, as well as the striking Tonto Cliff Dwellings.</p>`
			}
		],
		attractions: [
			{
				id: 'phoenix-11',
				carouselId: 'phoenix-hiking-and-lost-dutchman',
				itineraryCarousel: null,
				attraction: 'Treasure Loop Trail (Lost Dutchman)',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Phoenix-Treasure-Loop-Trail.jpg',
				image_alt:
					'View of the Superstition Mountains of Lost Dutchman State Park from the Treasure Loop Trail near Phoenix, Arizona',
				cc_image_url: 'https://www.flickr.com/photos/ksblack99/39380402402/',
				cc_author_url: 'https://www.flickr.com/photos/ksblack99/',
				cc_author: 'ksblack99',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'phoenix-8',
				carouselId: 'phoenix-hiking-and-lost-dutchman',
				itineraryCarousel: null,
				attraction: 'Piestewa Peak Summit Trail',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Phoenix-Piestewa-Peak.jpg',
				image_alt:
					'View of Downtown Phoenix and surrounding urban sprawl from atop Piestewa Peak Summit in Phoenix, Arizona',
				cc_image_url: 'https://www.flickr.com/photos/ggphoto36/6729057137/',
				cc_author_url: 'https://www.flickr.com/photos/ggphoto36/',
				cc_author: 'Gary',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'phoenix-3',
				carouselId: 'phoenix-city-attractions',
				itineraryCarousel: null,
				attraction: 'Papago Park',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Phoenix-Papago-Park.jpg',
				image_alt:
					"View of the Hole in the Rock behind a lake and palm trees at Phoenix's Papago Park",
				cc_image_url: 'https://www.flickr.com/photos/jackketcham/27509994542/',
				cc_author_url: 'https://www.flickr.com/photos/jackketcham/',
				cc_author: 'Jack Ketcham',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'phoenix-13',
				carouselId: 'greater-phoenix-attractions',
				itineraryCarousel: null,
				attraction: 'Tonto National Monument',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Phoenix-Tonto-National-Monument.jpg',
				image_alt:
					'Stunning Native American cliff dwellings in a cactus-covered alcove of Tonto National Monument outside Phoenix, Arizona',
				cc_image_url: 'https://www.flickr.com/photos/snowpeak/8556701403/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'phoenix-17',
				carouselId: 'greater-phoenix-attractions',
				itineraryCarousel: null,
				attraction: 'Weavers Needle (Peralta Trail)',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Phoenix-Peralta-Trail-Weavers-Needle.jpg',
				image_alt:
					"Stunning Weavers Needle formation towering above the valley along Gold Canyon's Peralta Trail in the Superstition Mountains",
				cc_image_url: 'https://www.flickr.com/photos/neepster/1431117222/',
				cc_author_url: 'https://www.flickr.com/photos/neepster/',
				cc_author: 'Chris J',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	sedona: {
		id: 'sedona',
		itineraries: 'arizona, ut-az',
		destinationName: 'Sedona',
		stateName: 'Arizona',
		region: 'usa',
		anchor_tag: 'sedona-arizona',
		destination_link: '/destinations/arizona/sedona-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/opJLp8eD2Gz',
			all_attractions: 'https://goo.gl/maps/5nnLeBhjuoy'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Sedona Attractions',
				tab_content: `<p>This beautiful city in Northern Arizona is surrounded by striking red rock scenery and formations in every direction with countless opportunities for hiking and outdoor activities. The city of Sedona is very lovely and features many great restaurants, resorts, and art galleries, as well as many interesting shops selling unique decorations, art, crystals, and new age/metaphysical items.</p>
                <p>The city hosts the Chapel of the Holy Cross, a church aesthetically built into the red rock cliffs offering gorgeous panoramic views, as well as the Amitabha Stupa Buddhist shrine. The Sedona area hosts several spots which are said to be energy vortexes, including the Airport Mesa Vortex (which offers striking views) and the Boynton Pass Vortex.</p>`
			},
			{
				tab_title: 'Hiking Trails',
				tab_content: `<p>Just south of Sedona are several breathtaking red rock formations you can hike, including Bell Rock, the Courthouse Butte, and Cathedral Rock. Northwest of Sedona you’ll find an incredible array of amazing red rock hikes, including the Soldier Pass, Bear Mountain, and the iconic Devil’s Bridge Trail.</p>
                <p>North of Sedona is Oak Creek Canyon, which hosts the long smooth natural water slides of Slide Rock State Park, as well as the mesmerizing West Fork Trail. South of Sedona is the famous Montezuma Castle, an extraordinary pre-Colombian Native American cliff dwelling.</p>`
			}
		],
		attractions: [
			{
				id: 'sedona-2',
				carouselId: 'sedona-city-and-airport-mesa',
				itineraryCarousel: null,
				attraction: 'Chapel of the Holy Cross',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Sedona-Chapel-of-the-Holy-Cross.jpg',
				image_alt:
					'Looking up at the stunning cross-shaped wall of the Chapel of the Holy Cross built into the red rock above Sedona',
				cc_image_url: 'https://www.flickr.com/photos/29237715@N05/6427152117/',
				cc_author_url: 'https://www.flickr.com/photos/29237715@N05/',
				cc_author: 'Noel Reynolds',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'sedona-8',
				carouselId: 'bell-rock-cathedral-rock-devils-bridge',
				itineraryCarousel: null,
				attraction: 'Cathedral Rock',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Sedona-Cathedral-Rock.jpg',
				image_alt:
					'Cloudy day view of the Cathedral Rock butte behind tiny red rock waterfalls along a hiking trail in the Sedona, Arizona',
				cc_image_url: 'https://www.flickr.com/photos/snowpeak/5601206171/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'sedona-1',
				carouselId: 'sedona-city-and-airport-mesa',
				itineraryCarousel: null,
				attraction: 'Sedona Main Street',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Sedona-Downtown-Sedona.jpg',
				image_alt:
					"Shops lining Sedona's Main Street beneath scenic red rock cliffs and formations",
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Sedona_RedRock_Street.JPG&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Sedona_RedRock_Street.JPG&action=history',
				cc_author: 'Jpatokal',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'sedona-10',
				carouselId: 'bell-rock-cathedral-rock-devils-bridge',
				itineraryCarousel: null,
				attraction: "Devil's Bridge",
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Sedona-Devils-Bridge.jpg',
				image_alt:
					"Hikers walking atop the famous Devil's Bridge natural red rock bridge formation near Sedona, Arizona",
				cc_image_url: 'https://www.flickr.com/photos/126896828@N05/30893343653/',
				cc_author_url: 'https://www.flickr.com/photos/126896828@N05/',
				cc_author: 'Brad Fagan',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},
			{
				id: 'sedona-4',
				carouselId: 'sedona-city-and-airport-mesa',
				itineraryCarousel: null,
				attraction: 'Airport Mesa Vortex',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Sedona-Airport-Mesa-Vortex-View.jpg',
				image_alt:
					"View over famous buttes of Sedona including Bell Rock and Courthouse Butte from atop Sedona's Airport Mesa Vortex",
				cc_image_url:
					'https://pixabay.com/en/sedona-arizona-landscape-desert-436739/',
				cc_author_url: 'https://pixabay.com/en/users/SoCali-274252/',
				cc_author: 'SoCali',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'sedona-19',
				carouselId: 'oak-creek-and-montezuma-castle',
				itineraryCarousel: null,
				attraction: 'Montezuma Castle National Monument',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Sedona-Montezuma-Castle-National-Monument.jpg',
				image_alt:
					'Looking up at the famous Native American cliff dwellings of Montezuma Castle National Monument near Sedona, Arizona',
				cc_image_url: 'https://www.flickr.com/photos/azchristopher/107748516/',
				cc_author_url: 'https://www.flickr.com/photos/azchristopher/',
				cc_author: 'Christopher Patterson',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},
			{
				id: 'sedona-14',
				carouselId: 'west-sedona-hikes',
				itineraryCarousel: null,
				attraction: 'Fay Canyon Trail',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Sedona-Fay-Canyon-Trail.jpg',
				image_alt:
					'Golden hour colors glowing the canyon walls above the Fay Canyon hiking trail in Sedona, Arizona',
				cc_image_url: 'https://www.flickr.com/photos/dsoltesz/3294448162/',
				cc_author_url: 'https://www.flickr.com/photos/dsoltesz/',
				cc_author: 'Deborah Lee Soltesz',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	south_rim_grand_canyon: {
		id: 'south_rim_grand_canyon',
		itineraries: 'arizona, ut-az',
		destinationName: 'South Rim Grand Canyon',
		stateName: 'Arizona',
		region: 'usa',
		anchor_tag: 'south-rim-grand-canyon-arizona',
		destination_link:
			'/destinations/arizona/south-rim-grand-canyon-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/k3UJPYKcAZL2',
			all_attractions: 'https://goo.gl/maps/gqxrm3hnHPT2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'West Viewpoints',
				tab_content: `<p>The South Rim of the Grand Canyon is the main tourist destination within the massive Grand Canyon National Park. This area is very well-developed and features over 20 miles (32 km) of easily accessible viewpoints along the rim, each one offering a different perspective.</p>
                <p>At the western entrance to the park is Grand Canyon Village, a small town located along the rim hosting hotels, camping, restaurants, and the visitor center, as well as the park’s most popular and easily-accessible viewpoints, Mather Point and Yavapi Point.</p>`
			},
			{
				tab_title: 'Hiking Trails',
				tab_content: `<p>Amongst the densely clustered skyscrapers of Downtown South Rim Grand Canyon National Park is the historic Gaslamp District, which hosts excellent restaurants and nightlife, along with many boutiques. Also Downtown is a retired aircraft-carrier the USS Midway, which now serves as a museum. In the hills above Downtown is the lovely Balboa Park hosting many museums and the famous South Rim Grand Canyon National Park Zoo.</p>`
			},
			{
				tab_title: 'East Viewpoints',
				tab_content: `<p>Northwest of Downtown you can explore the well-preserved 19th century structures of the Old Town South Rim Grand Canyon National Park State Historic Park. Enjoy amazing views of the rugged coastline as well as views high above the South Rim Grand Canyon National Park Bay from Point Loma. Be sure to also hike along the scenic cliffs at Sunset Cliffs Natural Park near Point Loma and Torrey Pines State Reserve north of La Jolla.</p>`
			}
		],
		attractions: [
			{
				id: 'south-rim-grand-canyon-9',
				carouselId: 'grand-canyon-western-viewpoints',
				itineraryCarousel: null,
				attraction: 'Ooh Aah Point (South Kaibab Trail)',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-South-Rim-Grand-Canyon-National-Park-Ooh-Aah-Point.jpg',
				image_alt:
					"Stunning wide views over the Grand Canyon from Ooh Aah Point seen along the South Rim's South Kaibab Trail",
				cc_image_url: 'https://www.flickr.com/photos/nasonurb/6247654391/',
				cc_author_url: 'https://www.flickr.com/photos/nasonurb/',
				cc_author: 'Bruno S.-Andrade Nuno',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'south-rim-grand-canyon-6',
				carouselId: 'grand-canyon-western-viewpoints',
				itineraryCarousel: null,
				attraction: 'Hopi Point',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-South-Rim-Grand-Canyon-National-Park-Hopi-Point.jpg',
				image_alt:
					'Far-reaching golden hour views overlooking the South Rim of Grand Canyon National Park from Hopi Point',
				cc_image_url: 'https://www.flickr.com/photos/58869428@N05/7860582268/',
				cc_author_url: 'https://www.flickr.com/photos/58869428@N05/',
				cc_author: 'Todd Petrie',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'south-rim-grand-canyon-16',
				carouselId: 'grand-canyon-eastern-viewpoints',
				itineraryCarousel: null,
				attraction: 'Desert View Watchtower',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-South-Rim-Grand-Canyon-National-Park-Desert-View-Watchtower.jpg',
				image_alt:
					"Multi-story brick-built Desert View Watchtower beside the cliffs of the Grand Canyon's South Rim with sweeping views",
				cc_image_url:
					'https://www.flickr.com/photos/jeffhollettvancouverwa/8690088219/',
				cc_author_url: 'https://www.flickr.com/photos/jeffhollettvancouverwa/',
				cc_author: 'Jeff Hollett',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'south-rim-grand-canyon-12',
				carouselId: 'grand-canyon-eastern-viewpoints',
				itineraryCarousel: null,
				attraction: 'Grandview Point',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-South-Rim-Grand-Canyon-National-Park-Grandview-Point.jpg',
				image_alt:
					'Incredible views seen from Grandview Point along the South Rim of Grand Canyon National Park in Arizona',
				cc_image_url: 'https://www.flickr.com/photos/jared422/35573708772/',
				cc_author_url: 'https://www.flickr.com/photos/jared422/',
				cc_author: 'Jared',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'south-rim-grand-canyon-1',
				carouselId: 'grand-canyon-village',
				itineraryCarousel: null,
				attraction: 'Mather Point',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-South-Rim-Grand-Canyon-National-Park-Mather-Point.jpg',
				image_alt:
					"Famous Mather Point view overlooking the Grand Canyon's South Rim at Grand Rim Village",
				cc_image_url:
					'https://www.flickr.com/photos/grand_canyon_nps/5446230979/',
				cc_author_url: 'https://www.flickr.com/photos/grand_canyon_nps/',
				cc_author: 'Grand Canyon National Park',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},

	bodie_mono: {
		id: 'bodie_mono',
		itineraries: '',
		destinationName: 'Bodie & Mono County',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'bodie-and-lake-mono-california',
		destination_link:
			'/destinations/california/bodie-and-mono-county-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/Wy3dYxfuhi42'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Bodie & Mono Lake',
				tab_content: `<p>Mono County is located on the eastern side of the Sierra Nevada Mountains, adjacent to the gorgeous Tuolumne Meadows district of Yosemite National Park. Within this county is the largest and best-preserved Western ghost town in the United States, Bodie State Historic Park. Nearby is the beautiful Mono Lake, an alkali lake with otherworldly tufa tower formations that you can explore.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Mono County also hosts the beautiful ski resort town of Mammoth Lakes, which hosts excellent hiking in the warmer months, including the Devils Postpile National Monument, a landscape of strange geometric columnar cliffs set amongst alpine forests and waterfalls. Also of interest near Mammoth Lakes is the stunning geothermal Hot Creek Geological Site, which is located within a small canyon.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Mono Lake South Tufa',
				image_url:
					'https://www.travelimager.com/images/california/California-Mono-County-Mono-Lake-South-Tufa.jpg',
				image_alt:
					'Stunning tufa structures sticking out of the water at sunset seen along the South Tufa trail at Mono Lake',

				cc_image_url: 'https://www.flickr.com/photos/anikki/8818528692/',
				cc_author_url: 'https://www.flickr.com/photos/anikki/',
				cc_author: 'Gerold Schneider',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Bodie Ghost Town',
				image_url:
					'https://www.travelimager.com/images/california/California-Mono-County-Bodie-Ghost-Town.jpg',
				image_alt:
					'Hundreds of old abandoned wooden structures amongst the rolling hills of Bodie State Historic Park Ghost Town in Mono County',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: "Devil's Postpile National Monument",
				image_url:
					'https://www.travelimager.com/images/california/California-Mono-County-Devils-Postpile-National-Monument.jpg',
				image_alt:
					"Stunning geometric columnar cliffs of the Devil's Postpile National Monument near Mammoth Lakes",

				cc_image_url: 'https://www.flickr.com/photos/135476354@N02/34116264842/',
				cc_author_url: 'https://www.flickr.com/photos/135476354@N02/',
				cc_author: 'Everett Carrico',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Hot Creek Geological Site',
				image_url:
					'https://www.travelimager.com/images/california/California-Mono-County-Hot-Creek-Geological-Site.jpg',
				image_alt:
					'Light blue geothermal waters of Hot Creek beside a dark blue river in a canyon near Mammoth Lakes',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	coachella_valley: {
		id: 'coachella_valley',
		itineraries: '',
		destinationName: 'Coachella Valley & Palm Springs',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'coachella-valley-california',
		destination_link:
			'/destinations/california/coachella-valley-and-palm-springs-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/PLPgxFXgjkE2',
			all_attractions: 'https://goo.gl/maps/dzfPjd3h1J22'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Palm Canyon Trail',
				image_url:
					'https://www.travelimager.com/images/california/California-Palm-Springs-Coachella-Valley-Palm-Canyon-Trail.jpg',
				image_alt:
					'Dense palm trees clustered around a small oasis in a small canyon surrounded by desolate desert hill in Palm Springs',

				cc_image_url: 'https://www.flickr.com/photos/brian-m/297862034/',
				cc_author_url: 'https://www.flickr.com/photos/brian-m/',
				cc_author: '((brian))',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Palm Springs Aerial Tramway',
				image_url:
					'https://www.travelimager.com/images/california/California-Palm-Springs-Coachella-Valley-Palm-Springs-Aerial-Tramway.jpg',
				image_alt:
					'Palm Springs Aerial Tramway goinh up to Mt. San Jacinto high above the desert floor of the Coachella Valley from Palm Springs',

				cc_image_url:
					'https://www.flickr.com/photos/glendagilreathgallery/40012340602/',
				cc_author_url: 'https://www.flickr.com/photos/glendagilreathgallery/',
				cc_author: 'Glenda Gilreath Gallery',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Salvation Mountain',
				image_url:
					'https://www.travelimager.com/images/california/California-Palm-Springs-Coachella-Valley-Salvation-Mountain.jpg',
				image_alt:
					'Famous painted hills of Salvation Mountain located near the Salton Sea in the Coachella Valley',

				cc_image_url: 'https://www.flickr.com/photos/wakingmagenta/6790174800/',
				cc_author_url: 'https://www.flickr.com/photos/wakingmagenta/',
				cc_author: 'Brie Grometer',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Painted Canyon Trail (Mecca)',
				image_url:
					'https://www.travelimager.com/images/california/California-Palm-Springs-Coachella-Valley-Painted-Canyon-Trail-Mecca.jpg',
				image_alt:
					'Striking red rock slot canyons around the Painted Canyon Trail near the Caochella Valley town of Mecca',

				cc_image_url: 'https://www.flickr.com/photos/banduki/15787660247/',
				cc_author_url: 'https://www.flickr.com/photos/banduki/',
				cc_author: 'Chetan Kolluri',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			}
		]
	},

	death_valley: {
		id: 'death_valley',
		itineraries: '',
		destinationName: 'Death Valley National Park',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'death-valley-national-park-california',
		destination_link:
			'/destinations/california/death-valley-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/97VhDRHsVN22',
			all_attractions: 'https://goo.gl/maps/mrdtcsmJRTo',
			custom_attractions_1: 'https://goo.gl/maps/8VL6g5kd4eJ2',
			custom_attractions_1_text: '4x4 Attractions'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Mesquite Flat Sand Dunes',
				image_url:
					'https://www.travelimager.com/images/california/California-Death-Valley-National-Park-Mesquite-Flat-Sand-Dunes.jpg',
				image_alt:
					'Sahara-like sand dunes known as the Mesquite Flat Sand Dunes surrounded by desert mountains in Death Valley National Park',

				cc_image_url:
					'https://www.flickr.com/photos/29198100@N00/5554374255/in/photolist-9sPBXn-dYyLiF-dMWRxZ-4yvwWS-ePotWv-dYEtib-bYT2Eu-4yvwXs-hr94z7-hracJk-rw25m5-okzRQf-rcNju4-ePotKe-kDqHeW-dJnSL3-kDp6kT-rw1xxa-7Lz8Qs-dJhBq6-rtPXNd-XTzj1w-dJhr3z-hraaqm-kDqJ2N-dJhALg-VXsaho-9sPzGt-ePougT-fuFmAG-9sSzW9-rtPRGW-kDqFbh-reEKCg-9Qj4WT-reEF3e-dJo4gN-9sSB77-dYEv59-Djayqo-rw1uTn-rw1sNa-rw1Bu8-rw1Y7b-rexb4W-pVzrTk-dYEtPN-rw7zTe-ePzTGA-rw1XSy/',
				cc_author_url: 'https://www.flickr.com/photos/29198100@N00/',
				cc_author: 'Gabriel Millos',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: "Dante's View",
				image_url:
					'https://www.travelimager.com/images/california/California-Death-Valley-National-Park-Dantes-View.jpg',
				image_alt:
					"View overlooking the vast flat desert of Death Valley surrounded by tall barren mountains from Dante's View",

				cc_image_url:
					'https://www.flickr.com/photos/naparish/2426564750/in/photolist-4GqMah-9RP18W-96wD2Z-9AA9oq-UKXaVP-tvcsMq-96wDzk-eiUtfx-9Axecn-9AA9eh-9Axe2P-DjvbSn-kDoMVH-5YddRB-o3WAtK-9Axe6D-6itsyL-8922Ji-Cvw1fP-GKDXyb-F1PRHA-BFqGrn-CAvmvA-7UBxfi-C8ZLvZ-aynZsw-7pe7aB-CAuEi1-5Bgo5s-CCPk12-CvxwYR-7UBwkX-CfnAB1-7UBvsT-e9p9Xa-7UBsye-gSNfRe-9uUHdh-7Kz6VE-aqoFGy-CGuVhH-5YhCqw-e9p9Sv-9RL5R6-5YhfnS-fG1med-dpcDBc-fG1mP9-dpcEat-C8WfjJ',
				cc_author_url: 'https://www.flickr.com/photos/naparish/',
				cc_author: 'NAParish',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Badwater Basin',
				image_url:
					'https://www.travelimager.com/images/california/California-Death-Valley-National-Park-Badwater-Basin.jpg',
				image_alt:
					"Geometric structures on the ground created by dried salt along Death Valley National Park's famous Badwater Basin",

				cc_image_url:
					'https://www.flickr.com/photos/npelletier_photography/14591330872/in/photolist-oeoojd-7RgL2B-7Rk2Rq-BBevbx-avVJLp-8HkUuy-5BzdfM-4GqyEs-aynRaU-8b2FdT-69d4my-7RgL5r-9uGgTC-bAhqyx-5YhDwf-9uDgJe-nLAfqa-e1XW3f-9uGhpC-eZnc3y-e1Ydgu-rPQZdS-idnyux-e1SyQX-kDoUQ4-3Nvqd-e1XVbd-kDoiZp-e1Sxxt-nLztW1-o5R6Kx-o3Xcau-e1SgRX-aynTR5-e1XVk1-pMfgd2-oC9mjS-e1YbT1-q4NFFy-5fubGf-pMkhQb-9KnewC-7JJXCy-8E9nnL-WBibSf-diPpz8-VkKi5Z-jskzkK-98XnpB-VBEzcr',
				cc_author_url: 'https://www.flickr.com/photos/npelletier_photography/',
				cc_author: 'Nick Pelletier',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Zabriskie Point',
				image_url:
					'https://www.travelimager.com/images/california/California-Death-Valley-National-Park-Zabriskie-Point.jpg',
				image_alt:
					"Picturesque view over the complex landscape of countless multi-colored desert ridges seen from Death Valley's Zabriskie Point",

				cc_image_url:
					'https://www.flickr.com/photos/dennisredfield/2501766947/in/photolist-4P5d9T-o5YrMt-cxmnRb-UPw7Sd-7UEWEd-nZeMVz-9mY38L-f1V3uE-9RL5NV-7UEQZs-59jQX3-4wiksV-f1EQwk-4P9y9N-3Nvrd-7JwK1N-4P516B-96zGCL-4P9wiw-DTCKYt-8QnyWf-59jQUW-d3cGEL-22tN7Tt-7UBBzF-4yQciX-DGSkKg-f1EHuD-aZWWMt-4P54rP-49v97h-b2ZmgV-ax8Hbe-4FXrwf-7mySX7-c5ZUi3-b3anf4-qkVDJr-tzztUd-aZVA6F-b3ao94-7UEPhw-q4NGEs-4yUu9b-7DxHDR-aZVBGV-247Zeia-5YhzJ9-ctYy1f-Z3hYhv/',
				cc_author_url: 'https://www.flickr.com/photos/dennisredfield/',
				cc_author: 'The Real Cloud2013',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: "Artist's Palette",
				image_url:
					'https://www.travelimager.com/images/california/California-Death-Valley-National-Park-Artists-Palette.jpg',
				image_alt:
					"Stunning pastel-colored hilly landscape of the Artist's Palette with unreal natural colors in Death Valley National Park",

				cc_image_url:
					'https://www.flickr.com/photos/exquisitur/2549412359/in/photolist-VzBr3V-26Cqn58-Jw3kgU-26qNxaB-fG1j3m-adjTHr-8nFmDF-8RMdM5-4Thptv-5YiPkb-TfK3nx-5YiZg1-VzBrdK-8nJtpf-eCjEis-jQ3fuF-7RgKWX-2y7cK-7RgKVg-VzBr7c-6ZuUSZ-8APRcy-qWtsyv-ZDByHu-BNyvz',
				cc_author_url: 'https://www.flickr.com/photos/exquisitur/',
				cc_author: 'Jason Hickey',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Racetrack Playa (4x4 Only)',
				image_url:
					'https://www.travelimager.com/images/california/California-Death-Valley-National-Park-Racetrack-Playa-Sailing-Stones.jpg',
				image_alt:
					'Sailing rocks seen along the extremely dry cracked flat desert landscape of the famous Racetrack Playa in Death Valley',

				cc_image_url:
					'https://www.flickr.com/photos/yenchao/9071122528/in/photolist-ePzSGh-5QisRz-ePzSNj-ePosPx-9Ak5Pt-ePzSEo-F8j5Xi-7TQ2tz-SjcpeB-788fA9-ePzSWJ-nZ7VJB-vNY3r-ePosJM-ePzSrf-ePzSXQ-7HTrd-9AkkCe-5QnJDW-ePzT2s-ePzSd1-899JH-7TTfqY-vPfEz-vPdPm-vNWJ2-8rpXG2-ePzSs5-vNWWF-5QipTt-vNWg5-vNKjX-vNV3J-GHJqy1-vNYSq-ePot5X-ePzSQs-vNXyB-nWoDcr-dSNXsz-vNVYf-vPh1R-8rpXHF-vPgxP-vP3k7-8rpXCV-vP7g2-vNVgd-vNZbG-bucrR5',
				cc_author_url: 'https://www.flickr.com/photos/yenchao/',
				cc_author: 'Chao Yen',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			}
		]
	},

	joshua_tree: {
		id: 'joshua_tree',
		itineraries: '',
		destinationName: 'Joshua Tree National Park',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'joshua-tree-national-park-california',
		destination_link:
			'/destinations/california/joshua-tree-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/nm83VuKP2wn',
			all_attractions: 'https://goo.gl/maps/bEMBqtiJYMD2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Joshua Tree N.P. Attractions',
				tab_content: `<p>Located approximately 2 to 3 hours away from Los Angeles and San Diego is Joshua Tree National Park, which is named for the many unusual-looking Joshua trees spread out over the landscape.</p>
                <p>This national park is located across several desert valleys surrounded by tall desolate mountains, with many stunningly beautiful rocky areas spread throughout this extremely scenic national park. Joshua Tree also hosts many amazing short hiking trails such as the Hidden Valley Nature Trail and Barker Dam Nature Trail, as well as striking rock formations, such as Skull Rock, Face Rock, and Arch Rock.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Skull Rock',
				image_url:
					'https://www.travelimager.com/images/california/California-Joshua-Tree-National-Park-Skull-Rock.jpg',
				image_alt:
					'Iconic skull-shaped Skull Rock formation seen at golden hour in the desert of Joshua Tree National Park',

				cc_image_url:
					'https://www.flickr.com/photos/joshuatreenp/12489691874/in/album-72157640900898473/',
				cc_author_url: 'https://www.flickr.com/photos/joshuatreenp/',
				cc_author: 'Joshua Tree National Park',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Hidden Valley Nature Trail',
				image_url:
					'https://www.travelimager.com/images/california/California-Joshua-Tree-National-Park-Hidden-Valley-Nature-Trail.jpg',
				image_alt:
					'Many striking rock formations seen along the beautiful Hidden Valley Nature Trail of Joshua Tree National Park',

				cc_image_url:
					'https://www.flickr.com/photos/diversey/16785369403/in/photolist-rzgpwK-bz9Rfz-bmeZdC-qhHwku-cab3JU-25sZRkj-9BHXEd-rSwULr-rzXaPE-ryd8an-k5TzeS-FSBJXD-FSBMMB-RcQFBL-HoXd1w-RcQGt5-25t18UG-9BHYF7-24s5yjw-9BJ1DS-SfHrzJ-FSBipV-qzcNBY-HoXhqJ-RfxWnx-Sijt5V-nCM1s7-5Dq8Ak-RfxXCt-SfHxVQ-RcUnbj-HoXbYS-25t19vb-24s5hxw-698sZH-Suz85H-e7h9HG-9BHXbw-qzcx3G-24s5wfw-k5QZT8-SfHosm-25t18af-e7h9vL-FSBBBr-9BF4Yn-22LSFvY-FSBKxM-FSBhh4-25sZMfq',
				cc_author_url: 'https://www.flickr.com/photos/diversey/',
				cc_author: 'Tony Webster',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Barker Dam Nature Trail',
				image_url:
					'https://www.travelimager.com/images/california/California-Joshua-Tree-National-Park-Barker-Dam-Nature-Trail.jpg',
				image_alt:
					'Small lake surrounded by complex rock formations seen along the Barker Dam Nature Trail of Joshua Tree National Park',

				cc_image_url:
					'https://www.flickr.com/photos/joshuatreenp/25141335388/in/album-72157640980059643/',
				cc_author_url: 'https://www.flickr.com/photos/joshuatreenp/',
				cc_author: 'Joshua Tree National Park',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Cholla Cactus Garden',
				image_url:
					'https://www.travelimager.com/images/california/California-Joshua-Tree-National-Park-Cholla-Cactus-Garden.jpg',
				image_alt:
					"Close-up view if the countless beautiful cacti at Joshua Tree National Park's Cholla Cactus Garden",

				cc_image_url:
					'https://www.flickr.com/photos/oliverdodd/39672527820/in/photolist-23rJ5mm-4xUe64-9J4Da6-SyVAuX-aucN4z-Hkrgbe-24JbsDy-23VS7oz-RUNPCj-9JzCYU-r898fT-24aDESt-TNQWra-wjSjse-23b8Wqm-23VS8ni-Q1A6vG-9AKwSg-q5URb-3ijn8-NvLy-TNQSc8-q5UKZ-nAXX3q-8HbZt-EHhqVY-q5UMH-9AKw4n-9LaCEt-8syDEj-q5UJv-9JwRfi-HmDs3s-vkKX1T-6owodB-k5R9nm-k5R9BE-k5NF8r-rpAZ9P-rpB31R-aXAW6Z-qsPdvn-qsAWwo-TyPKTu-dYdajL-oho6aj-aucMJK-aufsf1-9J7tyW-9J7uJb',
				cc_author_url: 'https://www.flickr.com/photos/oliverdodd/',
				cc_author: 'oliver.dodd',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Face Rock',
				image_url:
					'https://www.travelimager.com/images/california/California-Joshua-Tree-National-Park-Face-Rock.jpg',
				image_alt:
					'Lesser-known Face Rock formation resembling the side-profile of a human face, located in Joshua Tree National Park',

				cc_image_url:
					'https://www.flickr.com/photos/joshuatreenp/16837100661/in/album-72157663628598220/',
				cc_author_url: 'https://www.flickr.com/photos/joshuatreenp/',
				cc_author: 'Joshua Tree National Park',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	lake_tahoe: {
		id: 'lake_tahoe',
		itineraries: '',
		destinationName: 'Lake Tahoe',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'lake-tahoe-california',
		destination_link: '/destinations/california/lake-tahoe-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/nVF9diXmT552',
			all_attractions: 'https://goo.gl/maps/hnSCSjTtQ2K2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Lake Tahoe Attractions',
				tab_content: `<p>Lake Tahoe is a magnificent alpine lake set amongst the vast forests of the Sierra Nevada Mountains. This massive lake sits along the border of California and Nevada, and the area around the lake offers many different types of activities year-round. In the summer there's great hiking opportunities, as well as beautiful beaches offering swimming and kayaking. In the winter the area offers countless ski resorts to experience.</p>
                <p>South Lake Tahoe is the main city on the lake and hosts many accommodations and dining options. The city sits on the border with Stateline, Nevada, which hosts four mega-casinos within walking distance of the Heavenly Village ski lift. On the southwestern side of the lake is the picturesque Emerald Bay State Park, which offers excellent hiking opportunities, as well as breathtaking scenery.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Sand Harbor Beach',
				image_url:
					'https://www.travelimager.com/images/california/California-Lake-Tahoe-Sand-Harbor.jpg',
				image_alt:
					"Gorgeous blue-green-yellow waters of Nevada's Sand Harbor Beach along Lake Tahoe on the border of Northern California",

				cc_image_url:
					'https://www.flickr.com/photos/23155134@N06/30116857730/in/photolist-MTjLxL-a1cyae-oD7kfR-a1fpmW-a1cvpg-FTnLyg-a1cxsF-a1cuWR-a1fnws-oaGkKP-ka61GP-pcuews-rQK1GH-ryhK2B-ciKafU-rtNPRG-5Gru8m-5GncmX-5GruvY-aY5YU-5GrusA-ESH4Ue-oCpfcU-a1fq3Y-a1cvCV-a1fmkU-a1fmv5-a1focA-pS3w1x-k8y9ZP-XeuyGJ-5GncPe-k8A4Bw-ka7tqC-jAMc4-SjpZHn-ka5LTg-jAMhh-V2DGvP-5iXgT5-oaFocB-oGCj4H-MKCtcN-jAMBF-jAMp3-jAMx1-qAT1Xc-q9sjaN-pRWoeb-a1cwp8',
				cc_author_url: 'https://www.flickr.com/photos/23155134@N06/',
				cc_author: 'Don Graham',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Bonsai Rock',
				image_url:
					'https://www.travelimager.com/images/california/California-Lake-Tahoe-Bonsai-Rock.jpg',
				image_alt:
					'Famous Bonsai Rock rising high out of the water along the coast of Lake Tahoe with small Bonsai-like tree',

				cc_image_url:
					'https://www.flickr.com/photos/trevorbexon/16729461330/in/photolist-7SQnGk-VMmTeu-dJWL3n-CoHqbC-cLKtgb-D2E3yN-rujS1s-EoqS9N-rewvZF-JSRabe-dFSVxy-C1zup7-wYdXWq/',
				cc_author_url: 'https://www.flickr.com/photos/trevorbexon/',
				cc_author: 'Trevor Bexon',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Eagle Lake (Emerald Bay)',
				image_url:
					'https://www.travelimager.com/images/california/California-Lake-Tahoe-Eagle-Lake.jpg',
				image_alt:
					"Trail view of beautiful little Eagle Lake hidden behind trees surrounded by mountains at Lake Tahoe's Emerald Bay State Park",

				cc_image_url:
					'https://www.flickr.com/photos/125665181@N05/15107369549/in/photolist-p1ZdCM-8PjQYD-2r19A-8kJQip-dmKDzm-dmKDFw-dmKDbC-dmKD47-rGjFvJ-LSoRj9-3hH2kq-3hCCFF-Z5Nb9Y-Z4jmeJ-C2sqHQ-Z4jgXh-4HvLj4-UJHXBW-ZiGMzA-Z4cEsG-YgK6bQ-txvess-XAKdJP-XcTwXU-WxFxja-LEDe8f-Lya17U-7yQiv7-WJy7n6-7SyA8r-7SyAtR-s2BHgD-VD1g7Q-V4W79o-sbVCyB-MuNXRo-b8Ge18-aHaK74-ev6egJ-evbGkp-QvVvWH-rSNSef-twHfzm-rFMgqF-aHsfGk-7xrsh6-qeNvzm-5syFYL-bEvWkg-sejnAK',
				cc_author_url: 'https://www.flickr.com/photos/125665181@N05/',
				cc_author: 'Adam Braziel',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Stateline, Nevada',
				image_url:
					'https://www.travelimager.com/images/california/California-Lake-Tahoe-Stateline-Nevada-Casinos-Mountain-View.jpg',
				image_alt:
					'Stunning sunset view overlooking the towering casinos of Stateline, Nevada in front of Lake Tahoe and snow-covered mountains',

				cc_image_url: 'https://www.flickr.com/photos/42642437@N08/14260990783',
				cc_author_url: 'https://www.flickr.com/photos/42642437@N08/',
				cc_author: 'Reno Tahoe Territory',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Nevada Beach',
				image_url:
					'https://www.travelimager.com/images/california/California-Lake-Tahoe-Nevada-Beach.jpg',
				image_alt:
					'Looking down the shoreline of beautiful Nevada Beach at Lake Tahoe',

				cc_image_url:
					'https://www.flickr.com/photos/wildlasvegas/5959531846/in/photolist-a5Cac5-pW8bVz-eeFDdR-7ipcZw-ZftT9a-4W3uxF-RCaFwH-73jTpH-Yeif9V-7ikhGP-jGbji3-EVKeN1-jG93Dx-oGCj4H-54isd4-8eaLEt-QSqLQQ-NLr4n-R5H71o-6thxtB-eeFEVz-aY5Zz-jG9VZX-EoETPB-3Tu47D-asijuE-94SB5U-3LQ8Sn-jG7jMu-eeFCKr-6Nk7A4-5mvhhg-zDBYr-eh1dGj-9AkkCe-du34dP-eeMpV5-fz7VqA-rQC4DL-8ebfK8-8xvxxx-8ee3td-8ebgma-gSfZJc-EPjq2A-jefwu-4kaSsZ-akjyav-dTvZye-XtNNEV',
				cc_author_url: 'https://www.flickr.com/photos/wildlasvegas/',
				cc_author: 'Andrew',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Emerald Bay State Park',
				image_url:
					'https://www.travelimager.com/images/california/California-Lake-Tahoe-Emerald-Bay-State-Park.jpg',
				image_alt:
					"Overlooking boats and a small island in Lake Tahoe's Emerald Bay from high above",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	lassen: {
		id: 'lassen',
		itineraries: '',
		destinationName: 'Lassen National Park & Mt. Shasta Waterfalls',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'lassen-national-park-and-mt-shasta-california',
		destination_link:
			'/destinations/california/lassen-national-park-and-mt-shasta-waterfalls-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/SHUQ67J7yV62',
			all_attractions: 'https://goo.gl/maps/Furfj9b4tL42'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Waterfalls',
				tab_content: `<p>This area of Northern California near Oregon is home to several gorgeous waterfalls, including one which many claim is among the state's most beautiful waterfalls, Mossbrae Falls. Nearby you can visit the stunning Burney Falls as well as the various waterfalls along the McCloud River. While driving along this route you'll be able to take in excellent views of Mt. Shasta, which towers high above the surrounding landscape.</p>`
			},
			{
				tab_title: 'Lassen National Park',
				tab_content: `<p>The southern portion of this route passes through Lassen Volcanic National Park. This national park hosts the popular Bumpass Hell Trail, which traverses through an incredible geothermal environment reminiscent of Yellowstone National Park. Lassen also hosts the Subway Cave Lava Tubes you can explore, as well as the breathtaking vivid landscape known as the Painted Dunes, which sits below the Cinder Cone volcanic crater.</p>
                <p>To the south of Lassen National Park in the city of Chico is the famous Sierra Nevada Brewery.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Mossbrae Falls',
				image_url:
					'https://www.travelimager.com/images/california/California-Shasta-Trinity-National-Forest-Dunsmuir-Mossbrae-Falls.jpg',
				image_alt:
					'Stunningly beautiful Mossbrae Falls flowing over wide mossy green walls in Dunsmuir, Northern California near Mt. Shasta',

				cc_image_url:
					'https://www.flickr.com/photos/darkdenver/28483027055/in/photolist-KoWXBn-7nRbqb-ddcRN5-8copUw-4R6LQR-bbyREn-bbyRc4-bbyz6p-i5SXV1-9FqujX-d7kEjC-bbyeAk-bbytzg-8cooJj-bbycmF-bbyg5g-bbyaZT-bbxYVv-bbyacK',
				cc_author_url: 'https://www.flickr.com/photos/darkdenver/',
				cc_author: 'Steven Bratman',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Burney Falls',
				image_url:
					'https://www.travelimager.com/images/california/California-Shasta-Trinity-National-Forest-Burney-Falls.jpg',
				image_alt:
					'Gorgeous towering waterfalls of Burney Falls flowing over a giant green cliff into a vibrant blue pool',

				cc_image_url: 'https://www.flickr.com/photos/montpelier/4065122622',
				cc_author_url: 'https://www.flickr.com/photos/montpelier/',
				cc_author: 'Miles Sabin',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Bumpass Hell Trail',
				image_url:
					'https://www.travelimager.com/images/california/California-Lassen-Volcanic-National-Park-Bumpass-Hell-Trail.jpg',
				image_alt:
					'Overlooking a Yellowstone-like geothermal valley along the Bumpass Hell Trail at Lassen Volcanic National Park',

				cc_image_url:
					'https://www.flickr.com/photos/ddebold/7641336674/in/photolist-cDeRb3-cDeQgu-cxJwjj-dffRw8-dffUFX-cDeMeW-dffUvV-dffRMX-cDeLtb-dffTya-dffUHL-dffVT5-cZXzid-cDeLXU-5b7uMh-6YnAT-dffVuv-cZXMdh-cZXGPN-54B7h-cZXCGE-cZXPhj-cZXxhy-cZXuwu-os2pf2-ouVBWN-cZXG9U-cZXQHJ-yYrzLz-e2L5RR-cZXW3f-cZXDpj-cZXvWo-cZXBY5-oMo1NW-cZXNBy-cZXt55-cZXvdf-cDeQGq-2ArXF6-cZXxWE-cZXwBL-cZXSKd-cZXVjq-oMo6yh-ouUXUr-ouVjf5-cZXE3m-oKnSsU-osC3bt',
				cc_author_url: 'https://www.flickr.com/photos/ddebold/',
				cc_author: 'Don DeBold',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Sulphur Works Area',
				image_url:
					'https://www.travelimager.com/images/california/California-Lassen-Volcanic-National-Park-Sulphur-Works.jpg',
				image_alt:
					'View of the geothermally-active Sulphur Works area surrounded by dense forests at Lassen Volcanic National Park',

				cc_image_url:
					'https://www.flickr.com/photos/jsjgeology/23936361468/in/photolist-Ctb7ko-cDeBUC-ZuXwAG-CtahuU-wSZfMN-oKoprs-ZuZPW9-Ct8Qys-YxYSmi-CtaCwN-Zk9MBg-Zv1JjL-Zk9ugV-Ctactm-i2M5YR-ouVy5b-futDCK-ZwtxQq-fuHUum-e2RJYy-ouW9Va-ZaVpTs-Ggd4tD-ZbsCPy-9VrZ3Y-Zb5PeC-vYhPCE-LFZJ1i-ouW6Rz-wCGa21-ZfQ6XS-ZbqRyW-ZhhJpC-fuHTLo-i2N5UP-ZzcvQg-Zv1crU-aot8FT-aovSBG-CdYFDf-cZWP9m-vGCWx-LfAnmo-dffNn3-vGCj6-cMng8U-Zk9oPT-aot8tV-Zv1zVG-Ct8c5j',
				cc_author_url: 'https://www.flickr.com/photos/jsjgeology/',
				cc_author: 'James St. John',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Painted Dunes',
				image_url:
					'https://www.travelimager.com/images/california/California-Lassen-Volcanic-National-Park-Cinder-Cone-Nature-Trail-Painted-Dunes.jpg',
				image_alt:
					'Overlooking a colorful landscape of countless rolling rounded Painted Dunes at Lassen Volcanic National Park',

				cc_image_url:
					'https://www.flickr.com/photos/74847162@N00/5218368548/in/photolist-sBD2U5-sDKDnm-o7Frj-6rpDx7-8X8vaw-m51GTx-24ZWUCE-rH8X1V',
				cc_author_url: 'https://www.flickr.com/photos/66163349@N05/',
				cc_author: 'andessurvivor',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Mount Shasta',
				image_url:
					'https://www.travelimager.com/images/california/California-Shasta-Trinity-National-Forest-Mount-Shasta-North-View.jpg',
				image_alt:
					'Stunning view of massive snow-covered Mount Shasta rising high above the Shasta Trinity National Forest',

				cc_image_url:
					'https://www.flickr.com/photos/23660854@N07/3176212026/in/photolist-5QEVbj-V8QHQr-25u8kCd-aJJziK-8TsZgL-53mevh-g6ZuY-9t5N4X-2yhhM6-9C1B99-3dYLwx-oN4rQT-8comQj-6vyftN-6vtXav-6vGari-6vu4NP-8xHwt5-6vu5y6-8xHyGb-zx2K9-6vyf8U-79JoR3-79EAeK-79JufS-79JnKs-79Ey6K-79EAoT-79Euai-79EuCV-79Jv7h-79Ju5w-79Jo9S-79ExTp-79EtwT-79EzNR-79Joo3-7HeMnD-7HiDru-7HiDkj-7HeMkr-7HeHHi-9uPfLS-23rXfW3-6pGqjq-59Axso-KpFxRb-Jw5DLF-8isToS-wTaLuU',
				cc_author_url: 'https://www.flickr.com/photos/23660854@N07/',
				cc_author: 'Marshal Hedin',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	los_angeles: {
		id: 'los_angeles',
		itineraries: '',
		destinationName: 'Los Angeles',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'los-angeles-california',
		destination_link: '/destinations/california/los-angeles-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/xPi29gEy3U12',
			all_attractions: 'https://goo.gl/maps/S32DQBjXz7A2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Los Angeles Area Attractions',
				tab_content: `<p>Enjoy the star-studded walkways of Hollywood Boulevard and nearby movie studios, including Universal Studios Hollywood, which doubles as a theme park. From the iconic Griffith Observatory in the Hollywood Hills you can enjoy breathtaking views over the vast urban metropolis of Los Angeles, as well as the nearby Hollywood Sign, which you can even hike up to if you like.</p>
                <p>Los Angeles is home to many important museums, such as the Getty Center, LACMA, The Broad, and the La Brea Tar Pits. The city's many world-class restaurants offer an extremely diverse cuisine from around the world. You'll find exciting nightlife scenes in Downtown, Hollywood, and West Hollywood.</p>
                <p>Head to the coast to enjoy the picturesque sandy beaches of Venice or Malibu, and walk along the Venice Beach Boardwalk and nearby Santa Monica Pier, which hosts a waterfront amusement park.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Griffith Observatory',
				image_url:
					'https://www.travelimager.com/images/california/California-Los-Angeles-Los-Feliz-Griffith-Observatory.jpg',
				image_alt:
					'Iconic Griffith Observatory viewed at night from afar with the lit-up buildings of Downtown Los Angeles in background',

				cc_image_url:
					'https://www.flickr.com/photos/84263554@N00/15906622221/in/photolist-qeBABg-26mxgLq-a2G8AJ-83sGYb-87RLXh-k6Cfhg-8UuRD6-6pSdHA-968wRw-34FtQ9-aheu3E-23cCZHi-qSLCMU-vyaX8-5e3aTQ-bX1ruY-6Zigxo-98Fj4f-6ZihZb-cYMrKA-vSRtq-bX1tWw-GoW5yy-S9Qm3w-6Zih3N-D3ToHC-8d5aiv-VXK4sr-6QYPLd-Tzyp9L-91qvY1-F4VGYW-9jf1UF-YqSTVM-23z8Dqo-YaMTbs-c9dZUU-4sWynY-uWvrKW-81SSPq-6hTE66-7Yc2EW-YqSSea-4sSxqF-bX1tq7-FwLE7z-oFGKxe-e4VvTk-9drgw4-zhr9ES',
				cc_author_url: 'https://www.flickr.com/photos/84263554@N00/',
				cc_author: 'Ron Reiring',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'The Getty Center Museum',
				image_url:
					'https://www.travelimager.com/images/california/California-Los-Angeles-Brentwood-The-Getty-Center-Museum.jpg',
				image_alt:
					"Stunning architecture of the Getty Center Museum's smooth ultramodern exterior in Brentwood above Los Angeles",

				cc_image_url: 'https://www.flickr.com/photos/eager/5427472050/',
				cc_author_url: 'https://www.flickr.com/photos/eager/',
				cc_author: 'Forgemind AcrhiMedia',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Santa Monica Pier & Beach',
				image_url:
					'https://www.travelimager.com/images/california/California-Los-Angeles-Santa-Monica-Pier-and-Beach-Sunset.jpg',
				image_alt:
					'Sunset colors over the sandy beach of Santa Monica and the Santa Monica Pier near Los Angeles, California',

				cc_image_url: 'https://www.flickr.com/photos/gillyberlin/40210523803/',
				cc_author_url: 'https://www.flickr.com/photos/gillyberlin/',
				cc_author: 'GillyBerlin',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Universal Studios Hollywood Hogwarts Castle',
				image_url:
					'https://www.travelimager.com/images/california/California-Los-Angeles-Universal-City-Universal-Studios-Hollywood-Theme-Park-Hogwarts-Harry-Potter-Castle.jpg',
				image_alt:
					'Night time view looking up at the Harry Potter Hogwarts Castle at Unviersal Studios Hollywood in Los Angeles',

				cc_image_url: 'https://www.flickr.com/photos/lhbrizzante/16388460902/',
				cc_author_url: 'https://www.flickr.com/photos/lhbrizzante/',
				cc_author: 'Luis Brizzante',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Venice Beach',
				image_url:
					'https://www.travelimager.com/images/california/California-Los-Angeles-Venice-Venice-Beach.jpg',
				image_alt:
					'Waves crashing along the sandy shoreline of Venice Beach near Santa Monica',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Venice_Beach,_Los_Angeles,_CA_07.JPG&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Venice_Beach,_Los_Angeles,_CA_07.JPG&action=history',
				cc_author: 'Blake Everett',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'The Getty Villa',
				image_url:
					'https://www.travelimager.com/images/california/California-Los-Angeles-Pacific-Palisades-The-Getty-Villa.jpg',
				image_alt:
					'Masssive pool surrounded by white columns of the Pacific Palisades Getty Villa, made to resemble an ancient Roman villa',

				cc_image_url:
					'https://www.flickr.com/photos/sergesegal/42677431152/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/sergesegal/',
				cc_author: 'Sergey Galyonkin',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Zuma Beach (Malibu)',
				image_url:
					'https://www.travelimager.com/images/california/California-Los-Angeles-Malibu-Zuma-Beach-and-Cliffs.jpg',
				image_alt:
					'View overlooking Zuma Beach and the Malibu coastline with mountainous coast in background near Los Angeles, California',

				cc_image_url:
					'https://pixabay.com/photos/malibu-california-beach-sand-2506309/',
				cc_author_url: 'https://pixabay.com/users/12019-12019/',
				cc_author: '12019',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'The Queen Mary (Long Beach)',
				image_url:
					'https://www.travelimager.com/images/california/California-Greater-Los-Angeles-Long-Beach-Queen-Mary.jpg',
				image_alt:
					'Massive and historic Queen Mary oceanliner docked at the Port of Lone Beach near Los Angeles',

				cc_image_url: 'https://www.flickr.com/photos/davidcjones/5371844405/',
				cc_author_url: 'https://www.flickr.com/photos/davidcjones/',
				cc_author: 'David Jones',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	lower_central_california_coast: {
		id: 'lower_central_california_coast',
		itineraries: '',
		destinationName: 'Lower Central California Coast & Big Sur',
		stateName: null,
		region: 'usa',
		anchor_tag: 'central-coast-california',
		destination_link:
			'/destinations/california/lower-central-california-coast-and-big-sur-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/8UUvLPXhQ8t',
			all_attractions: 'https://goo.gl/maps/qygSQp5fJyJ2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Lower Central California Coast',
				tab_content: `<p>California's central coast is located roughly between Santa Barbara and Santa Cruz. The route up the coast follows along the coastal cliffs of Highway 1 and 101 and is among the most scenic drives in the world. Along the route are many scenic pull-offs and viewpoints to enjoy the majestic scenery, as well as many beautiful beaches and mesmerizing natural formations.</p>
                <p>You'll encounter many unique attractions along the Lower Central Coast, such as the lovely Dutch town of Solvang, the massive Morro Rock which towers above the entrance to Morro Bay, and the famous Hearst Castle, an incredibly opulent mansion housing priceless art and artifacts. The castle is also known for its extravagant Neptune Pool.</p>
                <p>Along the breathtaking Big Sur Coastline you'll encounter picturesque bridges, the Pfeiffer Beach Sea Arch, and the gorgeous McWay Falls which cascades onto the beach.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Bixby Creek Bridge',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Carmel-By-The-Sea-Bixby-Creek-Bridge.jpg',
				image_alt:
					'View of the famous Bixby Creek Bridge, part of the Highway 101 Pacific Coast Highway along the Central California Coast',

				cc_image_url:
					'https://www.flickr.com/photos/russellstreet/34021083656/in/photolist-TQjWTS-d13eS9-d2nDzW-9XAfef-yd7qk3-TQJBWp-bDNmkt-6kNDfK-q2yTWE-pMeRfn-pMePGc-yVMjbG-5fDknB-bodW6Q-6nX7c1-MfSYgo-25sn5Xy-4FTgug-sL8cw4-NFLV1a-vE1UV7-unUvAc-bDNmJD-9XAfa1-25hzKfa-Aaxg3Z-zcxXkw-zRZys1-AaxhpB-A8q8GU-zRYgaj-zRYn2u-zRZzmA-AaxjcV-zRYhVJ-A9zFcr-zS5hpv-A7hqoA-zRZAEh-zcGiF4-zS5gAX-zcxTnm-zRYmPW-zRYmc3-A9zKbP-zS5fxK-4etRo1-aM2kaV-6a3RFG-eZncWd',
				cc_author_url: 'https://www.flickr.com/photos/russellstreet/',
				cc_author: 'russellstreet',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Pfeiffer Beach Sea Arch',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Big-Sur-Pfeiffer-Beach-Arch.jpg',
				image_alt:
					'Sun setting over the ocean directly above the Pfeiffer Beach Sea Arch just off the coast of Pfeiffer Beach in Big Sur',

				cc_image_url:
					'https://www.flickr.com/photos/visualvalhalla/38975528591/in/photolist-22o8LLg-cdrf55-dohQQ1-hRb7xH-i1jTk9-bNvUkn-eGo3F8-9EgBhp-bW4NgV-D2nHH3-bUvrbD-9tqwue-pY88uV-dQBpGw-bNvPtv-JMgzW4-Ebd21-bW4YMa-eGo35V-ANvJh-9jFpQu-nnuN6-4Vxs8S-eTu6Ti-qdBFGe-eGuc5L-72LkPo-5G422b-jpFKjQ-84mDTf-7Yb2jo-3bfteD-84iFui-7D8JUt-88iNAG-22pXZpy-dPPgQt-gVAyUf-92UmxW-9RXehr-bW525X-9EV972-cC59iU-8DxTmf-4cPq5Y-bW4YGn-9C7ZxF-9RyzhX-eGo4d4-cC5gi9',
				cc_author_url: 'https://www.flickr.com/photos/visualvalhalla/',
				cc_author: 'Andrew',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Neptune Pool (Hearst Castle)',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-San-Simeon-Hearst-Castle-Neptune-Pool.jpg',
				image_alt:
					'Famous Neptune Pool surrounded by mini ancient Roman temples, columns, and statues at Hearst Castle in San Simeon, California',

				cc_image_url: 'https://www.flickr.com/photos/seat850/3171892949/',
				cc_author_url: 'https://www.flickr.com/photos/seat850/3171892949/',
				cc_author: 'Craig Howell',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'McWay Falls',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Big-Sur-Julia-Pfeiffer-Burns-State-Park-McWay-Falls.jpg',
				image_alt:
					'Mcway Falls, an iconic Central California Coast attraction featuring a waterfall flowing into the ocean cove in Big Sur',

				cc_image_url:
					'https://www.flickr.com/photos/naturesdawn/4744241983/in/photolist-8eetRz-ehTknZ-fLrw4D-9EgBgp-e87chY-b789p2-eGuatQ-i1jTk9-9myAur-9ttw8d-9tqz4Z-6t1RRy-9tqzbp-9ttqeh-ePrqVi-9tqvRF-9tqtPp-9tqwue-JhFbuq-9ttwhj-FP5T5q-9Ejw8C-dMF3aG-cC68Zy-5RzHWP-9jQmEn-6t1V51-9XAdLJ-6o8Mkz-eGo33p-b7G1J8-4Z37wb-bRdZJ4-7sQD6S-SAWKQX-yep5sm-7sQDys-4Z39eW-a8qKUv-6tooDj-SyeBBN-9Xxm12-4gNTVa-4gSXM7-bb3hae-eGo3F8-cu94b9-b788iR-9XxkEH-i1jSfy',
				cc_author_url: 'https://www.flickr.com/photos/naturesdawn/',
				cc_author: 'Dawn Ellner',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Downtown Solvang',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Solvang-Downtown-Solvang-Windmill.jpg',
				image_alt:
					'Lovely windmill and half-timbered Dutch inspired buildings of Downtown Solvang, California near Santa Barbara',

				cc_image_url:
					'https://www.flickr.com/photos/86755183@N04/8183666164/in/photolist-dtaqQu-pCHbno-tovmw-82azmu-ncrvi5-4hY7Li-4FFmsv-Hetg-sAP8Wg-fAiipQ-djGbUJ-k4n4Tn-8PyL4c-fiDx1R-awGcgL-9X59uR-o8qzp2-5DGedm-touRh-icnPxg-awGfuN-4ApR1Q-SxeUWo-awDwQz-329Ez5-zXJed-3ChJFn-nBWszU-apJ2Lc-97BqE6-Jup-7kvxbg-qp33BS-uAQwM-9sCtdA-awXxPD-k4oKAY-5DYbS5-6WeWAE-28P2ij-SDaSu-651qXc-aHnyHD-8zgooU-uqJVz-uqHmc-6tKo7D-3bsu5f-awDxjT-7Y857x',
				cc_author_url: 'https://www.flickr.com/photos/myhsu/',
				cc_author: 'Ming-yen Hsu',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Morro Rock',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Morro-Bay-Morro-Rock.jpg',
				image_alt:
					"Sunset colors behind the massive coastal Morro Rock of Morro Bay, California along California's Central Coast",

				cc_image_url:
					'https://www.flickr.com/photos/86755183@N04/8183666164/in/photolist-dtaqQu-pCHbno-tovmw-82azmu-ncrvi5-4hY7Li-4FFmsv-Hetg-sAP8Wg-fAiipQ-djGbUJ-k4n4Tn-8PyL4c-fiDx1R-awGcgL-9X59uR-o8qzp2-5DGedm-touRh-icnPxg-awGfuN-4ApR1Q-SxeUWo-awDwQz-329Ez5-zXJed-3ChJFn-nBWszU-apJ2Lc-97BqE6-Jup-7kvxbg-qp33BS-uAQwM-9sCtdA-awXxPD-k4oKAY-5DYbS5-6WeWAE-28P2ij-SDaSu-651qXc-aHnyHD-8zgooU-uqJVz-uqHmc-6tKo7D-3bsu5f-awDxjT-7Y857x',
				cc_author_url: 'https://www.flickr.com/photos/86755183@N04/',
				cc_author: 'Fred Moore',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	lower_central_california_coast_sb: {
		id: 'lower_central_california_coast_sb',
		itineraries: '',
		destinationName: 'Lower Central California Coast & Big Sur (Southbound)',
		stateName: null,
		region: 'usa',
		anchor_tag: 'lower-central-california-coast-sb',
		destination_link:
			'/destinations/california/lower-central-california-coast-and-big-sur-southbound-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/8UUvLPXhQ8t',
			all_attractions: 'https://goo.gl/maps/qygSQp5fJyJ2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Lower Central California Coast',
				tab_content: `<p>California's central coast is located roughly between Santa Barbara and Santa Cruz. The route up the coast follows along the coastal cliffs of Highway 1 and 101 and is among the most scenic drives in the world. Along the route are many scenic pull-offs and viewpoints to enjoy the majestic scenery, as well as many beautiful beaches and mesmerizing natural formations.</p>
                <p>You'll encounter many unique attractions along the Lower Central Coast, such as the lovely Dutch town of Solvang, the massive Morro Rock which towers above the entrance to Morro Bay, and the famous Hearst Castle, an incredibly opulent mansion housing priceless art and artifacts. The castle is also known for its extravagant Neptune Pool.</p>
                <p>Along the breathtaking Big Sur Coastline you'll encounter picturesque bridges, the Pfeiffer Beach Sea Arch, and the gorgeous McWay Falls which cascades onto the beach.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Bixby Creek Bridge',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Carmel-By-The-Sea-Bixby-Creek-Bridge.jpg',
				image_alt:
					'View of the famous Bixby Creek Bridge, part of the Highway 101 Pacific Coast Highway along the Central California Coast',

				cc_image_url:
					'https://www.flickr.com/photos/russellstreet/34021083656/in/photolist-TQjWTS-d13eS9-d2nDzW-9XAfef-yd7qk3-TQJBWp-bDNmkt-6kNDfK-q2yTWE-pMeRfn-pMePGc-yVMjbG-5fDknB-bodW6Q-6nX7c1-MfSYgo-25sn5Xy-4FTgug-sL8cw4-NFLV1a-vE1UV7-unUvAc-bDNmJD-9XAfa1-25hzKfa-Aaxg3Z-zcxXkw-zRZys1-AaxhpB-A8q8GU-zRYgaj-zRYn2u-zRZzmA-AaxjcV-zRYhVJ-A9zFcr-zS5hpv-A7hqoA-zRZAEh-zcGiF4-zS5gAX-zcxTnm-zRYmPW-zRYmc3-A9zKbP-zS5fxK-4etRo1-aM2kaV-6a3RFG-eZncWd',
				cc_author_url: 'https://www.flickr.com/photos/russellstreet/',
				cc_author: 'russellstreet',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Pfeiffer Beach Sea Arch',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Big-Sur-Pfeiffer-Beach-Arch.jpg',
				image_alt:
					'Sun setting over the ocean directly above the Pfeiffer Beach Sea Arch just off the coast of Pfeiffer Beach in Big Sur',

				cc_image_url:
					'https://www.flickr.com/photos/visualvalhalla/38975528591/in/photolist-22o8LLg-cdrf55-dohQQ1-hRb7xH-i1jTk9-bNvUkn-eGo3F8-9EgBhp-bW4NgV-D2nHH3-bUvrbD-9tqwue-pY88uV-dQBpGw-bNvPtv-JMgzW4-Ebd21-bW4YMa-eGo35V-ANvJh-9jFpQu-nnuN6-4Vxs8S-eTu6Ti-qdBFGe-eGuc5L-72LkPo-5G422b-jpFKjQ-84mDTf-7Yb2jo-3bfteD-84iFui-7D8JUt-88iNAG-22pXZpy-dPPgQt-gVAyUf-92UmxW-9RXehr-bW525X-9EV972-cC59iU-8DxTmf-4cPq5Y-bW4YGn-9C7ZxF-9RyzhX-eGo4d4-cC5gi9',
				cc_author_url: 'https://www.flickr.com/photos/visualvalhalla/',
				cc_author: 'Andrew',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Neptune Pool (Hearst Castle)',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-San-Simeon-Hearst-Castle-Neptune-Pool.jpg',
				image_alt:
					'Famous Neptune Pool surrounded by mini ancient Roman temples, columns, and statues at Hearst Castle in San Simeon, California',

				cc_image_url: 'https://www.flickr.com/photos/seat850/3171892949/',
				cc_author_url: 'https://www.flickr.com/photos/seat850/3171892949/',
				cc_author: 'Craig Howell',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'McWay Falls',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Big-Sur-Julia-Pfeiffer-Burns-State-Park-McWay-Falls.jpg',
				image_alt:
					'Mcway Falls, an iconic Central California Coast attraction featuring a waterfall flowing into the ocean cove in Big Sur',

				cc_image_url:
					'https://www.flickr.com/photos/naturesdawn/4744241983/in/photolist-8eetRz-ehTknZ-fLrw4D-9EgBgp-e87chY-b789p2-eGuatQ-i1jTk9-9myAur-9ttw8d-9tqz4Z-6t1RRy-9tqzbp-9ttqeh-ePrqVi-9tqvRF-9tqtPp-9tqwue-JhFbuq-9ttwhj-FP5T5q-9Ejw8C-dMF3aG-cC68Zy-5RzHWP-9jQmEn-6t1V51-9XAdLJ-6o8Mkz-eGo33p-b7G1J8-4Z37wb-bRdZJ4-7sQD6S-SAWKQX-yep5sm-7sQDys-4Z39eW-a8qKUv-6tooDj-SyeBBN-9Xxm12-4gNTVa-4gSXM7-bb3hae-eGo3F8-cu94b9-b788iR-9XxkEH-i1jSfy',
				cc_author_url: 'https://www.flickr.com/photos/naturesdawn/',
				cc_author: 'Dawn Ellner',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Downtown Solvang',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Solvang-Downtown-Solvang-Windmill.jpg',
				image_alt:
					'Lovely windmill and half-timbered Dutch inspired buildings of Downtown Solvang, California near Santa Barbara',

				cc_image_url:
					'https://www.flickr.com/photos/86755183@N04/8183666164/in/photolist-dtaqQu-pCHbno-tovmw-82azmu-ncrvi5-4hY7Li-4FFmsv-Hetg-sAP8Wg-fAiipQ-djGbUJ-k4n4Tn-8PyL4c-fiDx1R-awGcgL-9X59uR-o8qzp2-5DGedm-touRh-icnPxg-awGfuN-4ApR1Q-SxeUWo-awDwQz-329Ez5-zXJed-3ChJFn-nBWszU-apJ2Lc-97BqE6-Jup-7kvxbg-qp33BS-uAQwM-9sCtdA-awXxPD-k4oKAY-5DYbS5-6WeWAE-28P2ij-SDaSu-651qXc-aHnyHD-8zgooU-uqJVz-uqHmc-6tKo7D-3bsu5f-awDxjT-7Y857x',
				cc_author_url: 'https://www.flickr.com/photos/myhsu/',
				cc_author: 'Ming-yen Hsu',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Morro Rock',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Morro-Bay-Morro-Rock.jpg',
				image_alt:
					"Sunset colors behind the massive coastal Morro Rock of Morro Bay, California along California's Central Coast",

				cc_image_url:
					'https://www.flickr.com/photos/86755183@N04/8183666164/in/photolist-dtaqQu-pCHbno-tovmw-82azmu-ncrvi5-4hY7Li-4FFmsv-Hetg-sAP8Wg-fAiipQ-djGbUJ-k4n4Tn-8PyL4c-fiDx1R-awGcgL-9X59uR-o8qzp2-5DGedm-touRh-icnPxg-awGfuN-4ApR1Q-SxeUWo-awDwQz-329Ez5-zXJed-3ChJFn-nBWszU-apJ2Lc-97BqE6-Jup-7kvxbg-qp33BS-uAQwM-9sCtdA-awXxPD-k4oKAY-5DYbS5-6WeWAE-28P2ij-SDaSu-651qXc-aHnyHD-8zgooU-uqJVz-uqHmc-6tKo7D-3bsu5f-awDxjT-7Y857x',
				cc_author_url: 'https://www.flickr.com/photos/86755183@N04/',
				cc_author: 'Fred Moore',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	lower_northern_california_coast: {
		id: 'lower_northern_california_coast',
		itineraries: '',
		destinationName: 'Lower Northern California Coast',
		stateName: null,
		region: 'usa',
		anchor_tag: 'northern-coast-california',
		destination_link:
			'/destinations/california/lower-northern-california-coast-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/GPr3vcazccL2',
			all_attractions: 'https://goo.gl/maps/wMURMu5m6AQ2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Lower Northern California Coast',
				tab_content: `<p>California's Lower Northern Coast follows along the extremely scenic coastal Highway 1 north of San Francisco and Point Reyes. This route includes the lovely Point Arena and Point Cabrillo Lighthouses, as well as many beautiful views over the coastline such as at Bodega Bay. Along the coast you'll even find a huge reconstructed 19th century Russian fortress known as Fort Ross.</p>
                <p>In the seaside town of Mendocino you'll find the Mendocino Headlands State Park, which hosts gorgeous views over the vibrant blue-green waters of Mendocino Bay, as well as a rugged coastline of sea arches and stunning natural features that you can explore. In nearby Fort Bragg you can visit the elegant clifftop Mendocino Coast Botanical Gardens and marvel at the tiny dull pieces of glass that make-up the city's Glass Beach.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Point Arena Lighthouse',
				image_url:
					'https://www.travelimager.com/images/california/California-Lower-Northern-Coast-Point-Arena-Lighthouse.jpg',
				image_alt:
					"Beautiful idyllic Point Arena Lighthouse seen atop the ocean cliffs from a distance along California's northern coast",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Russian Gulch Bridge (Mendocino)',
				image_url:
					'https://www.travelimager.com/images/california/California-Lower-Northern-Coast-Russian-Gulch-Bridge-Viewpoint.jpg',
				image_alt:
					"Arched Russian Gulch Bridge seen behind a tiny island and vibrant blue-green waters of Mendocino's coastline",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Point Cabrillo Light Station',
				image_url:
					'https://www.travelimager.com/images/california/California-Lower-Northern-Coast-Mendocino-Point-Cabrillo-Light-Station.jpg',
				image_alt:
					"Small idyllic white and red lighthouse of Point Cabrillo Light Station near Mendocino along California's northern coast",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Point_Cabrillo_Lighthouse,_on_an_early_morning_in_February.jpg&action=history',
				cc_author_url: 'https://www.wikidata.org/wiki/Q57175365',
				cc_author: 'Frank Schulenburg',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Bodega Bay',
				image_url:
					'https://www.travelimager.com/images/california/California-Lower-Northern-Coast-Bodega-Bay.jpg',
				image_alt:
					"Sunset over the beautiful coastal cliffs of Bodega Bay along California's northern coast",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Fort Ross State Historic Park',
				image_url:
					'https://www.travelimager.com/images/california/California-Lower-Northern-Coast-Fort-Ross-State-Historic-Park.jpg',
				image_alt:
					"Old wooden buildings and walls of the Russian Fort Ross State Historic Park along California's northern coast",

				cc_image_url: 'https://www.flickr.com/photos/forlitke/5033969865/',
				cc_author_url: 'https://www.flickr.com/photos/forlitke/',
				cc_author: 'NS In the Bay Area',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Glass Beach (Fort Bragg)',
				image_url:
					'https://www.travelimager.com/images/california/California-Lower-Northern-Coast-Glass-Beach.jpg',
				image_alt:
					"Countless tiny rounded pieces of glass of many colors along the Glass Beach of Fort Bragg along California's northern coast",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	lower_northern_california_coast_sb: {
		id: 'lower_northern_california_coast_sb',
		itineraries: '',
		destinationName: 'Lower Northern California Coast (Southbound)',
		stateName: null,
		region: 'usa',
		anchor_tag: 'lower-northern-california-coast-sb',
		destination_link:
			'/destinations/california/lower-northern-california-coast-southbound-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/GPr3vcazccL2',
			all_attractions: 'https://goo.gl/maps/wMURMu5m6AQ2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Lower Northern California Coast',
				tab_content: `<p>California's Lower Northern Coast follows along the extremely scenic coastal Highway 1 north of San Francisco and Point Reyes. This route includes the lovely Point Arena and Point Cabrillo Lighthouses, as well as many beautiful views over the coastline such as at Bodega Bay. Along the coast you'll even find a huge reconstructed 19th century Russian fortress known as Fort Ross.</p>
                <p>In the seaside town of Mendocino you'll find the Mendocino Headlands State Park, which hosts gorgeous views over the vibrant blue-green waters of Mendocino Bay, as well as a rugged coastline of sea arches and stunning natural features that you can explore. In nearby Fort Bragg you can visit the elegant clifftop Mendocino Coast Botanical Gardens and marvel at the tiny dull pieces of glass that make-up the city's Glass Beach.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Point Arena Lighthouse',
				image_url:
					'https://www.travelimager.com/images/california/California-Lower-Northern-Coast-Point-Arena-Lighthouse.jpg',
				image_alt:
					"Beautiful idyllic Point Arena Lighthouse seen atop the ocean cliffs from a distance along California's northern coast",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Russian Gulch Bridge (Mendocino)',
				image_url:
					'https://www.travelimager.com/images/california/California-Lower-Northern-Coast-Russian-Gulch-Bridge-Viewpoint.jpg',
				image_alt:
					"Arched Russian Gulch Bridge seen behind a tiny island and vibrant blue-green waters of Mendocino's coastline",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Point Cabrillo Light Station',
				image_url:
					'https://www.travelimager.com/images/california/California-Lower-Northern-Coast-Mendocino-Point-Cabrillo-Light-Station.jpg',
				image_alt:
					"Small idyllic white and red lighthouse of Point Cabrillo Light Station near Mendocino along California's northern coast",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Point_Cabrillo_Lighthouse,_on_an_early_morning_in_February.jpg&action=history',
				cc_author_url: 'https://www.wikidata.org/wiki/Q57175365',
				cc_author: 'Frank Schulenburg',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Bodega Bay',
				image_url:
					'https://www.travelimager.com/images/california/California-Lower-Northern-Coast-Bodega-Bay.jpg',
				image_alt:
					"Sunset over the beautiful coastal cliffs of Bodega Bay along California's northern coast",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Fort Ross State Historic Park',
				image_url:
					'https://www.travelimager.com/images/california/California-Lower-Northern-Coast-Fort-Ross-State-Historic-Park.jpg',
				image_alt:
					"Old wooden buildings and walls of the Russian Fort Ross State Historic Park along California's northern coast",

				cc_image_url: 'https://www.flickr.com/photos/forlitke/5033969865/',
				cc_author_url: 'https://www.flickr.com/photos/forlitke/',
				cc_author: 'NS In the Bay Area',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Glass Beach (Fort Bragg)',
				image_url:
					'https://www.travelimager.com/images/california/California-Lower-Northern-Coast-Glass-Beach.jpg',
				image_alt:
					"Countless tiny rounded pieces of glass of many colors along the Glass Beach of Fort Bragg along California's northern coast",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	orange_county: {
		id: 'orange_county',
		itineraries: '',
		destinationName: 'Orange County',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'orange-county-california',
		destination_link: '/destinations/california/orange-county-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/gvfHaPALypD2',
			all_attractions: 'https://goo.gl/maps/Ddi5jvfr3162'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Orange County Attractions',
				tab_content: `<p>Orange County is located along the Southern California coast between Los Angeles and San Diego and is best known for its beautiful sandy beaches, giant high-end shopping malls, and the original Disneyland theme park.</p>
                <p>The coastline of Laguna Beach is lined with countless coves and gorgeous beaches, which sit below tall cliffs. Huntington Beach holds the official title of Surf City, USA, with a very lively atmosphere centered around the iconic Huntington Beach Pier.</p>
                <p>If you don't plan on visiting the Disney theme parks or relaxing at the beach, it's recommended to spend one of these day further exploring San Diego or Los Angeles.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Huntington Beach Pier',
				image_url:
					'https://www.travelimager.com/images/california/California-Orange-County-Huntington-Beach-Huntington-Beach-Pier.jpg',
				image_alt:
					'Overlooking the iconic long wooden Huntington Beach Pier at sunset over the Pacific Ocean',

				cc_image_url:
					'https://www.flickr.com/photos/henriquev/32246442480/in/photolist-R8vrUd-8oPaP1-8oKZFc-dDyUfX-ESqgav-ESnR2p-FFNCaP-pb2ETa-22GCWH8-6X5Pm8-Rtoutb-p8SKBD-zWYJBD-asEJGs-8DdK9d-i6sNjD-FKt49N-asEMgN-F7TiCP-Qigin2-JFEjoY-b3GQrg-FKicMQ-fTgY7y-FDk1Uq-FnnZQu-FFGEtZ-F6pSUa-ESk3MK-G39W12-FZRU29-FJrvcj-ES8oRC-FntkGU-FKnXrW-ESq1M2-FKt5Ub-FKjW4G-FLPZrK-FFHyAe-FKkwG9-b3GQjT-8fBXq-FKgRLQ-FLPWfz-EXfsHb-FnDEj3-FKo1fS-F7F373-FLRsUZ',
				cc_author_url: 'https://www.flickr.com/photos/henriquev/',
				cc_author: 'Henrique Pinto',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Heisler Park (Laguna Beach)',
				image_url:
					'https://www.travelimager.com/images/california/California-Orange-County-Laguna-Beach-Heisler-Park.jpg',
				image_alt:
					'Beautiful vibrant gardens of Heisler Park atop the cliffs above the ocean in Laguna Beach, Orange County',

				cc_image_url: 'https://www.flickr.com/photos/jukk_a/11390277554/',
				cc_author_url: 'https://www.flickr.com/photos/jukk_a/',
				cc_author: 'Jukka',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Crescent Bay Point Park (Laguna Beach)',
				image_url:
					'https://www.travelimager.com/images/california/California-Orange-County-Laguna-Beach-Crescent-Bay-Point-Park.jpg',
				image_alt:
					'View overlooking a stunning sandy beach and cove seen from Crescent Bay Point Park in Laguna Beach, Orange County',

				cc_image_url:
					'https://www.flickr.com/photos/jerikoegel/522904943/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/jerikoegel/',
				cc_author: 'Jeri Koegel',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Treasure Island Park (Laguna Beach)',
				image_url:
					'https://www.travelimager.com/images/california/California-Orange-County-Laguna-Beach-Treasure-Island-Park.jpg',
				image_alt:
					'Clear light blue waters and beach in front of a natural arch along the coast seen from Treasure Island Park in Laguna Beach',

				cc_image_url: 'https://www.flickr.com/photos/atramos/13991998401/',
				cc_author_url: 'https://www.flickr.com/photos/atramos/',
				cc_author: 'atramos',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	point_reyes: {
		id: 'point_reyes',
		itineraries: '',
		destinationName: 'Point Reyes & Mt. Tamalpais',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'point-reyes-and-mt-tamalpais-california',
		destination_link:
			'/destinations/california/point-reyes-and-mt-tamalpais-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/hqiiVGMjLUo',
			all_attractions: 'https://goo.gl/maps/etM4CeZzCTP2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Mt. Tamalpais',
				tab_content: `<p>Just north of San Francisco across the Golden Gate Bridge is the wooded mountainous landscape of Mount Tamalpais State Park, which towers above the coast. From atop Mount Tamalpais East Peak you can enjoy gorgeous panoramic views over the San Francisco Bay, the city of San Francisco, and the coast on a clear day.</p>`
			},
			{
				tab_title: 'Point Reyes Attractions',
				tab_content: `<p>A bit further north of San Francisco is the Point Reyes National Seashore, a massive peninsula with many excellent hiking opportunities and stunning scenery. Point Reyes hosts a waterfall which cascades onto the beach, Alamere Falls, as well as the picturesque Cypress Tree Tunnel. The peninsula also features beautiful vast cliffs and the gorgeous Point Reyes Lighthouse, which is reached by a steep descent down the cliffs.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Point Reyes Lighthouse',
				image_url:
					'https://www.travelimager.com/images/california/California-Point-Reyes-National-Seashore-Point-Reyes-Lighthouse.jpg',
				image_alt:
					'Looking down over the steep walkway leading to the beautiful Point Reyes Lighthouse set amongst the Pacific Ocean',

				cc_image_url: 'https://www.flickr.com/photos/jdlasica/4341873994/',
				cc_author_url: 'https://www.flickr.com/photos/jdlasica/',
				cc_author: 'JD Lasica',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Cypress Tree Tunnel',
				image_url:
					'https://www.travelimager.com/images/california/California-Point-Reyes-National-Seashore-Cypress-Tree-Tunnel.jpg',
				image_alt:
					'Looking down the Cypress Tree Tunnel road at the Point Reyes National Seashore',

				cc_image_url: 'https://www.flickr.com/photos/ajaygoel2011/27591924323/',
				cc_author_url: 'https://www.flickr.com/photos/ajaygoel2011/',
				cc_author: 'Ajay Goel',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Tomales Point Trail',
				image_url:
					'https://www.travelimager.com/images/california/California-Point-Reyes-National-Seashore-Tomales-Point-Trail.jpg',
				image_alt:
					'View overlooking the grassy field-covered cliffs of Tomales Point at the Point Reyes National Seashore',

				cc_image_url:
					'https://www.flickr.com/photos/frank_schulenburg/16354622193/',
				cc_author_url: 'https://www.flickr.com/photos/frank_schulenburg/',
				cc_author: 'Frank Schulenberg',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Mount Tamalpais East Peak',
				image_url:
					'https://www.travelimager.com/images/california/California-Mount-Tamalpais-State-Park-Mount-Tamalpais-East-Peak.jpg',
				image_alt:
					'View over the many cities surrounding the San Francisco Bay from high above atop Mount Tamalpais East Peak',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Alamere Falls (Palomarin Trailhead)',
				image_url:
					'https://www.travelimager.com/images/california/California-Point-Reyes-National-Seashore-Alamere-Falls.jpg',
				image_alt:
					'Stunning Alamere Falls flowing onto the beach into the Pacific Ocean along Point Reyes',

				cc_image_url: 'https://www.flickr.com/photos/livenature/5374239461/',
				cc_author_url: 'https://www.flickr.com/photos/livenature/',
				cc_author: 'Franco Folini',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	san_diego: {
		id: 'san_diego',
		itineraries: '',
		destinationName: 'San Diego',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'san-diego-california',
		destination_link: '/destinations/california/san-diego-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/PR4khdPzmXR2',
			all_attractions: 'https://goo.gl/maps/ceNynftAEHq'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Intro & Beaches',
				tab_content: `<p>San Diego is a magnificent seaside city with many different neighborhoods, located just above the Mexican border. Because of its location, San Diego hosts excellent Mexican and Tex-Mex cuisine. The city hosts many stunning beaches including La Jolla Shores La Jolla Cove (a year-round seal and sea-lion habitat), Pacific Beach, and Coronado Beach where you can admire the iconic Hotel del Coronado.</p>`
			},
			{
				tab_title: 'Downtown',
				tab_content: `<p>Amongst the densely clustered skyscrapers of Downtown San Diego is the historic Gaslamp District, which hosts excellent restaurants and nightlife, along with many boutiques. Also Downtown is a retired aircraft-carrier the USS Midway, which now serves as a museum. In the hills above Downtown is the lovely Balboa Park hosting many museums and the famous San Diego Zoo.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Northwest of Downtown you can explore the well-preserved 19th century structures of the Old Town San Diego State Historic Park. Enjoy amazing views of the rugged coastline as well as views high above the San Diego Bay from Point Loma. Be sure to also hike along the scenic cliffs at Sunset Cliffs Natural Park near Point Loma and Torrey Pines State Reserve north of La Jolla.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Hotel del Coronado',
				image_url:
					'https://www.travelimager.com/images/california/California-San-Diego-Coronado-Island-Hotel-del-Coronado.jpg',
				image_alt:
					"Walkway through a vibrant garden leading to San Diego's iconic Hotel del Coronado on Coronado Island",

				cc_image_url: 'https://www.flickr.com/photos/29541450@N07/5431670001/',
				cc_author_url: 'https://www.flickr.com/photos/29541450@N07/',
				cc_author: 'hoteldelcoronado',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Pacific Beach',
				image_url:
					'https://www.travelimager.com/images/california/California-San-Diego-Pacific-Beach.jpg',
				image_alt:
					'Beautiful view of the sun setting behind the Pacific Beach Pier over the ocean in San Diego',

				cc_image_url:
					'https://www.flickr.com/photos/billmorrow/13767298914/in/photolist-mYz1jE-JTz3qf-d5kveL-5x3BqF-axPn2L-VgbR9R-6gVY26-97eXdv-axPmJU-axLvtM-5L84ff-3hf159-8m2BRb-W9ktxs-rcFBkn-W9juJY-retKn7-7sr17n-8kYA8B-VTZXgh-79a8v-hbMUHU-cpG5z5-6cA5Mp-WhYLu2-5MWCKa-Wr9kYf-VUts29-axLzyF-Wr6Co5-VfGW5Z-2Ye8c9-axLtQX-dqppnD-WtC8T1-amgKFM-WM7MHk-qz8FBz-WtBkiN-rw4Ku4-7fRptg-6Z5uw7-VSeXMw-oX6V7h-axPqQy-rgR6V-5x3CMP-fmKz5-5AJArD-6RZ4nV',
				cc_author_url: 'https://www.flickr.com/photos/billmorrow/',
				cc_author: 'Bill Morrow',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Cabrillo Visitor Center Viewpoint',
				image_url:
					'https://www.travelimager.com/images/california/California-San-Diego-Cabrillo-National-Monument-Visitor-Center-View.jpg',
				image_alt:
					'Viewpoint overlooking Downtown San Diego and its airport behind the ocean from the Cabrillo National Monument Visitor Center',

				cc_image_url: 'https://www.flickr.com/photos/russellstreet/32275024714/',
				cc_author_url: 'https://www.flickr.com/photos/russellstreet/',
				cc_author: 'russellstreet',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'USS Midway Museum',
				image_url:
					'https://www.travelimager.com/images/california/California-San-Diego-USS-Midway-Museum.jpg',
				image_alt:
					'Beautiful clouds behind the massive USS Midway aircraft carrier parked in the San Diego harbor',

				cc_image_url:
					'https://www.flickr.com/photos/my_public_domain_photos/38149637222/',
				cc_author_url: 'https://www.flickr.com/photos/my_public_domain_photos/',
				cc_author: 'Robert Sullivan',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Balboa Park',
				image_url:
					'https://www.travelimager.com/images/california/California-San-Diego-Balboa-Park-Lily-Pond.jpg',
				image_alt:
					"Looking along a large Lily Pond surrounded by Spanish style buildings at San Diego's Balboa Park",

				cc_image_url: 'https://www.flickr.com/photos/myhsu/3829911367/',
				cc_author_url: 'https://www.flickr.com/photos/myhsu/',
				cc_author: 'Ming-yen Hsu',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Torrey Pines State Reserve',
				image_url:
					'https://www.travelimager.com/images/california/California-San-Diego-Torrey-Pines-State-Reserve.jpg',
				image_alt:
					'Far-reaching view of the steep beautiful cliffs of Torrey Pines State Reserve above the ocean near San Diego',

				cc_image_url: 'https://www.flickr.com/photos/dirkhansen/6737333047/',
				cc_author_url: 'https://www.flickr.com/photos/dirkhansen/',
				cc_author: 'SD Dirk',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	san_francisco: {
		id: 'san_francisco',
		itineraries: '',
		destinationName: 'San Francisco',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'san-francisco-california',
		destination_link: '/destinations/california/san-francisco-attractions-guide',
		attractionMapLinks: {
			custom_attractions_1: 'https://goo.gl/maps/BipBhrh11Hu',
			custom_attractions_1_text: 'Top Attractions (Car)',
			custom_attractions_2: 'https://goo.gl/maps/TT7DguQWc4F2',
			custom_attractions_2_text: 'All Attractions (Car)',
			custom_attractions_3: 'https://goo.gl/maps/ogpMi9xegjv',
			custom_attractions_3_text: 'Top Attractions (No Car)',
			custom_attractions_4: 'https://goo.gl/maps/fyTxQw9BVGG2',
			custom_attractions_4_text: 'All Attractions (No Car)'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'San Francisco Attractions',
				tab_content: `<p>San Francisco hosts an immense selection of world-class dining options as well as amazing nightlife. This beautiful city sits on a hilly peninsula at the entrance to the massive San Francisco Bay. Spanning the bay's entrance is the city's iconic Golden Gate Bridge, which can be admired from many different viewpoints. Golden Gate Park is home to many gardens and museums, including the famous California Academy of Sciences.</p>
                <p>The city is home to many more iconic sights including the hilltop Coit Tower, the windy Lombard Street, and the lovely row of colorful Victorian homes known as the Painted Ladies. Among the city's most impressive structures is the majestic Greco-Roman style Palace of Fine Arts.</p>
                <p>Amongst the dense towering skyscrapers of Downtown is the San Francisco Museum of Modern Art, one of the largest modern art museums in the world. Nearby you can take the ferry to the famous early 20th century prison island which housed Al Capone, Alcatraz Island.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Painted Ladies Houses',
				image_url:
					'https://www.travelimager.com/images/california/California-San-Francisco-Painted-Ladies-Houses.jpg',
				image_alt:
					'Iconic row of colorful Victorian San Francisco houses from Full House known as the Painted Ladies seen from Alamo Square Park',

				cc_image_url: 'https://www.flickr.com/photos/143850343@N06/25267941258/',
				cc_author_url: 'https://www.flickr.com/photos/143850343@N06/',
				cc_author: 'Sam Amil',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Lombard Street',
				image_url:
					'https://www.travelimager.com/images/california/California-San-Francisco-Lombard-Street.jpg',
				image_alt:
					"Looking up at the winding uphill road of San Francisco's Lombard Street which zig-zags through beautiful flower gardens",

				cc_image_url: 'https://www.flickr.com/photos/85822043@N00/194649914/',
				cc_author_url: 'https://www.flickr.com/photos/85822043@N00/',
				cc_author: 'westcoast2006',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Golden Gate Bridge (Baker Beach)',
				image_url:
					'https://www.travelimager.com/images/california/California-San-Francisco-Baker-Beach.jpg',
				image_alt:
					'Stunning view of Golden Gate Bridge behind the sandy Baker Beach with waves crashing in San Francisco',

				cc_image_url: 'https://www.flickr.com/photos/mcgrayjr/4145457199/',
				cc_author_url: 'https://www.flickr.com/photos/mcgrayjr/',
				cc_author: 'Ernest McGray, Jr.',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Coit Tower',
				image_url:
					'https://www.travelimager.com/images/california/California-San-Francisco-Coit-Tower.jpg',
				image_alt:
					"Hilltop Coit Tower rising high above the trees and surrounding homes of San Francisco's Russian Hill in the evening",

				cc_image_url: 'https://www.flickr.com/photos/emmyboop/4805689335/',
				cc_author_url: 'https://www.flickr.com/photos/emmyboop/',
				cc_author: 'Emily Stanchfield',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Alcatraz Island',
				image_url:
					'https://www.travelimager.com/images/california/California-San-Francisco-Alcatraz-Island.jpg',
				image_alt:
					'Historic abandoned buildings atop the former prison complex of Alcatraz Island in the San Francisco bay',

				cc_image_url: 'https://www.flickr.com/photos/10083049@N02/1156292464/',
				cc_author_url: 'https://www.flickr.com/photos/10083049@N02/',
				cc_author: 'tylersmall',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Palace of Fine Arts Theater',
				image_url:
					'https://www.travelimager.com/images/california/California-San-Francisco-Palace-of-Fine-Arts-Theater.jpg',
				image_alt:
					"Stunninglt lavish exterior and columns of San Francisco's Palace of Fine Arts Theatre behind a pond and gardens",

				cc_image_url: 'https://www.flickr.com/photos/callmewhatever/9664361470/',
				cc_author_url: 'https://www.flickr.com/photos/callmewhatever/',
				cc_author: 'Daniel Zimmerman',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	sequoia_kings_canyon: {
		id: 'sequoia_kings_canyon',
		itineraries: '',
		destinationName: 'Sequoia & Kings Canyon National Parks',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'sequoia-and-kings-canyon-national-parks-california',
		destination_link:
			'/destinations/california/sequoia-and-kings-canyon-national-parks-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/upG79pZpoVG2'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'General Sherman Tree',
				image_url:
					'https://www.travelimager.com/images/california/California-Sequoia-National-Park-General-Sherman-Tree.jpg',
				image_alt:
					'Looking up at the largest tree on Earth, the General Sherman Sequoia Tree, in Sequoia National Park',

				cc_image_url: 'https://www.flickr.com/photos/daveynin/26356139843/',
				cc_author_url: 'https://www.flickr.com/photos/daveynin/',
				cc_author: 'David Fulmer',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Moro Rock',
				image_url:
					'https://www.travelimager.com/images/california/California-Sequoia-National-Park-Moro-Rock.jpg',
				image_alt:
					'Path leading up to Moro Rock with stunning views of the Sierra Nevada Mountains, located in Sequoia National Park',

				cc_image_url:
					'https://www.flickr.com/photos/channone/16696308369/in/photolist-rroWMF-qLUQWS-rrgtbJ-rHQnnH-rHSnL4-qLSkHL-rHVNK6-rHK6zr-rFAaqs-rpvgrT-B6MTWs-Au24C7-B7ZkyV-AaXreA-viemQL-rHH1Ek-rpBgy4-rHVk4p-rHTWzD-rrs5Ei-Au26Pm-Au257J-rrn9Ss-rpvvqe-uCXUda-vAb9wp-vieiLw-rHQpDx-rHVr2B-rFChBY-rrssng-rHMBYj-rHMaDf-rHN1ea-rHSXQg-qLSQLq-rHMqwv-rrhFDW-rrirRL-rrhGbj-rFynES-rrgdhU-rHQHCH-qM3UTH-rHJeFu-rro59B-rrgaKG-rHPgXX-rHJ2aM-rHNLPg',
				cc_author_url: 'https://www.flickr.com/photos/joevare/',
				cc_author: 'joevare',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Congress Trail',
				image_url:
					'https://www.travelimager.com/images/california/California-Sequoia-National-Park-Congress-Trail.jpg',
				image_alt:
					'Very wide base of a massiove sequoia tree seen along the Congress Trail in Sequoia National Park',

				cc_image_url:
					'https://www.flickr.com/photos/travelourplanet/28926267443/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/travelourplanet/',
				cc_author: 'Fabio Achilli',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Crescent Meadow',
				image_url:
					'https://www.travelimager.com/images/california/California-Sequoia-National-Park-Crescent-Meadow.jpg',
				image_alt:
					'Beautiful green grassy field of Crescent Meadow surrounded by tall trees in Sequoia National Park',

				cc_image_url: 'https://www.flickr.com/photos/myhsu/36191630943/',
				cc_author_url: 'https://www.flickr.com/photos/myhsu/',
				cc_author: 'Ming-yen Hsu',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			}
		]
	},

	tuolumne_meadows: {
		id: 'tuolumne_meadows',
		itineraries: '',
		destinationName: 'Tuolumne Meadows (Yosemite)',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'tuolumne-meadows-yosemite-california',
		destination_link:
			'/destinations/california/tuolumne-meadows-yosemite-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/QfT9ywMWaLT2',
			all_attractions: 'https://goo.gl/maps/57gwdAN1sRN2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Tuolumne Meadows (Yosemite)',
				tab_content: `<p>The Tuolomne Meadows district of Yosemite National Park is a majestic valley full of lush meadows and lakes, which sits at an average elevation of about 8,600 feet (2,625 m), surrounded by many mountain peaks and interesting geological features. This district of Yosemite hosts vast meadows filled with abundant wildlife alongside picturesque scenery.</p>
                <p>Tuolumne Meadows hosts many excellent hiking trails to gorgeous places such as the serene Cathedral Lakes, Mount Dana from which you can view Mono Lake from high above, and Clouds Rest from which you can enjoy truly breathtaking views of the backside of Half Dome with Yosemite Valley framed behind it. Further north of Tuolumne Meadows is the Hetch Hetchy district of Yosemite, which is also discussed in this itinerary.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Lower Cathedral Lake',
				image_url:
					'https://www.travelimager.com/images/california/California-Yosemite-National-Park-Lower-Cathedral-Lake.jpg',
				image_alt:
					"Stunning Lower Cathedral Mountain seen behind Lower Cathedral Lake at Yosemite National Park's Tuolumne Meadows",

				cc_image_url: 'https://www.flickr.com/photos/irenetong/6262555900/',
				cc_author_url: 'https://www.flickr.com/photos/irenetong/',
				cc_author: 'irene.',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Olmsted Point',
				image_url:
					'https://www.travelimager.com/images/california/California-Yosemite-National-Park-Olmsted-Point.jpg',
				image_alt:
					'Natural deep carvings in the rock at Olmstead Point with views over the mountains of Yosemite Valley',

				cc_image_url: 'https://www.flickr.com/photos/sandipb/22806247860/',
				cc_author_url: 'https://www.flickr.com/photos/sandipb/',
				cc_author: 'Sandip Bhattacharya',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Clouds Rest',
				image_url:
					'https://www.travelimager.com/images/california/California-Yosemite-National-Park-Clouds-Rest.jpg',
				image_alt:
					'Elegant and highly detailed interior of the Hungarian National Museum in Budapest, Hungary',

				cc_image_url: 'https://www.flickr.com/photos/sofiadonnecke/35887214326/',
				cc_author_url: 'https://www.flickr.com/photos/sofiadonnecke/',
				cc_author: '@sofiadonnecke',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Soda Springs Trail',
				image_url:
					'https://www.travelimager.com/images/california/California-Yosemite-National-Park-Soda-Springs-Trail.jpg',
				image_alt:
					"Soda Springs Trail wooden bridge with vast forest and mountains in background, at Yosemite National Park's Tuolumne Meadows",

				cc_image_url: 'https://www.flickr.com/photos/wangjs/184527714/',
				cc_author_url: 'https://www.flickr.com/photos/wangjs/',
				cc_author: 'Jiashiang',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Tenaya Lake',
				image_url:
					'https://www.travelimager.com/images/california/California-Yosemite-National-Park-Tenaya-Lake.jpg',
				image_alt:
					'View over Tenaya Lake from the lakeshore with tall rocky mountains in background in Yosemite National Park',

				cc_image_url: 'https://www.flickr.com/photos/bumeister/5146847717/',
				cc_author_url: 'https://www.flickr.com/photos/bumeister/',
				cc_author: 'John Buie',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Wapama Falls (Hetch Hetchy Valley)',
				image_url:
					'https://www.travelimager.com/images/california/California-Yosemite-National-Park-Wapama-Falls.jpg',
				image_alt:
					'Elegant exterior of the Museum of Applied Arts in Budapest, Hungary',

				cc_image_url: 'https://www.flickr.com/photos/wolfgrams/6958650270/',
				cc_author_url: 'https://www.flickr.com/photos/wolfgrams/',
				cc_author: 'Derek Wolfgram',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	upper_central_california_coast: {
		id: 'upper_central_california_coast',
		itineraries: '',
		destinationName: 'Upper Central California Coast & Santa Cruz',
		stateName: null,
		region: 'usa',
		anchor_tag: 'upper-central-california-coast',
		destination_link:
			'/destinations/california/upper-central-california-coast-and-santa-cruz-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/zLrRQ1B6G8H2',
			all_attractions: 'https://goo.gl/maps/twC1EvH3xaL2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Upper Central California Coast',
				tab_content: `<p>Along the Upper Central Coast near Carmel-By-The-Sea is the incredibly scenic seaside landscape of Point Lobos with its vibrant coves and wondrous rugged coastline. Between Carmel-By-the-Sea and Monterey is the scenic 17 Mile Drive, which hosts sights such as the Lone Cypress and Bird Rock Vista Point.</p>
                <p>The city of Monterey is home to the world-famous Monterey Bay Aquarium, which was recreated in the animated movie Finding Nemo 2. On the other side of Monterey Bay is the city of Santa Cruz, which is known for the iconic waterfront amusement park of the Santa Cruz Beach Boardwalk. Santa Cruz also hosts a striking natural sea arch.</p>
                <p>Along the coastline between San Francisco and Santa Cruz are several stunning beaches, including Shark Fin Cove which is named for the massive rock in the middle of the cove which closely resembles a shark fin.</p>`
			}
		],
		attractions: [
			{
				attraction: 'China Cove (Point Lobos)',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Carmel-By-The-Sea-Point-Lobos-China-Cove.jpg',
				image_alt:
					'Overlooking the vibrant turquoise waters and exotic cliff formations of China Cove at Point Lobos near Carmel-by-the-Sea',

				cc_image_url:
					'https://www.flickr.com/photos/86755183@N04/8272705441/in/photolist-dB2M7r-fQmUNX-VPAyx3-8QAYZr-SrMZ5c-pRaEt-CsfvzP-fK8gQh-VgVf82-8PJx4P-8MXhxt-2JYdG9-8hAaqE-8PJxJa-8jCsG9-dYJEkb-5PEdqB-qVbBDA-8PMCh5-gfd8V5-8PMCBw-gfoeR4-8iPuUt-aDUt6u-Rp8Jzt-pomqZj-6HkHQT-dYtA7g-2JY95y-8iSGyL-R6Fx7U-9aeCYs-8iPw5X-fRPTaa-S9Ajjw-gPG7Aj-RNCZ51-8KYG93-8PMBwy-R9jRw2-p8Us6z-8PJxfZ-S9A5GS-N6wSRb-Kf41Ce-j4343S-dk4G1C-dYzib9-coxNfm-8NFsKy',
				cc_author_url: 'https://www.flickr.com/photos/86755183@N04/',
				cc_author: 'Fred Moore',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Santa Cruz Boardwalk',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Santa-Cruz-Santa-Cruz-Beach-Boardwalk-Rollercoaster.jpg',
				image_alt:
					"Massive rollercoaster along the Santa Cruz Boardwalk theme park on the beach in Santa Cruz along California's Central Coast",

				cc_image_url:
					'https://www.flickr.com/photos/a_little_brighter/14176319308/in/photolist-nAHkQq-7rQ689-2TXLXy-8xr45r-5gYyM1-5pon5N-nRtDWQ-fsKtQ5-mSwYtA-dvEcW2-fuxHHy-9BRQt3-q1wn8s-8qHYPm-nQPCa8-8Hip3U-q1wnAw-rvspq-6zUmW4-actSEY-Mqdr-htrKpF-nQPpMc-29K3j5-sCLGdj-5Yom5V-fsv8wg-nwxixH-nQPhAD-amRuoY-oxU64E-6K2PGq-nwx4Nj-fT4f3S-nwxxeR-TAoBAC-dz3Kw6-ot2SnU-8fevWQ-a6FuRy-aorLTB-2nrzor-nwwD7A-gGCA5V-qit1gp-6K2FBS-nLYTeq-nNRVDJ-5TLHTZ-nwx8Ww/',
				cc_author_url: 'https://www.flickr.com/photos/a_little_brighter/',
				cc_author: 'Harold Litwiler',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Monterey Bay Aquarium',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Monterey-Monterey-Bay-Aquarium-Bayside-Pool.jpg',
				image_alt:
					'Large outdoor natural aquarium of Bayside Pool at the famous Monterey Bay Aquarium in Monterey, California',

				cc_image_url:
					'https://www.flickr.com/photos/cfavero/18658486385/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/cfavero/',
				cc_author: 'Chris Favero',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Lone Cypress (17 Mile Drive)',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Pebble-Beach-17-Mile-Drive-Lone-Cypress-Tree.jpg',
				image_alt:
					'Beautiful view of a Cypress Tree atop a coastal rock known as the Lone Cypress seen along 17 Mile Drive near Pebble Beach',

				cc_image_url:
					'https://www.flickr.com/photos/tanyaspillane/2614708793/in/photolist-4Z44Q6-eeF2rS-849aqY-oG6gbY-9SgHuC-4j5cmM-cqHD1w-5bUhkK-7MEJ7Q-LC9QoF-LiGK89-LDnDvC-LiKiaS-LntKaL-LC9SWX-LCadsR-LDoeCq-LiMg55-KN5vny-LiLj8G-LC8E8T-LK8BJM-KN6d1Y-LC9YsX-4Rzayg-849aEU-bXTTpd-7Muhon-eSg9md-pCr3Vo-4RxdnB-5hvCaR-4RDnnS-4Rwgr2-aLQKLp-4g8B7q-ajnUvE-ajk6An-bXTZdS-awFCS-4RDqz1-8iPRbR-7EQ5XS-bXTURm-bXTWWf-bLKiXK-wffRsr-6A4Fr1-wffQJn-wePEqF',
				cc_author_url: 'https://www.flickr.com/photos/tanyaspillane/',
				cc_author: 'Arkansas ShutterBug',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Panther Beach',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Davenport-Panther-Beach.jpg',
				image_alt:
					'Sandy Panther Beach below the sandstone-colored cliffs near Davenport, California',

				cc_image_url:
					'https://www.flickr.com/photos/sumeetjain/3699965796/in/photolist-6CXhVJ-bFjAXz-bspHTs-b41jQt-aHMTRX-eTUgCs-3ftmy-eFPcr3-eTynPa-5sQ8QE-6CXhFE-6rfDhj-6CT9ma-6CT95i-6rfDLA-6CT9gi-6rbuhg-6rbtQK-6rfD7u-26LYL-26LYK-26LZq-26LZt-26LZv-26LYS-26LZn-GifBSs-26LZs-26LZx-26LZr-6GiSiq-26LZJ-e8DUgU-26LZK-NUvz5d-bspHMY-bspHSA-bspHPq-bspHQG-bFjAQR-3t2bz-85D9Yc-aSr9T4-6rbumX-26LZz-aHMLR2-26LZw-6GeL6H-26LZN-e8DVWs',
				cc_author_url: 'https://www.flickr.com/photos/sumeetjain/',
				cc_author: 'Sumeet Jain',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Shark Fin Cove',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Davenport-Shark-Fin-Cove.jpg',
				image_alt:
					'Stunning shark fin-shaped rock sticking out of the ocean surrounded by cliffs at Shark Fin Cove near Davenport, California',

				cc_image_url:
					'https://www.flickr.com/photos/ssedov/25739780863/in/photolist-G8NygK-TV7x9P-FwrcJA-Fpt2y3-tU44zN-tW3dvQ-b8K2jx-Fdx76e-sZnrRw/',
				cc_author_url: 'https://www.flickr.com/photos/ssedov/',
				cc_author: 'Stanislav Sedov',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	upper_central_california_coast_sb: {
		id: 'upper_central_california_coast_sb',
		itineraries: '',
		destinationName: 'Upper Central California Coast & Santa Cruz (Southbound)',
		stateName: null,
		region: 'usa',
		anchor_tag: 'central-coast-california',
		destination_link:
			'/destinations/california/upper-central-california-coast-and-santa-cruz-southbound-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/zLrRQ1B6G8H2',
			all_attractions: 'https://goo.gl/maps/twC1EvH3xaL2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Upper Central California Coast',
				tab_content: `<p>Along the Upper Central Coast near Carmel-By-The-Sea is the incredibly scenic seaside landscape of Point Lobos with its vibrant coves and wondrous rugged coastline. Between Carmel-By-the-Sea and Monterey is the scenic 17 Mile Drive, which hosts sights such as the Lone Cypress and Bird Rock Vista Point.</p>
                <p>The city of Monterey is home to the world-famous Monterey Bay Aquarium, which was recreated in the animated movie Finding Nemo 2. On the other side of Monterey Bay is the city of Santa Cruz, which is known for the iconic waterfront amusement park of the Santa Cruz Beach Boardwalk. Santa Cruz also hosts a striking natural sea arch.</p>
                <p>Along the coastline between San Francisco and Santa Cruz are several stunning beaches, including Shark Fin Cove which is named for the massive rock in the middle of the cove which closely resembles a shark fin.</p>`
			}
		],
		attractions: [
			{
				attraction: 'China Cove (Point Lobos)',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Carmel-By-The-Sea-Point-Lobos-China-Cove.jpg',
				image_alt:
					'Overlooking the vibrant turquoise waters and exotic cliff formations of China Cove at Point Lobos near Carmel-by-the-Sea',

				cc_image_url:
					'https://www.flickr.com/photos/86755183@N04/8272705441/in/photolist-dB2M7r-fQmUNX-VPAyx3-8QAYZr-SrMZ5c-pRaEt-CsfvzP-fK8gQh-VgVf82-8PJx4P-8MXhxt-2JYdG9-8hAaqE-8PJxJa-8jCsG9-dYJEkb-5PEdqB-qVbBDA-8PMCh5-gfd8V5-8PMCBw-gfoeR4-8iPuUt-aDUt6u-Rp8Jzt-pomqZj-6HkHQT-dYtA7g-2JY95y-8iSGyL-R6Fx7U-9aeCYs-8iPw5X-fRPTaa-S9Ajjw-gPG7Aj-RNCZ51-8KYG93-8PMBwy-R9jRw2-p8Us6z-8PJxfZ-S9A5GS-N6wSRb-Kf41Ce-j4343S-dk4G1C-dYzib9-coxNfm-8NFsKy',
				cc_author_url: 'https://www.flickr.com/photos/86755183@N04/',
				cc_author: 'Fred Moore',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Santa Cruz Boardwalk',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Santa-Cruz-Santa-Cruz-Beach-Boardwalk-Rollercoaster.jpg',
				image_alt:
					"Massive rollercoaster along the Santa Cruz Boardwalk theme park on the beach in Santa Cruz along California's Central Coast",

				cc_image_url:
					'https://www.flickr.com/photos/a_little_brighter/14176319308/in/photolist-nAHkQq-7rQ689-2TXLXy-8xr45r-5gYyM1-5pon5N-nRtDWQ-fsKtQ5-mSwYtA-dvEcW2-fuxHHy-9BRQt3-q1wn8s-8qHYPm-nQPCa8-8Hip3U-q1wnAw-rvspq-6zUmW4-actSEY-Mqdr-htrKpF-nQPpMc-29K3j5-sCLGdj-5Yom5V-fsv8wg-nwxixH-nQPhAD-amRuoY-oxU64E-6K2PGq-nwx4Nj-fT4f3S-nwxxeR-TAoBAC-dz3Kw6-ot2SnU-8fevWQ-a6FuRy-aorLTB-2nrzor-nwwD7A-gGCA5V-qit1gp-6K2FBS-nLYTeq-nNRVDJ-5TLHTZ-nwx8Ww/',
				cc_author_url: 'https://www.flickr.com/photos/a_little_brighter/',
				cc_author: 'Harold Litwiler',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Monterey Bay Aquarium',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Monterey-Monterey-Bay-Aquarium-Bayside-Pool.jpg',
				image_alt:
					'Large outdoor natural aquarium of Bayside Pool at the famous Monterey Bay Aquarium in Monterey, California',

				cc_image_url:
					'https://www.flickr.com/photos/cfavero/18658486385/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/cfavero/',
				cc_author: 'Chris Favero',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Lone Cypress (17 Mile Drive)',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Pebble-Beach-17-Mile-Drive-Lone-Cypress-Tree.jpg',
				image_alt:
					'Beautiful view of a Cypress Tree atop a coastal rock known as the Lone Cypress seen along 17 Mile Drive near Pebble Beach',

				cc_image_url:
					'https://www.flickr.com/photos/tanyaspillane/2614708793/in/photolist-4Z44Q6-eeF2rS-849aqY-oG6gbY-9SgHuC-4j5cmM-cqHD1w-5bUhkK-7MEJ7Q-LC9QoF-LiGK89-LDnDvC-LiKiaS-LntKaL-LC9SWX-LCadsR-LDoeCq-LiMg55-KN5vny-LiLj8G-LC8E8T-LK8BJM-KN6d1Y-LC9YsX-4Rzayg-849aEU-bXTTpd-7Muhon-eSg9md-pCr3Vo-4RxdnB-5hvCaR-4RDnnS-4Rwgr2-aLQKLp-4g8B7q-ajnUvE-ajk6An-bXTZdS-awFCS-4RDqz1-8iPRbR-7EQ5XS-bXTURm-bXTWWf-bLKiXK-wffRsr-6A4Fr1-wffQJn-wePEqF',
				cc_author_url: 'https://www.flickr.com/photos/tanyaspillane/',
				cc_author: 'Arkansas ShutterBug',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Panther Beach',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Davenport-Panther-Beach.jpg',
				image_alt:
					'Sandy Panther Beach below the sandstone-colored cliffs near Davenport, California',

				cc_image_url:
					'https://www.flickr.com/photos/sumeetjain/3699965796/in/photolist-6CXhVJ-bFjAXz-bspHTs-b41jQt-aHMTRX-eTUgCs-3ftmy-eFPcr3-eTynPa-5sQ8QE-6CXhFE-6rfDhj-6CT9ma-6CT95i-6rfDLA-6CT9gi-6rbuhg-6rbtQK-6rfD7u-26LYL-26LYK-26LZq-26LZt-26LZv-26LYS-26LZn-GifBSs-26LZs-26LZx-26LZr-6GiSiq-26LZJ-e8DUgU-26LZK-NUvz5d-bspHMY-bspHSA-bspHPq-bspHQG-bFjAQR-3t2bz-85D9Yc-aSr9T4-6rbumX-26LZz-aHMLR2-26LZw-6GeL6H-26LZN-e8DVWs',
				cc_author_url: 'https://www.flickr.com/photos/sumeetjain/',
				cc_author: 'Sumeet Jain',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Shark Fin Cove',
				image_url:
					'https://www.travelimager.com/images/california/California-Central-Coast-Davenport-Shark-Fin-Cove.jpg',
				image_alt:
					'Stunning shark fin-shaped rock sticking out of the ocean surrounded by cliffs at Shark Fin Cove near Davenport, California',

				cc_image_url:
					'https://www.flickr.com/photos/ssedov/25739780863/in/photolist-G8NygK-TV7x9P-FwrcJA-Fpt2y3-tU44zN-tW3dvQ-b8K2jx-Fdx76e-sZnrRw/',
				cc_author_url: 'https://www.flickr.com/photos/ssedov/',
				cc_author: 'Stanislav Sedov',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	upper_northern_california_coast: {
		id: 'upper_northern_california_coast',
		itineraries: '',
		destinationName: 'Upper Northern California Coast & Redwoods',
		stateName: null,
		region: 'usa',
		anchor_tag: 'upper-northern-california-coast',
		destination_link:
			'/destinations/california/upper-northern-california-coast-and-redwoods-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/86UgERonuT92',
			all_attractions: 'https://goo.gl/maps/DBrt3F4aR832'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Upper Northern California Coast',
				tab_content: `<p>California's Upper Northern Coast is located along Highway 101, which passes through vast redwood forests including Humboldt, Prairie Creek, and Jedidiah Smith Redwoods State Parks. All of these state parks offer scenic hiking trails through the stunning dense redwood forests. Humboldt Redwoods State Park hosts a 32 mile (51 km) long alternate route, which offers much better views of the towering redwood trees than the main highway.</p>
                <p>Within the Prairie Creek Redwoods State Park are two incredible trails, including the Fern Canyon trail which ventures alongside a rocky stream through a vibrant canyon, surrounded by lush green walls on both sides. The other trail is the Lady Bird Johnson Grove Trail, which is exceptionally beautiful and mystical when visited during the early morning fog.</p>
                <p>Additionally this route offers picturesque views over the Trinidad Harbor, as well as the chance to visit the lovely Battery Point Lighthouse, which is cut-off from the mainland during high tide.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Lady Bird Johnson Grove Trail (Prairie Creek)',
				image_url:
					'https://www.travelimager.com/images/california/California-Upper-Northern-Coast-Lady-Bird-Johnson-Grove-Trail.jpg',
				image_alt:
					'Morning fog among the Prairie Creek Redwoods trees seen along the Lady Bird Johnson Grove Trail of Northern California',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Battery Point Lighthouse (Crescent City)',
				image_url:
					'https://www.travelimager.com/images/california/California-Upper-Northern-Coast-Battery-Point-Lighthouse.jpg',
				image_alt:
					'Low tide view of the beautiful Battery Point Lighthouse which becomes an island at high tide in Crescent City',

				cc_image_url: 'https://www.flickr.com/photos/39908901@N06/23640862215/',
				cc_author_url: 'https://www.flickr.com/photos/39908901@N06/',
				cc_author: 'm01229',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Avenue of the Giants (Redwoods National Park)',
				image_url:
					'https://www.travelimager.com/images/california/California-Upper-Northern-Coast-Avenue-of-the-Giants.jpg',
				image_alt:
					'Massive redwood trees towering above the steeet of the Avenue of the Giants in Northern California',

				cc_image_url:
					'https://www.flickr.com/photos/kirt_edblom/15331690199/in/photolist-pmNVmc-6nD8K-o4n6iU-oxnkW1-prcbc6-ch7m3m-ch7EwG-ch7zn7-8wqUDt-ch7DMJ-ch7zVU-ch7pX1-ch7mHJ-ch7ngN-ch7Ehf-ch7ymw-8wtL7f-ch7vwE-WU9obQ-38FsBb-8wtHcC-uGbrX-ampZLL-fERQUh-pCR8iv-byuBwu-pCNKwD-93fCNY-6GCfLF-oxnmio-jhermP-e7knms-ox87wH-byuBFw-WPfcae-X23DUT-ctuGWA-pnLPWR-9xXAvE-ppCsyY-apjJsS-amncBx-pEGAja-oKXqqJ-onKtRs-RvNVj1-R7nimN-9nq2eL-6nCXM-6nEbW',
				cc_author_url: 'https://www.flickr.com/photos/kirt_edblom/',
				cc_author: 'Kirt Edblom',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Trinidad Memorial Lighthouse',
				image_url:
					'https://www.travelimager.com/images/california/California-Upper-Northern-Coast-Trinidad-Memorial-Lighthouse.jpg',
				image_alt:
					'Lovely tiny white and red Trinidad Memorial Lighthouse with many boats and small rock island of Trinidad Bay in background',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Simpson Reed Grove Trail (Jedidiah Smith)',
				image_url:
					'https://www.travelimager.com/images/california/California-Upper-Northern-Coast-Simpson-Reed-Grove-Trail.jpg',
				image_alt:
					'Dirt path beneath the towering redwoods of the Simpson Reed Grove Trail of Jedidiah Smite Redwoods State Park',

				cc_image_url:
					'https://www.flickr.com/photos/paulhami/3871310624/in/photolist-6U6tLU-d16Ms1-a4upXs-e1S76a-kodco-d16vqu-koezN-d16xiY-6vmKrA-ko6pb-6U6r29-d178ds-koekn-d16nVo-kocPY-kodHk-d16uPU-kopFj-6U6kfs-4C2Wa1-d16xWU-68sY5f-d177yA-kodPj-ko6GG-koeaB-68n1Cg-6okt1U-d174kE-9UEg4y-ko6wP-d16sLd-d16JP9-6JXM6m-d16owC-7mmKaU-6JTw7R-ko6R6-a4uof7-komUu-d172Zf-d179ZW-d179o1-6U2sqt-d16tqf-d176ew-ko6AE-9UEfks-ko6Qq-ko6vM',
				cc_author_url: 'https://www.flickr.com/photos/paulhami/',
				cc_author: 'Paul Hamilton',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Fern Canyon Trail (Prairie Creek)',
				image_url:
					'https://www.travelimager.com/images/california/California-Upper-Northern-Coast-Fern-Canyon.jpg',
				image_alt:
					'Vibrant lush green walls of Fern Canyon above a rocky stream at Prairie Creek Redwoods State Park',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	upper_northern_california_coast_sb: {
		id: 'upper_northern_california_coast_sb',
		itineraries: '',
		destinationName: 'Upper Northern California Coast & Redwoods (Southbound)',
		stateName: null,
		region: 'usa',
		anchor_tag: 'northern-coast-california',
		destination_link:
			'/destinations/california/upper-northern-california-coast-and-redwoods-southbound-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/86UgERonuT92',
			all_attractions: 'https://goo.gl/maps/DBrt3F4aR832'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Upper Northern California Coast',
				tab_content: `<p>California's Upper Northern Coast is located along Highway 101, which passes through vast redwood forests including Humboldt, Prairie Creek, and Jedidiah Smith Redwoods State Parks. All of these state parks offer scenic hiking trails through the stunning dense redwood forests. Humboldt Redwoods State Park hosts a 32 mile (51 km) long alternate route, which offers much better views of the towering redwood trees than the main highway.</p>
                <p>Within the Prairie Creek Redwoods State Park are two incredible trails, including the Fern Canyon trail which ventures alongside a rocky stream through a vibrant canyon, surrounded by lush green walls on both sides. The other trail is the Lady Bird Johnson Grove Trail, which is exceptionally beautiful and mystical when visited during the early morning fog.</p>
                <p>Additionally this route offers picturesque views over the Trinidad Harbor, as well as the chance to visit the lovely Battery Point Lighthouse, which is cut-off from the mainland during high tide.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Lady Bird Johnson Grove Trail (Prairie Creek)',
				image_url:
					'https://www.travelimager.com/images/california/California-Upper-Northern-Coast-Lady-Bird-Johnson-Grove-Trail.jpg',
				image_alt:
					'Morning fog among the Prairie Creek Redwoods trees seen along the Lady Bird Johnson Grove Trail of Northern California',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Battery Point Lighthouse (Crescent City)',
				image_url:
					'https://www.travelimager.com/images/california/California-Upper-Northern-Coast-Battery-Point-Lighthouse.jpg',
				image_alt:
					'Low tide view of the beautiful Battery Point Lighthouse which becomes an island at high tide in Crescent City',

				cc_image_url: 'https://www.flickr.com/photos/39908901@N06/23640862215/',
				cc_author_url: 'https://www.flickr.com/photos/39908901@N06/',
				cc_author: 'm01229',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Avenue of the Giants (Redwoods National Park)',
				image_url:
					'https://www.travelimager.com/images/california/California-Upper-Northern-Coast-Avenue-of-the-Giants.jpg',
				image_alt:
					'Massive redwood trees towering above the steeet of the Avenue of the Giants in Northern California',

				cc_image_url:
					'https://www.flickr.com/photos/kirt_edblom/15331690199/in/photolist-pmNVmc-6nD8K-o4n6iU-oxnkW1-prcbc6-ch7m3m-ch7EwG-ch7zn7-8wqUDt-ch7DMJ-ch7zVU-ch7pX1-ch7mHJ-ch7ngN-ch7Ehf-ch7ymw-8wtL7f-ch7vwE-WU9obQ-38FsBb-8wtHcC-uGbrX-ampZLL-fERQUh-pCR8iv-byuBwu-pCNKwD-93fCNY-6GCfLF-oxnmio-jhermP-e7knms-ox87wH-byuBFw-WPfcae-X23DUT-ctuGWA-pnLPWR-9xXAvE-ppCsyY-apjJsS-amncBx-pEGAja-oKXqqJ-onKtRs-RvNVj1-R7nimN-9nq2eL-6nCXM-6nEbW',
				cc_author_url: 'https://www.flickr.com/photos/kirt_edblom/',
				cc_author: 'Kirt Edblom',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Trinidad Memorial Lighthouse',
				image_url:
					'https://www.travelimager.com/images/california/California-Upper-Northern-Coast-Trinidad-Memorial-Lighthouse.jpg',
				image_alt:
					'Lovely tiny white and red Trinidad Memorial Lighthouse with many boats and small rock island of Trinidad Bay in background',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Simpson Reed Grove Trail (Jedidiah Smith)',
				image_url:
					'https://www.travelimager.com/images/california/California-Upper-Northern-Coast-Simpson-Reed-Grove-Trail.jpg',
				image_alt:
					'Dirt path beneath the towering redwoods of the Simpson Reed Grove Trail of Jedidiah Smite Redwoods State Park',

				cc_image_url:
					'https://www.flickr.com/photos/paulhami/3871310624/in/photolist-6U6tLU-d16Ms1-a4upXs-e1S76a-kodco-d16vqu-koezN-d16xiY-6vmKrA-ko6pb-6U6r29-d178ds-koekn-d16nVo-kocPY-kodHk-d16uPU-kopFj-6U6kfs-4C2Wa1-d16xWU-68sY5f-d177yA-kodPj-ko6GG-koeaB-68n1Cg-6okt1U-d174kE-9UEg4y-ko6wP-d16sLd-d16JP9-6JXM6m-d16owC-7mmKaU-6JTw7R-ko6R6-a4uof7-komUu-d172Zf-d179ZW-d179o1-6U2sqt-d16tqf-d176ew-ko6AE-9UEfks-ko6Qq-ko6vM',
				cc_author_url: 'https://www.flickr.com/photos/paulhami/',
				cc_author: 'Paul Hamilton',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Fern Canyon Trail (Prairie Creek)',
				image_url:
					'https://www.travelimager.com/images/california/California-Upper-Northern-Coast-Fern-Canyon.jpg',
				image_alt:
					'Vibrant lush green walls of Fern Canyon above a rocky stream at Prairie Creek Redwoods State Park',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	yosemite_valley: {
		id: 'yosemite_valley',
		itineraries: '',
		destinationName: 'Yosemite Valley',
		stateName: 'California',
		region: 'usa',
		anchor_tag: 'yosemite-national-park-california',
		destination_link:
			'/destinations/california/yosemite-valley-yosemite-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/skMyyQCCvaD2',
			all_attractions: 'https://goo.gl/maps/DJocZYAULRp'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Yosemite Valley Attractions',
				tab_content: `<p>The Yosemite Valley of Yosemite National Park is one of the most beautiful valleys on Earth with its towering canyon walls including El Capitan, which towers 3,000 feet (900 m) over the valley floor.</p>
                <p>The Yosemite Valley is filled with lush dense forest and abundant wildlife, surrounded by incredible geological formations such as Half Dome. The valley also hosts several massive waterfalls, including Bridalveil Falls, Vernal Falls, Nevada Falls, and the behemoth Yosemite Falls. Many of these waterfalls and formations are among the Yosemite Valley's vast array of world-class hiking trails.</p>
                <p>Other amazing features of the valley include the picturesque Mirror Lake, and the serene meadows in which you can relax and enjoy the park's natural splendor. The valley is highly developed yet still quite wild, with accommodations and many roads. Many easily-accessible yet breathtaking viewpoints such as Tunnel View, Valley View, and the sweeping high altitude views from atop Glacier Point are connected via Yosemite Valley's roads.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Upper Yosemite Falls',
				image_url:
					'https://www.travelimager.com/images/california/California-Yosemite-National-Park-Upper-Yosemite-Falls.jpg',
				image_alt:
					'View of massive Upper Yosemite Falls and part of Lower Yosemite Falls seen from a meadow in Yosemite Valley',

				cc_image_url: 'https://www.flickr.com/photos/rotron/33341989483/',
				cc_author_url: 'https://www.flickr.com/photos/rotron/',
				cc_author: 'Roshan Vyas',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Valley View',
				image_url:
					'https://www.travelimager.com/images/california/California-Yosemite-National-Park-Valley-View.jpg',
				image_alt:
					'View of El Capitan and towering sheer cliffs of Yosemite Valley from the Valley View viewpoint behind the river',

				cc_image_url: 'https://www.flickr.com/photos/zexonaz/14859871127/',
				cc_author_url: 'https://www.flickr.com/photos/zexonaz/',
				cc_author: 'ZexonaZ',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Glacier Point',
				image_url:
					'https://www.travelimager.com/images/california/California-Yosemite-National-Park-Glacier-Point.jpg',
				image_alt:
					'Stunning view overlooking Yosemite Valley, Half Dome, Vernal Falls, and Nevada Falls from atop Glacier Point',

				cc_image_url: 'https://www.flickr.com/photos/pjs42/26977455475/',
				cc_author_url: 'https://www.flickr.com/photos/pjs42/',
				cc_author: 'Peter & Michelle S',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Nevada Falls (Mist Trail)',
				image_url:
					'https://www.travelimager.com/images/california/California-Yosemite-National-Park-Nevada-Falls.jpg',
				image_alt:
					'Massive and powerful Nevada Falls flowing over the cliffs beside the Liberty Cap in Yosemite Valley seen from John Muir Trail',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Bridalveil Falls',
				image_url:
					'https://www.travelimager.com/images/california/California-Yosemite-National-Park-Bridalveil-Falls.jpg',
				image_alt:
					'Looking up at the massive Bridalveil Falls flowing over the enormous cliff in Yosemite Valley',

				cc_image_url: 'https://www.flickr.com/photos/jsjgeology/19848610670/',
				cc_author_url: 'https://www.flickr.com/photos/jsjgeology/',
				cc_author: 'James St. John',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Lower Yosemite Falls',
				image_url:
					'https://www.travelimager.com/images/california/California-Yosemite-National-Park-Lower-Yosemite-Falls.jpg',
				image_alt:
					"Powerful Lower Yosemite Falls seen up-close within Yosemite National Park's Yosemite Valley",

				cc_image_url: 'https://www.flickr.com/photos/rotron/33768337050/',
				cc_author_url: 'https://www.flickr.com/photos/rotron/',
				cc_author: 'Roshan Vyas',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			}
		]
	},

	aspen_glenwood_springs: {
		id: 'aspen_glenwood_springs',
		itineraries: '',
		destinationName: 'Denver to Glenwood Springs & Aspen',
		stateName: 'Colorado',
		region: 'usa',
		anchor_tag: 'aspen-and-glenwood-springs-colorado',
		destination_link:
			'/destinations/colorado/aspen-and-glenwood-springs-to-denver-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/Z9dPQerWQchcUjZs5',
			all_attractions: 'https://goo.gl/maps/sJyGAFQvZGbapwS38'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Denver to Aspen',
				tab_content: `<p>The route between the cities of Denver and Aspen/Glenwood Springs passes through a vast wilderness of forests and mountain. Just west of Denver is Mount Evans, one of the few high altitude peaks of the Rocky Mountains which has a road leading to the summit, passing by Echo Lake and beautiful Summit Lake. From the top you can enjoy stunning views over the Chicago Lakes and surrounding landscape. Nearby you can admire the St. Mary's Glacier and Saint Marys Lake which it feeds.</p>
                <p>Continue along the highway, taking detours to the Loveland Pass which sits atop the Continental Divide, as well as the picturesque Dillon Reservoir in the city of Silverthorne. The scenic route to Aspen includes the majestic Independence Pass and the mesmerizing Grottos Trail, which hosts slick intricate grotto caves carved out by ice and waterfalls.</p>`
			},
			{
				tab_title: 'Aspen',
				tab_content: `<p>Aspen is famous for its ski resorts, however the town is also very beautiful and hosts excellent hiking in the warmer months. Near Aspen you can hike around the gorgeous Maroon Lake, which sits in front of the magnificent Maroon Bells mountain peaks. On the other side of the Maroon Bells is the picturesque Crystal Mill, which is much easier to reach with a 4x4 vehicle, otherwise requiring a long hike.</p>`
			},
			{
				tab_title: 'Glenwood Springs',
				tab_content: `<p>North of Aspen is the city of Glenwood Springs, which sits within a stunning canyon. The city hosts several hot springs, including the massive outdoor Glenwood Hot Springs Pool, and Iron Mountain Hot Springs featuring countless outdoor mineral water hot tubs along the Colorado Riverfront. Both hot springs are a great place to relax and enjoy the natural surrounding scenery.</p>
                <p>Take the tramway above the city to the Glenwood Caverns Adventure Park for gorgeous views over the city, as well as cave tours and thrill rides. Nearby is one of the most popular hikes in Colorado, the Hanging Lake Trail, whichn required advanced reservations to hike. Hanging Lake is deep blue-green in color and breathtakingly beautiful, with waterfalls flowing into it.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Maroon Lake (Aspen)',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-White-River-National-Forest-Aspen-Maroon-Lake.jpg',
				image_alt:
					'Reflection of the Maroon Bells mountains of Aspen in Maroon Lake set amongst fall colors of White River National Forest',

				cc_image_url: 'https://www.flickr.com/photos/snowpeak/13493355475',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Mount Evans Chicago Lakes View',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Arapaho-and-Roosevelt-National-Forests-Mount-Evans-Wilderness-Mt-Evans-View-of-Chicago-Lakes.jpg',
				image_alt:
					'Looking down over the Chicago Lakes from atop Mount Evans, one of the Rocky Mountains of Colorado located near Denver ',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Chicago_Lakes,_Mount_Evans_-_panoramio.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Chicago_Lakes,_Mount_Evans_-_panoramio.jpg&action=history',
				cc_author: 'Doss Imaging',

				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0'
			},

			{
				attraction: 'Hanging Lake (Glenwood Springs)',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-White-River-National-Forest-Glenwood-Springs-Hanging-Lake.jpg',
				image_alt:
					'Vibrant colors of Hanging Lake with waterfalls flowing into it surrounded by lush greenery near Glenwood Springs, Colorado',

				cc_image_url: 'https://www.flickr.com/photos/rocketman80120/511739969/',
				cc_author_url: 'https://www.flickr.com/photos/rocketman80120/',
				cc_author: "Rick's Images",

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Maroon Bells Scenic Loop Trail (Aspen)',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-White-River-National-Forest-Aspen-Maroon-Bells-Scenic-Loop-Trail-View.jpg',
				image_alt:
					'Spring colors and Maroon Lake seen along the Maroon Bells Scenic Trail within the White River National Forest near Aspen',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Maroon_Bells_(11553)a.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Rhododendrites',
				cc_author: 'Rhododendrites',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Glenwood Caverns Adventure Park View',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-White-River-National-Forest-Glenwood-Sprins-Glenwood-Caverns-Adventure-Park-View.jpg',
				image_alt:
					'Overlooking Glenwood Springs surrounded by tall mountains from atop the Glenwood Caverns Adventure Park',

				cc_image_url:
					'https://www.flickr.com/photos/jasoncipriani/13892042896/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/jasoncipriani/',
				cc_author: 'Jason Cipriani',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Independence Pass',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-White-River-National-Forest-Twin-Lakes-Independence-Pass-View.jpg',
				image_alt:
					'Beautiful meadows seen along the Independence Pass near Twin Lakes and Aspen in the White River National Forest',

				cc_image_url: 'https://www.flickr.com/photos/donohermark/4790306067/',
				cc_author_url: 'https://www.flickr.com/photos/donohermark/',
				cc_author: 'Mark Donoher',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Crystal Mill',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-White-River-National-Forest-Crystal-Mill.jpg',
				image_alt:
					"Picturesque old wooden Crystal Mill perched atop the cliff beside a waterfall in Colorado's White River National Forest",

				cc_image_url: 'https://www.flickr.com/photos/lhanaphotography/6183699068',
				cc_author_url: 'https://www.flickr.com/photos/lhanaphotography/',
				cc_author: 'Max and Dee Bernt',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	black_canyon_of_the_gunnison: {
		id: 'black_canyon_of_the_gunnison',
		itineraries: '',
		destinationName: 'Black Canyon of the Gunnison & Million Dollar Highway',
		stateName: 'Colorado',
		region: 'usa',
		anchor_tag: 'black-canyon-of-the-gunnison-colorado',
		destination_link:
			'/destinations/colorado/black-canyon-of-the-gunnison-and-million-dollar-highway-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/UpLKLMX6Nb8Jt75G6',
			all_attractions: 'https://goo.gl/maps/GhiC6aBVkf32'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Black Canyon of the Gunnison',
				tab_content: `<p>Spend some time at the incredible Black Canyon of the Gunnison National Park in Western Colorado. This national park is centered around a deep and rugged crag-spire canyon gorge, which was carved out millions of years ago by the Gunnison River. The southern rim of the canyon is the more popular and developed side of the canyon, hosting striking viewpoints such as Gunnison Point, Pulpit Rock Overlook, Chasm View, Painted Wall View, and Warner Point.</p>`
			},
			{
				tab_title: 'Million Dollar Highway',
				tab_content: `<p>Afterwards drive south along Highway 550, which is named the Million Dollar Highway for its incredibly beautiful scenery. The highway passes through the extremely scenic town of Ouray, which hosts a hot spring pool complex surrounded by majestic mountains, as well as the Box Canyon Falls Park.</p>
                <p>The section between Ouray and Silverton is considered to be the most scenic portion of the Million Dollar Highway, surrounded my massive beautiful mountains, forests, and waterfalls, as well as abandoned mines. Silverton is a lovely and historic little town nestled in a tiny valley below the mountains. Also along the highway are several gorgeous glacial lakes you might consider hiking to, including Island Lake and Ice Lake.</p>
                <p>The city of Durango hosts the popular Durango and Silverton Narrow Gauge Railroad, which ventures alongside marvelous natural scenery. The town also has a charming Downtown historic district, and Durango is a popular destination as a base camp from which to visit nearby Mesa Verde National Park.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Painted Wall View',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Black-Canyon-of-the-Gunnison-National-Park-Painted-Wall-View.jpg',
				image_alt:
					"Incredible natural stripes across the walls seen from the Painted Wall View above Colorado's Black Canyon of the Gunnison",

				cc_image_url: 'https://www.flickr.com/photos/mobili/38841672072/',
				cc_author_url: 'https://www.flickr.com/photos/mobili/',
				cc_author: 'Mobilus in Mobili',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Pulpit Rock Overlook',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Black-Canyon-of-the-Gunnison-National-Park-Pulpit-Rock-Overlook.jpg',
				image_alt:
					'View over a wider section of the Black Canyon of the Gunnison with views of Gunnison River from Pulpit Rock Overlook',

				cc_image_url: 'https://www.flickr.com/photos/daveynin/9486142251/',
				cc_author_url: 'https://www.flickr.com/photos/daveynin/',
				cc_author: 'David Fulmer',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Million Dollar Highway (HWY 550)',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-San-Juan-National-Forest-Million-Dollar-Highway-Noon.jpg',
				image_alt:
					"Scenic stretch of the Million Dollar Highway 550 winding through a valley of Colorado's San Juan National Forest",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:16_21_2486_US_550.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:16_21_2486_US_550.jpg&action=history',
				cc_author: 'Dsdugan',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Yankee Girl Mine',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-San-Juan-National-Forest-Million-Dollar-Highway-Yankee-Girl-Mine.jpg',
				image_alt:
					"Abandoned Yankee Girl Mine, a tall wooden mine seen along Colorado's Million Dollar Highway in the San Juan National Forest",

				cc_image_url: 'https://www.flickr.com/photos/snowpeak/7603664124/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Ouray Hot Springs Pool',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Ouray-Ouray-Hot-Springs-Pool-View.jpg',
				image_alt:
					'Looking along the water of the outdoor Ouray Hot Springs Pool surrounded by steep mountains in Ouray, Colorado',

				cc_image_url:
					'https://www.flickr.com/photos/trickofthelight/9702540493/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/trickofthelight/',
				cc_author: 'trickofthelight',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Downtown Silverton Greene Street',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Silverton-Greene-Street-Main-Street.jpg',
				image_alt:
					"Historic buildings of Downtown Silverton's Greene Street below tall mountains, a stop along Colorado's Million Dollar Highway",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Downtown_Silverton,_Colorado.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Downtown_Silverton,_Colorado.jpg&action=history',
				cc_author: 'Alex Reinhart',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Ice Lake',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-San-Juan-National-Forest-Ice-Lake.jpg',
				image_alt:
					"Vibrant glowing light blue waters of Ice Lake below high elevation mountain peaks of Colorado's San Juan National Forest",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Ice_Lake_Silverton.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Ice_Lake_Silverton.jpg&action=history',
				cc_author: 'Dave Lyskawa',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	colorado_national_monument: {
		id: 'colorado_national_monument',
		itineraries: '',
		destinationName: 'Colorado National Monument',
		stateName: 'Colorado',
		region: 'usa',
		anchor_tag: 'colorado-national-monument-colorado',
		destination_link:
			'/destinations/colorado/colorado-national-monument-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/gsrxHdgkghiLSaQb6',
			all_attractions: 'https://goo.gl/maps/F9QgEM7TiP6VzXn7A'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Colorado N.M. Attractions',
				tab_content: `<p>Colorado National Monument is a stunning landscape of canyons and complex rock formations, located next to the Colorado River and the city of Grand Junction in Western Colorado, adjacent to the Utah border. Colorado National Monument is postioned about halfway between Moab and Glenwood Springs, about 1.5 hours by car from either city.</p>
                <p>The national monument is best known for its incredibly scenic road which follows along the canyon walls, offering countless aamzing viewpoints overlooking the beautiful landscape. Monument Canyon and Ute Canyon are some of the most photogenic stops in the park. There's also the possibility of hiking down within Monument Canyon.</p>
                <p>Next to Colorado National Monument are the McInnis Canyons, which are home to the second largest concentration of natural arches in the world, second only to the nearby Arches National Park of Utah.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Grand View (West)',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Colorado-National-Monument-Grand-View-West.jpg',
				image_alt:
					'Stunning view over the mesas and buttes of Monument Canyon from Grand View in Colorado National Monument of Western Colorado',

				cc_image_url: 'https://www.flickr.com/photos/58869428@N05/34667838504/',
				cc_author_url: 'https://www.flickr.com/photos/58869428@N05/',
				cc_author: 'Todd Petrie',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Coke Ovens Overlook',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Colorado-National-Monument-Coke-Ovens-Overlook.jpg',
				image_alt:
					'Amazing Coke Ovens rock formations of Monument Canyon in Colorado National Monument',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Co_nat_mon.jpg&action=history',
				cc_author_url: 'https://en.wikipedia.org/wiki/User:Bosman111',
				cc_author: 'Bosman111',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC-BY-SA 3.0',
				cc_license_gnu_url:
					'https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2',
				cc_license_gnu: 'GNU 1.2'
			},

			{
				attraction: 'Monument Canyon View',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Colorado-National-Monument-Monument-Canyon-View.jpg',
				image_alt:
					'Amazing view over many buttes, mesas, and rock pillars from the clifftop Monument Canyon View of Colorado National Monument',

				cc_image_url: 'https://www.flickr.com/photos/72213316@N00/4475645162/',
				cc_author_url: 'https://www.flickr.com/photos/72213316@N00/',
				cc_author: 'Frank Kovalchek',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Fruita Canyon View',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Colorado-National-Monument-Fruita-Canyon-View.jpg',
				image_alt:
					'Overlooking Rimrock Drive as it winds up Fruita Canyon at Colorado National Monument',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Fruita-canyon-view.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Fruita-canyon-view.jpg&action=history',
				cc_author: 'Jgoetter',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'East Rim Arch (Rattlesnake Arches)',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-McInnis-Canyons-Black-Ridge-Canyons-Wilderness-Rattlesnake-Arches-Trail-East-Rim-Arch-Behind.jpg',
				image_alt:
					'Golden hour glow of the backside of East Rim Arch along the Rattlesnake Arches Trail of the Black Ridge Canyons Wilderness',

				cc_image_url: 'https://www.flickr.com/photos/blmcolorado/49758424847/',
				cc_author_url: 'https://www.flickr.com/photos/blmcolorado/',
				cc_author: 'BLM-Colorado',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	colorado_springs: {
		id: 'colorado_springs',
		itineraries: '',
		destinationName: 'Colorado Springs',
		stateName: 'Colorado',
		region: 'usa',
		anchor_tag: 'colorado-springs-colorado',
		destination_link: '/destinations/colorado/colorado-springs-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/5tYQPcBK1y32',
			all_attractions: 'https://goo.gl/maps/r6hxg1fW9y42'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Colorado Springs',
				tab_content: `<p>The Colorado Springs area hosts many amazing natural and man-made attractions. The city's most iconic sight is the Garden of the Gods, a gorgeous landscape of striking steep red rock formations that you can walk amongst. Nearby is a similar area known as Red Rock Canyon which hosts more hiking opportunities.</p>`
			},
			{
				tab_title: 'Manitou Springs',
				tab_content: `<p>The suburb of Manitou Springs hosts the recreated pre-Colombian Manitou Cliff Dwellings, the Cave of the Winds Mountain Park, the Miramont Castle Chateau, and the Railway Station for the Pikes Peak Cog Train, which is set to re-open in 2021. Fortunately, it is still possible to reach the top of the famous Pikes Peak via car, enjoying sweeping panoramic views from the top.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Southwestern Colorado Springs is home to the elegant lakefront Broadmoor Hotel, as well as the Broadmoor Seven Falls Trail, which passes by seven waterfalls. Additionally this area hosts the Seven Bridges Trail alongside the North Cheyenne Creek, the highly rated Cheyenne Mountain Zoo, and the Will Rogers Shrine of the Sun hilltop tower.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Garden of the Gods',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Colorado-Springs-Garden-of-the-Gods.jpg',
				image_alt:
					"Stunning view of the famous red rocks of Colorado Springs's Garden of the Gods towering above the lush green landscape",

				cc_image_url:
					'https://www.flickr.com/photos/snowpeak/6174065038/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Broadmoor Seven Falls Trail',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Colorado-Springs-Broadmoor-Seven-Falls-Trail.jpg',
				image_alt:
					'Tall staircase ascending the canyon beside the tall waterfalls along the Broadmoor Seven Falls Trail in Colorado Springs',

				cc_image_url: 'https://www.flickr.com/photos/joevare/3744426670/',
				cc_author_url: 'https://www.flickr.com/photos/joevare/',
				cc_author: 'joevare',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Pikes Peak',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Colorado-Springs-Pikes-Peak.jpg',
				image_alt:
					'Overlooking the vast green forests and mountainous landscape of Colorado from atop Pikes Peak',

				cc_image_url:
					'https://www.flickr.com/photos/adifferentbrian/36106346260/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/adifferentbrian/',
				cc_author: 'adifferentbrian',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Red Rock Canyon Trails',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Colorado-Springs-Red-Rock-Canyon-Trails.jpg',
				image_alt:
					'Striking red rocks amongst the green landscape of the Red Rock Canyon Trails in Colorado Springs',

				cc_image_url:
					'https://www.flickr.com/photos/aryehalex/34853161440/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/aryehalex/',
				cc_author: 'Aryeh Alex',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Broadmoor Hotel',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Colorado-Springs-Broadmoor-Hotel.jpg',
				image_alt:
					'Bridge over a small lake leading to the lavish Broadmoor Hotel of Colorado Springs',

				cc_image_url: 'https://www.flickr.com/photos/davidcjones/8325077213/',
				cc_author_url: 'https://www.flickr.com/photos/davidcjones/',
				cc_author: 'David Jones',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	denver: {
		id: 'denver',
		itineraries: '',
		destinationName: 'Denver & Boulder',
		stateName: 'Colorado',
		region: 'usa',
		anchor_tag: 'denver-and-boulder-colorado',
		destination_link: '/destinations/colorado/denver-and-boulder-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/Cz1Hfujk6Vr',
			all_attractions: 'https://goo.gl/maps/VH1T9omkWs92'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Denver Attractions',
				tab_content: `<p>Denver is the capital city of Colorado and is located just east of Rocky Mountain National Park. The national park is adjacent to the suburb of Boulder. In Downtown Denver you'll find the historical Larimer Square, which hosts many shops, restaurants, and a thriving nightlife scene. Denver also hosts the impressive Denver Art Museum, as well as the lush Denver Botanic Gardens, which features many abstract and modern art pieces on display.</p>`
			},
			{
				tab_title: 'Greater Denver',
				tab_content: `<p>Just outside of Denver is the Red Rocks Amphitheater, a gorgeous outdoor venue surrounded by majestic red rock scenery. South of Denver you'll find Roxborough State Park with striking and dramatic red rock formations coming out of the ground, set amongst a beautiful landscape.</p>`
			},
			{
				tab_title: 'Boulder Attractions',
				tab_content: `<p>Boulder, Colorado hosts its own lovely downtown area, the Pearl Street Mall promenade. Just outside of Boulder you can enjoy fantastic views from the Sunrise Amphitheater and nearby Lost Gulch Overlook, which are set up in the mountains. Consider hiking to the incredible Royal Arch formation, or the scenic Rattlesnake Gulch Trail of Eldorado Canyon State Park.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Larimer Square (Denver)',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Denver-Boulder-Larimer-Square.jpg',
				image_alt:
					'Thousands of hanging lights at night along an historic street at Larimer Square in Downtown Denver, Colorado',

				cc_image_url: 'https://www.flickr.com/photos/geoliv/13995017808',
				cc_author_url: 'https://www.flickr.com/photos/geoliv/',
				cc_author: 'Geoff Livingston',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Red Rocks Amphitheater',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Denver-Boulder-Red-Rock-Amphitheater.jpg',
				image_alt:
					'Sunset view overlooking the Red Rocks Amphitheater near Denver, Colorado from the top row',

				cc_image_url:
					'https://www.flickr.com/photos/chris_pelliccione/10558219635/',
				cc_author_url: 'https://www.flickr.com/photos/chris_pelliccione/',
				cc_author: 'Chris Pelliccione',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Royal Arch Trail (Boulder)',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Denver-Boulder-Royal-Arch.jpg',
				image_alt:
					"Looking up at the stuinning Royal Arch formation which Boulder, Colorado's Royal Arch Trail traverses under",

				cc_image_url: 'https://www.flickr.com/photos/collins_family/37417921536/',
				cc_author_url: 'https://www.flickr.com/photos/collins_family/',
				cc_author: 'Chris Collins',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Fountain Valley Loop Trail (Roxborough)',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Denver-Boulder-Roxborough-State-Park-Fountain-Valley-Trail.jpg',
				image_alt:
					'Rock walls towering above the green landscape seen along Fountain Valley Loop Trail at Roxborough State Park in Colorado',

				cc_image_url: 'https://www.flickr.com/photos/gregw66/5974714678/',
				cc_author_url: 'https://www.flickr.com/photos/gregw66/',
				cc_author: 'Greg Willis',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Continental Divide Overlook (Eldorado Canyon)',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Denver-Boulder-Eldorado-Canyon-Continental-Divide-Overlook.jpg',
				image_alt:
					'Snowy moutnainous landscape admired from the Continental Divide Overlook at Eldorado Canyon State Park, Colorado',

				cc_image_url:
					'https://www.flickr.com/photos/lhanaphotography/6315191977/',
				cc_author_url: 'https://www.flickr.com/photos/lhanaphotography/',
				cc_author: 'Max and Dee Bernt',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	mesa_verde: {
		id: 'mesa_verde',
		itineraries: '',
		destinationName: 'Mesa Verde National Park',
		stateName: 'Colorado',
		region: 'usa',
		anchor_tag: 'mesa-verde-national-park-colorado',
		destination_link:
			'/destinations/colorado/mesa-verde-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/ZvrFKxeQre22',
			all_attractions: 'https://goo.gl/maps/BsbJ5FQdMtD2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Mesa Verde National Park',
				tab_content: `<p>Mesa Verde National Park is the largest archaeological preserve in the USA, containing a high concentration of very old and impressive Native American structures and sites. Be sure to pre-book ranger-led tours if you'd like to explore several of these amazing structures up-close, including the Long House, Balcony House, and Cliff Palace.</p>
                <p>The drive through the park is quite scenic with many great viewpoints to stop at along the way, such as the Montezuma Valley Overlook. The remote western portion of the national park hosts the stunning Long House and Step House ruins.</p>
                <p>Along the park's southern road you'll encounter the Chapin Mesa Archaeological Museum as well as the rest of the park's main ruins, including the Coyote Village, Far View House, Spruce Tree House, Square Tower House, Cliff Palace, and Balcony House among others. In addition you'll find countless smaller structures and many amazing views overlooking the cliff dwelling-filled canyons.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>After enjoying Mesa Verde you might like to visit the popular Four Corners Monument where four US states meet at one point. Another extremely impressive site in the Mesa Verde area is Aztec Ruins National Monument, which features the ruins of a vast Puebloan (not Aztec) structure built between the 11th and 13th centuries.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Square Tower House',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Mesa-Verde-National-Park-Square-Tower-House.jpg',
				image_alt:
					'Overlooking the stunning Square Tower House ancestral Puebloan ruins below the canyon at Mesa Verde National Park',

				cc_image_url: 'https://www.flickr.com/photos/vironevaeh/22533402995/',
				cc_author_url: 'https://www.flickr.com/photos/vironevaeh/',
				cc_author: 'Karen Blaha',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Long House',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Mesa-Verde-National-Park-Long-House.jpg',
				image_alt:
					'Long cliff dwelling site of Wetherill Mesa known as the Long House viewed close-up at Mesa Verde National Park',

				cc_image_url: 'https://www.flickr.com/photos/daveynin/9469696834/',
				cc_author_url: 'https://www.flickr.com/photos/daveynin/',
				cc_author: 'David Fulmer',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Cliff Palace',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Mesa-Verde-National-Park-Cliff-Palace.jpg',
				image_alt:
					"Vast ancestral Puebloan cliff dwelling site known as the Cliff Palace at Colorado's Mesa Verde National Park",

				cc_image_url: 'https://www.flickr.com/photos/kenlund/4848099059/',
				cc_author_url: 'https://www.flickr.com/photos/kenlund/',
				cc_author: 'Ken Lund',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Four Corners Monument',
				image_url:
					'https://www.travelimager.com/images/arizona/Arizona-Northeastern-Arizona-Four-Corners-Monument.jpg',
				image_alt:
					'Meeting point of four US state corners of Arizona, New Mexico, Colorado, and Utah, known as Four Corners Monument',

				cc_image_url: 'https://www.flickr.com/photos/dougtone/7680425438/',
				cc_author_url: 'https://www.flickr.com/photos/dougtone/',
				cc_author: 'Doug Kerr',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Aztec Ruins National Monument',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Northwestern-New-Mexico-Aztec-Ruins-National-Monument.jpg',
				image_alt:
					'Ruined site of a vast old Puebloan structure called Aztec Ruins National Monument in Northwestern New Mexico',

				cc_image_url: 'https://www.flickr.com/photos/dougtone/22428606204/',
				cc_author_url: 'https://www.flickr.com/photos/dougtone/',
				cc_author: 'Doug Kerr',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	rocky_mountain: {
		id: 'rocky_mountain',
		itineraries: '',
		destinationName: 'Rocky Mountain National Park',
		stateName: 'Colorado',
		region: 'usa',
		anchor_tag: 'rocky-mountain-national-park-colorado',
		destination_link:
			'/destinations/colorado/rocky-mountain-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/axBPyNFZm9P2',
			all_attractions: 'https://goo.gl/maps/jFyx72K84A42'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>Rocky Mountain National Park is centered around one of the most gorgeous natural areas of Colorado, located with the grand Rocky Mountains range, just west of Denver. This area features countless hiking trails, many of them venturing up to pristine glacial lakes within the densely forested mountains past beautiful streams and waterfalls. You're also very likely to see wildlife such as deer, moose, and mountain goats within these vast forests.</p>`
			},
			{
				tab_title: 'Viewpoints',
				tab_content: `<p>Along the stretch of Highway 34 between Estes Park and the Alpine Visitor Center you'll find many amazing viewpoints overlooking the vast wilderness, as well as the Alpine Ridge Trail. Estes Park is the national park's main town and hosts the extremely popular Gem Lake Trail, two visitor centers, and the Estes Park Aerial Tramway which travels up to the summit of Prospect Mountain, from which you can enjoy great views over the area.</p>`
			},
			{
				tab_title: 'Hiking Trails',
				tab_content: `<p>West of Estes Park around Bear Lake you'll find several of the park's most popular hikes, which venture into striking rocky glacial valleys, passing along picturesque lakes such as Emerald Lake, Dream Lake, The Loch, Sky Pond, and Alberta Falls.</p>
                <p>Along the eastern side of the Rocky Mountains south of Estes Park are many more excellent hikes, including the challenging trail to the park's highest peak, Longs Peak. Longs Peak towers over the majestic Chasm Lake, another popular trail which can be combined with the peak. Additional must-see sights within the park include Sprague Lake, Lily Lake, and the stunning Saint Malo's Chapel on the Rock.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Sky Pond',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Rocky-Mountain-National-Park-Sky-Pond.jpg',
				image_alt:
					'Dark blue-green waters of Sky Pond below the Sharkstooth mountain at Rocky Mountain National Park, Colorado',

				cc_image_url: 'https://www.flickr.com/photos/darkdenver/6084391435/',
				cc_author_url: 'https://www.flickr.com/photos/darkdenver/',
				cc_author: 'Steven Bratman',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: "Saint Malo's Chapel on the Rock",
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Rocky-Mountain-National-Park-Saint-Malos-Chapel-on-the-Rock.jpg',
				image_alt:
					"Lovely tiny stone church of Saint Malo's Chapel on the Rock behind a pond near Rocky Mountain National Park, Colorado",

				cc_image_url:
					'https://www.flickr.com/photos/lhanaphotography/6158869715/',
				cc_author_url: 'https://www.flickr.com/photos/lhanaphotography/',
				cc_author: 'Max and Dee Bernt',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'The Loch Lake',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Rocky-Mountain-National-Park-The-Loch.jpg',
				image_alt:
					"Picturesque view of Colorado's Loch Lake at Rocky Mountains National Park surrounded by dense forests and tall mountains",

				cc_image_url: 'https://www.flickr.com/photos/collins_family/36524220733/',
				cc_author_url: 'https://www.flickr.com/photos/collins_family/',
				cc_author: 'Chris Collins',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Chasm Lake & Longs Peak',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Rocky-Mountain-National-Park-Chasm-Lake.jpg',
				image_alt:
					'Vibrant waters of Chasm Lake, a high elevation glacial lake seen below Longs Peak at Rocky Mountain National Park',

				cc_image_url: 'https://www.flickr.com/photos/14480409@N04/15287851668/',
				cc_author_url: 'https://www.flickr.com/photos/14480409@N04/',
				cc_author: 'Bruce Dall',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Alpine Ridge Trail',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Rocky-Mountain-National-Park-Alpine-Ridge-Trail.jpg',
				image_alt:
					"Grassy fields and snow along the Alpine Ridge Trail in Colorado's Rocky Mountains National Park",

				cc_image_url:
					'https://www.flickr.com/photos/daveynin/9548779761/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/daveynin/',
				cc_author: 'David Fulmer',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Alberta Falls',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Rocky-Mountain-National-Park-Alberta-Falls.jpg',
				image_alt:
					'Powerful Alberta Falls flowing over reddish rock surrounded by the forests of Rocky Mountain National Park',

				cc_image_url: 'https://www.flickr.com/photos/bsc_photgraphy/7243762556/',
				cc_author_url: 'https://www.flickr.com/photos/bsc_photgraphy/',
				cc_author: 'Bert Cash',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	san_luis_valley: {
		id: 'san_luis_valley',
		itineraries: '',
		destinationName: 'San Luis Valley & Canon City',
		stateName: 'Colorado',
		region: 'usa',
		anchor_tag: 'san-luis-valley-colorado',
		destination_link:
			'/destinations/colorado/san-luis-valley-and-canon-city-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/RNDumBSU35A2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Cañon City',
				tab_content: `<p>Spend this day traveling the long scenic route between Colorado Springs, Colorado and Santa Fe, New Mexico. Along this alternative route to Santa Fe you'll pass by Cañon City, the San Luis Valley, and Taos, New Mexico.</p>
                <p>South of Colorado Springs in Cañon City you might consider a detour to visit the Royal Gorge Bridge, which spans a deep canyon. A bit further south is the a highly recommended attraction, the famous Bishop Castle, an incredibly beautiful and intricate structure which has been built out of stone by one man over many years.</p>`
			},
			{
				tab_title: 'San Luis Valley',
				tab_content: `<p>Continue along to the Great Sand Dunes National Park and Preserve, which features a massive natural sand dune sea set amongst the mountains. Create your own hiking path in the sand while exploring these stunning vast dunes while enjoying the scenery. Nearby you can hike to the gorgeous Zapata Falls. Also in this area of Colorado's San Luis Valley you might visit the Colorado Gators Reptile Park, which hosts a large population of alligators.</p>`
			},
			{
				tab_title: 'Taos, NM',
				tab_content: `<p>Much further south in New Mexico is the striking Rio Grande Gorge Bridge, which spans a deep canyon gorge of the Rio Grande River in the middle of the desert. Nearby you can visit an incredible multi-story adobe house which is between 600-1,000 years old known as the Taos Pueblo. This historic structure is a UNESCO world heritage site and is located in Taos, New Mexico approximately 70 miles (110 km) or 1.5 hours north of Santa Fe.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Great Sand Dunes National Park',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Great-Sand-Dunes-National-Park-Sand-Dunes-and-Sky.jpg',
				image_alt:
					"Smooth giant sand dunes amongst the blue sky at Great Sand Dunes National Park in Southern Colorado's San Luis Valley",

				cc_image_url: 'https://www.flickr.com/photos/watsonsinelgin/28244777805/',
				cc_author_url: 'https://www.flickr.com/photos/watsonsinelgin/',
				cc_author: 'Hans Watson',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Mt. Herard & Wetlands (Great Sand Dunes)',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Great-Sand-Dunes-National-Park-Wetlands-Cranes-Sand-Dunes-and-Mount-Herard-Sunset-Golden-Hour.jpg',
				image_alt:
					'Crane birds seen at the wetlands during golden hour at Great Sand Dunes National Park, Colorado with Mt. Herard in background',

				cc_image_url:
					'https://www.flickr.com/photos/greatsanddunesnpp/25111268635/',
				cc_author_url: 'https://www.flickr.com/photos/greatsanddunesnpp/',
				cc_author: 'Great Sand Dunes N.P.',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Medano Creek (Great Sand Dunes)',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Great-Sand-Dunes-National-Park-Sand-Dunes-Medano-Creek-and-Mount-Herard.jpg',
				image_alt:
					'Large dune field and Mt. Herard seen behind Medano Creek at Great Sand Dunes National Park, Colorado',

				cc_image_url: 'https://www.flickr.com/photos/acwa/48257161496/',
				cc_author_url: 'https://www.flickr.com/photos/acwa/',
				cc_author: 'PEO ACWA',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Royal Gorge Bridge',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Canon-City-Royal-Gorge-Bridge.jpg',
				image_alt:
					'Giant Royal Gorge Bridge spanning a deep canyon over the Arkansas River in Canon City, Southern Colorado',

				cc_image_url: 'https://www.flickr.com/photos/wasifmalik/21362377242/',
				cc_author_url: 'https://www.flickr.com/photos/wasifmalik/',
				cc_author: 'Wasif Malik',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Bishop Castle',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Greater-Pueblo-Rye-Fairview-Bishop-Castle.jpg',
				image_alt:
					'Looking up at the stone Bishop Castle built by one man over many years in Rye, Colorado in Bishop County outside Pueblo',

				cc_image_url: 'https://www.flickr.com/photos/chriswaits/21932491930/',
				cc_author_url: 'https://www.flickr.com/photos/chriswaits/',
				cc_author: 'Chris Waits',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	southern_colorado: {
		id: 'southern_colorado',
		itineraries: '',
		destinationName: 'Great Sand Dunes & Southern Colorado',
		stateName: 'Colorado',
		region: 'usa',
		anchor_tag: 'southern-colorado',
		destination_link: '/destinations/colorado/southern-colorado-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/GtFLUPi8WSE2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Southern Colorado Attractions',
				tab_content: `<p>This day will mostly consist of a long scenic drive, with several notable attractions along the way, as you make your way up towards Colorado Springs from Durango or nearby Mesa Verde National Park. Within the San Juan National Forest you can admire the stunning Treasure Falls and views from Wolf Creek Pass Overlook.</p>
                <p>Further along the route is the Great Sand Dunes National Park and Preserve, which features a massive natural sand dune sea set amongst the mountains. Create your own hiking path in the sand while exploring these stunning vast dunes while enjoying the scenery. Nearby you can hike to the gorgeous Zapata Falls.</p>
                <p>Much further northeast is the Bishop Castle, an incredible structure which has been built out of stone by one man over many years. Finally if you still have time you might visit the Royal Gorge Bridge, which spans a deep canyon.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Treasure Falls',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-San-Juan-National-Forest-Pagosa-Springs-Treasure-Falls.jpg',
				image_alt:
					"Beautiful Treasure Falls seen flowing over a rocky cliff near Pagosa Spring in Southern Colorado's San Juan National Forest",

				cc_image_url:
					'https://www.flickr.com/photos/genesisscience/42610718385/in/photolist-27Vn53n-bkucth-fqbw61-NSStWa-29StYjw-29StYij-83zVE7-pMvXjH-pMsA4e-q3prTZ-pLJ3uC-pMuDzY-q44n9T-HfqmQ-5P9UU6-q4cpqC-q4SRRi-cbcygU-pLCRg4-q2L7Ni-p6BXMS-q44oog-EgTqv-pN5sFs-2bfkF3i-2cyC7ys-QvhwCb-2bfkFfn-29StYgA-2bfkEBP-29StYnC-29StY1A-NSSu7R-29StYx7-NSSu6P-2bfkEYv-29StXPo-Qvhw7S-2cyC763-NSSu2R-NSStTz-2bfkEFg-29StXLN-NSStUB-2bfkF6e-2bfkEHR',
				cc_author_url: 'https://www.flickr.com/photos/genesisscience/',
				cc_author: 'Nate Looper',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Great Sand Dunes National Park',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Great-Sand-Dunes-National-Park-Sand-Dunes-and-Sky.jpg',
				image_alt:
					"Smooth giant sand dunes amongst the blue sky at Great Sand Dunes National Park in Southern Colorado's San Luis Valley",

				cc_image_url: 'https://www.flickr.com/photos/watsonsinelgin/28244777805/',
				cc_author_url: 'https://www.flickr.com/photos/watsonsinelgin/',
				cc_author: 'Hans Watson',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Royal Gorge Bridge',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Canon-City-Royal-Gorge-Bridge.jpg',
				image_alt:
					'Giant Royal Gorge Bridge spanning a deep canyon over the Arkansas River in Canon City, Southern Colorado',

				cc_image_url: 'https://www.flickr.com/photos/wasifmalik/21362377242/',
				cc_author_url: 'https://www.flickr.com/photos/wasifmalik/',
				cc_author: 'Wasif Malik',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Bishop Castle',
				image_url:
					'https://www.travelimager.com/images/colorado/Colorado-Greater-Pueblo-Rye-Fairview-Bishop-Castle.jpg',
				image_alt:
					'Looking up at the stone Bishop Castle built by one man over many years in Rye, Colorado in Bishop County outside Pueblo',

				cc_image_url: 'https://www.flickr.com/photos/chriswaits/21932491930/',
				cc_author_url: 'https://www.flickr.com/photos/chriswaits/',
				cc_author: 'Chris Waits',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	las_vegas: {
		id: 'las_vegas',
		itineraries: '',
		destinationName: 'Las Vegas',
		stateName: 'Nevada',
		region: 'usa',
		anchor_tag: 'las-vegas-nevada',
		destination_link: '/destinations/nevada/las-vegas-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/W7o8Y4mqWgm',
			all_attractions: 'https://goo.gl/maps/me8pRtGE39m'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Las Vegas Attractions',
				tab_content: `<p>Las Vegas is frequently hailed as the entertainment capital of the world, hosting an array of casinos, shows and performances, clubs and music festivals, and many other activities.</p>
                <p>The Las Vegas Strip is a massive boulevard lined with countless themed mega-casinos, many of which are incredible and worth admiring. These casinos recreate the canals of Venice, the skyscrapers of New York, the ancient Roman Forum, the Great Pyramid and Sphinx of Egypt, and even a half-sized replica of the Eiffel Tower, among many other marvels such as a pirate ship bay and a volcano. The Strip also hosts the world's largest Ferris wheel, the 550 foot (170 m) tall High Roller.</p>
                <p>Beyond the Las Vegas Strip is the outdoor Neon Museum of the city's old neon signs, as well as a zipline over the LED canopy-covered Fremont Street, the city's Old Las Vegas Strip. In the mountains west of Las Vegas are several gorgeous hiking trails including Red Rock Canyon, First Creek, and Pine Creek. On the eastern outskirts of the city is the iconic Hoover Dam.</p>`
			}
		],
		attractions: [
			{
				attraction: 'The Venetian Casino',
				image_url:
					'https://www.travelimager.com/images/nevada/Nevada-Las-Vegas-Venetian-Casino.jpg',
				image_alt:
					'Gondolas along the light blue waters of the canals outside the Venetian Resort and Casino along the Las Vegas Strip',

				cc_image_url: 'https://www.flickr.com/photos/wolfgangstaudt/2336271291/',
				cc_author_url: 'https://www.flickr.com/photos/wolfgangstaudt/',
				cc_author: 'Wolfgang Staudt',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Paris Casino',
				image_url:
					'https://www.travelimager.com/images/nevada/Nevada-Las-Vegas-Paris-Casino.jpg',
				image_alt:
					'Half-size replica of the Eiffel Tower at Paris Casino seen behind the Fountains of Bellagio at night along Las Vegas Strip',

				cc_image_url:
					'https://pixabay.com/en/las-vegas-paris-night-tourism-864881/',
				cc_author_url: 'https://pixabay.com/en/users/skeeze-272447/',
				cc_author: 'skeeze',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'City Center',
				image_url:
					'https://www.travelimager.com/images/nevada/Nevada-Las-Vegas-City-Center.jpg',
				image_alt:
					'View overlooking the ultramodern glass skyscraper and Shops at Crystal of City Center along the Las Vegas Strip',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Project_CityCenter_in_Las_Vegas.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Tristan_Surtel',
				cc_author: 'Tristan Surtel',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Fountains of Bellagio',
				image_url:
					'https://www.travelimager.com/images/nevada/Nevada-Las-Vegas-Bellagio-Fountain.jpg',
				image_alt:
					'Vibrant colors lighting up the Fountains of Bellagio at night in front of the Bellagio Casino along the Las Vegas Strip',

				cc_image_url: 'https://www.flickr.com/photos/marc_cooper/22666736604/',
				cc_author_url: 'https://www.flickr.com/photos/marc_cooper/',
				cc_author: 'Marc Cooper',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Seven Magic Mountains',
				image_url:
					'https://www.travelimager.com/images/nevada/Nevada-Las-Vegas-Seven-Magic-Mountains.jpg',
				image_alt:
					'Seven Magic Mountains outdoor art installation featuring vibrant colored stacked boulder columns in the Las Vegas desert',

				cc_image_url:
					'https://www.flickr.com/photos/kimberlyreinhart/26939800792/',
				cc_author_url: 'https://www.flickr.com/photos/kimberlyreinhart/',
				cc_author: 'Kimberly Reinhart',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Hoover Dam',
				image_url:
					'https://www.travelimager.com/images/nevada/Nevada-Las-Vegas-Hoover-Dam.jpg',
				image_alt:
					'Hoover Dam holding back the Colorado River creating a deep canyon gorge in the desert outside Las Vegas on the Arizona border',

				cc_image_url: 'https://www.flickr.com/photos/alexeya/35936229974/',
				cc_author_url: 'https://www.flickr.com/photos/alexeya/',
				cc_author: 'Alex Alishevskikh',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Pine Creek Canyon (Red Rock Canyon)',
				image_url:
					'https://www.travelimager.com/images/nevada/Nevada-Las-Vegas-Red-Rock-Canyon-Pine-Creek-Canyon-Trail.jpg',
				image_alt:
					'Golden hour view of several mountains above Las Vegas seen from the Pine Creek Canyon trail of Red Rock Canyon',

				cc_image_url: 'https://www.flickr.com/photos/blmnevada/32243812762/',
				cc_author_url: 'https://www.flickr.com/photos/blmnevada/',
				cc_author: 'BLM Nevada',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	valley_of_fire: {
		id: 'valley_of_fire',
		itineraries: '',
		destinationName: 'Valley of Fire',
		stateName: 'Nevada',
		region: 'usa',
		anchor_tag: 'valley-of-fire-nevada',
		destination_link: '/destinations/nevada/valley-of-fire-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/nCcccrVjcZE2'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Fire Wave Trail',
				image_url:
					'https://www.travelimager.com/images/nevada/Nevada-Valley-of-Fire-State-Park-Fire-Wave-Trail.jpg',
				image_alt:
					"Incredibly beautiful pink wave-like patterns on the rocks of the Fire Wave Trail in Nevada's Valley of Fire at golden hour",

				cc_image_url: 'https://www.flickr.com/photos/snowpeak/34755886070/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Elephant Rock',
				image_url:
					'https://www.travelimager.com/images/nevada/Nevada-Valley-of-Fire-State-Park-Elephant-Rock.jpg',
				image_alt:
					"Famous red rock elephant-like Elephant Rock formation with head and trunk at Nevada's Valley of Fire State Park",

				cc_image_url: 'https://www.flickr.com/photos/r00s/29124287293/',
				cc_author_url: 'https://www.flickr.com/photos/r00s/',
				cc_author: 'Rosa Menkman',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Fire Canyon / Silica Dome Viewpoint',
				image_url:
					'https://www.travelimager.com/images/nevada/Nevada-Valley-of-Fire-State-Park-Fire-Canyon-Silica-Dome.jpg',
				image_alt:
					"Early evening view over the multi-colored landscape of the Valley of Fire at Fire Canyon's Silica Dome Viewpoint",

				cc_image_url: 'https://www.flickr.com/photos/ldeld/32039978061/',
				cc_author_url: 'https://www.flickr.com/photos/ldeld/',
				cc_author: 'LDELD',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'White Domes Trail',
				image_url:
					'https://www.travelimager.com/images/nevada/Nevada-Valley-of-Fire-State-Park-White-Domes-Trail.jpg',
				image_alt:
					"Stunning white and pastel rock formations set amongst the canyons of the Valley of Fire's White Domes Trail",

				cc_image_url: 'https://www.flickr.com/photos/ldeld/32158128405/',
				cc_author_url: 'https://www.flickr.com/photos/ldeld/',
				cc_author: 'LDELD',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			}
		]
	},

	carlsbad_caverns: {
		id: 'carlsbad_caverns',
		itineraries: '',
		destinationName: 'Carlsbad Caverns',
		stateName: 'New Mexico',
		region: 'usa',
		anchor_tag: 'carlsbad-caverns-national-park-new-mexico',
		destination_link:
			'/destinations/new-mexico/carlsbad-caverns-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/e54QAiBDvT82'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Natural Entrance Trail',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Carlsbad-Caverns-National-Park-Natural-Entrance-Cave-View.jpg',
				image_alt:
					'Giant Natural Entrance to the the vast underground network of caves of Carlsbad Caverns National Park, New Mexico',

				cc_image_url: 'https://www.flickr.com/photos/jsjgeology/8281918580/',
				cc_author_url: 'https://www.flickr.com/photos/jsjgeology/',
				cc_author: 'James St. John',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Big Room Stalagmites (Carlsbad Caverns)',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Carlsbad-Caverns-National-Park-Carlsbad-Cavern-Big-Room-Stalagmite-Ceilings.jpg',
				image_alt:
					'Strikingly complex stalagmite formations and pillars in the Big Room of Carlsbad Caverns National Park, New Mexico',

				cc_image_url:
					'https://www.flickr.com/photos/snowpeak/17021511092/in/datetaken/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Natural Entrance Cavern Trail & Bats',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Carlsbad-Caverns-National-Park-Natural-Entrance-Cave-and-Bats-Flying.jpg',
				image_alt:
					'Many bats flying into the Carlsbad Caverns via the giant Natural Entrance above the trail in Southeastern New Mexico',

				cc_image_url: 'https://www.nps.gov/articles/bats-in-caves.htm',
				cc_author_url: 'https://www.nps.gov/articles/bats-in-caves.htm',
				cc_author: 'Carlsbad Caverns NPS',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	santa_fe: {
		id: 'santa_fe',
		itineraries: '',
		destinationName: 'Santa Fe',
		stateName: 'New Mexico',
		region: 'usa',
		anchor_tag: 'santa-fe-new-mexico',
		destination_link: '/destinations/new-mexico/santa-fe-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/BRnDkZetLpH2',
			all_attractions: 'https://goo.gl/maps/o7d2GwWSdrS2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Santa Fe Attractions',
				tab_content: `<p>Santa Fe is a very old city, originally founded by the Spanish in 1610. Downtown Santa Fe is centered around Santa Fe Plaza and hosts beautiful old churches, as well as the historic Palace of the Governors adobe structure. Nearby is the oldest church in the continental United States, the San Miguel Mission, which was built over 400 years ago. Along the city's Canyon Road you'll find many hip art galleries, restaurants, and interesting shops.</p>
                <p>The suburb of Agua Fria is home to the famous Meow Wolf, an incredible attraction which offers a unique immersive experience with many lights and highly elaborate and technological art installations.</p>`
			},
			{
				tab_title: 'Greater Santa Fe',
				tab_content: `<p>To the west of Santa Fe are several national monuments, including the Kasha-Katuwe Tent Rocks National Monument which hosts many bizarre tent-shaped rock formations, creating a breathtaking otherworldly landscape.</p>
                <p>Further west is the Bandelier National Monument hosting stunning cliff dwellings such as the Alcove House and even ancient human settlements, set amongst a beautiful rocky canyon. Also in this area is the city of Los Alamos, where the United States developed the first atomic bombs. Los Alamos offers several museums on the topic.</p>`
			}
		],
		attractions: [
			{
				attraction: 'New Mexico Museum of Art',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Santa-Fe-New-Mexico-Museum-of-Art-Courtyard.jpg',
				image_alt:
					"Lovely courtyard of the adobe style building housing Santa Fe's New Mexico Museum of Modern Art",

				cc_image_url:
					'https://pixabay.com/photos/building-santa-fe-southwestern-2069572/',
				cc_author_url: 'https://pixabay.com/users/cassielozuk-4568423/',
				cc_author: 'cassielozuk',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Tent Rocks Trail (Kasha-Katuwe)',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Santa-Fe-Kasha-Katuwe-Tent-Rocks-National-Monument.jpg',
				image_alt:
					'Stunning white tent-like formations seen along Tent Rocks Trail at Kasha-Katuwe Tent Rocks National Monument in New Mexico',

				cc_image_url: 'https://www.flickr.com/photos/mypubliclands/9406434519/',
				cc_author_url: 'https://www.flickr.com/photos/mypubliclands/',
				cc_author: 'Bureau of Land Management',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Meow Wolf',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Santa-Fe-Meow-Wolf.jpg',
				image_alt:
					'Vibrant and eccentric art installations inside the famous Meow Wolf of Santa Fe, New Mexico',

				cc_image_url: 'https://www.flickr.com/photos/163085203@N02/27498666358/',
				cc_author_url: 'http://emmanoproblema.com/',
				cc_author: 'Emma Heirendt',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'El Santuario de Chimayo Historic Site',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Santa-Fe-El-Santuario-de-Chimayo-Historic-Site.jpg',
				image_alt:
					'Beautiful exterior of the Spanish El Santuario de Chimayo Historic Site, a popular Catholic pilgrimage site north of Santa Fe',

				cc_image_url:
					'https://www.flickr.com/photos/martinvirtualtours/3485286020/',
				cc_author_url: 'https://www.flickr.com/photos/martinvirtualtours/',
				cc_author: 'Michael & Sherry Martin',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Alcove House (Bandelier Monument)',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Santa-Fe-Bandelier-National-Monument.jpg',
				image_alt:
					'Wooden ladder leading to an entrance to the Alcove House, a cliff dwelling at Bandelier National Monument in New Mexico',

				cc_image_url: 'https://www.flickr.com/photos/greggjerdingen/32508510035/',
				cc_author_url: 'https://www.flickr.com/photos/greggjerdingen/',
				cc_author: 'Greg Gjerdingen',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	taos_abiquiu: {
		id: 'taos_abiquiu',
		itineraries: '',
		destinationName: 'Taos & Abiquiu',
		stateName: 'New Mexico',
		region: 'usa',
		anchor_tag: 'taos-and-abiquiu-new-mexico',
		destination_link: '/destinations/new-mexico/taos-and-abiquiu-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/RNDumBSU35A2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Taos, NM',
				tab_content: `<p>If you weren't able to visit Taos on your way to Santa Fe, it's highly recommended that you take the time to visit the town, which is about 1.5 hours north of Santa Fe. Taos is home to an incredible UNESCO world heritage site, the Taos Pueblo, a multi-story adobe house which is between 600-1,000 years old.</p>
                <p>Just west of Taos is the striking Rio Grande Gorge Bridge, which spans a deep canyon gorge of the Rio Grande River in the middle of the desert.</p>`
			},
			{
				tab_title: 'Abiquiu, NM',
				tab_content: `<p>About 1 hour north of Santa Fe (or just over 1 hour west of Taos) is the town of Abiquiu, which is surrounded by stunningly beautiful scenery. Upon entering Abiquiu you'll first encounter the Plaza Blanca (White Place), a scenic landscape filled with brilliant white cliff formations that you can explore amongst.</p>
                <p>Further west is the Abiquiu Reservoir, which offers majestic and distinct views from the north and south side of the lake. Nearby are the Ghost Ranch Trails, where you'll find the red Chimney Rock. Abiquiu also hosts the Echo Amphitheater, an incredible natural multi-colored amphitheater.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Taos Pueblo',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Taos-Taos-Pueblo-Hlaukwima-South-Adobe-House.jpg',
				image_alt:
					'Light blue doors and windows contrast the sand-colored multi-story Hlaukwima South Houseadobe structure at Taos Pueblo, New Mexico',

				cc_image_url: 'https://www.flickr.com/photos/22711505@N05/9583764825/',
				cc_author_url: 'https://www.flickr.com/photos/22711505@N05/',
				cc_author: 'Ron Cogswell',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Plaza Blanca Cliffs',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Carson-National-Forest-Abiquiu-Plaza-Blanca-Cliffs.jpg',
				image_alt:
					'Complex white cliff formations of the Plaza Blanca Cliffs above the red sands of Abiquiu, New Mexico',

				cc_image_url: 'https://www.flickr.com/photos/larry1732/5566283259/',
				cc_author_url: 'https://www.flickr.com/photos/larry1732/',
				cc_author: 'Larry Lamsa',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Abiquiu Reservoir North Overlook',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Carson-National-Forest-Abiquiu-Abiquiu-Reservoir-North-Overlook.jpg',
				image_alt:
					'Stunning red cliffs rising above the blue waters of the Abiquiu Reservoir seen from the northern side, in Abiquiu, New Mexico',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Abiquiu_Lake_and_the_Surrounding_Red_Rocks.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Abiquiu_Lake_and_the_Surrounding_Red_Rocks.jpg&action=history',
				cc_author: 'The Casita del Lago',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Echo Amphitheater',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-Carson-National-Forest-Abiquiu-Echo-Amphitheater.jpg',
				image_alt:
					'Looking up at the massive natural Echo Amphitheater which changes from white to red rock, in Abiquiu, New Mexico',

				cc_image_url: 'https://www.flickr.com/photos/ronguillen/2087777194/',
				cc_author_url: 'https://www.flickr.com/photos/ronguillen/',
				cc_author: 'R0Ng',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			}
		]
	},

	white_sands: {
		id: 'white_sands',
		itineraries: '',
		destinationName: 'White Sands National Park',
		stateName: 'New Mexico',
		region: 'usa',
		anchor_tag: 'white-sands-national-park-new-mexico',
		destination_link:
			'/destinations/new-mexico/white-sands-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/cuSvZBuhxPm'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Alkali Flat Trail',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-White-Sands-National-Park-Alkali-Flat-Trail.jpg',
				image_alt:
					'Smooth ridge of a beautiful white sand dune seen near the Alkali Flats Trail of White Sands National Park in New Mexico',

				cc_image_url: 'https://www.flickr.com/photos/pinchof_10/5136881406/',
				cc_author_url: 'https://www.flickr.com/photos/pinchof_10/',
				cc_author: 'Pinchof 2.0',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Playa Trail',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-White-Sands-National-Park-Playa-Trail.jpg',
				image_alt:
					'Boardwalk Playa Trail over the rolling white sand dunes of White Sands National Park in New Mexico',

				cc_image_url:
					'https://www.flickr.com/photos/daveynin/8132675676/in/album-72157631839811017/',
				cc_author_url: 'https://www.flickr.com/photos/daveynin/',
				cc_author: 'David Fulmer',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Dune Life Nature Trail',
				image_url:
					'https://www.travelimager.com/images/new-mexico/New-Mexico-White-Sands-National-Park-Dune-Life-Nature-Trail.jpg',
				image_alt:
					"Barren tree seen amongst vast stunning white sands along White Sands National Park's Dune Life Nature Trail",

				cc_image_url: 'https://www.flickr.com/photos/miguelvieira/6769243803/',
				cc_author_url: 'https://www.flickr.com/photos/miguelvieira/',
				cc_author: 'Miguel Vieira',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	bend_or: {
		id: 'bend_or',
		itineraries: '',
		destinationName: 'Bend',
		stateName: 'Oregon',
		region: 'usa',
		anchor_tag: 'bend-oregon',
		destination_link: '/destinations/oregon/bend-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/BAZFLzsDMH92',
			all_attractions: 'https://goo.gl/maps/7YP26HBpbRD2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Bend Attractions',
				tab_content: `<p>The city of Bend is set in the high desert of Central Oregon surrounded by a vast volcanic landscape. The city is a great base from which to explore the incredible natural wonders in the area. The city's historic downtown area is known as Old Bend and hosts many great shops and restaurants. Bend is also home to the last remaining Blockbuster Video as well as the Deschutes Brewery. You can enjoy views over the city from atop the Pilot Butte.</p>
                <p>Just west of Bend is the majestic Tumalo Falls. To the north of Bend is Smith Rock State Park, an immensely beautiful volcanic landscape of tall sheer cliffs which are great for rock climbing or hiking. The Crooked River flows around the center of the park, creating a giant peninsula.</p>
                <p>South of Bend is the Newberry National Volcanic Monument, which hosts several large cinder cones amongst a black volcanic landscape. Popular attractions in the monument include the Big Obsidian Flow Trail, Paulina Creek Falls, the Lava River Cave, and the High Desert Museum.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Misery Ridge to Summit Trail',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Bend-Misery-Ridge-to-Summit-Trail.jpg',
				image_alt:
					'Iconic view overlooking the river winding through the tall cliffs of Smith Rock State Park along Misery Ridge in Bend, Oregon',

				cc_image_url:
					'https://pixabay.com/en/smith-rock-oregon-mountain-adventure-2114673/',
				cc_author_url: 'https://pixabay.com/en/users/TheCADguy-4444606/',
				cc_author: 'TheCADguy',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Pilot Butte State Scenic Viewpoint',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Bend-Pilot-Butte-State-Scenic-Viewpoint.jpg',
				image_alt:
					'View overlooking Bend with mountains in background seen from atop the Pilot Butte State Scenic Viewpoint',

				cc_image_url: 'https://www.flickr.com/photos/jjandames/5155715659/',
				cc_author_url: 'https://www.flickr.com/photos/jjandames/',
				cc_author: 'Amy Meredith',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Tumalo Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Bend-Tumalo-Falls.jpg',
				image_alt:
					'Large and powerful Tumalo Falls seen cascading over tall cliffs near Bend, Oregon',

				cc_image_url: 'https://www.flickr.com/photos/nileguide/6079849569/',
				cc_author_url: 'https://www.flickr.com/photos/nileguide/',
				cc_author: 'John Steinitz',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Big Obsidian Flow Trail',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Bend-Big-Obsidian-Flow-Trail.jpg',
				image_alt:
					'Massive piles of obsidian rock seen along the Big Obsidian Flow Trail of Newberry Volcanic National Monument near Bend',

				cc_image_url: 'https://www.flickr.com/photos/lumachrome/7927869196/',
				cc_author_url: 'https://www.flickr.com/photos/lumachrome/',
				cc_author: 'Ferrous Bueller',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	columbia_river_gorge: {
		id: 'columbia_river_gorge',
		itineraries: '',
		destinationName: 'Columbia River Gorge',
		stateName: 'Oregon',
		region: 'usa',
		anchor_tag: 'columbia-river-gorge-oregon',
		destination_link: '/destinations/oregon/columbia-river-gorge-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/FXij6BCkq6B2',
			all_attractions: 'https://goo.gl/maps/1egZBvCEuCB2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>The Columbia River Gorge separates the state of Washington on the northern side, and Oregon on the southern side of the river. On the Oregon side of the river gorge you'll find many stunning massive waterfalls surrounded by lush dense forests, connected via the Historic Columbia River Highway.</p>
                <p>Heading east from Portland you'll encounter the Crown Point Vista House, which overlooks a picturesque section of the Columbia River Gorge from high above.</p>`
			},
			{
				tab_title: 'Waterfalls',
				tab_content: `<p>Driving east along the Columbia River Gorge you'll pass Latourell Falls, Bridal Veil Falls, Wahkeena Falls, the famous towering Multnomah Falls, Horsetail Falls, and Ponytail Falls. Most of these falls can be reached via short hikes. An extremely scenic optional trail through the steep forest connects Multnomah and Wahkeena Falls, passing many more waterfalls along the way such as Wiesendanger Falls and Fairy Falls.</p>
                <p>Along the river gorge are several smaller gorge hikes including the Oneonta Gorge Trail which passes Triple Falls, and Eagle Creek which passes many waterfalls and ventures deep into the wilderness.</p>
                <p>Quite far east along the Columbia River Gorge on the Washington side of the river is the elusive Spirit Falls, which is a vibrant bright light blue color and is surrounded by lush forests. This waterfalls is among the most gorgeous in Washington and can be reach via a short but very challenging trail.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Multnomah Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Columbia-River-Gorge-Multnomah-Falls.jpg',
				image_alt:
					"Iconic view of massive Multnomah Falls with bridge spanning over lower falls along Oregon's Columbia River Gorge",

				cc_image_url: 'https://www.flickr.com/photos/80519348@N02/33861704144/',
				cc_author_url: 'https://www.flickr.com/photos/80519348@N02/',
				cc_author: 'AirHaake',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Crown Point Vista House',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Columbia-River-Gorge-Crown-Point-Vista-House.jpg',
				image_alt:
					'View overlooking the Columbia River Gorge seen from the Crown Point Vista House in Oregon',

				cc_image_url: 'https://www.flickr.com/photos/apbutterfield/7673977026/',
				cc_author_url: 'https://www.flickr.com/photos/apbutterfield/',
				cc_author: 'Alex Butterfield',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Latourell Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Columbia-River-Gorge-Latourell-Falls-and-Bridge.jpg',
				image_alt:
					'View of Latourell Falls behind lush greenery and small wooden bridge located along the Columbia River Gorge',

				cc_image_url:
					'https://www.flickr.com/photos/theknowlesgallery/6890946034/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/theknowlesgallery/',
				cc_author: 'Charles Knowles',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Ponytail Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Columbia-River-Gorge-Ponytail-Falls.jpg',
				image_alt:
					'Beautiful slanted waterfall of Ponytail Falls located near Horsetail Falls along Columbia River Gorge',

				cc_image_url: 'https://www.flickr.com/photos/jonomueller/5882235249',
				cc_author_url: 'https://www.flickr.com/photos/jonomueller/',
				cc_author: 'Jonathan Mueller',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Spirit Falls (Cook, Washington)',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Columbia-River-Gorge-Spirit-Falls.jpg',
				image_alt:
					'Vibrant light blue waters of the picturesque Spirit Falls located north of the Columbia River near Cook, Washington',

				cc_image_url:
					'https://www.flickr.com/photos/jeffhollettvancouverwa/39581292304/',
				cc_author_url: 'https://www.flickr.com/photos/jeffhollettvancouverwa/',
				cc_author: 'Jeff Hollett',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	crater_lake: {
		id: 'crater_lake',
		itineraries: '',
		destinationName: 'Crater Lake National Park',
		stateName: 'Oregon',
		region: 'usa',
		anchor_tag: 'crater-lake-national-park-oregon',
		destination_link:
			'/destinations/oregon/crater-lake-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/yj1eBVW9jTG2',
			all_attractions: 'https://goo.gl/maps/LhfH7RyCmAU2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Crater Lake N.P.',
				tab_content: `<p>The gorgeous Crater Lake National Park is centered around a massive deep blue lake which sits inside of a vast crater, surrounded by beautiful mountains and forest.</p>
                <p>You can drive around the vast Crater Lake to enjoy multiple perspectives over this gorgeous natural wonder, most notably Meriam Point, the Watchman Overlook which looks out directly over Wizard Island, and the Sinnott Memorial Observation Station in Rim Village. From Rim Village you can take the short hike up to one of the lake's best viewpoints atop Garfield Peak.</p>
                <p>On the northern side of Crater Lake you can hike down to the lakeshore via the Cleetwood Cove Trail, which also leads to the lake's boat tour dock, although these tours must be made far in advance.</p>`
			},
			{
				tab_title: 'Umpqua Waterfalls',
				tab_content: `<p>North of Crater Lake are several picturesque waterfalls within the Umpqua National Forest, located along the North Umpqua Highway. The most notable of these waterfalls is the stunning Toketee Falls, which flows over surreal geometric cliffs made of columnar basalt. Additionally along the highway you can admire the towering Watson Falls, as well as Whitehorse Falls and Clearwater Falls, which cascades over lush mossy rocks and logs.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Garfield Peak View (Winter)',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Crater-Lake-National-Park-Wizard-Island-Winter.jpg',
				image_alt:
					'View overlooking the snowy mountains and edges of Crater Lake and Wizard Island in winter seen from atop Garfield Peak',

				cc_image_url:
					'https://pixabay.com/photos/crater-lake-oregon-national-park-277123/',
				cc_author_url: 'https://pixabay.com/users/pogo_mm-174776/',
				cc_author: 'pogo_mm',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Watchman Overlook',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Crater-Lake-National-Park-Watchman-Overlook-1.jpg',
				image_alt:
					'View directly over Wizard Island and smaller islands in Crater Lake seen from th Watchman Overlook',

				cc_image_url:
					'https://www.flickr.com/photos/glennwilliamspdx/4980896391/',
				cc_author_url: 'https://www.flickr.com/photos/glennwilliamspdx/',
				cc_author: 'Glenn Scofield Williams',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Cleetwood Cove Trail',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Crater-Lake-National-Park-Cleetwood-Cove-Trail.jpg',
				image_alt:
					'View of deep vibrant blue Crater Lake and a boat pier from the lakeshore at Cleetwood Cove',

				cc_image_url: 'https://www.flickr.com/photos/gregw66/4105429577/',
				cc_author_url: 'https://www.flickr.com/photos/gregw66/',
				cc_author: 'Greg Willis',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Sinnott Memorial Observation Station',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Crater-Lake-National-Park-Sinnott-Memorial-Observation-Station.jpg',
				image_alt:
					'View over Crater Lake and Wizard Island seen from the Sinnott Memorial Observation Station ',

				cc_image_url: 'https://www.flickr.com/photos/raybouk/7574484850/',
				cc_author_url: 'https://www.flickr.com/photos/raybouk/',
				cc_author: 'Ray Bouknight',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Toketee Falls (Umpqua National Forest)',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Crater-Lake-National-Park-Toketee-Falls.jpg',
				image_alt:
					'Toketee Falls seen flowing through a gorge-like canyon with columnar cliffs in Umpqua National Forest',

				cc_image_url:
					'https://www.flickr.com/photos/forestservicenw/41664453662/in/photolist-FQ4qnb-26tKdvm-TyXuGp-BvyScZ',
				cc_author_url: 'https://www.flickr.com/photos/forestservicenw/',
				cc_author: 'US Forest Service Pacific NW',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Clearwater Falls (Umpqua National Forest)',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Crater-Lake-National-Park-Clearwater-Falls.jpg',
				image_alt:
					'Staircase-like Clearwater Falls flowing over mossy rocks in the Umpqua National Forest near Crater Lake',

				cc_image_url: 'https://www.flickr.com/photos/icetsarina/35287522932/',
				cc_author_url: 'https://www.flickr.com/photos/icetsarina/',
				cc_author: 'Bonnie Moreland',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	northern_oregon_coast: {
		id: 'northern_oregon_coast',
		itineraries: '',
		destinationName: 'Northern Oregon Coast & Cannon Beach',
		stateName: null,
		region: 'usa',
		anchor_tag: 'northern-oregon-coast',
		destination_link: '/destinations/oregon/northern-oregon-coast-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/cHrMLhdnWLG2',
			all_attractions: 'https://goo.gl/maps/CEMpMBBH8iH2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Intro',
				tab_content: `<p>Oregon's northern coast hosts a variety of scenic viewpoints and attractions along Highway 101. This route follows a long stretch of this highway between Newport, OR near the center of the Oregon Coast and Astoria, OR near the northwestern tip of Oregon.</p>`
			},
			{
				tab_title: 'Newport & Cape Meares',
				tab_content: `<p>Near the town of Newport is one of the most beautiful lighthouses on the American west coast, the Yaquina Head Lighthouse. Just north of Newport you can enjoy striking views over the coast from the Otter Crest Viewpoint and admire the Devils Punchbowl formation. Further north is Cape Kiwanda, a strange but mesmerizing coastal landscape.</p>
                <p>Continue up to the city of Tillamook, which is home to the popular Tillamook Creamery, which produces cheese, ice cream, and more. Nearby is Cape Meares, which hosts a quaint lighthouse and an octopus-shaped tree. Just south of Cape Meares is the stunning Larson Creek Falls which flows onto the sand of Short Beach. Surprisingly this waterfall is mostly unknown, despite its beauty.</p>`
			},
			{
				tab_title: 'Cannon Beach',
				tab_content: `<p>A bit south of Cannon Beach is one of the Oregon Coast's most breathtaking coastal overlooks, the Neahkahnie Viewpoint. You can hike up Neahkahnie Mountain for even more amazing views. Continue north to the picturesque beach and coastline of Hug Point, located just before Cannon Beach. Just before reaching Cannon Beach, be sure to stop for amazing coastal views at Silver Point.</p>
                <p>Cannon Beach is a charming beachside town and is home to the iconic Haystack Rock, which towers above the long sandy beach. Just north of Cannon Beach you can enjoy stunning views over the rocky rugged coastline from the beaches of Ecola State Park, which is surrounded by a small dense forest.</p>`
			},
			{
				tab_title: 'Astoria',
				tab_content: `<p>Before reaching Astoria you should stop at Fort Clastop, a very historically accurate wooden fort modeled after the one built by the famous American explorers Lewis & Clark. Interestingly, this is where Lewis and Clark set up their camp along the west coast next to the mouth of the Columbia River.</p>
                <p>Astoria is a lovely town that was used as the setting for the popular 80's movie The Goonies. Astoria hosts a charming historic downtown area as well as many impressive Victorian homes. Atop a hill above the city is the Astoria Column, a tower which you can climb for incredible panoramic views over the Pacific Coast, the Columbia River, and the surrounding rural landscape.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Yaquina Head Lighthouse',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Yaquina-Head-Lighthouse.jpg',
				image_alt:
					'Lovely idyllic Yaquina Head Lighthouse at golden hour atop the cliffs near Newport, Oregon',

				cc_image_url:
					'https://www.flickr.com/photos/esridatalibrary/33313460553/',
				cc_author_url: 'https://www.flickr.com/photos/esridatalibrary/',
				cc_author: 'Esri Public Domain Library',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Otter Crest State Scenic Viewpoint',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Otter-Crest-State-Scenic-Viewpoint.jpg',
				image_alt:
					'Stunning views looking down the Norther Oregon Coast and beaches from the Otter Crest State Scenic Viewpoint',

				cc_image_url: 'https://www.flickr.com/photos/kirt_edblom/14802702969/',
				cc_author_url: 'https://www.flickr.com/photos/kirt_edblom/',
				cc_author: 'Kirt Edblom',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Cannon Beach & Haystack Rock',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Cannon-Beach-Haystack-Rock-and-Beach-Aerial-View.jpg',
				image_alt:
					"Cloudy day looking directly at Haystack Rock at Cannon Beach along Oregon's Northern Coast",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Haystack_Rock,_Oregon_(drone_photograph).jpg&action=history',
				cc_author_url: 'https://en.wikipedia.org/wiki/User:DDima',
				cc_author: 'DiscoverWithDima',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Ecola Point (Ecola State Park)',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Ecola-State-Park-Ecola-Point-2.jpg',
				image_alt:
					'Forest-covered cliffs of Ecola State Park meeting the sandy beach at Ecola Point near Cannon Beach, Northern Oregon',

				cc_image_url:
					'https://pixabay.com/photos/beach-ocean-landscape-sea-water-2737460/',
				cc_author_url: 'https://pixabay.com/users/jbwilder75-4756122/',
				cc_author: 'jbwilder',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Neahkahnie Viewpoint',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Neahkahnie-Viewpoint.jpg',
				image_alt:
					'Gorgeous views over the beaches and coastline of Manzanita and Newhalem Bay seen from popular roadside Neahkahnie Viewpoint',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Larson Creek Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Larson-Creek-Falls.jpg',
				image_alt:
					"Larson Creek Falls cascading over tall vibrant green cliffs onto Short Beach near Cape Meares, along Oregon's Northern Coast",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	northern_oregon_coast_sb: {
		id: 'northern_oregon_coast_sb',
		itineraries: '',
		destinationName: 'Northern Oregon Coast & Cannon Beach (Southbound)',
		stateName: null,
		region: 'usa',
		anchor_tag: 'oregon-coast-oregon',
		destination_link:
			'/destinations/oregon/northern-oregon-coast-southbound-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/cHrMLhdnWLG2',
			all_attractions: 'https://goo.gl/maps/CEMpMBBH8iH2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Intro',
				tab_content: `<p>Oregon's northern coast hosts a variety of scenic viewpoints and attractions along Highway 101. This route follows a long stretch of this highway between Astoria near the northwestern tip of Oregon and the city of Tillamook.</p>`
			},
			{
				tab_title: 'Astoria',
				tab_content: `<p>Astoria is a lovely town that was used as the setting for the popular 80's movie The Goonies. Astoria hosts a charming historic downtown area as well as many impressive Victorian homes. Atop a hill above the city is the Astoria Column, a tower which you can climb for incredible panoramic views over the Pacific Coast, the Columbia River, and the surrounding rural landscape.</p>
                <p>After visiting Astoria you should stop at Fort Clastop, a very historically accurate wooden fort modeled after the one built by the famous American explorers Lewis & Clark. Interestingly, this is where Lewis and Clark set up their camp along the west coast next to the mouth of the Columbia River.</p>`
			},
			{
				tab_title: 'Cannon Beach',
				tab_content: `<p>South of Astoria is Cannon Beach, a charming beachside town and is home to the iconic Haystack Rock, which towers above the long sandy beach. On the northern side of Cannon Beach you can enjoy stunning views over the rocky rugged coastline from the beaches of Ecola State Park, which is surrounded by a small dense forest.</p>
                <p>Just south of Cannon Beach, you might stop for amazing coastal views at Silver Point, and be sure to stop at Hug Point to enjoy its picturesque beach and coastline. A bit further south of Cannon Beach is one of the Oregon Coast's most breathtaking coastal overlooks, the Neahkahnie Viewpoint. You can hike up Neahkahnie Mountain for even more amazing views.</p>`
			},
			{
				tab_title: 'Newport & Cape Meares',
				tab_content: `<p>Continue down to the city of Tillamook, which is home to the popular Tillamook Creamery, which produces cheese, ice cream, and more. Nearby is Cape Meares, which hosts a quaint lighthouse and an octopus-shaped tree. Just south of Cape Meares is the stunning Larson Creek Falls which flows onto the sand of Short Beach. Surprisingly this waterfall is mostly unknown, despite its beauty.</p>
                <p>Further south is Cape Kiwanda, a strange but mesmerizing coastal landscape. Before reaching Newport you can enjoy striking views over the coast from the Otter Crest Viewpoint and admire the Devils Punchbowl formation. Near Newport is one of the most beautiful lighthouses on the American west coast, the Yaquina Head Lighthouse.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Yaquina Head Lighthouse',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Yaquina-Head-Lighthouse.jpg',
				image_alt:
					'Lovely idyllic Yaquina Head Lighthouse at golden hour atop the cliffs near Newport, Oregon',

				cc_image_url:
					'https://www.flickr.com/photos/esridatalibrary/33313460553/',
				cc_author_url: 'https://www.flickr.com/photos/esridatalibrary/',
				cc_author: 'Esri Public Domain Library',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Otter Crest State Scenic Viewpoint',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Otter-Crest-State-Scenic-Viewpoint.jpg',
				image_alt:
					'Stunning views looking down the Norther Oregon Coast and beaches from the Otter Crest State Scenic Viewpoint',

				cc_image_url: 'https://www.flickr.com/photos/kirt_edblom/14802702969/',
				cc_author_url: 'https://www.flickr.com/photos/kirt_edblom/',
				cc_author: 'Kirt Edblom',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Cannon Beach & Haystack Rock',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Cannon-Beach-Haystack-Rock-and-Beach-Aerial-View.jpg',
				image_alt:
					"Cloudy day looking directly at Haystack Rock at Cannon Beach along Oregon's Northern Coast",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Haystack_Rock,_Oregon_(drone_photograph).jpg&action=history',
				cc_author_url: 'https://en.wikipedia.org/wiki/User:DDima',
				cc_author: 'DiscoverWithDima',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Ecola Point (Ecola State Park)',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Ecola-State-Park-Ecola-Point-2.jpg',
				image_alt:
					'Forest-covered cliffs of Ecola State Park meeting the sandy beach at Ecola Point near Cannon Beach, Northern Oregon',

				cc_image_url:
					'https://pixabay.com/photos/beach-ocean-landscape-sea-water-2737460/',
				cc_author_url: 'https://pixabay.com/users/jbwilder75-4756122/',
				cc_author: 'jbwilder',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Neahkahnie Viewpoint',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Neahkahnie-Viewpoint.jpg',
				image_alt:
					'Gorgeous views over the beaches and coastline of Manzanita and Newhalem Bay seen from popular roadside Neahkahnie Viewpoint',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Larson Creek Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Larson-Creek-Falls.jpg',
				image_alt:
					"Larson Creek Falls cascading over tall vibrant green cliffs onto Short Beach near Cape Meares, along Oregon's Northern Coast",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	portland: {
		id: 'portland',
		itineraries: '',
		destinationName: 'Portland',
		stateName: 'Oregon',
		region: 'usa',
		anchor_tag: 'portland-oregon',
		destination_link: '/destinations/oregon/portland-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/69ufgpsUHk22'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Portland Attractions',
				tab_content: `<p>Oregon's capital city of Portland is located just south of the Washington border and over 60 miles (100 km) inland from the Pacific Coast. Portland has a renowned nightlife scene, with the most popular areas being Downtown Portland, Morrison Street, and Burnside Street. In these areas you'll find many great breweries, restaurants, and bars.</p>
                <p>Downtown Portland hosts the tranquil Lan Su Chinese Garden, the Portland Art Museum, and Powell's City of Books, a massive multi-leveled bookstore that's quite famous.</p>
                <p>One of Portland's top sights in the hills above the city is the chateau-stye Pittock Mansion with its fancy historic interiors and excellent views overlooking Downtown Portland. Nearby are two lush and beautiful gardens, the Portland Japanese Garden and International Rose Test Garden. On the northeastern side of Portland is Rocky Butte Park, which offers excellent views overlooking Portland and both Mt. St. Helens and Mt. Hood on a clear day.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Downtown Portland',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Portland-Downtown-Portland-PDX-View.jpg',
				image_alt:
					'View overlooking Downtown Portland (PDX) and the university cable car in Portland, Oregon',

				cc_image_url:
					'https://pixabay.com/photos/portland-oregon-usa-pdx-pnw-4474605/',
				cc_author_url: 'https://pixabay.com/users/Alayyan-1799175/',
				cc_author: 'Alayyan',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Pittock Mansion',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Portland-Pittock-Mansion.jpg',
				image_alt:
					'Lovely chateau-like exterior of the Pittock Mansion surrounded by the forests near Portland, Oregon',

				cc_image_url: 'https://www.flickr.com/photos/glenbledsoe/5768528100/',
				cc_author_url: 'https://www.flickr.com/photos/glenbledsoe/',
				cc_author: 'PhotoAtelier',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Portland Japanese Garden',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Portland-Japanese-Garden.jpg',
				image_alt:
					"Many vibrant colored plants and trees around a coi pond and bridge at Portland's Japanese Garden",

				cc_image_url: 'https://www.flickr.com/photos/jeffgunn/8238705244/',
				cc_author_url: 'https://www.flickr.com/photos/jeffgunn/',
				cc_author: 'Jeff Gunn',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Rocky Butte Park View',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Portland-Rocky-Butte.jpg',
				image_alt:
					"Picturesque evening view of Mount St. Helens framed between two lamp posts atop Portland's Rocky Butte Park",

				cc_image_url: 'https://www.flickr.com/photos/smcdevitt/3693399722/',
				cc_author_url: 'https://www.flickr.com/photos/smcdevitt/',
				cc_author: 'Sarah McDevitt',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Lan Su Chinese Garden',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Portland-Lan-Su-Chinese-Garden.jpg',
				image_alt:
					"Chinese temple and gazebo behind a coi pond surrounded by Eastern plants at Portland's Lan Su Chinese Garden",

				cc_image_url: 'https://www.flickr.com/photos/jmiske/22786796176/',
				cc_author_url: 'https://www.flickr.com/photos/jmiske/',
				cc_author: 'Jonathan Miske',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	silver_falls: {
		id: 'silver_falls',
		itineraries: '',
		destinationName: 'Silver Falls State Park',
		stateName: 'Oregon',
		region: 'usa',
		anchor_tag: 'silver-falls-state-park-oregon',
		destination_link:
			'/destinations/oregon/silver-falls-state-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/HsTFGr6prkN2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Silver Falls State Park',
				tab_content: `<p>Approximately 1 hour south of Portland is Silver Falls State Park, so be sure to get an early start on the day in order to visit this beautiful place. Silver Falls State Park is a miniature rainforest ecosystem featuring several huge waterfalls amongst an incredibly lush green landscape, with all of the waterfalls connected by a single creek.</p>
                <p>To see all of the waterfalls you can hike the popular Trail of Ten Falls, which connects all of the park's waterfalls via an extremely scenic 7.2 mile (11.6 km) hike through this rainforest-like environment. Alternatively you can see some of the park's largest and most notable waterfalls with a much shorter amount of hiking.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Lower South Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Silver-Falls-State-Park-Lower-South-Falls.jpg',
				image_alt:
					'Stunning Lower South Falls seen behind moss-covered trees along Trail of Ten Falls at Silver Falls State Park, Oregon',

				cc_image_url: 'https://www.flickr.com/photos/31246066@N04/40223190654/',
				cc_author_url: 'https://www.flickr.com/photos/31246066@N04/',
				cc_author: 'Ian Sane',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'North Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Silver-Falls-State-Park-North-Falls.jpg',
				image_alt:
					'Eroded cave walkway view behind North Falls at Silver Falls State Park, Oregon',

				cc_image_url: 'https://www.flickr.com/photos/dberry/4983741352/',
				cc_author_url: 'https://www.flickr.com/photos/dberry/',
				cc_author: 'David Berry',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Trail of Ten Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Silver-Falls-State-Park-Trail-of-the-Ten-Falls-1.jpg',
				image_alt:
					"Golden hour colors seen along the lush rainforest environment of the Trail of Ten Falls at Oregon's Silver Falls State Park",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'South Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Silver-Falls-State-Park-South-Falls.jpg',
				image_alt:
					'View of South Falls cascading over the cliffs seen from the Trail of Ten Falls at Sivler Falls State Park, Oregon',

				cc_image_url: 'https://www.flickr.com/photos/discoveroregon/41348732344/',
				cc_author_url: 'https://www.flickr.com/photos/discoveroregon/',
				cc_author: 'Rick Obst',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	southern_oregon_coast: {
		id: 'southern_oregon_coast',
		itineraries: '',
		destinationName: 'Southern Oregon Coast',
		stateName: null,
		region: 'usa',
		anchor_tag: 'oregon-coast-oregon',
		destination_link: '/destinations/oregon/southern-oregon-coast-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/YeWy54fewxv',
			all_attractions: 'https://goo.gl/maps/8WkH3Z6QK2t'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Intro',
				tab_content: `<p>Oregon's southern coast features several extremely scenic areas located along Highway 101, although the entire drive along the coast is quite scenic. This route follows along a stretch of this highway between Brookings, OR just north of the California border and Yachats, OR, which is located near the center of the Oregon Coast.</p>`
			},
			{
				tab_title: 'Samuel H. Boardman',
				tab_content: `<p>Near the city of Brookings, you'll find the Samuel H. Boardman State Scenic Corridor, an extremely scenic part of the coastline. The corridor hosts the Natural Bridges Trail, which features majestic tree-covered bridge formations along the coastline above the water. Adjacent is the Secret Beach Trail, which leads to a majestic rocky beach. Additional major viewpoints along the corridor include the Whaleshead Viewpoint and Arch Rock Picnic Area.</p>`
			},
			{
				tab_title: 'Coos Bay',
				tab_content: `<p>Further north along this route are several viewpoints over the coast, most notably the Face Rock Viewpoint which overlooks a majestic rocky part of the coastline. Be sure to also stop at the Oregon Dunes Overlook, which offers excellent views over some of the rolling sandy dunes which dominate this part of the coastline (between Coos Bay and Heceta Head). You might even consider further exploring the dunes via hiking trails.</p>`
			},
			{
				tab_title: 'Cape Perpetua',
				tab_content: `<p>Just south of Cape Perpetua is Heceta Head, which hosts a charming little lighthouse and the very photogenic Cape Creek Bridge within a scenic cove. Nearby are the Sea Lion Caves, which offers an elevator ride down to a sea cave which is seasonally filled with seals and sea lions.</p>
                <p>Near Yachats you'll find Cape Perpetua, which features several amazing coastal formations within a small area, most notably the powerful Thor's Well, which quickly fills up with water before emptying, rising and falling with the waves. Adjacent is the Sprouting Horn which sprays up water through a spout, as well as the Devil's Churn.</p>`
			}
		],
		attractions: [
			{
				attraction: "Thor's Well (Cape Perpetua)",
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Southern-Coast-Cape-Perpetua-Thors-Well.jpg',
				image_alt:
					"Stunning sunset colors in sky behind the famous Thor's Well coastal phenomenom at Oregon's Cape Perpetua",

				cc_image_url: 'https://www.flickr.com/photos/snowpeak/6066507677/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Secret Beach (Samuel H. Boardman)',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Southern-Coast-Secret-Beach.jpg',
				image_alt:
					"Stunning view at Samuel H. Boardman's sandy Secret Beach of tall sea rocks along the Southern Oregon Coast",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Cape Creek Bridge (Heceta Head)',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Southern-Coast-Cape-Creek-Bridge.jpg',
				image_alt:
					'Balancing rock tower in front of lovely Cape Creek bridge seen from beach at Heceta Head, Southern Oregon',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Natural Bridges Trail (Samuel H. Boardman)',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Southern-Coast-Natural-Bridges-Cove.jpg',
				image_alt:
					'Overlooking a natural sea bridge behind trees at Samuel H. Boardman Scenic Corridor along Southern Oregon Coast',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Heceta Head Lighthouse',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Southern-Coast-Heceta-Head-Lighthouse.jpg',
				image_alt:
					"View of the lovely little white and red Heceta Head Lighthouse from a trail along Oregon's southern coast",

				cc_image_url: 'https://www.flickr.com/photos/tomsaint/9353012084/',
				cc_author_url: 'https://www.flickr.com/photos/tomsaint/',
				cc_author: 'Rennett Stowe',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	southern_oregon_coast_sb: {
		id: 'southern_oregon_coast_sb',
		itineraries: '',
		destinationName: 'Southern Oregon Coast (Southbound)',
		stateName: null,
		region: 'usa',
		anchor_tag: 'southern-oregon-coast',
		destination_link:
			'/destinations/oregon/southern-oregon-coast-southbound-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/YeWy54fewxv',
			all_attractions: 'https://goo.gl/maps/8WkH3Z6QK2t'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Intro',
				tab_content: `<p>Oregon's southern coast features several extremely scenic areas located along Highway 101, although the entire drive along the coast is quite scenic. This route follows along a stretch of this highway between Newport / Yachats, Or and concludes in Brookings, OR just north of the California border.</p>`
			},
			{
				tab_title: 'Cape Perpetua',
				tab_content: `<p>Near Yachats you'll find Cape Perpetua, which features several amazing coastal formations within a small area, most notably the powerful Thor's Well, which quickly fills up with water before emptying, rising and falling with the waves. Adjacent is the Sprouting Horn which sprays up water through a spout, as well as the Devil's Churn.</p>
                <p>Just south of Cape Perpetua is Heceta Head, which hosts a charming little lighthouse and the very photogenic Cape Creek Bridge within a scenic cove. Nearby are the Sea Lion Caves, which offers an elevator ride down to a sea cave which is seasonally filled with seals and sea lions.</p>`
			},
			{
				tab_title: 'Coos Bay',
				tab_content: `<p>Further south along this route are several viewpoints over the coast, the Oregon Dunes Overlook, which offers excellent views over some of the rolling sandy dunes which dominate this part of the coastline (between Heceta Head and Coos Bay). You might even consider further exploring the dunes via hiking trails. South of Coos Bay is the Face Rock Viewpoint which overlooks a majestic rocky part of the coastline.</p>`
			},
			{
				tab_title: 'Samuel H. Boardman',
				tab_content: `<p>Near the city of Brookings, you'll find the Samuel H. Boardman State Scenic Corridor, an extremely scenic part of the coastline. The corridor hosts the Natural Bridges Trail, which features majestic tree-covered bridge formations along the coastline above the water. Adjacent is the Secret Beach Trail, which leads to a majestic rocky beach. Additional major viewpoints along the corridor include the Whaleshead Viewpoint and Arch Rock Picnic Area.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Yaquina Head Lighthouse',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Yaquina-Head-Lighthouse.jpg',
				image_alt:
					'Lovely idyllic Yaquina Head Lighthouse at golden hour atop the cliffs near Newport, Oregon',

				cc_image_url:
					'https://www.flickr.com/photos/esridatalibrary/33313460553/',
				cc_author_url: 'https://www.flickr.com/photos/esridatalibrary/',
				cc_author: 'Esri Public Domain Library',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Otter Crest State Scenic Viewpoint',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Otter-Crest-State-Scenic-Viewpoint.jpg',
				image_alt:
					'Stunning views looking down the Norther Oregon Coast and beaches from the Otter Crest State Scenic Viewpoint',

				cc_image_url: 'https://www.flickr.com/photos/kirt_edblom/14802702969/',
				cc_author_url: 'https://www.flickr.com/photos/kirt_edblom/',
				cc_author: 'Kirt Edblom',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Cannon Beach & Haystack Rock',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Cannon-Beach-Haystack-Rock-and-Beach-Aerial-View.jpg',
				image_alt:
					"Cloudy day looking directly at Haystack Rock at Cannon Beach along Oregon's Northern Coast",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Haystack_Rock,_Oregon_(drone_photograph).jpg&action=history',
				cc_author_url: 'https://en.wikipedia.org/wiki/User:DDima',
				cc_author: 'DiscoverWithDima',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Ecola Point (Ecola State Park)',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Ecola-State-Park-Ecola-Point-2.jpg',
				image_alt:
					'Forest-covered cliffs of Ecola State Park meeting the sandy beach at Ecola Point near Cannon Beach, Northern Oregon',

				cc_image_url:
					'https://pixabay.com/photos/beach-ocean-landscape-sea-water-2737460/',
				cc_author_url: 'https://pixabay.com/users/jbwilder75-4756122/',
				cc_author: 'jbwilder',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Neahkahnie Viewpoint',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Neahkahnie-Viewpoint.jpg',
				image_alt:
					'Gorgeous views over the beaches and coastline of Manzanita and Newhalem Bay seen from popular roadside Neahkahnie Viewpoint',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Larson Creek Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Northern-Coast-Larson-Creek-Falls.jpg',
				image_alt:
					"Larson Creek Falls cascading over tall vibrant green cliffs onto Short Beach near Cape Meares, along Oregon's Northern Coast",

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	williamette: {
		id: 'williamette',
		itineraries: '',
		destinationName: 'Williamette National Forest',
		stateName: 'Oregon',
		region: 'usa',
		anchor_tag: 'williamette-national-forest-oregon',
		destination_link:
			'/destinations/oregon/williamette-national-forest-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/LY3LvSeypwC2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Williamette N.F. Attractions',
				tab_content: `<p>The immensely beautiful Williamette National Forest is located just northwest of Bend, Oregon and is home to many stunning sights, the best of which are located along the McKenzie Highway.</p>
                <p>The powerful Sahalie Falls is surrounded by lush green forests and sits just upstream from the picturesque Koosah Falls. Further downstream along the McKenzie River is the captivating Tamolitch Blue Pool, which is a strikingly vibrant deep blue color. Along the moderate hike to see the blue pool is Tamolitch Falls.</p>
                <p>Along Highway 242 (a sub-highway of the McKenzie Highway) you'll encounter one of the most gorgeous waterfalls in Oregon, Proxy Falls. The scenery along this highway changes from thick forests to a mesmerizing black volcanic landscape, where you'll find the Dee Wright Observatory. This intriguing stone observatory offers panoramic views over this vast volcanic landscape and the many majestic mountains surrounding it.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Dee Wright Observatory',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Williamette-National-Forest-Dee-Wright-Observatory.jpg',
				image_alt:
					'View of the Sisters Mountains behind black volcanic desolate landscape seen atop the Dee Wright Observatory near Bend, Oregon',

				cc_image_url: 'https://www.flickr.com/photos/131420410@N05/36451605974/',
				cc_author_url: 'https://www.flickr.com/photos/131420410@N05/',
				cc_author: 'Lessa Clayton',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Proxy Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Williamette-National-Forest-Proxy-Falls.jpg',
				image_alt:
					'Stunning string-like waters of Proxy Falls flowing over mossy cliff near Bend in Williamette National Forest',

				cc_image_url: 'https://www.flickr.com/photos/icetsarina/42927481391/',
				cc_author_url: 'https://www.flickr.com/photos/icetsarina/',
				cc_author: 'Bonnie Moreland',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Tamolitch Blue Pool',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Williamette-National-Forest-Tamolitch-Blue-Pool.jpg',
				image_alt:
					'Reflection of tall trees seen in the vibratn deep blue clear waters of the Tamolitch Blue Pool in Williamette National Forest',

				cc_image_url: 'https://www.flickr.com/photos/49580580@N02/36891631960/',
				cc_author_url: 'https://www.flickr.com/photos/49580580@N02/',
				cc_author: 'Thomas Shahan',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Koosah Falls',
				image_url:
					'https://www.travelimager.com/images/oregon/Oregon-Williamette-National-Forest-Koosah-Falls.jpg',
				image_alt:
					'Koosah Falls and its vibrant light blue waters located downstream from Sahalie Falls in Williamette National Forest',

				cc_image_url: 'https://www.flickr.com/photos/131420410@N05/37248594450/',
				cc_author_url: 'https://www.flickr.com/photos/131420410@N05/',
				cc_author: 'Lessa Clayton',
				cc_license_url: null,
				cc_license: null
			}
		]
	},

	arches_ut: {
		id: 'arches_ut',
		itineraries: 'utah, ut-az',
		destinationName: 'Arches National Park',
		stateName: 'Utah',
		region: 'usa',
		anchor_tag: 'arches-national-park-utah',
		destination_link: '/destinations/utah/arches-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/9MNZ9Gzvju12',
			all_attractions: 'https://goo.gl/maps/sfhsw1NZweK2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>Arches National Park is home to the largest concentration of natural arches on Earth, along with many other unique rock formations surround by picturesque scenery and red rock. Both Arches and Canyonlands National Parks are adjacent to the city of Moab.</p>`
			},
			{
				tab_title: 'Top Attractions',
				tab_content: `<p>Upon entering the national park you'll reach the Park Avenue area, which is known for its incredible towering sandstone formations. Driving through the park you'll encounter many viewpoints along the highway, which overlook the picturesque surrounding landscape as well as several unique features such as the Petrified Dunes and Fiery Furnace.</p>
                <p>Arches National Park hosts many of Utah's most iconic natural wonders, including the Balanced Rock, Double Arch, Delicate Arch, and Landscape Arch. The Landscape Arch sits within the Devils Garden, a beautiful rugged area containing many more arches. Near the incredibly rare Double Arch you'll fine the stunning North and South Window Arches as well as the Turret Arch.</p>`
			},
			{
				tab_title: 'Moab Area',
				tab_content: `<p>Just outside of Moab you can take a short and scenic hike to view the famous Corona Arch, as well as the adjacent Bowtie Arch.</p>
                <p>South of Arches National Park you'll find several notable attractions, including the massive Wilson Arch along the highway, as well as the more remote Needles Overlook, which offers gorgeous views over a vast and complex network of canyons in the Needles District of Canyonlands National Park.</p>`
			}
		],
		attractions: [
			{
				id: 'arches-13',
				carouselId: 'delicate-arch',
				itineraryCarousel: null,
				attraction: 'Delicate Arch',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Arches-National-Park-Delicate-Arch-Glowing.jpg',
				image_alt:
					"Iconic giant Delicate Arch natural arch formation barely supporting its own weight, at Utah's Arches National Park",
				cc_image_url:
					'https://pixabay.com/photos/sunset-blue-sky-sky-nature-summer-2854724/',
				cc_author_url: 'https://pixabay.com/users/webpascal-5370447/',
				cc_author: 'webpascal',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'arches-21',
				carouselId: 'arches-devils-garden',
				itineraryCarousel: null,
				attraction: 'Landscape Arch',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Arches-National-Park-Landscape-Arch-Distant.jpg',
				image_alt:
					"Looking up at the extremely wide and thin Landscape Arch set amongst the cloudy sky at Utah's Arches National Park",
				cc_image_url:
					'https://pixabay.com/photos/landscape-arch-arches-national-park-1199210/',
				cc_author_url: 'https://pixabay.com/users/escapedesign-2029666/',
				cc_author: 'escapedesign',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'arches-4',
				carouselId: 'park-avenue-and-balanced-rock',
				itineraryCarousel: null,
				attraction: 'Balanced Rock',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Arches-National-Park-Balanced-Rock.jpg',
				image_alt:
					'Looking up at the stunning natural formation of the massive Balanced Rock in Arches National Park',
				cc_image_url: 'https://www.flickr.com/photos/banduki/18184649814/',
				cc_author_url: 'https://www.flickr.com/photos/banduki/',
				cc_author: 'Chetan Kolluri',
				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'arches-9',
				carouselId: 'double-and-window-arches',
				itineraryCarousel: null,
				attraction: 'Double Arch',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Arches-National-Park-Double-Arch-Noon.jpg',
				image_alt:
					'Looking up at massive Double Arch, an extremely rare formation with two side-by-side arches at Arches National Park, Utah',
				cc_image_url:
					'https://pixabay.com/photos/double-arch-landscape-nature-scenic-1865417/',
				cc_author_url: 'https://pixabay.com/users/skeeze-272447/',
				cc_author: 'skeeze',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'arches-17',
				carouselId: 'arches-more-viewpoints-and-arches',
				itineraryCarousel: null,
				attraction: 'Fiery Furnace Viewpoint',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Arches-National-Park-Fiery-Furnace-Pinnacles.jpg',
				image_alt:
					'Striking rounded pillar-like rock formations known as the Fiery Furnace at Arches National Park',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Arches_National_Park%E2%80%A6pinnacles_of_the_Fiery_Furnace_(6294484466).jpg&action=history',
				cc_author_url: 'https://www.flickr.com/people/61456446@N06',
				cc_author: 'Murray Foubister',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'arches-5',
				carouselId: 'double-and-window-arches',
				itineraryCarousel: null,
				attraction: 'North & South Windows',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Arches-National-Park-North-and-South-Windows-Arches.jpg',
				image_alt:
					'Giant natural formations of the North and South Windows side-by-side seen from the Window Trail at Arches National Park',
				cc_image_url:
					'https://pixabay.com/photos/north-and-south-window-arches-arches-3894694/',
				cc_author_url: 'https://pixabay.com/users/MikeGoad-29415/',
				cc_author: 'MikeGoad',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'arches-15',
				carouselId: 'delicate-arch',
				itineraryCarousel: null,
				attraction: 'Delicate Arch & Bowl',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Arches-National-Park-Delicate-Arch-and-Bowl-Cloudy-Sunset.jpg',
				image_alt:
					'Wide cloudy sunset view of Delicate Arch and adjacent bowl formation at Arches National Park in Moab, Utah',
				cc_image_url: 'https://www.flickr.com/photos/archesnps/8520706358/',
				cc_author_url: 'https://www.flickr.com/photos/archesnps/',
				cc_author: 'Arches National Park',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'arches-26',
				carouselId: 'greater-moab-attractions',
				itineraryCarousel: null,
				attraction: 'Corona Arch (Moab)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Moab-Corona-Arch.jpg',
				image_alt:
					'Famous Corona Arch formation located near the Colorado River just outside of Moab, Utah near Arches National Park',
				cc_image_url: 'https://www.flickr.com/photos/bumeister/38223173234/',
				cc_author_url: 'https://www.flickr.com/photos/bumeister/',
				cc_author: 'John Buie',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},

	bears_ears: {
		id: 'bears_ears',
		itineraries: 'utah, arizona, ut-az',
		destinationName: 'Valley of the Gods & Natural Bridges',
		stateName: 'Utah',
		region: 'usa',
		anchor_tag: 'valley-of-the-gods-and-natural-bridges-utah',
		destination_link:
			'/destinations/utah/valley-of-the-gods-and-natural-bridges-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/XB6KfDLfD6QUbB5BA'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				id: 'bears-ears-3',
				carouselId: 'valley-of-the-gods',
				itineraryCarousel: null,
				attraction: 'Valley of the Gods',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Bears-Ears-National-Monument-Valley-of-the-Gods-Hand.jpg',
				image_alt:
					"Hand-shaped butte formation in Utah's scenic Valley of the Gods, located within Bears Ears National Monument",
				cc_image_url: 'https://www.flickr.com/photos/snowpeak/7279723030/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'bears-ears-2',
				carouselId: 'valley-of-the-gods',
				itineraryCarousel: null,
				attraction: 'Valley of the Gods',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Bears-Ears-National-Monument-Valley-of-the-Gods-Distant-Buttes-and-Formations.jpg',
				image_alt:
					"Golden hour glow of the buttes and cliffs of Utah's Valley of the Gods within Bears Ears National Monument",
				cc_image_url:
					'https://www.flickr.com/photos/iip-photo-archive/35263542523/',
				cc_author_url: 'https://www.flickr.com/photos/iip-photo-archive/',
				cc_author: 'GPA Photo Archive',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'bears-ears-7',
				carouselId: 'natural-bridges-and-bears-ears',
				itineraryCarousel: null,
				attraction: 'Sipapu Bridge (Natural Bridges)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Natural-Bridges-National-Monument-Sipapu-Bridge.jpg',
				image_alt:
					"Looking up at the Sipapu Bridge, one of the world's largest natural bridges, in Utah's Natural Bridges National Monument",
				cc_image_url:
					'https://www.flickr.com/photos/naturalbridgesnps/9472070625/',
				cc_author_url: 'https://www.flickr.com/photos/naturalbridgesnps/',
				cc_author: "Natural Bridges Nat'l. Mon.",
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'bears-ears-9',
				carouselId: 'natural-bridges-and-bears-ears',
				itineraryCarousel: null,
				attraction: 'Owachomo Bridge (Natural Bridges)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Natural-Bridges-National-Monument-Owachomo-Bridge-View-from-Below.jpg',
				image_alt:
					"Looking up at the Owachomo Bridge framed against the sky in Utah's Natural Bridges National Monument",
				cc_image_url: 'flickr.com/photos/naturalbridgesnps/9472011077/',
				cc_author_url: 'https://www.flickr.com/photos/naturalbridgesnps/',
				cc_author: 'Natural Bridges National Monument',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'bears-ears-5',
				carouselId: 'natural-bridges-and-bears-ears',
				itineraryCarousel: null,
				attraction: 'Moki Dugway',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Bears-Ears-National-Monument-Moki-Dugway-View.jpg',
				image_alt:
					"Overlooking the desert from atop the steep winding Moki Dugway Road at Utah's Bears Ears National Monument",
				cc_image_url: 'https://www.flickr.com/photos/snowpeak/4074709631/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},

	bryce_canyon: {
		id: 'bryce_canyon',
		itineraries: 'utah, ut-az',
		destinationName: 'Bryce Canyon National Park',
		stateName: 'Utah',
		region: 'usa',
		anchor_tag: 'bryce-canyon-national-park-utah',
		destination_link:
			'/destinations/utah/bryce-canyon-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/fQgEAr8AiCS2',
			all_attractions: 'https://goo.gl/maps/5rPFgTeuW5q'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Bryce Canyon N.P.',
				tab_content: `<p>Bryce Canyon is a truly unique and incredible landscape, which is riddles with hoodoo formations and natural amphitheaters amongst a vast red rock area with dense forests and a good chance of observing wildlife.</p>
                <p>Most of the sights within the park are along Highway 63, which travels south from the town of Bryce into the park, gaining in elevation as you make you way up the plateau with countless viewpoints along the way. This highway passes many stunningly gorgeous overlooks, including Fairyland Point, Sunrise Point, Sunset Point, Inspiration Point, Bryce Point, and Rainbow Point all the way at the top of the plateau.</p>
                <p>Bryce Canyon's most popular hiking trail is a combination of the Queens Garden and Navajo Loop Trail which journey through these mystical hoodoo formations. A longer route passing many mesmerizing formations is the Fairyland Loop Trail, which ventures around a different hoodoo amphitheater.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: ` <p>On the eastern side of Bryce Canyon is the striking Mossy Cave trail and a beautiful red rock waterfall. Further east is Kodachrome Basin State Park, which hosts a surreal landscape of red rock formations and captivating spires. Also in this area is the popular Willis Creek Slot Canyon.</p>`
			}
		],
		attractions: [
			{
				id: 'bryce-canyon-8',
				carouselId: 'sunrise-and-sunset-point-bryce-canyon',
				itineraryCarousel: null,
				attraction: 'Queens Garden Trail',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Bryce-Canyon-National-Park-Queens-Garden-Trail.jpg',
				image_alt:
					'Beautiful view along the trail beneath the hoodoos of the Queens Garden Trail in Bryce Canyon National Park',
				cc_image_url: 'https://www.flickr.com/photos/daveynin/6067244915/',
				cc_author_url: 'https://www.flickr.com/photos/daveynin/',
				cc_author: 'David Fulmer',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'bryce-canyon-12',
				carouselId: 'bryce-and-inspiration-point',
				itineraryCarousel: null,
				attraction: 'Bryce Point',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Bryce-Canyon-National-Park-Bryce-Point.jpg',
				image_alt:
					'Sunrise over Bryce Point overlooking countless hoodoos from high above, near the top of Bryce Canyon National Park',
				cc_image_url: 'https://www.flickr.com/photos/easethemain/34605408014/',
				cc_author_url: 'https://www.flickr.com/photos/easethemain/',
				cc_author: 'Darold Massaro',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'bryce-canyon-9',
				carouselId: 'sunrise-and-sunset-point-bryce-canyon',
				itineraryCarousel: null,
				attraction: 'Wall Street (Navajo Loop Trail)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Bryce-Canyon-National-Park-Navajo-Loop-Wall-Street.jpg',
				image_alt:
					"Looking up at the switchback walkways surrounded by towering hoodoos of Wall Street along Bryce Canyon's Navajo Loop Trail",
				cc_image_url: 'https://www.flickr.com/photos/andrewasmith/7593027076/',
				cc_author_url: 'https://www.flickr.com/photos/andrewasmith/',
				cc_author: 'Andrew Smith',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'bryce-canyon-6',
				carouselId: 'sunrise-and-sunset-point-bryce-canyon',
				itineraryCarousel: null,
				attraction: 'Sunrise Point',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Bryce-Canyon-National-Park-Sunrise-Point.jpg',
				image_alt:
					"Beautiful red sunrise colors lighting up the countless hoodoo formations of Bryce Canyon National Park's Sunrise Point",
				cc_image_url: 'https://www.flickr.com/photos/58869428@N05/7707900382/',
				cc_author_url: 'https://www.flickr.com/photos/58869428@N05/',
				cc_author: 'Todd Petrie',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'bryce-canyon-5',
				carouselId: 'red-canyon-and-fairyland',
				itineraryCarousel: null,
				attraction: 'Fairyland Loop Trail',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Bryce-Canyon-National-Park-Fairyland-Loop.jpg',
				image_alt:
					"Looking up at some red rock hoodoo fomrations from Bryce Canyon National Park's Fairyland Loop Trail",
				cc_image_url:
					'https://www.flickr.com/photos/nicolas_vollmer_photo/9157989946/',
				cc_author_url: 'https://www.flickr.com/photos/nicolas_vollmer_photo/',
				cc_author: 'Nicholas Vollmer',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'bryce-canyon-11',
				carouselId: 'bryce-and-inspiration-point',
				itineraryCarousel: null,
				attraction: 'Upper Inspiration Point',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Bryce-Canyon-National-Park-Inspiration-Point.jpg',
				image_alt:
					'Snowy covered red rock hoodoo formations of Bryce Canyon National Park seen from Upper Inspiration Point',
				cc_image_url:
					'https://www.flickr.com/photos/captainfaulkers/34814551831/',
				cc_author_url: 'https://www.flickr.com/photos/captainfaulkers/',
				cc_author: 'James Faulkner',
				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'bryce-canyon-21',
				carouselId: 'kodachrome-and-more-bryce',
				itineraryCarousel: null,
				attraction: 'Panorama Long Loop Trail (Kodachrome Basin)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Kodachrome-Basin-State-Park-Panorama-Loop.jpg',
				image_alt:
					"Overlooking the red rock wall formations towering above the valley from Kodachrome Basin State Park's Panorama Loop Trail",
				cc_image_url: 'https://www.flickr.com/photos/achillifamily/21168885320/',
				cc_author_url: 'https://www.flickr.com/photos/achillifamily/',
				cc_author: 'Achilli Family Journeys',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	canyonlands: {
		id: 'canyonlands',
		itineraries: 'utah, ut-az',
		destinationName: 'Canyonlands National Park',
		stateName: 'Utah',
		region: 'usa',
		anchor_tag: 'canyonlands-national-park-utah',
		destination_link:
			'/destinations/utah/canyonlands-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/8gCAqwY8Q512',
			all_attractions: 'https://goo.gl/maps/5ZwFhQe9x862'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>Canyonlands is a vast national park carved out by the Green River and Colorado River (upstream from the Grand Canyon) that contains many unique natural formations amongst the mesas, buttes, and canyons that make up this gorgeous landscape.</p>
                <p>A majority of the park's best and most easily accessible sights are located in the Island in the Sky District of the park near Moab. This area is a giant towering plateau which is almost completely surrounded by winding rivers and canyons, essentially creating an island.</p>`
			},
			{
				tab_title: 'Dead Horse Point',
				tab_content: `<p>Before reaching the Island in the Sky entrance visit Dead Horse Point State Park, which offers majestic views over a behemoth river bend and countless surrounding canyons from high above.</p>
                <p>You can also enjoy distant views overlooking the famous vibrant blue and purple potash ponds surrounded by the desert from a nearby viewpoint.</p>`
			},
			{
				tab_title: 'Canyonlands Attractions',
				tab_content: `<p>Within Canyonlands National Park you'll find several more breathtaking viewpoints over the many vast canyons, including Grand View Point, Shafer Canyon Overlook, and the Green River Overlook among others. Canyonlands also hosts the iconic Mesa Arch, which glows during the sunrise, as well as the otherworldly Upheaval Dome formation and the elusive False Kiva, an old stone circle of unknown origin that sits within a cave overlooking a picturesque canyon.</p>
                <p>If you have a high-clearance or 4x4 vehicle you might consider the extremely scenic drive along Highway 142 through Shafer Canyon, which travels alongside the canyon's rivers, offering the chance to see Dead Horse Point from below as well as the Musselman Arch and much more.</p>`
			}
		],
		attractions: [
			{
				id: 'canyonlands-8',
				carouselId: 'upheaval-dome-road-and-more',
				itineraryCarousel: null,
				attraction: 'Green River Overlook',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Canyonlands-National-Park-Green-River-Overlook-View.jpg',
				image_alt:
					'Vast desolate canyon landscape carved out by the Green River, seen from the Green River Overlook at Canyonlands National Park',
				cc_image_url: 'https://www.flickr.com/photos/mark_land/5602057288/',
				cc_author_url: 'https://www.flickr.com/photos/mark_land/',
				cc_author: 'Mark Land',
				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'canyonlands-4',
				carouselId: 'dead-horse-point-and-grand-viewpoint-road',
				itineraryCarousel: null,
				attraction: 'Mesa Arch',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Canyonlands-National-Park-Mesa-Arch.jpg',
				image_alt:
					'Breathtaking view of the sunrise glowing the underside of iconic Mesa Arch at Canyonlands National Park, Utah',
				cc_image_url: 'https://www.flickr.com/photos/snowpeak/4923407833/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'canyonlands-1',
				carouselId: 'dead-horse-point-and-grand-viewpoint-road',
				itineraryCarousel: null,
				attraction: 'Dead Horse Point Overlook',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Dead-Horse-Point-State-Park-Dead-Horse-Point-Overlook.jpg',
				image_alt:
					'Overlooking the iconic massive scale bend in the Colorado River known from Dead Horse Point State Park near Canyonlands, Utah',
				cc_image_url: 'https://www.flickr.com/photos/banduki/18389020859/',
				cc_author_url: 'https://www.flickr.com/photos/banduki/',
				cc_author: 'Chetan Kolluri',
				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'canyonlands-10',
				carouselId: 'upheaval-dome-road-and-more',
				itineraryCarousel: null,
				attraction: 'Upheaval Dome',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Canyonlands-National-Park-Upheaval-Dome.jpg',
				image_alt:
					'Giant white rock of the Upheaval Dome rising out of a massive crater-like formation in Canyonlands National Park',
				cc_image_url:
					'https://www.flickr.com/photos/jeffhollettvancouverwa/40347731642/',
				cc_author_url: 'https://www.flickr.com/photos/jeffhollettvancouverwa/',
				cc_author: 'Jeff Hollett',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'canyonlands-7',
				carouselId: 'dead-horse-point-and-grand-viewpoint-road',
				itineraryCarousel: null,
				attraction: 'Buck Canyon Overlook',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Canyonlands-National-Park-Buck-Canyon-Overlook.jpg',
				image_alt:
					'Close-up view of a buck deer set amongst the canyons of Buck Canyon at Canyonlands with La Sal Mountains in background',
				cc_image_url: 'https://www.flickr.com/photos/39422575@N02/32230460681/',
				cc_author_url: 'https://www.flickr.com/photos/39422575@N02/',
				cc_author: 'Robb Hannawacker',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'canyonlands-2',
				carouselId: 'dead-horse-point-and-grand-viewpoint-road',
				itineraryCarousel: null,
				attraction: 'Basin Overlook & Potash Ponds (Dead Horse Point)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Dead-Horse-Point-State-Park-Basin-Overlook-View-of-Potash-Ponds.jpg',
				image_alt:
					'Distant view from Basin Overlook of the vibrant blue potash ponds set amongst desert canyons from Dead Horse Point State Park',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Dead_horse_point_state_park.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Dead_horse_point_state_park.jpg&action=history',
				cc_author: 'Danny Marcantel',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	capitol_reef_goblin_valley: {
		id: 'capitol_reef_goblin_valley',
		itineraries: 'utah, ut-az',
		destinationName: 'Capitol Reef National Park & Goblin Valley',
		stateName: 'Utah',
		region: 'usa',
		anchor_tag: 'capitol-reef-and-goblin-valley-utah',
		destination_link:
			'/destinations/utah/capitol-reef-and-goblin-valley-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/Adr45mU7RRG2',
			all_attractions: 'https://goo.gl/maps/rqc29t3hH1A2',
			custom_attractions_1: 'https://goo.gl/maps/JdU3kMBGt412',
			custom_attractions_1_text: '4x4 or Tour Only'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Goblin Valley',
				tab_content: `<p>Capitol Reef National Park is frequently combined with a visit to nearby Goblin Valley State Park, a strange and stunning landscape of countless mushroom-shaped hoodoo formations which resembles an alien planet and has been the setting for such in movies and TV shows.</p>`
			},
			{
				tab_title: 'San Rafael Swell',
				tab_content: `<p>Nearby Goblin Valley is the San Rafael Swell, a vast wave-like geological formation which can be admired from many viewpoints along Highway 70. The swell offers hikes such as the Little Wild Horse / Bell Canyon Trail and the elusive Wild Horse Window.</p>`
			},
			{
				tab_title: 'Capitol Reef Attractions',
				tab_content: `<p>Within Capitol Reef National Park you'll find historic places sites such as the Pioneer Register and the Fruita Schoolhouse. The park's most popular trail is the Hickman Bridge Trail, which offers amazing views as well. Driving through the national park is an extremely scenic experience, as the roads are lined with striking unique formations such as the Capitol Dome, Mummy Cliff, Chimney Rock, and Goosenecks Overlook.</p>
                <p>Other popular trails the park offers include Cohab Canyon and the Cassidy Arch. The drive between Capitol Reef National Park and Grand Staircase-Escalante National Monument to the south is also incredibly scenic, passing through high altitude forests with several amazing viewpoints overlooking the Capitol Reef formation from high above, including the Larb Hollow Overlook.</p>
                <p>Many of Capitol Reef National Park's most extraordinary sights sit within the northern Cathedral Valley section of the park, which is only accessible via a 4x4 vehicle or a guided tour. This section of the national park requires almost an entire day to explore. The top attractions in this section of Capitol Reef include the Temple of the Sun and Temple of the Moon.</p>`
			}
		],
		attractions: [
			{
				id: 'capitol-reef-7',
				carouselId: 'hickman-bridge-and-more',
				itineraryCarousel: null,
				attraction: 'Hickman Natural Bridge',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Capitol-Reef-National-Park-Hickman-Natural-Bridge.jpg',
				image_alt:
					'Looking up at the stunning giant Hickman Natural Bridge at Capitol Reef National Park',
				cc_image_url: 'https://www.flickr.com/photos/19414390@N04/31126651036/',
				cc_author_url: 'https://www.flickr.com/photos/19414390@N04/',
				cc_author: 'Christian Keller',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'capitol-reef-9',
				carouselId: 'hickman-bridge-and-more',
				itineraryCarousel: null,
				attraction: 'Capital Dome',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Capitol-Reef-National-Park-Capitol-Dome.jpg',
				image_alt:
					"Stunning pointed Capital Dome formation seen along the road traveling through Utah's Capitol Reef National Park",
				cc_image_url: 'https://travonga.com/',
				cc_author_url: 'https://travonga.com/',
				cc_author: 'Travonga.com',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'capitol-reef-2',
				carouselId: 'fruita-and-fishlake-forest',
				itineraryCarousel: null,
				attraction: 'Chimney Rock',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Capitol-Reef-National-Park-Chimney-Rock.jpg',
				image_alt:
					'Looking up at the glowing red rock Chimney Rock with contrasting snow at Capitol Reef National Park',
				cc_image_url: 'https://www.flickr.com/photos/47096398@N08/4735790802/',
				cc_author_url: 'https://www.flickr.com/photos/47096398@N08/',
				cc_author: 'Esther Lee',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'capitol-reef-1',
				carouselId: 'fruita-and-fishlake-forest',
				itineraryCarousel: null,
				attraction: 'Larb Hollow Overlook (HWY 12)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Capitol-Reef-National-Park-Fishlake-National-Forest-Larb-Hollow-Overlook.jpg',
				image_alt:
					'Epic-scale red rock formations of Capitol Reef National Park seen from afar from the Larb Hollow Overlook of Fishlake Forest',
				cc_image_url:
					'https://www.flickr.com/photos/jsjgeology/8434766068/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/jsjgeology/',
				cc_author: 'James St. John',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'capitol-reef-14',
				carouselId: 'cathedral-valley',
				itineraryCarousel: null,
				attraction: 'Temple of the Sun (4x4)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Capitol-Reef-National-Park-Temple-of-the-Sun.jpg',
				image_alt:
					'Massive temple-shaped Temple of the Sun formation towering above the Cathedral Valley of Capitol Reef National Park',
				cc_image_url: 'https://www.flickr.com/photos/gsec/18663877584/',
				cc_author_url: 'https://www.flickr.com/photos/gsec/',
				cc_author: 'Greater SW Exploration Co.',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'capitol-reef-17',
				carouselId: 'goblin-valley-and-san-rafael-swell',
				itineraryCarousel: null,
				attraction: 'Wild Horse Window',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-San-Rafael-Swell-Recreation-Area-Wild-Horse-Window.jpg',
				image_alt:
					"Looking up at the stunning Wild Horse Window framing the blue sky, found along Utah's San Rafael Swell near Goblin Valley",
				cc_image_url: 'https://travonga.com/',
				cc_author_url: 'https://travonga.com/',
				cc_author: 'Travonga.com',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'capitol-reef-19',
				carouselId: 'goblin-valley-and-san-rafael-swell',
				itineraryCarousel: null,
				attraction: 'Bell Canyon',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-San-Rafael-Swell-Recreation-Area-Bell-Canyon.jpg',
				image_alt:
					"Sandy pathway below the walls of Bell Canyon which connects to Little Wildhorse Canyon along Utah's San Rafael Swell",
				cc_image_url:
					'https://www.flickr.com/photos/gsec/19099978229/in/photolist-4MzP3a-wC6pk3-vogBh4-vkY4Pm-vogAYt-vogB1x-v6No6t/',
				cc_author_url: 'https://www.flickr.com/photos/gregw66/',
				cc_author: 'Greg Willis',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	cedar_breaks_kolob_canyons: {
		id: 'cedar_breaks_kolob_canyons',
		itineraries: 'utah, ut-az',
		destinationName: 'Cedar Breaks National Monument & Kolob Canyons',
		stateName: 'Utah',
		region: 'usa',
		anchor_tag: 'cedar-breaks-and-kolob-canyons-utah',
		destination_link:
			'/destinations/utah/cedar-breaks-and-kolob-canyons-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/GyhgtZW2WMr',
			all_attractions: 'https://goo.gl/maps/wMQ7CbQNzgw'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				id: 'cedar-breaks-kolob-canyons-4',
				carouselId: 'kolob-canyons-and-kanarraville',
				itineraryCarousel: null,
				attraction: 'Kanarra Creek Canyon Falls Trail',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Southwestern-Utah-Kanarraville-Kanarra-Creek-Canyon-Trail-Waterfall-and-Ladder.jpg',
				image_alt:
					'Gorgeous slot canyon waterfalls of the Kanarra Creek Canyon trail beside a laddernear Kanarraville, Utah',
				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Kanarraville,_United_States_(Unsplash).jpg&action=history',
				cc_author_url: 'https://unsplash.com/@jakeufkes',
				cc_author: 'Jacob Ufkes',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'cedar-breaks-kolob-canyons-2',
				carouselId: 'kolob-canyons-and-kanarraville',
				itineraryCarousel: null,
				attraction: 'Middle Fork Taylor Creek Trail',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-West-Zion-National-Park-Kolob-Canyons-Middle-Fork-Taylor-Creek-Trail.jpg',
				image_alt:
					"Giant red rock alcoves amongst the cliffs seen along the Middle Fork Taylor Creek Trail of West Zion's Kolob Canyons in Utah",
				cc_image_url: 'https://www.flickr.com/photos/snowpeak/6302213787/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'cedar-breaks-kolob-canyons-1',
				carouselId: 'kolob-canyons-and-kanarraville',
				itineraryCarousel: null,
				attraction: 'Kolob Canyon Scenic Drive',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-West-Zion-National-Park-Kolob-Canyons-Scenic-Drive.jpg',
				image_alt:
					"Red street leading to the scenic landscape of West Zion National Park's Kolob Canyons",
				cc_image_url: 'https://www.flickr.com/photos/23155134@N06/26830325717/',
				cc_author_url: 'https://www.flickr.com/photos/23155134@N06/',
				cc_author: 'Don Graham',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'cedar-breaks-kolob-canyons-7',
				carouselId: 'cedar-breaks-and-greater-zion',
				itineraryCarousel: null,
				attraction: 'Point Supreme Overlook',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Cedar-Breaks-National-Monument-Point-Supreme-Overlook.jpg',
				image_alt:
					'Vast landscape of red and white cliffs of Cedar Braks National Monument admired from the Point Supreme Overlook',
				cc_image_url: 'https://www.flickr.com/photos/ciamabue/4956199795/',
				cc_author_url: 'https://www.flickr.com/photos/ciamabue/',
				cc_author: 'Jon Connell',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	flaming_gorge_dinosaur: {
		id: 'flaming_gorge_dinosaur',
		itineraries: 'utwy',
		destinationName: 'Flaming Gorge & Dinosaur National Monument',
		stateName: 'Utah',
		region: 'usa',
		anchor_tag: 'flaming-gorge-and-dinosaur-national-monument-utah',
		destination_link:
			'/destinations/utah/flaming-gorge-and-dinosaur-national-monument-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/XtTJmuL8MYU2'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Sheep Creek Overlook',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Flaming-Gorge-National-Recreation-Area-Sheep-Creek-Overlook.jpg',
				image_alt:
					"Red cliffs rising above the Green River seen from Sheep Creek Overlook at Utah's Flaming Gorge National Recreation Area",

				cc_image_url: 'https://www.flickr.com/photos/bernd_thaller/38547207941/',
				cc_author_url: 'https://www.flickr.com/photos/bernd_thaller/',
				cc_author: 'Bernd Thaller',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Red Canyon Visitor Center View',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Flaming-Gorge-National-Recreation-Area-Red-Canyon-Visitor-Center-Overlook.jpg',
				image_alt:
					'Overlooking the deep-blue winding Green River from the Red Canyon Visitor Center at Flaming Gorge National Recreation Area',

				cc_image_url: 'https://www.flickr.com/photos/jmenard48/3105471576/',
				cc_author_url: 'https://www.flickr.com/photos/jmenard48/',
				cc_author: 'John Menard',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Canyon Rim Overlook',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Flaming-Gorge-National-Recreation-Area-Canyon-Rim-Overlook.jpg',
				image_alt:
					"Cloudy view overlooking the Green River below red cliffs at Flaming Gorge National Recreation Area's Canyon Rim Overlook",

				cc_image_url: 'https://www.flickr.com/photos/kylir/8533966437/',
				cc_author_url: 'https://www.flickr.com/photos/kylir/',
				cc_author: 'Kylir Horton',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Moonshine Arch',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Northeastern-Utah-Vernal-Moonshine-Arch.jpg',
				image_alt:
					'Striking Moonshine Arch set amongst the remote landscape of Northeastern Utah near Vernal',

				cc_image_url: 'https://www.flickr.com/photos/bernd_thaller/25506400898/',
				cc_author_url: 'https://www.flickr.com/photos/bernd_thaller/',
				cc_author: 'Bernd Thaller',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},
	grand_staircase_escalante: {
		id: 'grand_staircase_escalante',
		itineraries: 'utah, ut-az',
		destinationName: 'Grand Staircase-Escalante National Monument',
		stateName: 'Utah',
		region: 'usa',
		anchor_tag: 'grand-staircase-escalante',
		destination_link:
			'/destinations/utah/grand-staircase-escalante-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/q3ie7C814V92',
			custom_attractions_1: 'https://goo.gl/maps/bFG734fHpHM2',
			custom_attractions_1_text: 'Coyote Gulch',
			custom_attractions_2: 'https://goo.gl/maps/f7BwXH3XQDp',
			custom_attractions_2_text: '4x4 Only Hikes'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				id: 'grand-staircase-escalante-2',
				carouselId: 'slot-canyons-and-cal-creek-falls',
				itineraryCarousel: null,
				attraction: 'Zebra Slot Canyon',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Grand-Staircase-Escalante-National-Monument-Zebra-Slot-Canyon.jpg',
				image_alt:
					'Looking along the stunning striped canyon walls of the Zebra Slot Canyon in Grand Staircase-Escalante National Monument',
				cc_image_url: 'https://www.flickr.com/photos/gregw66/3684624275/',
				cc_author_url: 'https://www.flickr.com/photos/gregw66/',
				cc_author: 'Greg Willis',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'grand-staircase-escalante-1',
				carouselId: 'slot-canyons-and-cal-creek-falls',
				itineraryCarousel: null,
				attraction: 'Lower Calf Creek Falls',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Grand-Staircase-Escalante-National-Monument-Lower-Calf-Creek-Falls.jpg',
				image_alt:
					'Beautiful Lower Calf Creek Falls flowing over the cliffs near Escalante, Utah',
				cc_image_url:
					'https://www.flickr.com/photos/usgeologicalsurvey/15310834533/',
				cc_author_url: 'https://www.flickr.com/photos/usgeologicalsurvey/',
				cc_author: 'U.S. Geological Survey',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'grand-staircase-escalante-4',
				carouselId: 'slot-canyons-and-cal-creek-falls',
				itineraryCarousel: null,
				attraction: 'Metate Arch (Devils Garden)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Grand-Staircase-Escalante-National-Monument-Devils-Garden-Metate-Arch.jpg',
				image_alt:
					'Thin bone-like Metate Arch located in the Devils Garden Area of Grand Staircase-Escalante National Monument',
				cc_image_url: 'https://www.flickr.com/photos/kenlund/2519294355/',
				cc_author_url: 'https://www.flickr.com/photos/kenlund/',
				cc_author: 'Ken Lund',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'grand-staircase-escalante-9',
				carouselId: 'coyote-gulch',
				itineraryCarousel: null,
				attraction: 'Coyote Gulch Waterfalls',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Grand-Staircase-Escalante-National-Monument-Coyote-Gulch-Waterfalls.jpg',
				image_alt:
					"Picturesque waterfalls of the Coyote Gulch flowing over smooth rock in Utah's Grand Staircase-Escalante National Monument",
				cc_image_url: 'https://www.flickr.com/photos/snowpeak/5984283275/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'grand-staircase-escalante-7',
				carouselId: 'coyote-gulch',
				itineraryCarousel: null,
				attraction: 'Jacob Hamblin Arch (Coyote Gulch)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Grand-Staircase-Escalante-National-Monument-Jacob-Hamblin-Arch.jpg',
				image_alt:
					'Massive Jacob Hamblin Arch spanning over the stream of Coyote Gulch in Grand Staircase-Escalante National Monument',
				cc_image_url: 'https://www.flickr.com/photos/snowpeak/6055747551/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'grand-staircase-escalante-14',
				carouselId: 'grand-staircase-escalante-4x4',
				itineraryCarousel: null,
				attraction: 'Reflection Canyon (4x4 or Boat Only)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Grand-Staircase-Escalante-National-Monument-Reflection-Canyon-Boat.jpg',
				image_alt:
					'View of the winding Reflection Canyon of Lake Powell reached via hike from Grand Staircase-Escalante National Monument',
				cc_image_url:
					'https://pixabay.com/photos/colorado-river-boat-recreation-2141844/',
				cc_author_url: 'https://pixabay.com/users/272447-272447/',
				cc_author: '272447',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'grand-staircase-escalante-15',
				carouselId: 'grand-staircase-escalante-4x4',
				itineraryCarousel: null,
				attraction: 'Cosmic Ashtray (4x4 Only)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Grand-Staircase-Escalante-National-Monument-Cosmic-Ashtray.jpg',
				image_alt:
					'Stunning white bowl-like Cosmic Ashtray formation filled with dark brown sand at Grand Staircase-Escalante National Monument',
				cc_image_url: 'https://www.flickr.com/photos/snowpeak/17174746499/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},
	monument_valley: {
		id: 'monument_valley',
		itineraries: 'utah, arizona, ut-az',
		destinationName: 'Monument Valley',
		stateName: 'Arizona / Utah',
		region: 'usa',
		anchor_tag: 'monument-valley-utah',
		destination_link: '/destinations/utah/monument-valley-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/ZNjRxMqFjXL8vbpn7'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Monument Valley',
				tab_content: `<p>Visit Monument Valley, a stunning desert landscape with massive sandstone buttes and mesas that rise above rise high above the valley floor. This valley has been featured in many films and TV shows as an idyllic portrayal of the great American Southwest. Monument Valley sits along the border of Arizona and Utah and is a Navajo Tribal Park.</p>
                <p>The best way to see the valley is to drive along the smooth 17 mile (27.5 km) dirt road loop, which is incredibly scenic offering many viewpoints along the way (and can be traversed by almost any vehicle). Within the park you'll find the iconic John Ford Point, countless stunning formations, as well as beautiful and inexpensive handmade Navajo jewelry and crafts. The park's only hiking trail is the Wildcat Trail, which loops around the Sentinel Mesa.</p>
                <p>Consider booking a Navajo-led tour to see the picturesque Lower Monument Valley, as well as several arches, Anasazi ruins, and petroglyphs. This section of Monument Valley is only accessible via guided tour and contains many scenic and highly picturesque sights.</p>`
			},
			{
				tab_title: 'More Attractions',
				tab_content: `<p>Just north of Monument Valley is Forrest Gump Point, which is the famous viewpoint looking down the long desert road featured in many movies, most notably Forrest Gump. A bit further north you can admire the interesting Mexican Hat formation, and enjoy a view which overlooks several winding canyons carved out by the San Juan River at Goosenecks State Park.</p>`
			}
		],
		attractions: [
			{
				id: 'monument-valley-2',
				carouselId: 'monument-valley',
				itineraryCarousel: null,
				attraction: 'Monument Valley View (Sunrise)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Monument-Valley-Monument-Valley-Buttes.jpg',
				image_alt:
					'Sunrise behind the Mittens and Merrick Butte of Monument Valley Tribal Park along the border of Utah and Arizona',
				cc_image_url:
					'https://pixabay.com/photos/monument-valley-utah-landscape-1081996/',
				cc_author_url: 'https://pixabay.com/users/Free-Photos-242387/',
				cc_author: 'Free-Photos',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'monument-valley-8',
				carouselId: 'monument-valley-tour-and-more',
				itineraryCarousel: null,
				attraction: 'Forrest Gump Point / Hill',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Monument-Valley-Forrest-Gump-Point.jpg',
				image_alt:
					'Looking down the iconic stretch of Highway 163 towards Monument Valley from Gorrest Gump Point',
				cc_image_url: 'https://www.flickr.com/photos/123727295@N07/15028504708/',
				cc_author_url: 'https://www.flickr.com/photos/123727295@N07/',
				cc_author: 'Tehani Schroeder',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'monument-valley-3',
				carouselId: 'monument-valley',
				itineraryCarousel: null,
				attraction: 'Monument Valley View (Sunset)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Monument-Valley-Monument-Valley-Buttes-2.jpg',
				image_alt:
					'Golden hour sunset colors over the Mittens and Merrick Butte of Monument Valley, along the border of Utah and Arizona',
				cc_image_url:
					'https://pixabay.com/photos/monument-valley-towers-rocky-towers-3753/',
				cc_author_url: 'https://pixabay.com/users/PDPhotos-16/',
				cc_author: 'PDPhotos',
				cc_license_url: null,
				cc_license: null,
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'monument-valley-6',
				carouselId: 'monument-valley-tour-and-more',
				itineraryCarousel: null,
				attraction: 'Ear of the Wind Arch (Tour)',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Monument-Valley-Ear-of-the-Wind.jpg',
				image_alt:
					'Picturesque view of the Ear of the Wind Arch in the cliffs framed behind the branches of a tree in Monument Valley',
				cc_image_url: 'https://www.flickr.com/photos/gee01/9906065263/',
				cc_author_url: 'https://www.flickr.com/photos/gee01/',
				cc_author: 'Graeme Maclean',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'monument-valley-4',
				carouselId: 'monument-valley',
				itineraryCarousel: null,
				attraction: 'John Ford Point',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Monument-Valley-John-Ford-Point.jpg',
				image_alt:
					'Iconic view overlooking the buttes and mesas of Monument Valley from the ledge at John Ford Point',
				cc_image_url: 'https://www.flickr.com/photos/jmenard48/2387986170/',
				cc_author_url: 'https://www.flickr.com/photos/jmenard48/',
				cc_author: 'John Menard',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'monument-valley-10',
				carouselId: 'monument-valley-tour-and-more',
				itineraryCarousel: null,
				attraction: 'Goosenecks State Park',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Goosenecks-State-Park-San-Juan-River-Goosenecks-View.jpg',
				image_alt:
					"Overlooking the winding gooseneck bends of the San Juan River in Utah's Goosenecks State Park",
				cc_image_url: 'https://www.flickr.com/photos/markbyzewski/20601549984/',
				cc_author_url: 'https://www.flickr.com/photos/markbyzewski/',
				cc_author: 'mark byzewski',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},

	zion: {
		id: 'zion',
		itineraries: 'utah, ut-az',
		destinationName: 'Zion National Park',
		stateName: 'Utah',
		region: 'usa',
		anchor_tag: 'zion-national-park-utah',
		destination_link: '/destinations/utah/zion-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/Vx9G42m3uem',
			all_attractions: 'https://goo.gl/maps/Xhp2ouZU4oN2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>Zion National Park is centered around the majestic red rock Zion Canyon, which is surrounded by many incredible natural features. The Virgin River flows through this lush canyon which is filled with abundant wildlife such as elk, deer, and turkeys that you're quite likely to see. The canyon walls are up to 0.5 miles (0.8 km) tall and are very impressive.</p>`
			},
			{
				tab_title: 'Hiking Trails',
				tab_content: `<p>Among the park's most famous and challenging trails are Angel's Landing and Observation Point, both of which make a steep ascent above the canyon, rewarding with breathtaking views over different parts of the picturesque Zion Canyon. At the end of the canyon is the Riverside Walk trail along the Virgin River, which becomes The Narrows. The Narrows travels through a gorgeous canyon alongside steep red walls following the river, often requiring one to tread through waist-deep water.</p>
                <p>Zion's most popular shorter trails include the scenic Pa'rus and Watchman Trails near the park's entrance, and the Emerald Pools and Kayenta Trail (which can be combined) in the middle of the park. The Kayenta Trail offers mesmerizing sunset views.</p>
                <p>Drive up through the canyon to admire one of the longest natural arches in the world, the Great Arch, and then take the short hike along Canyon Overlook Trail at the top of the road. This easy trail offers incredible views over part of Zion Canyon and directly faces the sunset.</p>`
			}
		],
		attractions: [
			{
				id: 'zion-8',
				carouselId: 'kayenta-trail-and-narrows',
				itineraryCarousel: null,
				attraction: 'The Narrows',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Zion-National-Park-The-Narrows.jpg',
				image_alt:
					"Fall colored foliage along the Virgin River of Zion National Park's The Narrows beneath tall sheer red canyons walls",
				cc_image_url: 'https://www.flickr.com/photos/larry1732/5478617479/',
				cc_author_url: 'https://www.flickr.com/photos/larry1732/',
				cc_author: 'Larry Lamsa',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'zion-9',
				carouselId: 'angels-landing-and-observation-point',
				itineraryCarousel: null,
				attraction: "Angel's Landing",
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Zion-National-Park-Angels-Landing.jpg',
				image_alt:
					"Stunning view overlooking Zion Canyon from the central Angel's Landing mountain in Zion National Park",
				cc_image_url: 'https://www.flickr.com/photos/gregstawicki/30416055331/',
				cc_author_url: 'https://www.flickr.com/photos/gregstawicki/',
				cc_author: 'Greg Stawicki',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'zion-7',
				carouselId: 'kayenta-trail-and-narrows',
				itineraryCarousel: null,
				attraction: 'Riverside Walk',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Zion-National-Park-Riverside-Walk.jpg',
				image_alt:
					'Wooden posts along the Riverside Walk pathway along the Virgin River leading to The Narrows of Zion Canyon ',
				cc_image_url: 'https://www.flickr.com/photos/94674772@N03/33602079650/',
				cc_author_url: 'https://www.flickr.com/photos/94674772@N03/',
				cc_author: 'Jack Miller',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'zion-10',
				carouselId: 'angels-landing-and-observation-point',
				itineraryCarousel: null,
				attraction: 'Observation Point',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Zion-National-Park-Observation-Point.jpg',
				image_alt:
					'View overlooking much of Zion Canyon from high above atop Observation Point Trail in Zion National Park',
				cc_image_url: 'https://www.flickr.com/photos/tydence/28413422006/',
				cc_author_url: 'https://www.flickr.com/photos/tydence/',
				cc_author: 'Tydence Davis',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'zion-3',
				carouselId: 'lower-zion-canyon',
				itineraryCarousel: null,
				attraction: "Pa'rus Trail",
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Zion-National-Park-Parus-Trail.jpg',
				image_alt:
					"View along the Virgin River in Zion Canyon from Zion National park's Pa'rus Trail",
				cc_image_url: 'https://www.flickr.com/photos/oliverdodd/30329657615/',
				cc_author_url: 'https://www.flickr.com/photos/oliverdodd/',
				cc_author: 'oliver.dodd',
				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			},
			{
				id: 'zion-6',
				carouselId: 'kayenta-trail-and-narrows',
				itineraryCarousel: null,
				attraction: 'Kayenta Trail',
				image_url:
					'https://www.travelimager.com/images/utah/Utah-Zion-National-Park-Kayenta-Trail.jpg',
				image_alt:
					"Picturesque sunset view looking out over Zion Canyon from the Kayenta Trail in Utah's Zion National Park",
				cc_image_url: 'https://travonga.com/',
				cc_author_url: 'https://travonga.com/',
				cc_author: 'Travonga.com',
				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0',
				cc_license_gnu_url: null,
				cc_license_gnu: null
			}
		]
	},

	mt_baker_north_cascades: {
		id: 'mt_baker_north_cascades',
		itineraries: '',
		destinationName: 'Mount Baker & North Cascades',
		stateName: 'Washington',
		region: 'usa',
		anchor_tag: 'mount-baker-and-north-cascades-washington',
		destination_link:
			'/destinations/washington/mount-baker-and-north-cascades-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/bXfbov49k2s',
			all_attractions: 'https://goo.gl/maps/A6bcNH3DSbF2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Intro & Bellingham',
				tab_content: `<p>Northern Washington hosts a vast wilderness of beautiful forests and tall mountain peaks within the North Cascades Mountain Range, centered around Mt. Baker. A great base to explore this area from is the city of Bellingham, where you'll find a charming downtown area full of excellent local breweries and great restaurants.</p>`
			},
			{
				tab_title: 'Mt. Baker',
				tab_content: `<p>On the northern side of Mount Baker just below the Canadian border is the Mt. Baker Highway, and on the southern side of the mountain is the Cascades Highway. The Mt. Baker Highway leads up to Panorama Point below Mt. Baker, where you'll find the gorgeous Picture Lake and excellent hiking trails, most notably the Chain Lakes Trail and Bagley Lakes Loop.</p>`
			},
			{
				tab_title: 'North Cascades N.P.',
				tab_content: `<p>The Cascades Highway passes the Sauk Mountain Trail, from which you can enjoy sweeping views of the mountains and Sauk River below. Further east, this highway passes through the extremely scenic North Cascades Mountains before reaching the breathtaking vibrant blue-green waters of Diablo Lake, which is said to be the most beautiful lake in Washington.</p>
                <p>North Cascades National Park is also home to some incredible meadow trails which venture high up into the lush mountains of Northern Washington to pristine alpine lakes, such as the Hidden Lake Overlook Trail and the Cascade Pass to Maple Pass Trail.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Diablo Lake Vista Point',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-Baker-Area-Diablo-Lake-Vista-Point.jpg',
				image_alt:
					'Overlooking the stunning blue-green waters of the famous Diablo Lake surrounded by the North Cascades of Washington',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Diablo_Lake,_WA_-_panoramio.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Diablo_Lake,_WA_-_panoramio.jpg&action=history',
				cc_author: 'Dieter F',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Picture Lake & Mt. Shuksan',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-Baker-Area-Picture-Lake-Reflection-of-Mt-Shuksan-Fall.jpg',
				image_alt:
					'Fall colored foliage below snowy Mount Shuksan and its reflection seen in Picture Lake near Mt. Baker, Washington',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Mount_Shuksan_at_North_Cascades_National_Park_in_Washington_1.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Jeffhollett',
				cc_author: 'Jeffhollett',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
				cc_license: 'CC BY-SA 4.0'
			},

			{
				attraction: 'Sauk Mountain Trail',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-Baker-Area-Sauk-Mountain-Trail.jpg',
				image_alt:
					'View overlooking the Skagit River and a heavenly lush valley from atop Sauk Mountain near Mt. Baker and the North Cascades',

				cc_image_url: 'https://www.flickr.com/photos/hugo90/6051300486/',
				cc_author_url: 'https://www.flickr.com/photos/hugo90/',
				cc_author: 'JOHN LLOYD',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Iceberg Lake & Mt. Baker (Chain Lakes Loop Trail)',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-Baker-Area-Chain-Lakes-Trail-Ptarmigan-Ridge-Iceberg-Lake.jpg',
				image_alt:
					'Iceberg Lake, one of the Chain Lakes seen below Table Mountain surrounded by forests below Mt. Baker in Northern Washington',

				cc_image_url:
					'https://www.flickr.com/photos/nordique/15054582949/in/album-72157622640885915/',
				cc_author_url: 'https://www.flickr.com/photos/nordique/',
				cc_author: 'Peter Stevens',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Doubtful Lake (Maple Pass View)',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-North-Cascades-National-Park-Cascade-Pass-Trail-View-over-Doubtful-Lake.jpg',
				image_alt:
					"View overlooking Doubtful Lake from Maple Pass high above near Cascade Pass in Washington's North Cascades National Park",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:View_from_Maple_Pass.jpg&action=history',
				cc_author_url: 'https://www.flickr.com/people/11563230@N04',
				cc_author: 'Miguel Vieira',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	mt_rainier: {
		id: 'mt_rainier',
		itineraries: '',
		destinationName: 'Mount Rainier National Park',
		stateName: 'Washington',
		region: 'usa',
		anchor_tag: 'mount-rainier-national-park-washington',
		destination_link:
			'/destinations/washington/mount-rainier-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/bKFHmUKuofL2',
			all_attractions: 'https://goo.gl/maps/vaFyg13fJ532'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>Mount Rainier National Park is centered around the colossal Mt. Rainier volcano, which towers nearly 14,100 feet (4,300 m) above the surrounding landscape and is among the tallest peaks in the continental USA. The volcanic mountain is covered in glaciers, forests, and meadows, and harbors abundant wildlife.</p>`
			},
			{
				tab_title: 'Mt. Rainier Attractions',
				tab_content: `<p>On the southern side of Mt. Rainier is the Paradise area, which hosts the park's main visitor center, several beautiful waterfalls including Narada Falls can Christine Falls, and Picture Lake, which is named for the picturesque reflection of Mt. Rainier that can be seen when looking at the lake. Paradise hosts several hiking trails with amazing views of Mt. Rainier, including the Skyline Trail set amongst lush meadows and creeks, and the shorter Nisqually Vista Trail.</p>
                <p>On the eastern side of Mt. Rainier is the Grove of the Patriarchs Trail, which hosts a suspension bridge over a vibrant light blue river, as well as a walk amongst a tall scenic forest. Also on the eastern side is the Sunrise area, which is surrounded by heavily wooded forests and mountain ridges.</p>
                <p>The northwestern side of Mt. Rainier offers amazing hiking trails, including the Spray Park Trail, which travels through the dense forests before opening up into pristine and gorgeous meadowlands framed in front of Mt. Rainier. This trail ventures deep into the wilderness and offers a high likelihood of encountering wildlife. The nearby Tolmie Peak Trail ventures through the lush forest before reaching Tolmie Peak, from which you can enjoy breathtaking views of Mt. Rainier and beautiful Eunice Lake below.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Reflection Lake',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-Rainier-National-Park-Reflection-Lake.jpg',
				image_alt:
					'Massive Mount Rainier towering above the dense forests with its perfect reflection seen in Reflection Lake in Washington',

				cc_image_url: 'https://www.flickr.com/photos/abhinaba/9530073620/',
				cc_author_url: 'https://www.flickr.com/photos/abhinaba/',
				cc_author: 'Abhinaba Basu',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Nisqually Vista Trail',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-Rainier-National-Park-Nisqually-Vista-Trail.jpg',
				image_alt:
					'Flowers and meadows lining the Nisqually Vista Trail leading to snow-covered Mount Rainier',

				cc_image_url:
					'https://www.flickr.com/photos/navin75/8051954988/in/photostream/',
				cc_author_url: 'https://www.flickr.com/photos/navin75/',
				cc_author: 'Navin Rajagopalan',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Spray Park Trail',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-Rainier-National-Park-Spray-Park-Trail-1.jpg',
				image_alt:
					'Small wooden log bridge spanning a stream leading to the lush meadows and forests of Spray Park beneath Mount Rainier',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Myrtle Falls (Skyline Point Trail)',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-Rainier-National-Park-Myrtle-Falls.jpg',
				image_alt:
					'Small Myrtle Falls surrounded by lush meadows in front of snow-capped Mount Rainier',

				cc_image_url: 'https://www.flickr.com/photos/liz/32159162/',
				cc_author_url: 'https://www.flickr.com/photos/liz/',
				cc_author: 'Liz Lawley',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Grove of the Patriarchs Trail',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-Rainier-National-Park-Grove-of-the-Patriarchs-Trail.jpg',
				image_alt:
					"Wooden boardwalk above the forest floor of Mount Rainier National Park's Grove of the Patriarchs Trail",

				cc_image_url: 'https://www.flickr.com/photos/shlyn401/41113785700/',
				cc_author_url: 'https://www.flickr.com/photos/shlyn401/',
				cc_author: 'Ashlyn Gehrett',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Christine Falls Bridge',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-Rainier-National-Park-Paradise-Area-Christine-Falls-Bridge.jpg',
				image_alt:
					"Small Christine Falls seen underneath a lovely little stone bridge in Mount Rainier's Paradise Area",

				cc_image_url: 'https://www.flickr.com/photos/bibbit/2632168235/',
				cc_author_url: 'https://www.flickr.com/photos/bibbit/',
				cc_author: 'Bridget Coila',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	mt_st_helens: {
		id: 'mt_st_helens',
		itineraries: '',
		destinationName: 'Mount St. Helens National Monument',
		stateName: 'Washington',
		region: 'usa',
		anchor_tag: 'mount-st-helens-washington',
		destination_link: '/destinations/washington/mount-st-helens-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/8SUJGxk6UN12'
		},
		// itinerary_guide_tabs: null,
		attractions: [
			{
				attraction: 'Windy Ridge Viewpoint',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-St-Helens-National-Volcanic-Monument-Windy-Ridge-Viewpoint.jpg',
				image_alt: 'Windy Ridge hills seen below Mount St. Helens Volcano',

				cc_image_url: 'https://www.flickr.com/photos/44534236@N00/9552756444/',
				cc_author_url: 'https://www.flickr.com/photos/44534236@N00/',
				cc_author: "faungg's",

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Lava Canyon',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-St-Helens-National-Volcanic-Monument-Lava-Canyon.jpg',
				image_alt:
					'Suspension bridge spanning a river across Lava Canyon surrounded by dense forests near Mount St. Helens',

				cc_image_url: 'https://www.flickr.com/photos/mtsthelens/38090757172/',
				cc_author_url: 'https://www.flickr.com/photos/mtsthelens/',
				cc_author: 'Mt. St. Helens',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Johnston Ridge Observatory',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-St-Helens-National-Volcanic-Monument-Johnson-Ridge-Observatory.jpg',
				image_alt:
					'Vast fields below massive Mount St. Helens that were devastated by the 1980 eruption, seen from Johnston Ridge Observatory',

				cc_image_url: 'https://www.flickr.com/photos/raybouk/14718263011/',
				cc_author_url: 'https://www.flickr.com/photos/raybouk/',
				cc_author: 'Ray Bouknight',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Lower Ape Cave',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-St-Helens-National-Volcanic-Monument-Lower-Ape-Cave.jpg',
				image_alt:
					'Stairway surrounded by mossy rocks leading to the surface above the Lower Ape Cave near Mount St. Helens',

				cc_image_url: 'https://www.flickr.com/photos/abhinaba/4806542689/',
				cc_author_url: 'https://www.flickr.com/photos/abhinaba/',
				cc_author: 'Abhinaba Basu',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Panther Creek Falls',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Mount-St-Helens-National-Volcanic-Monument-Panther-Creek-Falls.jpg',
				image_alt:
					'Stunning Panther Creek Falls flowing over lush mossy green cliffs in the middle of the Washington forests',

				cc_image_url: 'https://www.flickr.com/photos/bala_/28136383158/',
				cc_author_url: 'https://www.flickr.com/photos/bala_/',
				cc_author: 'Bala Sivakumar',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			}
		]
	},

	olympic_wa: {
		id: 'olympic_wa',
		itineraries: '',
		destinationName: 'Olympic National Park',
		stateName: 'Washington',
		region: 'usa',
		anchor_tag: 'olympic-national-park-washington',
		destination_link:
			'/destinations/washington/olympic-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/nWk82yLsG1q',
			all_attractions: 'https://goo.gl/maps/up8KUmypLD22'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Olympic N.P. Attractions',
				tab_content: `<p>Olympic National Park is located along the massive Olympic Peninsula of Washington, centered around massive breathtaking mountains and forests. The national park hosts several lush green rainforest eco-systems that you can explore, including the Hoh Rainforest, Quinault Rainforest, and the Sol Duc Falls Trail.</p>
                <p>Along the coast are several gorgeous beaches with dense forests that stretch to the rocky coastline. These include Ruby Beach, Rialto Beach, Second Beach, and Cape Flattery, with Cape Flattery located at the most northwestern tip of the continental United States.</p>
                <p>The Olympic Peninsula also offers amazing hiking, including the Hurricane Hill Trail which traverses alongside lush meadows and abundant wildlife, while offers majestic views of the Olympic Mountains and the coast. On the other side of the mountains it the Mt. Ellinor Trail, from which you can enjoy magnificent far-reaching views over the surrounding vast wilderness of forests and lakes.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Rialto Beach',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Olympic-National-Park-Rialto-Beach.jpg',
				image_alt:
					'View along the idyllic Pacific Northwest Rialto Beach with giant log piles and dense forests on the Olympic Peninsula',

				cc_image_url: 'https://www.flickr.com/photos/gusilu/7987056555/',
				cc_author_url: 'https://www.flickr.com/photos/gusilu/',
				cc_author: 'Lucia Sanchez',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Hoh Rainforest Hall of Mosses',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Olympic-National-Park-Hoh-Rainforest-Hall-of-Mosses.jpg',
				image_alt:
					"Hoh Rainforest of Washington's Olympic National Park with vibrant green moss-covered trees along the Hall of Mosses trail",

				cc_image_url: 'https://www.flickr.com/photos/hawthorneave/14462594090/',
				cc_author_url: 'https://www.flickr.com/photos/hawthorneave/',
				cc_author: 'Hawthorne Ave',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Cape Flattery',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Olympic-National-Park-Cape-Flattery.jpg',
				image_alt:
					"Stunning view overlooking the forest-covered cliffs and tiny islands at the Olympic Peninsula's Cape Flattery",

				cc_image_url: 'https://www.flickr.com/photos/snowpeak/7976309978/',
				cc_author_url: 'https://www.flickr.com/photos/snowpeak/',
				cc_author: 'John Fowler',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Mt. Ellinor Trail',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Olympic-National-Park-Mt-Ellinor-Trail.jpg',
				image_alt:
					'View over dense forests, lakes, and mountains seen from high above Olympic National Park from the Mt. Ellinor Trail',

				cc_image_url:
					'https://www.flickr.com/photos/forestservicenw/23417784682/',
				cc_author_url: 'https://www.flickr.com/photos/forestservicenw/',
				cc_author: 'Forest Service Pacific NW',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Quinault Rainforest Nature Trail',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Olympic-National-Park-Quinault-Rainforest-Nature-Trail.jpg',
				image_alt:
					"Lush Quinault Rainforest trail surrounded by ferns and dense forest in Washington's Olympic National Forest",

				cc_image_url: 'https://www.flickr.com/photos/olympicnps/23086291761/',
				cc_author_url: 'https://www.flickr.com/photos/olympicnps/',
				cc_author: 'Olympic National Park',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Hurricane Hill Trail',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Olympic-National-Park-Hurracaine-Hill-Trail.jpg',
				image_alt:
					'View of the snow-capped Olympic Mountains seen behind lush green meadows and flowers along the Hurricane Hill Trail',

				cc_image_url: 'https://travonga.com',
				cc_author_url: 'https://travonga.com',
				cc_author: 'Travonga.com',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			}
		]
	},

	seattle: {
		id: 'seattle',
		itineraries: '',
		destinationName: 'Seattle',
		stateName: 'Washington',
		region: 'usa',
		anchor_tag: 'seattle-washington',
		destination_link: '/destinations/washington/seattle-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/3WT1Rva1LZM2',
			all_attractions: 'https://goo.gl/maps/KvyJANRMxu62'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Seattle Attractions',
				tab_content: `<p>Seattle is a gorgeous seaside city full of contemporary high-rise buildings and landmarks, surrounded by breathtaking natural scenery. Around Downtown Seattle you'll find many excellent restaurants and a thriving nightlife scene.</p>
                <p>Seattle Center hosts the city's iconic Space Needle tower, which offers sweeping panoramic views from the top. Nearby you can visit the stunning Chihuly Gardens & Glass as well as the incredible Museum of Pop Culture, which was designed by famous architect Frank Gehry.</p>
                <p>Downtown Seattle hosts the first Starbucks Cafe, the scenic Seattle Waterfront, and Pikes Place Market, where you'll find many unique shops as well as the famous Gum Wall. Also Downtown are the city's iconic Smith Tower and Columbia Center skyscrapers, both of which offer amazing views from the top. To enjoy picturesque views overlooking Downtown for free head to Kerry Park, as well as the Gas Works Park, which sits on the shore of Lake Union.</p>`
			},
			{
				tab_title: 'Greater Seattle',
				tab_content: `<p>South of Seattle is the largest private air and space museum in the world, the Museum of Flight. Approximately 45 minutes east of Seattle is the powerful Snoqualmie Falls, one of the most beautiful waterfalls in the state. Nearby you can tour a kangaroo/wallaby farm and personally interact with these animals at the Fall City Wallaby Ranch.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Pike Place Market',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Seattle-Pike-Place-Market.jpg',
				image_alt: "View of an entrance to Seattle's famous Pike Place Market",

				cc_image_url: 'https://www.flickr.com/photos/papalars/15887500273/',
				cc_author_url: 'https://www.flickr.com/photos/papalars/',
				cc_author: 'Andrew E. Larsen',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Space Needle',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Seattle-Space-Needle.jpg',
				image_alt:
					'Iconic Seattle Space Needle seen amongst the skyscrapers of Downtown Seattle at night',

				cc_image_url: 'https://www.flickr.com/photos/158283218@N03/38610164014/',
				cc_author_url: 'https://www.flickr.com/photos/158283218@N03/',
				cc_author: 'Craig Yemola',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Seattle Waterfront',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Seattle-Seattle-Waterfront.jpg',
				image_alt:
					'Ferris wheel and baordwalk piers along the waterfront of Downtown Seattle with highrises in background',

				cc_image_url: 'https://www.flickr.com/photos/hubbardcoe/33512638851/',
				cc_author_url: 'https://www.flickr.com/photos/hubbardcoe/',
				cc_author: 'Powhusku',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Kerry Park View',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Seattle-Kerry-Park.jpg',
				image_alt:
					'Picturesque view of Seattle Space Needle and Downtown Seattle with Mount Rainier in background seen from Kerry Park at sunset',

				cc_image_url: 'https://www.flickr.com/photos/tiffany98101/15984978620/',
				cc_author_url: 'https://www.flickr.com/photos/tiffany98101/',
				cc_author: 'Tiffany Von Arnim',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Snoqualmie Falls',
				image_url:
					'https://www.travelimager.com/images/washington/Washington-Greater-Seattle-Snoqualmie-Falls.jpg',
				image_alt:
					'Massive and powerful Snoqualmie Falls seen flowing over the cliffs behind tall grasses outside Seattle, Washington',

				cc_image_url: 'https://www.flickr.com/photos/papalars/16797460423/',
				cc_author_url: 'https://www.flickr.com/photos/papalars/',
				cc_author: 'Andrew E. Larsen',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			}
		]
	},

	grand_teton: {
		id: 'grand_teton',
		itineraries: '',
		destinationName: 'Grand Teton National Park',
		stateName: 'Wyoming',
		region: 'usa',
		anchor_tag: 'grand-teton-national-park-wyoming',
		destination_link:
			'/destinations/wyoming/grand-teton-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/VzD58QvpjM12',
			all_attractions: 'https://goo.gl/maps/cLngD3JLNV12'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>Grand Teton National Park is located just below Yellowstone and is centered around the incredibly gorgeous and massive Teton Mountains, which tower above many beautiful lakes. The park hosts a vast a mount of wildlife (very similar to Yellowstone) which you're extremely likely to encounter along the forested trails. Just south of Grand Teton National Park is the largest city near the park, Jackson, Wyoming.</p>`
			},
			{
				tab_title: 'Viewpoints & Sights',
				tab_content: `<p>Apart from its hiking trails, Grand Teton offers many stunning turnouts and roadside viewpoints throughout the park which offer majestic views overlooking the Teton Mountains.</p>
                <p>The park's top viewpoints include Jackson Lake Overlook, Willow Flats Overlook, Oxbow Bend, Snake River Overlook, Schwabacher's Landing, and the Jenny Lake Overlook. Along the park's roads you can also admire historic structures set amongst the picturesque mountains, such as the T.A. Moulton Barn and Chapel of the Transfiguration.</p>`
			},
			{
				tab_title: 'Hiking Trails',
				tab_content: `<p>Grand Teton National Park is known for its many pristine lakes which sit below the Teton Mountains, including massive Jackson Lake and the park's most beautiful lake, Jenny Lake. Jenny Lake offers a beautiful trail around it as well as a ferry across it, which acts as a shortcut to the park's most popular hike into the mountains, the Cascade Canyon Trail.</p>
                <p>Just south of Jenny Lake is the trailhead for the challenging Surprise & Amphitheater Lakes Trail. These two serene glacial lakes sit on the slopes of the Teton Mountains below Grand Teton Peak. </p>`
			}
		],
		attractions: [
			{
				attraction: 'Jenny Lake',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Grand-Teton-National-Park-Jenny-Lake.jpg',
				image_alt:
					'View from behind the trees overlooking deep blue Jenny Lake in front of the mountains of Grand Teton National Park',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Jenny_Lake_Cascade_Canyon_GTNP1.jpg&action=history',
				cc_author_url: 'https://commons.wikimedia.org/wiki/User:Acroterion',
				cc_author: 'Acroterion',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Cascade Canyon Trail',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Grand-Teton-National-Park-Cascade-Canyon.jpg',
				image_alt:
					'Small river flowing through Cascade Canyon surrounded by dense forests and tall mountains in Grand Teton National Park',

				cc_image_url: 'https://www.flickr.com/photos/mzagerp/29011346185',
				cc_author_url: 'https://www.flickr.com/photos/mzagerp/',
				cc_author: 'mzagerp',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Oxbow Bend',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Grand-Teton-National-Park-Oxbow-Bend.jpg',
				image_alt:
					'Golden hour colors lighting up the Grand Teton mountains and their reflection in the Snake River seen from Oxbow Bend',

				cc_image_url:
					'https://www.flickr.com/photos/iip-photo-archive/36716598475/',
				cc_author_url: 'https://www.flickr.com/photos/iip-photo-archive/',
				cc_author: 'IIP Photo Archive',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Snake River Overlook',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Grand-Teton-National-Park-Snake-River-Overlook.jpg',
				image_alt:
					'Stunning fall view overlooking the Grand Teton mountains from the Snake River Overlook',

				cc_image_url: 'https://www.flickr.com/photos/grandtetonnps/29903369661/',
				cc_author_url: 'https://www.flickr.com/photos/grandtetonnps/',
				cc_author: 'Grand Teton',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'T.A. Moulton Barn',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Grand-Teton-National-Park-TA-Moulton-Barn.jpg',
				image_alt:
					'Historic wooden T.A. Moulton Barn surrounded by grassy fields with Grand Teton mountains in background',

				cc_image_url: 'https://www.flickr.com/photos/rarvesen/8478079040/',
				cc_author_url: 'https://www.flickr.com/photos/rarvesen/',
				cc_author: 'Ralph Arvesen',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Cascade Canyon Trail',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Grand-Teton-National-Park-Cascade-Canyon.jpg',
				image_alt:
					'Small river flowing through Cascade Canyon surrounded by dense forests and tall mountains in Grand Teton National Park',

				cc_image_url: 'https://www.flickr.com/photos/mzagerp/29011346185',
				cc_author_url: 'https://www.flickr.com/photos/mzagerp/',
				cc_author: 'mzagerp',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			}
		]
	},

	yellowstone: {
		id: 'yellowstone',
		itineraries: '',
		destinationName: 'Yellowstone National Park',
		stateName: 'Wyoming',
		region: 'usa',
		anchor_tag: 'yellowstone-national-park-wyoming',
		destination_link:
			'/destinations/wyoming/yellowstone-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/jbawcrfow2L2',
			all_attractions: 'https://goo.gl/maps/CjT2qZToUy32'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>Yellowstone's beauty is so great that it was the first national park established in the world and is also a UNESCO world heritage site. This vast park sits at a very high elevation averaging about 8,000 feet (2,450 m) and is centered around an enormous supervolcano, which is what creates the many well-known geothermal features of Yellowstone such as geysers, hot spring pools, boiling pots, and much more.</p>
                <p>Yellowstone is a breathtaking landscape of dense forests, lush meadows, canyons, lakes, and waterfalls filled with a large diversity of wildlife such as deer, bison, elk, bears, wolves, moose, mountain goats, and much more. When visiting the park you're guaranteed to see many wild animals.</p>`
			},
			{
				tab_title: 'Yellowstone Attractions',
				tab_content: `<p>The national park's most well known attractions is the giant Old Faithful Geyser, however it is one of many unique geysers in Yellowstone. The area around Old Faithful hosts many more geysers, as well as vibrantly colored geothermal pools such as at Blacksand Basin and Biscuit Basin. Just north of the Old Faithful area is the park's wondrous rainbow-colored Grand Prismatic Spring, which sits among other beautiful pools in the Midway Geyser Basin.</p>
                <p>The southeastern portion of the park hosts massive pristine Yellowstone Lake, around which you'll find the surreal multi-colored pools of the West Thumb Geyser Basin. North of the lake is the magnificent Grand Canyon of the Yellowstone, which hosts the picturesque Yellowstone Falls along an extremely scenic portion of the Yellowstone River. The northern portion of the park hosts the otherworldly terraced hot springs of Mammoth Hot Springs.</p>
                <p>Additional major points of interest within the park include the Fountain Paint Pots, the geysers of Firehole Lake Drive, and the Norris Geyser Basin. Apart from these attractions Yellowstone hosts many more amazing natural wonders and thus should be explored thoroughly.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Grand Prismatic Spring Overlook',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Yellowstone-National-Park-Grand-Prismatic-Spring-Overlook.jpg',
				image_alt:
					"Hilltop view overlooking the vibrant rainbow-like Grand Prismatic Spring at Yellowstone National Park's Midway Geyser Basin",

				cc_image_url: 'https://www.flickr.com/photos/con4tini/40846427611/',
				cc_author_url: 'https://www.flickr.com/photos/con4tini/',
				cc_author: 'dconvertini',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Old Faithful Geyser',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Yellowstone-National-Park-Old-Faithful-Geyser.jpg',
				image_alt:
					'Towering and powerful eruption of the famous Old Faithful Geyser at Yellowstone National Park',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Old_Faithful_(3679482556).jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Old_Faithful_(3679482556).jpg&action=history',
				cc_author: 'Greg Willis',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Yellowstone Falls (Artist Point)',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Yellowstone-National-Park-Yellowstone-Falls-Artist-Point.jpg',
				image_alt:
					'Distant view directly facing Lower Yellowstone Falls flowing into the Grand Canyon of the Yellowstone seen from Artist Point',

				cc_image_url: 'https://www.flickr.com/photos/volvob12b/30611961461/',
				cc_author_url: 'https://www.flickr.com/photos/volvob12b/',
				cc_author: 'Bernard Spragg, NZ',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Abyss Pool (West Thumb Geyser Basin)',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Yellowstone-National-Park-West-Thumb-Geyser-Basin-Abyss-Pool.jpg',
				image_alt:
					"Incredible vibrant green, yellow, and red colors of the Abyss Pool at Yellowstone's West Thumb Geyser Basin",

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Hot_Springs_in_West_Thumb_Geyser_Basin.jpg&action=history',
				cc_author_url: 'https://sites.google.com/site/thebrockeninglory/',
				cc_author: 'Brocken Inaglory',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/3.0/legalcode',
				cc_license: 'CC BY-SA 3.0'
			},

			{
				attraction: 'Sapphire Pool (Biscuit Basin)',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Yellowstone-National-Park-Biscuit-Basin-Sapphire-Pool.jpg',
				image_alt:
					"Strikingly vibrant and clear Sapphire Pool surrounded by white rock at Yellowstone National Park's Biscuit Basin",

				cc_image_url: 'https://www.flickr.com/photos/con4tini/39951918455/',
				cc_author_url: 'https://www.flickr.com/photos/con4tini/',
				cc_author: 'dconvertini',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Gull Point (Yellowstone Lake)',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Yellowstone-National-Park-Yellowstone-Lake-Gull-Point-1.jpg',
				image_alt:
					'Looking out over vast Yellowstone Lake from the lakeshore at Gull Point in Yellowstone National Park',

				cc_image_url: 'https://www.flickr.com/photos/yellowstonenps/15084344343',
				cc_author_url: 'https://www.flickr.com/photos/yellowstonenps/',
				cc_author: 'Yellowstone National Park',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Mammoth Hot Springs Terraces',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Yellowstone-National-Park-Mammoth-Hot-Springs-Upper-Terraces.jpg',
				image_alt:
					"Thousands of stunning natural terrace structures of Yellowstone National Park's Mammoth Hot Spring Upper Terraces",

				cc_image_url: 'https://www.flickr.com/photos/con4tini/40876004671/',
				cc_author_url: 'https://www.flickr.com/photos/con4tini/',
				cc_author: 'dconvertini',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			},

			{
				attraction: 'Geyser Hill Complex',
				image_url:
					'https://www.travelimager.com/images/wyoming/Wyoming-Yellowstone-National-Park-Geyser-Hill-Complex.jpg',
				image_alt:
					"Wooden boardwalk atop the geothermal colored waters of Yellowstone National Park's Geyser Hill Complex",

				cc_image_url: 'https://www.flickr.com/photos/con4tini/25974246847/',
				cc_author_url: 'https://www.flickr.com/photos/con4tini/',
				cc_author: 'dconvertini',

				cc_license_url:
					'https://creativecommons.org/licenses/by-sa/2.0/legalcode',
				cc_license: 'CC BY-SA 2.0'
			}
		]
	},

	glacier_mt: {
		id: 'glacier_mt',
		itineraries: '',
		destinationName: 'Glacier National Park',
		stateName: 'Montana',
		region: 'usa',
		anchor_tag: 'glacier-national-park-montana',
		destination_link: '/destinations/usa/glacier-national-park-attractions-guide',
		attractionMapLinks: {
			top_attractions: 'https://goo.gl/maps/hqiiVGMjLUo',
			all_attractions: 'https://goo.gl/maps/etM4CeZzCTP2'
		},
		itinerary_guide_tabs: [
			{
				tab_title: 'Introduction',
				tab_content: `<p>Glacier National Park is located along the remote Rocky Mountains of Northern Montana, just south of the Canadian border. Within the park you'll find vast forests, towering mountains, beautiful glacial lakes, and many glaciers. The park also hosts an incredible diversity and abundance of wild animals and is an excellent place for wildlife viewing.</p>`
			},
			{
				tab_title: 'Glacier N.P. Attractions',
				tab_content: `<p>One of the best ways to see Glacier National Park is to drive along the extremely scenic Going to the Sun Road, which winds its way through the park for 50 miles (80 km), from the town of West Glacier near massive Lake McDonald to the town of St. Mary and the stunning Saint Mary Lake. This road passes massive Lake McDonald as well as the trailheads for Avalanche Lake, Hidden Lake, the Highline Trail, and St. Mary & Virginia Falls. Additionally this road passes by the park's three main visitor centers.</p>
                <p>Northeast of St. Mary in the Swiftcurrent area of the park you'll find the striking Swiftcurrent Lake, as well as three extremely popular longer trails, the Grinnell Glacier Trail, Iceberg Lake Trail, and Swiftcurrent Mountain Trail. All three of these trails venture through deep lush glacier valleys, passing serene lakes and bountiful wildlife.</p>
                <p>The Swiftcurrent Mountain Trail passes through one of these picturesque valleys before ascending above it and meeting the Highline Trail. The long-distance Highline Trail also connects to the Garden Wall, which overlooks the Grinnell Glacier Valley. The views from above these lake-filled valley are truly breathtaking.</p>`
			}
		],
		attractions: [
			{
				attraction: 'Hidden Lake Overlook',
				image_url:
					'https://www.travelimager.com/images/montana/Montana-Glacier-National-Park-Hidden-Lake-Overlook.jpg',
				image_alt:
					'Incredible views over Hidden Lake and the surrounding valley and mountains at Glacier National Park',

				cc_image_url: 'https://www.flickr.com/photos/mzagerp/28725011050/',
				cc_author_url: 'https://www.flickr.com/photos/mzagerp/',
				cc_author: 'mzagerp',

				cc_license_url:
					'https://creativecommons.org/licenses/by-nd/2.0/legalcode',
				cc_license: 'CC BY-ND 2.0'
			},

			{
				attraction: 'Garden Wall (Highline Trail)',
				image_url:
					'https://www.travelimager.com/images/montana/Montana-Glacier-National-Park-Garden-Wall.jpg',
				image_alt:
					"View from the Highline Trail's Garden Wall overlooking the Grinnell Glacier and Many Lakes Area of Glacier National Park",

				cc_image_url: 'https://www.flickr.com/photos/naturenps/32577772976/',
				cc_author_url: 'https://www.flickr.com/photos/naturenps/',
				cc_author: 'NPS Natural Resources',
				cc_license_url: null,
				cc_license: null
			},

			{
				attraction: 'Sun Point (St. Mary Lake)',
				image_url:
					'https://www.travelimager.com/images/montana/Montana-Glacier-National-Park-St-Mary-Lake-Sun-Point.jpg',
				image_alt:
					'Breathtaking view of the massive mountains surrounding St. Mary Lake from Sun Point in Glacier National Park',

				cc_image_url: 'https://www.flickr.com/photos/bernd_thaller/24168578248/',
				cc_author_url: 'https://www.flickr.com/photos/bernd_thaller/',
				cc_author: 'Bernd Thaller',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Swiftcurrent Lake',
				image_url:
					'https://www.travelimager.com/images/montana/Montana-Glacier-National-Park-Swiftcurrent-Lake.jpg',
				image_alt:
					'Picturesque view along the lake surface of clear Swiftcurrent Lake in front of tall mountains in Glacier National Park',

				cc_image_url: 'https://www.flickr.com/photos/jeffpang/11415064175/',
				cc_author_url: 'https://www.flickr.com/photos/jeffpang/',
				cc_author: 'Jeff P',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Avalanche Lake',
				image_url:
					'https://www.travelimager.com/images/montana/Montana-Glacier-National-Park-Avalanche-Lake.jpg',
				image_alt:
					"Strikingly clear waters of Avalanche Lake below tall cliffs in Montana's Glacier National Park",

				cc_image_url:
					'https://www.flickr.com/photos/johnmichaelmayer/5102592989/',
				cc_author_url: 'https://www.flickr.com/photos/johnmichaelmayer/',
				cc_author: 'John Mayer',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Lake McDonald',
				image_url:
					'https://www.travelimager.com/images/montana/Montana-Glacier-National-Park-Lake-McDonald.jpg',
				image_alt:
					'Stunning view along massive Lake McDonald with massive mountains of Glacier National Park in background',

				cc_image_url: 'https://www.flickr.com/photos/jonathanw100/7922051602/',
				cc_author_url: 'https://www.flickr.com/photos/jonathanw100/',
				cc_author: 'Jonathan C. Wheeler',

				cc_license_url: 'https://creativecommons.org/licenses/by/2.0/legalcode',
				cc_license: 'CC BY 2.0'
			},

			{
				attraction: 'Swiftcurrent Mountain',
				image_url:
					'https://www.travelimager.com/images/montana/Montana-Glacier-National-Park-Swiftcurrent-Mountain.jpg',
				image_alt:
					'Heavenly view overlooking a series of deep blue lakes in a lush valley from atop Swiftcurrent Mountain, Glacier National Park',

				cc_image_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Amazing_clarity_provides_clear_view_east_through_the_entire_Swiftcurrent_Valley._Lake_Sherborne_is_visible_in_the_distance._July_25,_2007_-_panoramio.jpg&action=history',
				cc_author_url:
					'https://commons.wikimedia.org/w/index.php?title=File:Amazing_clarity_provides_clear_view_east_through_the_entire_Swiftcurrent_Valley._Lake_Sherborne_is_visible_in_the_distance._July_25,_2007_-_panoramio.jpg&action=history',
				cc_author: 'Gary Miotla',

				cc_license_url: 'https://creativecommons.org/licenses/by/3.0/legalcode',
				cc_license: 'CC BY 3.0'
			}
		]
	}
};
