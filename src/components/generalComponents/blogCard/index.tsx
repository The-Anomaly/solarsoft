import * as React from "react";
import styles from "./styles.module.css";

const BlogCard = ({ title, article, image, category, url }) => {
  return (
    <div className={styles.blog}>
      <div className={styles.imgSec}>
        <img className={styles.img} src={image} alt="blog" />
      </div>
      <div className={styles.ttlSec}>
        <p className={styles.label}>{category}</p>
        <p onClick={() => window.open(url, "_blank")} className={styles.ttl}>
          {title}
        </p>
      </div>
      <p className={styles.txt}>{article}</p>
    </div>
  );
};

export { BlogCard };
