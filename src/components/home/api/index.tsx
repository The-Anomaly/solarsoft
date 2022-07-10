import { apiCode, ArrowRight } from "assets";
import { Button } from "components/button";
import * as React from "react";
import styles from "./styles.module.css";

const API = () => {
  return (
    <section className={`siteWrapper ${styles.apiSec}`}>
      <div className={styles.txtSec}>
        <h5 className={styles.ttl}>Build with our easy-to-use API</h5>
        <p className={styles.txt}>
          Our API empowers developers to build and deploy high performance and scalable DApps.
        </p>
        <Button className={styles.btn} type="light" onClick={() => {}} Icon={ArrowRight}>
          Read our api docs
        </Button>
      </div>
      <img className={styles.img} alt="code snippet" src={apiCode} />
    </section>
  );
};

export { API };
