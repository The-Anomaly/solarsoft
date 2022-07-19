import * as React from "react";
import styles from "./styles.module.css";

const BlogCard = ({ title, article, image, category }) => {
  return (
    <div className={styles.blog}>
      <div className={styles.imgSec}>
        <img className={styles.img} src={image} alt="blog" />
      </div>
      <div className={styles.ttlSec}>
        <p className={styles.label}>{category}</p>
        <p className={styles.ttl}>{title}</p>
      </div>
      <p className={styles.txt}>{article}</p>
    </div>
  );
};

export { BlogCard };
