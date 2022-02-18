import React from "react";
import Meta from "../components/layout/Meta";
import Homepage from "../components/layout/Homepage";
import styles from "../styles/Homepage.module.css";

const { itineraries, meta } = require("../data/homepage.json");

const Home = () => {
  return (
    <React.Fragment>
      <Meta meta={meta} />
      <h1 className={styles["homepage-title"]}>Featured Travel Itineraries</h1>
      <div className={styles["two-itinerary-flexbox-home"]}>
        {itineraries.map((itinerary) => {
          return <Homepage key={itinerary.id} itinerary={itinerary} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
