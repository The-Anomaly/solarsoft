import { ArrowRight } from "assets";
import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";

const Discord = () => {
  return (
    <section className={`siteWrapper ${styles.wrapper}`}>
      <p className={styles.ttl}>Become a friend of Solarsoft.</p>
      <p className={styles.txt}>Get first access to important news, staking, community events, upcoming drops, and more. </p>
      <Button type="dark" onClick={() => window.open("https://discord.gg/tNePS8Ks", "_blank")} className={styles.btn} Icon={ArrowRight}>
        Join our Discord
      </Button>
      <hr className={styles.dvdr} />
    </section>
  );
};

export { Discord };
