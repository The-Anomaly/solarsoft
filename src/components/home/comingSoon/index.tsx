import * as React from "react";
import styles from "./styles.module.css";

const ComingSoon = () => {
  return (
    <section className={styles.wrapperBg}>
      <div className={`siteWrapper ${styles.wrapper}`}>
        <p className={styles.tag}>COMING SOON</p>
        <p className={styles.ttl}>Start learning and begin your web3 journey</p>
        <p className={styles.txt}>SOLARSOFT UNIVERSITY</p>
      </div>
    </section>
  );
};

export { ComingSoon };
