export interface DestinationsDetails {
    [key: string]:  SingleDestinationDetails;
}

export interface SingleDestinationDetails {
    id: string;
    destinationName: string;
    stateName: string;
    page_url: string;
    image_url: string;
    image_alt: string;
    cc_image_url: string;
    cc_author_url: string;
    cc_author: string;
    cc_license_url: string | null;
    cc_license: string | null;
    hideStateName?: boolean;
}