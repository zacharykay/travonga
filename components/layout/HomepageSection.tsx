import React, { FC } from "react";
import styles from "../../styles/Homepage.module.css";
import Carousel from "../widgets/CarouselWrapper";

interface Props {
  itinerary: ItineraryProps;
}

export interface ItineraryProps {
  id?: number | string;
  itinerary_link: string;
  itinerary_title: string;
  itinerary_title_line_2: string;
  itinerary_length: string;
  by_train: boolean;
  road_trip?: boolean;
  carousel_items: HomepageCarouselData[];
  itinerary_destinations: HomepageItineraryDestinations[];
  main_attractions: string[];
  trip_extension_options: HomepageItineraryDestinations[];
}

export interface HomepageCarouselData {
  image_location: string;
  image_url: string;
  image_alt: string;
}

interface HomepageItineraryDestinations {
  destination_name: string;
  destination_link: string;
}

const Homepage: FC<Props> = ({ itinerary }) => {
  const {
    itinerary_link,
    itinerary_title,
    itinerary_title_line_2,
    itinerary_length,
    by_train,
    road_trip,
    carousel_items,
    itinerary_destinations,
    main_attractions,
    trip_extension_options,
  } = itinerary;

  return (
    <section className={styles["flex-container-home"]}>
      <h2 className={styles["itinerary-title-home"]}>
        <a href={itinerary_link}>
          {itinerary_title}
          {itinerary_title_line_2 && (
            <span>
              <br />
              {itinerary_title_line_2}
            </span>
          )}
        </a>
      </h2>
      <p className={styles["itinerary-length-home"]}>
        {itinerary_length}
        {by_train ? ` (By Train)` : null}
      </p>
      <Carousel attractions={carousel_items} singleCarousel />
      <section className={styles["itinerary-info-container-home"]}>
        <h4 className={styles["itinerary-summary-title-home"]}>Destinations</h4>
        <p className={styles["itinerary-summary-home"]}>
          {itinerary_destinations.map(
            (itinerary_destination: HomepageItineraryDestinations, index: number) => {
              const { destination_name, destination_link } = itinerary_destination;
              return (
                <span key={index}>
                  <a href={destination_link}>{destination_name}</a>
                  {index !== itinerary_destinations.length - 1 ? " ∙ " : null}
                </span>
              );
            }
          )}
        </p>
        <h4 className={styles["itinerary-summary-title-home"]}>Main Attractions</h4>
        <p className={styles["itinerary-summary-home"]}>
          {main_attractions.map((main_attraction: string, index: number) => {
            return (
              <span key={index}>
                {main_attraction}
                {index !== main_attractions.length - 1 ? " ∙ " : null}
              </span>
            );
          })}
        </p>
        <h4 className={styles["itinerary-summary-title-home"]}>Trip Extension Options</h4>
        <p className={styles["itinerary-summary-home"]}>
          {trip_extension_options.map(
            (trip_extension_option: HomepageItineraryDestinations, index: number) => {
              const { destination_name, destination_link } = trip_extension_option;
              return (
                <span key={index}>
                  <a href={destination_link}>{destination_name}</a>
                  {index !== trip_extension_options.length - 1 ? " ∙ " : null}
                </span>
              );
            }
          )}
        </p>
      </section>
    </section>
  );
};

export default Homepage;
