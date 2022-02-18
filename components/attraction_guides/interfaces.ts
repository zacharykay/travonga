import { MetaProps } from '../layout/Meta';
import { MapLinks } from '../widgets/interfaces';
import { InPageNav } from "../widgets/interfaces";


export interface AttractionsData {
  destinationName: string;
  attractions: SingleAttractionName;
  attractions_guide_content: AttractionData[];
  inPageNav: InPageNav[];
  attractionMapLinks: MapLinks;
  nearby_destinations: string[];
  stateName: string;
  meta: MetaProps;
}

export interface AttractionData {
  id: string | number;
  destinationName: string;
  stateName: string;
  heading: string;
  anchor: string | null;
  carousel_id: string | number | null;
  body: string;
  hidden_content: string | null;
}

export interface SingleAttractionName {
    [key: string]: AttractionDetails[]
}

export interface AttractionDetails {
    id: string | number
    carouselId: string | number | null
    itineraryCarousel: string | number | null
    attraction: string
    image_url: string
    image_alt: string
    cc_image_url: string
    cc_author_url: string
    cc_author: string
    cc_license_url: string | null
    cc_license: string | null
    cc_license_gnu_url: string | null
    cc_license_gnu: string | null
}