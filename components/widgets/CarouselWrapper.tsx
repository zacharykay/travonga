import React, { FC } from "react";

import dynamic from "next/dynamic";
import Image from "next/image";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "../../styles/Carousel.module.css";
import singleStyles from "../../styles/Homepage.module.css";
import { HomepageCarouselData } from "../layout/HomepageSection";
// import { CarouselItem } from "./CarouselItem";

interface CarouselItem {
  attraction: string;
  image_url: string;
  image_alt: string;
  image_location: string;
  cc_image_url: string;
  cc_author_url: string;
  cc_author: string;
  cc_license?: string;
  cc_license_url?: string;
}

interface Props {
  attractions: any;
  carousel_id?: number | string;
  itineraryCarousel?: boolean;
  singleCarousel?: boolean;
}

const ResponsiveSettings = {
  0:
    {
      items: 1,
      dotsEach: 1,
    },
  500:
    {
      items: 2,
      dotsEach: 2,
    },
  800:
    {
      items: 3,
      dotsEach: 3,
    },
};

const HomepageResponsiveSettings = {
  0:
    {
      items: 1,
      dotsEach: 2,
    },
  480:
    {
      items: 1,
      dotsEach: 2,
    },
};

const Carousels: FC<Props> = (props) => {
  const { attractions, carousel_id, itineraryCarousel, singleCarousel } = props;

  let carouselSlides: any[] = [];
  if (itineraryCarousel || singleCarousel) {
    carouselSlides = [ ...attractions ];
  } else if (carousel_id && !itineraryCarousel && !singleCarousel) {
    let tempAttractions = attractions[carousel_id].map(
      (carousel: HomepageCarouselData) => carousel
    );
    carouselSlides = [ ...tempAttractions ];
  }

  const OwlCarousel = dynamic(
    () => {
      return import("react-owl-carousel");
    },
    {
      ssr: false,
      // suspense: true,
    }
  );

  return (
    <OwlCarousel
      // fallback={"Loading"}
      className={"owl-theme" + " " + styles.carouselItems}
      loop={true}
      dots={true}
      autoplay={true}
      nav={false}
      // responsiveClass={true}
      responsive={!singleCarousel ? ResponsiveSettings : HomepageResponsiveSettings}
      lazyLoad={false}
      lazyContent={false}
    >
      {carouselSlides.map((carouselItem: CarouselItem, carouselIndex: number) => {
        // return (
        //   <CarouselItem
        //     key={carouselIndex}
        //     carouselIndex={carouselIndex}
        //     carouselItem={carouselItem}
        //     singleCarousel={singleCarousel}
        //   />
        // );
        const {
          attraction,
          image_url,
          image_alt,
          image_location,
          cc_image_url,
          cc_author_url,
          cc_author,
          cc_license,
          cc_license_url,
        } = carouselItem;

        return (
          <div key={`carousel-${carouselIndex + 1}`} className="item">
            <Image
              alt={image_alt}
              src={image_url}
              width={640}
              height={480}
              priority={false}
              loading={"eager"}
              // onLoad={(event) => {
              //   const target = event.target;
              //   if (event.target.src) {
              //     if (target.src.indexOf("data:image/gif;base64") < 0) {
              //       setImageLoaded(true);
              //     } else {
              //       setImageLoaded(false);
              //     }
              //     // console.log("Target", event.target.src);
              //   }
              // if (target.srcset.indexOf("data:image/gif;base64") < 0) {
              //   setImageIsLoaded(true);
              // }
              // }}
            />
            {singleCarousel ? (
              <div
                className={singleStyles["single-carousel-text"]}
                style={{ backgroundColor: "var(--bright-white)" }}
              >
                {" "}
                <h3 className={singleStyles["single-carousel-title"]}>
                  {image_location}{" "}
                </h3>{" "}
              </div>
            ) : null}
            {!singleCarousel ? (
              <p className={styles["carousel-item-text"]}>
                <strong className={styles["carousel-item-title"]}>{attraction}</strong>
                <br />{" "}
                <span className={styles["carousel-item-credits"]}>
                  {" "}
                  <a href={cc_image_url} target="_blank" rel="noopener noreferrer">
                    Photo{" "}
                  </a>{" "}
                  by{" "}
                  <a href={cc_author_url} target="_blank" rel="noopener noreferrer">
                    {cc_author}{" "}
                  </a>
                  <br />{" "}
                  {cc_license === null ? (
                    <i>Edited</i>
                  ) : (
                    <React.Fragment>
                      <a href={cc_license_url} target="_blank" rel="noopener noreferrer">
                        {cc_license}
                      </a>
                      {" | "}
                      <i>Edited</i>
                    </React.Fragment>
                  )}
                </span>
              </p>
            ) : null}
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default Carousels;
