import { DiscordIcon, TwitterIcon, InstagramIcon, LinkedinIcon, MediumIcon } from "assets";
import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <div className={styles.footer}>
        <div className={styles.links}>
          <div>
            <p className={styles.ttl}>Products</p>
            <ul className={styles.items}>
              <li>Nebula Wallet</li>
              <li>Nebula Music</li>
              <li>Solarsoft University</li>
            </ul>
          </div>
          <div>
            <p className={styles.ttl}>Quick Links</p>
            <ul className={styles.items}>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <p className={styles.ttl}>Support</p>
            <ul className={styles.items}>
              <li>API Documentation</li>
            </ul>
          </div>
        </div>
        <div className={styles.news}>
          <p className={styles.subscribe}>Subscribe to our newsletter</p>
          <form className={styles.form}>
            <input type={"email"} placeholder="Email" className={styles.input} />
            <Button className={styles.btn} type={"light"} onClick={() => {}}>
              SUBMIT
            </Button>
          </form>
          <p className={styles.txt}>By subscribing, I agree to receive communications by Solarsoft</p>
          <div className={styles.socials}>
            <a>
              <TwitterIcon />
            </a>
            <a>
              <DiscordIcon />
            </a>
            <a>
              <MediumIcon />
            </a>
            <a>
              <LinkedinIcon />
            </a>
            <a>
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className={styles.cc}>
          <p className={styles.copy}>© 2022 Solarsoft Technology </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
