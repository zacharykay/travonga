import React from 'react';
import Head from 'next/head';
import Meta from '../components/layout/Meta';
import Homepage from '../components/layout/Homepage';
import styles from '../styles/Homepage.module.css';

const { itineraries, meta } = require('../data/homepage.json');

const Home = () => {
	return (
		<React.Fragment>
			<Head>
				<Meta meta={meta} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className={styles['homepage-title']}>Featured Travel Itineraries</h1>
			<div className={styles['two-itinerary-flexbox-home']}>
				{itineraries.map((itinerary) => {
					return <Homepage key={itinerary.id} itinerary={itinerary} />;
				})}
			</div>
		</React.Fragment>
	);
};

export default Home;
