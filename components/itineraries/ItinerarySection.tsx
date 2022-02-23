import React, { FC } from "react";

import Carousel from "../widgets/CarouselWrapper";
import Tabs from "../widgets/Tabs";
import MapsAttractionLists from "../widgets/MapsAttractionLists";

import { ItineraryItemSection } from "../itineraries/interfaces";

const ItinerarySection: FC<ItineraryItemSection> = ({
  destinationName,
  stateName,
  itinerary_type,
  days_min,
  days_max,
  destination_link,
  anchor_tag,
  attractions,
  itinerary_guide_tabs,
  attractionMapLinks,
  note_after_title,
  note_after_subtitle,
  note_after_text,
  // size,
  index,
  length,
}) => {
  if (days_min === 0.5 || days_min === 0.5) {
    days_min = "½";
  }
  return (
    <article>
      {itinerary_type === "extension" ? (
        <section className="trip_extension">
          {anchor_tag ? <a className="anchor" id={anchor_tag} /> : null}
          <h5 className="trip_extension_days">
            Possible Trip&nbsp;Extension ({days_min}&nbsp;&#8209;&nbsp;{days_max}&nbsp;{days_max === 1 ? "Day" : "Days"})
          </h5>
          <h2 className="itinerary_location_title">
            {destinationName}
            {stateName ? `, ${stateName}` : null}
          </h2>
          {destination_link ? (
            <div className="trip_extension_guide_links">
              <span>
                <a className="destination_guide_link" href={destination_link}>
                  Attractions Guide
                </a>
              </span>
            </div>
          ) : null}
        </section>
      ) : null}

      {itinerary_type === "destination" || itinerary_type === "day-trip" ? (
        <section className="itinerary_heading">
          {anchor_tag ? <a className="anchor" id={anchor_tag} /> : null}
          <h2 className="itinerary_location_title">
            {destinationName}
            {stateName ? `, ${stateName}` : null}
          </h2>
          {itinerary_type === "destination" ? (
            <p className="itinerary_location_days">
              {days_min} - {days_max} {days_max === 1 ? "Day" : "Days"}
            </p>
          ) : null}
          {itinerary_type === "day-trip" ? (
            <p className="itinerary_location_days">Day-Trips</p>
          ) : null}
        </section>
      ) : null}

      {attractions ? (
        <Carousel
          attractions={attractions}
          itineraryCarousel={true}
          // size={size}
        />
      ) : null}

      {itinerary_type === "extension" ? <div className="bottom_border" /> : null}

      {itinerary_guide_tabs && itinerary_type !== "extension" ? (
        <Tabs itinerary={itinerary_guide_tabs} />
      ) : // <Tabs itinerary={(destinationName, destination_link, itinerary_guide_tabs)} />
      null}

      {itinerary_type === "destination" || itinerary_type === "day-trip" ? (
        <MapsAttractionLists
          destinationName={destinationName}
          stateName={stateName ? stateName : undefined}
          destination_link={destination_link}
          attractionMapLinks={attractionMapLinks}
        />
      ) : null}

      {note_after_title ? (
        <React.Fragment>
          <section className="itinerary_heading">
            <h2 className="itinerary_location_title">{note_after_title}</h2>
            {note_after_subtitle ? (
              <p className="itinerary_location_days">({note_after_subtitle})</p>
            ) : null}
            {note_after_text ? <p className="itinerary-note">{note_after_text}</p> : null}
          </section>
          {index !== length - 1 ? <div className="bottom_border" /> : null}
        </React.Fragment>
      ) : null}
    </article>
  );
};

export default ItinerarySection;
