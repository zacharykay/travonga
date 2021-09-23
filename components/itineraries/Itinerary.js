import ItineraryGuideHeader from './ItineraryGuideHeader';
import { itinerarySections } from '../../data/itinerarySections';
import ItinerarySection from './ItinerarySection';

const Itinerary = ({ data, size }) => {
	// const filteredItineraries = itinerarySections.filter((section) => {
	// 	return section.itineraries.includes(`${data.itinerary_name}`);
	// });

	const {
		itineraryName,
		meta,
		inPageNav,
		itinerary_type,
		transportation_type,
		travel_time_min,
		travel_time_max,
		travel_time_format
	} = data;

	const itineraryLength = data.itinerary.length

	return (
		<>
			<ItineraryGuideHeader
				itineraryName={itineraryName}
				meta={meta}
				inPageNav={inPageNav}
				itinerary_type={itinerary_type}
				transportation_type={transportation_type}
				travel_time_min={travel_time_min}
				travel_time_max={travel_time_max}
				travel_time_format={travel_time_format}
			/>
			{data.itinerary.map((itineraryLegend, index) => {
				const { id } = itineraryLegend;
				const itinerarySection = itinerarySections[id]
				// const filtered = filteredItineraries.filter((filteredItem) => {
				// 	return filteredItem.id === id;
				// });

				return (
					<ItinerarySection
						key={index}
						{...itineraryLegend}
						{...itinerarySection}
						// {...filtered[0]}
						size={size}
						index={index}
						length={itineraryLength}
					/>
				);
			})}
		</>
	);
};

export default Itinerary;
