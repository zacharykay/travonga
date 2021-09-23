import React, { useState } from 'react';
import styles from '../../styles/Tabs.module.css';

const ItineraryTabs = ({ itinerary }) => {
	const [ tabActive, setTabActive ] = useState('');

	const openTab = (event) => {
		const tabId = event.target.id;
		if (tabId !== tabActive) {
			const contentTabs = Array.from(
				event.currentTarget.parentNode.parentNode.childNodes
			);
			const properTab = contentTabs.filter((tab) => tab.id === tabId);
			setTabActive(properTab[0].id);
		} else {
			setTabActive('');
		}
	};

	return (
		<section className={styles.tab_section}>
			<div
				className={
					tabActive ? styles['tab'] + ' ' + styles['tab_open'] : styles.tab
				}
			>
				{itinerary.map(({ id, tab_title }, index) => {
					return (
						<button
							key={index}
							id={id}
							className={
								tabActive === id ? (
									styles['active'] + ' ' + styles['tablinks']
								) : (
									styles.tablinks
								)
							}
							onClick={openTab}
						>
							{tab_title} {'\u25BE'}
						</button>
					);
				})}
			</div>
			{itinerary.map(({ id, tab_content }) => {
				return (
					<div
						key={id}
						className={
							tabActive === id ? (
								styles.tabcontent_visible
							) : (
								styles.tabcontent
							)
						}
						id={id}
					>
						<div
							id={id}
							className={styles.tabcontent_text_container}
							dangerouslySetInnerHTML={{ __html: tab_content }}
						/>
					</div>
				);
			})}
		</section>
	);
};

export default ItineraryTabs;
