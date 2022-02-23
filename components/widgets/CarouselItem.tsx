import React, { FC, useState } from "react";

import Image from "next/image";

import styles from "../../styles/Carousel.module.css";
import singleStyles from "../../styles/Homepage.module.css";

interface Props {}
export const CarouselItem: FC<any> = ({
  carouselItem,
  carouselIndex,
  singleCarousel,
}) => {
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

  const [ imageLoaded, setImageLoaded ] = useState<boolean>(false);

  return (
    <div key={`carousel-${carouselIndex + 1}`} className="item">
      <Image
        alt={image_alt}
        src={image_url}
        width={640}
        height={480}
        priority={false}
        loading={imageLoaded ? "eager" : "lazy"}
        onLoad={(event) => {
          const target = event.target;
          if (event.target.src) {
            if (target.src.indexOf("data:image/gif;base64") < 0) {
              setImageLoaded(true);
            } else {
              setImageLoaded(false);
            }
            // console.log("Target", event.target.src);
          }
          // if (target.srcset.indexOf("data:image/gif;base64") < 0) {
          //   setImageIsLoaded(true);
          // }
        }}
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
};
