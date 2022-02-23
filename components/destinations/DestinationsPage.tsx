import { FC } from 'react';

import Meta, { MetaProps } from '../layout/Meta';
import { SingleDestinationDetails } from './interfaces';
import DestinationCard from './DestinationCard';


import styles from '../../styles/Destinations.module.css';

interface Props {
	destinations: SingleDestinationDetails[],
	placeName: string,
	region?: string,
	meta: MetaProps
}

const DestinationsPage: FC<Props> = ({ destinations, placeName, meta }) => {
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

export default DestinationsPage
