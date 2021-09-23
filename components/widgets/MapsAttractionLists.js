import styles from '../../styles/MapsAttractionLists.module.css';

const MapsAttractionLists = ({
	destinationName,
	stateName,
	destination_link,
	attractionMapLinks
}) => {
	const {
		top_attractions,
		all_attractions,
		main_attractions,
		short_attractions,
		custom_attractions_1,
		custom_attractions_1_text,
		custom_attractions_2,
		custom_attractions_2_text,
		custom_attractions_3,
		custom_attractions_3_text,
		custom_attractions_4,
		custom_attractions_4_text
	} = attractionMapLinks;

	return (
		<section
			className={
				destination_link ? (
					styles.attraction_lists + ' ' + styles.tab_align
				) : (
					styles.attraction_lists
				)
			}
		>
			{!destination_link && <a className="anchor" id="attractions-maps" />}

			{destination_link && (
				<h4 className="destination_guide_links">
					<a className="destination_guide_link" href={destination_link}>
						Attractions Guide for {destinationName},&nbsp;{stateName}
					</a>
				</h4>
			)}

			{!destination_link && (
				<h3 className="section_heading left_heading">
					Google Maps Attraction&nbsp;Lists
				</h3>
			)}

			<p className={styles.destinations_save_attractions_header}>
				Save {destinationName} Attraction Lists to your
				Google&nbsp;Maps&nbsp;Account:
			</p>
			<div className={styles.attraction_links_container}>
				{top_attractions && (
					<p className={styles.attractions_link}>
						<a href={top_attractions} target="_blank" rel="noreferrer">
							&rArr; Top Attractions
						</a>
					</p>
				)}
				{main_attractions && (
					<p className={styles.attractions_link}>
						<a href={main_attractions} target="_blank" rel="noreferrer">
							&rArr; Main Attractions
						</a>
					</p>
				)}
				{all_attractions && (
					<p className={styles.attractions_link}>
						<a href={all_attractions} target="_blank" rel="noreferrer">
							&rArr; All Attractions
						</a>
					</p>
				)}
				{short_attractions && (
					<p className={styles.attractions_link}>
						<a href={short_attractions} target="_blank" rel="noreferrer">
							&rArr; Short Visit
						</a>
					</p>
				)}
				{custom_attractions_1 && (
					<p className={styles.attractions_link}>
						<a href={custom_attractions_1} target="_blank" rel="noreferrer">
							&rArr; {custom_attractions_1_text}
						</a>
					</p>
				)}
				{custom_attractions_2 && (
					<p className={styles.attractions_link}>
						<a href={custom_attractions_2} target="_blank" rel="noreferrer">
							&rArr; {custom_attractions_2_text}
						</a>
					</p>
				)}
				{custom_attractions_3 && (
					<p className={styles.attractions_link}>
						<a href={custom_attractions_3} target="_blank" rel="noreferrer">
							&rArr; {custom_attractions_3_text}
						</a>
					</p>
				)}
				{custom_attractions_4 && (
					<p className={styles.attractions_link}>
						<a href={custom_attractions_4} target="_blank" rel="noreferrer">
							&rArr; {custom_attractions_4_text}
						</a>
					</p>
				)}
			</div>
			<span className={styles.save_attractions_instructions}>
				1. Click Link above while logged into Google account on your device.<br />{' '}
				2. Click <b>Follow</b>, and the attraction pins will be saved in your
				Google Maps.
			</span>
		</section>
	);
};

export default MapsAttractionLists;
