import ItineraryGuideHeader from './ItineraryGuideHeader';
import { itinerarySections } from '../../data/itinerarySections';
import ItinerarySection from './ItinerarySection';

const Itinerary = ({ data,
	// size
}) => {

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

				return (
					<ItinerarySection
						key={index}
						{...itineraryLegend}
						{...itinerarySection}
						// size={size}
						index={index}
						length={itineraryLength}
					/>
				);
			})}
		</>
	);
};

export default Itinerary;
