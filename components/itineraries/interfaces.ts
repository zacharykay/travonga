import { MetaProps } from '../layout/Meta';
import { InPageNav, TabSections } from '../widgets/interfaces';
import { MapLinks } from '../widgets/interfaces';

export interface ItineraryGeneralData {
    itineraryName: string,
    meta: MetaProps,
    inPageNav: InPageNav[],
    itinerary_type: string,
    transportation_type: string,
    travel_time_min: string,
    travel_time_max: string,
    travel_time_format: string;
}

export interface ItineraryData extends ItineraryGeneralData {
    itinerary: ItineraryListData[];
}

export interface ItineraryListData {
    id: string | number;
    itinerary_type: string;
    days_min: string | number;
    days_max: string | number;
    note_after_title?: string;
    note_after_subtitle?: string;
    note_after_text?: string;
}

export interface ItineraryItemSections {
    [key: string]: ItineraryItemSection;
}

export interface ItinerarySection {
    id: string;
    itineraries: string;
    destinationName: string;
    stateName: string | null;
    region: string;
    anchor_tag: string | null;
    destination_link: string;
    attractionMapLinks: MapLinks;
    itinerary_guide_tabs?: TabSections[];
    attractions: ItinerarySectionAttractions;
}

export interface ItineraryItemSection {
    destinationName: string,
    stateName: string | null,
    itinerary_type: string,
    days_min: number | string,
    days_max: number | string,
    destination_link: string,
    anchor_tag: string | null,
    attractions: ItinerarySectionAttractions[],
    itinerary_guide_tabs?: TabSections[],
    attractionMapLinks: MapLinks,
    note_after_title?: string,
    note_after_subtitle?: string,
    note_after_text?: string,
    index: number,
    length: number,
}

export interface ItinerarySectionAttractions {
    attraction: string;
    image_url: string;
    image_alt: string;
    cc_image_url: string;
    cc_author_url: string;
    cc_author: string,
    cc_license_url?: string | null;
    cc_license?: string | null;
}