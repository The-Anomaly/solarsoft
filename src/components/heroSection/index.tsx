import { ArrowRight, ProdMania, StudentPaddy, TSE } from "assets";
import { Button } from "components/button";
import * as React from "react";
import styles from "./styles.module.css";

interface HeroProps {
  type: "landing" | "other";
  title: string;
  text: string;
}

const HeroSection = () => {
  return (
    <section className={`${styles.heroBg} ${styles.landing}`}>
      <div className={`siteWrapper ${styles.hero}`}>
        <div className={styles.txtSec}>
          <h1 className={styles.ttl}>Blockchain infrastructure that powers businesses</h1>
          <p className={styles.txt}>
            We are confident you can better your business or brand by leveraging blockchain technology. We are here to
            help you with that.
          </p>
          <Button className={styles.btn} onClick={() => {}} type="light" Icon={ArrowRight}>
            Speak with us
          </Button>
          <div className={styles.partners}>
            <p>We’ve partnered with great businesses in the world</p>
            <div>
              <ProdMania /> <StudentPaddy /> <TSE />
            </div>
          </div>
        </div>
        <div className={styles.imgSec}></div>
      </div>
    </section>
  );
};

export { HeroSection };
