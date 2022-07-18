import { ArrowRight, LandingHero1, LandingHero2, ProdMania, StudentPaddy, TSE } from "assets";
import { Button } from "components";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

interface HeroProps {
  type: "landing" | "other";
  title: string | any;
  text: string;
  label?: string;
  Image?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  className?: string;
}

const HeroSection: React.FC<HeroProps> = ({ type, title, text, label, className, Image }) => {
  const navigate = useNavigate();
  return (
    <section className={`${styles.heroBg} ${styles[type]} ${className}`}>
      <div className={`siteWrapper ${styles.hero}`}>
        <div className={styles.txtSec}>
          {label ? <p className={styles.label}>{label}</p> : ""}
          <h1 className={styles.ttl}>{title}</h1>
          <p className={styles.txt}>{text}</p>
          <Button className={styles.btn} onClick={() => navigate(Routes.contactUs)} type="light" Icon={ArrowRight}>
            Speak with us
          </Button>
          {type === "landing" ? (
            <div className={styles.partners}>
              <p>We’ve partnered with great businesses in the world</p>
              <div>
                <ProdMania /> <StudentPaddy /> <TSE />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.imgSec}>
          {Image ? (
            <Image className={styles.heroImg} />
          ) : (
            <>
              <LandingHero1 className={styles.img2} />
              <LandingHero2 className={styles.img1} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
