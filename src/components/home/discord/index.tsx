import { ArrowRight } from "assets";
import { Button } from "components/button";
import * as React from "react";
import styles from "./styles.module.css";

const Discord = () => {
  return (
    <section className={`siteWrapper ${styles.wrapper}`}>
      <p className={styles.ttl}>Become a friend of Solarsoft.</p>
      <p className={styles.txt}>Get first access to important news, staking, community events, upcoming drops, and more. </p>
      <Button type="dark" onClick={() => {}} className={styles.btn} Icon={ArrowRight}>
        Join our discord
      </Button>
      <hr className={styles.dvdr} />
    </section>
  );
};

export { Discord };
