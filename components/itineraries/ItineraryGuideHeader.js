import Meta from '../layout/Meta';
import StickyPageNav from '../widgets/StickyPageNav';

import styles from '../../styles/ItineraryPageNav.module.css';
import Head from 'next/head';
import React from 'react';

const ItineraryGuideHeader = ({
	itineraryName,
	meta,
	inPageNav,
	itinerary_type,
	transportation_type,
	travel_time_min,
	travel_time_max,
	travel_time_format
}) => {
	return (
		<React.Fragment>
			<Head>
				<Meta meta={meta} />
				{/* <link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Open+Sans&family=PT+Sans:wght@400;700&family=Lato:ital,wght@0,400;0,700;1,400&display=swap"
				/> */}
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>
				{itineraryName} {itinerary_type} Itinerary<br />
				{transportation_type ? (
					<span className="itinerary_inner_title">
						+ Top Attractions (By&nbsp;{transportation_type})
					</span>
				) : (
					<span className="itinerary_inner_title">+ Top Attractions</span>
				)}
			</h1>
			<div className="itinerary_trip_length">
				Recommended Travel Time: {travel_time_min}&nbsp;&#8209;&nbsp;{travel_time_max}&nbsp;{travel_time_format}
			</div>

			{inPageNav && (
				<React.Fragment>
					<StickyPageNav>
						<div
							className={
								styles[
									`itinerary_page_nav_${inPageNav.length !== 9 &&
									inPageNav.length !== 15
										? 2 * Math.round(inPageNav.length / 2)
										: inPageNav.length}`
								] +
								' ' +
								styles.in_page_nav
							}
						>
							{inPageNav.map(({ anchor_tag, anchor_title }, index) => {
								return (
									<React.Fragment key={index}>
										{index !== 0 && <div>&#8674;</div>}
										<div>
											<a href={`#${anchor_tag}`}>{anchor_title}</a>
										</div>
									</React.Fragment>
								);
							})}
						</div>
					</StickyPageNav>

					<div className={styles.nav_spacer}>&nbsp;</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default ItineraryGuideHeader;
