import { blogImage } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const BlogCard = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.imgSec}>
        <img className={styles.img} src={blogImage} alt="" />
      </div>
      <div className={styles.ttlSec}>
        <p className={styles.label}>Blockchain</p>
        <p className={styles.ttl}>A year with Solarsoft</p>
      </div>
      <p className={styles.txt}>
        Another year has passed, and technology and the digital world remain on the rise. From NFTs (Non-Fungible
        Tokens) to Blockchains and DApps(Decentralized Apps) each company focuses on new revenue streams and what they
        could add to the metaverse.
      </p>
    </div>
  );
};

export { BlogCard };
