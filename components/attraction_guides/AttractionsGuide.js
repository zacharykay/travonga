import React, { useState, useEffect } from "react";

import MapsAttractionLists from "../widgets/MapsAttractionLists";
import NearbyDestinations from "../../components/destinations/NearbyDestinations";
import AttractionGuideHeader from "./AttractionGuideHeader";
import AttractionGuideSection from "./AttractionGuideSection";
import Carousel from "../../components/widgets/CarouselWrapper";

const AttractionsGuide = ({ data }) => {
  const {
    destinationName,
    attractions,
    attractions_guide_content,
    inPageNav,
    attractionMapLinks,
    nearby_destinations,
    stateName,
    meta,
  } = data;

  const [ size, setSize ] = useState(null);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    checkSize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <React.Fragment>
      <AttractionGuideHeader
        destinationName={destinationName}
        stateName={stateName}
        meta={meta}
        inPageNav={inPageNav}
      />
      {attractions_guide_content && (
        <React.Fragment>
          {attractions_guide_content.map((item, index) => {
            const { body, heading, anchor, carousel_id, hidden_content } = item;
            return (
              <React.Fragment key={index}>
                {carousel_id && (
                  <Carousel
                    id={index}
                    attractions={attractions}
                    carousel_id={carousel_id}
                    size={size}
                  />
                )}
                {body && (
                  <AttractionGuideSection
                    id={index}
                    heading={heading}
                    anchor={anchor}
                    hidden_content={hidden_content}
                  >
                    {body}
                  </AttractionGuideSection>
                )}
              </React.Fragment>
            );
          })}
        </React.Fragment>
      )}
      {attractionMapLinks && (
        <MapsAttractionLists
          destinationName={destinationName}
          attractionMapLinks={attractionMapLinks}
        />
      )}
      {nearby_destinations && (
        <NearbyDestinations nearbyDestinations={nearby_destinations} />
      )}
    </React.Fragment>
  );
};

export default AttractionsGuide;
