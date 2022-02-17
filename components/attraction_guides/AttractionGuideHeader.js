import Meta from '../layout/Meta';
import StickyPageNav from '../widgets/StickyPageNav';

import styles from '../../styles/DestinationPageHeader.module.css';

const AttractionGuideHeader = ({ destinationName, stateName, meta, inPageNav }) => {
    return (
        <>
            <Meta meta={meta}></Meta>

            <h1>{destinationName}{stateName && <span className='capitalize'>, {stateName}</span>}<br /><span className={styles.destination_inner_title}>Attractions&nbsp;Guide</span></h1>
            <div className={styles.destination_page_section_links}>
                <div><a href="#nearby-destinations">Nearby Destinations</a></div>
                <div><a href="#attractions-maps">Google Maps Attractions</a></div>
            </div>

            {inPageNav && <>
                <StickyPageNav>
                    <div className={styles[`destination_page_nav_${inPageNav.length !== 9
                        ? 2 * Math.round(inPageNav.length / 2)
                        : inPageNav.length}`] + (' ') + styles.in_page_nav}>
                        {inPageNav.map(({ anchor_tag, anchor_title }, index) => {
                            return (
                                <div key={index}>
                                    <a href={`#${anchor_tag}`}>{anchor_title}</a>
                                </div>);
                        })}
                    </div>
                </StickyPageNav>

                <div className={styles.nav_spacer}>&nbsp;</div>
            </>}
        </>
    );
};

export default AttractionGuideHeader;
