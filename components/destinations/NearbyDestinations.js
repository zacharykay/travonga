import DestinationCard from './DestinationCard';

import styles from '../../styles/Destinations.module.css';
import { nearbyDestinations as nearby_destinations } from '../../data/nearbyDestinations';

const NearbyDestinations = ({ nearbyDestinations }) => {
	return (
		<section className="nearby_destinations">
			<a className="anchor" id="nearby-destinations" />
			<h3 className="section_heading left_heading">
				Nearby Destinations & Day&#8209;Trips
			</h3>
			<div className={styles.destinations_container}>
				{nearbyDestinations.map((place) => {
					const destinations_data = nearby_destinations[place];
					return (
						<DestinationCard
							key={place}
							{...destinations_data}
							pageType="attractionsPage"
						/>
					);
				})}
			</div>
		</section>
	);
};

export default NearbyDestinations;
