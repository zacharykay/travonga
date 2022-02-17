import Meta from '../layout/Meta';
import DestinationCard from './DestinationCard';

import styles from '../../styles/Destinations.module.css';

export default function DestinationsPage({ destinations, placeName, meta }) {
	return (
		<>
			<Meta meta={meta}></Meta>
			<main>
				<h1 className={styles.destination_placeName}>
					{placeName} Attraction&nbsp;Guides
				</h1>

				<h2 className="destinations-list-heading">
					Destinations A&nbsp;&#8209;&nbsp;Z
				</h2>

				<section className={styles.destination_list}>
					<div className={styles.destinations_container}>
						{destinations.map((place) => {
							const { id } = place;

							return (
								<DestinationCard
									key={id}
									{...place}
									pageType="destinationsPage"
								/>
							);
						})}
					</div>
				</section>
			</main>
		</>
	);
}
