import { FC } from "react";
import Link from "next/link";

import styles from "../../styles/Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_flexbox}>
        <h4 className={styles.site_identity}>
          <Link href="/">TRAVONGA.COM</Link>
        </h4>
        <p className={styles.site_identity_copyright}>
          Copyright &copy; 2017&#8209;2021 by Travonga.com<br />
          Travonga Travel Itineraries &amp; Attractions&nbsp;Guides
        </p>
      </div>
    </footer>
  );
};

export default Footer;
