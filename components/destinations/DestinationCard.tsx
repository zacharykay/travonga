import { FC } from "react";

import styles from "../../styles/Destinations.module.css";

import DestinationCardCredits from "./DestinationCardCredits";

import Link from "next/link";
import Image from "next/image";
import { SingleDestinationDetails } from "./interfaces";

interface Props extends SingleDestinationDetails {
  pageType: string;
}

const DestinationCard: FC<Props> = ({ pageType, ...place }) => {
  const { destinationName, page_url, image_url, image_alt } = place;

  return (
    <div className={styles.destination_container}>
      <Link href={page_url} passHref>
        <div className="image_wrapper">
          <Image
            className={styles.destination_image}
            alt={image_alt}
            src={image_url}
            width={640}
            height={480}
            title={`${destinationName} Attractions Guide`}
          />
        </div>
      </Link>
      {pageType === "destinationsPage" && (
        <h3 className={styles.destination_title}>
          <Link href={page_url}>{destinationName}</Link>
        </h3>
      )}
      {pageType === "attractionsPage" && (
        <h4 className={styles.destination_title}>
          <Link href={page_url}>{destinationName}</Link>
        </h4>
      )}

      <DestinationCardCredits cardType="static" {...place} />
    </div>
  );
};

export default DestinationCard;
