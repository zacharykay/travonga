import { useState, FC } from "react";
import styles from "../../styles/Tabs.module.css";
import { TabSections } from "./interfaces";

interface Props {
  itinerary: TabSections[];
}

interface Tabs {}

const Tabs: FC<Props> = ({ itinerary }: { itinerary: TabSections[] }) => {
  const [ tabsOpen, setTabsOpen ] = useState<boolean>(false);
  const [ value, setValue ] = useState<number>(0);

  const tabToggle = (index: number): void => {
    if (value === index) {
      setTabsOpen(!tabsOpen);
    }
    if (value !== index) {
      setValue(index);
      setTabsOpen(true);
    }
  };

  const { tab_content }: { tab_content: string } = itinerary[value];

  return (
    <section className={styles.tab_section}>
      <div className={tabsOpen ? styles["tab"] + " " + styles["tab_open"] : styles.tab}>
        {itinerary.map(({ tab_title }: { tab_title: string }, index: number) => {
          return (
            <button
              type="button"
              key={index}
              className={
                index === value && tabsOpen ? (
                  styles["active"] + " " + styles["tablinks"]
                ) : (
                  styles.tablinks
                )
              }
              onClick={() => tabToggle(index)}
            >
              {tab_title} {"\u25BE"}
            </button>
          );
        })}
      </div>
      <div className={tabsOpen ? styles.tabcontent_visible : styles.tabcontent}>
        <div
          className={styles.tabcontent_text_container}
          dangerouslySetInnerHTML={{ __html: tab_content }}
        />
      </div>
    </section>
  );
};

export default Tabs;
