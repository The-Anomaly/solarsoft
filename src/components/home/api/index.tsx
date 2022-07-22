import { APICode, ArrowRight } from "assets";
import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";

const API = () => {
  return (
    <section className={`siteWrapper`}>
      <div className={styles.apiSec}>
        <div className={styles.txtSec}>
          <h5 className={styles.ttl}>Build with our easy-to-use API</h5>
          <p className={styles.txt}>
            Our API empowers developers to build and deploy high performance and scalable DApps.
          </p>
          <Button
            className={styles.btn}
            type="light"
            onClick={() => window.open("https://docs.nebulawallet.io/", "_blank")}
            Icon={ArrowRight}
          >
            Read our api docs
          </Button>
        </div>
        <APICode className={styles.img} />
      </div>
    </section>
  );
};

export { API };
