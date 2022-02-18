export interface InPageNav {
  anchor_tag: string;
  anchor_title: string;
}

export interface MapLinks {
  top_attractions?: string;
  all_attractions?: string;
  main_attractions?: string;
  short_attractions?: string;
  custom_attractions_1?: string;
  custom_attractions_1_text?: string;
  custom_attractions_2?: string;
  custom_attractions_2_text?: string;
  custom_attractions_3?: string;
  custom_attractions_3_text?: string;
  custom_attractions_4?: string;
  custom_attractions_4_text?: string;
}

export interface TabSections {
    tab_title: string;
    tab_content: string;
}

export interface StickyPageNavProps {
    anchor_tag: string,
    anchor_title: string,
}