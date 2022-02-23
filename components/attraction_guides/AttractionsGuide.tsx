import React, { useState, useEffect, FC } from "react";

import MapsAttractionLists from "../widgets/MapsAttractionLists";
import NearbyDestinations from "../destinations/NearbyDestinations";
import AttractionGuideHeader from "./AttractionGuideHeader";
import AttractionGuideSection from "./AttractionGuideSection";
import Carousel from "../widgets/CarouselWrapper";

import { AttractionsData, AttractionData } from "./interfaces";

interface Props {
  data: AttractionsData;
}

const AttractionsGuide: FC<Props> = ({ data }: { data: AttractionsData }) => {
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

  // const [ size, setSize ] = useState(null);

  // const checkSize = () => {
  //   setSize(window.innerWidth);
  // };

  // useEffect(() => {
  //   checkSize();
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", checkSize);

  //   return () => {
  //     window.removeEventListener("resize", checkSize);
  //   };
  // }, []);

  return (
    <React.Fragment>
      <AttractionGuideHeader
        destinationName={destinationName}
        stateName={stateName}
        meta={meta}
        inPageNav={inPageNav}
      />
      {attractions_guide_content ? (
        <React.Fragment>
          {attractions_guide_content.map((item: AttractionData, index: number) => {
            const { body, heading, anchor, carousel_id, hidden_content } = item;
            return (
              <React.Fragment key={index}>
                {carousel_id ? (
                  <Carousel
                    attractions={attractions}
                    carousel_id={carousel_id}
                    // size={size}
                  />
                ) : null}
                {body ? (
                  <AttractionGuideSection
                    heading={heading}
                    anchor={anchor ? anchor : undefined}
                    hidden_content={hidden_content ? hidden_content : undefined}
                  >
                    {body}
                  </AttractionGuideSection>
                ) : null}
              </React.Fragment>
            );
          })}
        </React.Fragment>
      ) : null}
      {attractionMapLinks ? (
        <MapsAttractionLists
          destinationName={destinationName}
          attractionMapLinks={attractionMapLinks}
        />
      ) : null}
      {nearby_destinations ? (
        <NearbyDestinations nearbyDestinations={nearby_destinations} />
      ) : null}
    </React.Fragment>
  );
};

export default AttractionsGuide;
