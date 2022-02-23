import React, { FC } from "react";
import Meta from "../components/layout/Meta";
import HomepageSection from "../components/layout/HomepageSection";
import styles from "../styles/Homepage.module.css";

import { ItineraryProps } from "../components/layout/HomepageSection";

const { itineraries, meta } = require("../data/homepage.json");

const Home: FC = () => {
  return (
    <React.Fragment>
      <Meta meta={meta} />
      <h1 className={styles["homepage-title"]}>Featured Travel Itineraries</h1>
      <div className={styles["two-itinerary-flexbox-home"]}>
        {itineraries.map((itinerary: ItineraryProps) => {
          return <HomepageSection key={itinerary.id} itinerary={itinerary} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
