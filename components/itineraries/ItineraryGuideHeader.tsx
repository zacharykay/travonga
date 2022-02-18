import React, { FC } from "react";
import Meta from "../layout/Meta";
import StickyPageNav from "../widgets/StickyPageNav";

import { ItineraryGeneralData } from "./interfaces";

import styles from "../../styles/ItineraryPageNav.module.css";

const ItineraryGuideHeader: FC<ItineraryGeneralData> = ({
  itineraryName,
  meta,
  inPageNav,
  itinerary_type,
  transportation_type,
  travel_time_min,
  travel_time_max,
  travel_time_format,
}) => {
  return (
    <React.Fragment>
      <Meta meta={meta} />

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
                  `itinerary_page_nav_${inPageNav.length !== 9 && inPageNav.length !== 15
                    ? 2 * Math.round(inPageNav.length / 2)
                    : inPageNav.length}`
                ] +
                " " +
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
