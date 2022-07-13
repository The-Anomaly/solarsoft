import { DiscordIcon, TwitterIcon, InstagramIcon, LinkedinIcon, MediumIcon } from "assets";
import { Button } from "components";
import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div>
          <p className={styles.ttl}>Products</p>
          <ul className={styles.items}>
            <li>
              <a>Nebula Wallet</a>
            </li>
            <li>
              <a>Nebula Music</a>
            </li>
            <li>
              <a>Solarsoft University</a>
            </li>
          </ul>
        </div>
        <div>
          <p className={styles.ttl}>Quick Links</p>
          <ul className={styles.items}>
            <li>
              <Link to={Routes.contactUs}>Contact</Link>
            </li>
            <li>
              <Link to={Routes.blog}>Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={styles.ttl}>Support</p>
          <ul className={styles.items}>
            <li>
              <a>API Documentation</a>
            </li>
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
      </div>
      <div className={styles.cc}>
        <p className={styles.copy}>© 2022 Solarsoft Technology </p>
      </div>
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
    </footer>
  );
};

export { Footer };
