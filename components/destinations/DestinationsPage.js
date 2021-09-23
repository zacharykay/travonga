import Head from 'next/head';

import Meta from '../layout/Meta';
import DestinationCard from './DestinationCard';

import styles from '../../styles/Destinations.module.css';

export default function DestinationsPage({ destinations, placeName, meta }) {
    return (
        <>
            <Head>
                {/* <link
                    rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&family=Lato:ital,wght@0,400;0,700;1,400&display=swap"
                /> */}
                <link rel="icon" href="/favicon.ico" />
                <Meta meta={meta}></Meta>
                </Head>
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
