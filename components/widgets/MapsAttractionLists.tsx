import { FC } from "react";
import styles from "../../styles/MapsAttractionLists.module.css";

interface MapLinks {
  top_attractions?: string;
  all_attractions?: string;
  main_attractions?: string;
  short_attractions?: string;
  custom_attractions_1?: string;
  custom_attractions_1_text?: string;
  custom_attractions_2?: string;
  custom_attractions_2_text?: string;
  custom_attractions_3?: string;
  custom_attractions_3_text?: string;
  custom_attractions_4?: string;
  custom_attractions_4_text?: string;
}

interface Props {
  destinationName: string;
  stateName: string;
  destination_link: string;
  attractionMapLinks: MapLinks;
}

const MapsAttractionLists: FC<Props> = (props) => {
  const { destinationName, stateName, destination_link, attractionMapLinks } = props;

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
    custom_attractions_4_text,
  } = attractionMapLinks;

  return (
    <section
      className={
        destination_link ? (
          styles.attraction_lists + " " + styles.tab_align
        ) : (
          styles.attraction_lists
        )
      }
    >
      {!destination_link ? <a className="anchor" id="attractions-maps" /> : null}

      {destination_link ? (
        <h4 className="destination_guide_links">
          <a className="destination_guide_link" href={destination_link}>
            Attractions Guide for {destinationName},&nbsp;{stateName}
          </a>
        </h4>
      ) : null}

      {!destination_link ? (
        <h3 className="section_heading left_heading">
          Google Maps Attraction&nbsp;Lists
        </h3>
      ) : null}

      <p className={styles.destinations_save_attractions_header}>
        Save {destinationName} Attraction Lists to your Google&nbsp;Maps&nbsp;Account:
      </p>
      <div className={styles.attraction_links_container}>
        {top_attractions ? (
          <p className={styles.attractions_link}>
            <a href={top_attractions} target="_blank" rel="noreferrer">
              &rArr; Top Attractions
            </a>
          </p>
        ) : null}
        {main_attractions ? (
          <p className={styles.attractions_link}>
            <a href={main_attractions} target="_blank" rel="noreferrer">
              &rArr; Main Attractions
            </a>
          </p>
        ) : null}
        {all_attractions ? (
          <p className={styles.attractions_link}>
            <a href={all_attractions} target="_blank" rel="noreferrer">
              &rArr; All Attractions
            </a>
          </p>
        ) : null}
        {short_attractions ? (
          <p className={styles.attractions_link}>
            <a href={short_attractions} target="_blank" rel="noreferrer">
              &rArr; Short Visit
            </a>
          </p>
        ) : null}
        {custom_attractions_1 ? (
          <p className={styles.attractions_link}>
            <a href={custom_attractions_1} target="_blank" rel="noreferrer">
              &rArr; {custom_attractions_1_text}
            </a>
          </p>
        ) : null}
        {custom_attractions_2 ? (
          <p className={styles.attractions_link}>
            <a href={custom_attractions_2} target="_blank" rel="noreferrer">
              &rArr; {custom_attractions_2_text}
            </a>
          </p>
        ) : null}
        {custom_attractions_3 ? (
          <p className={styles.attractions_link}>
            <a href={custom_attractions_3} target="_blank" rel="noreferrer">
              &rArr; {custom_attractions_3_text}
            </a>
          </p>
        ) : null}
        {custom_attractions_4 ? (
          <p className={styles.attractions_link}>
            <a href={custom_attractions_4} target="_blank" rel="noreferrer">
              &rArr; {custom_attractions_4_text}
            </a>
          </p>
        ) : null}
      </div>
      <span className={styles.save_attractions_instructions}>
        1. Click Link above while logged into Google account on your device.<br /> 2.
        Click <b>Follow</b>, and the attraction pins will be saved in your Google Maps.
      </span>
    </section>
  );
};

export default MapsAttractionLists;
