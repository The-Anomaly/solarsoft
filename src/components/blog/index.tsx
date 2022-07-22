import { BlogCard } from "components";
import * as React from "react";
import styles from "./styles.module.css";
import blogs from "../../blogs.json";

const MainBlog = ({ title, article, image, category, date, url }) => {
  return (
    <div className={styles.blog} onClick={() => window.open(url, "_blank")} role="button">
      <div className={styles.imgSec}>
        <img className={styles.img} src={image} alt="" />
      </div>
      <div className={styles.txtSec}>
        <p className={styles.label}>{category}</p>
        <p className={styles.blogTtl}>{title}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.blogTxt}>{article}</p>
      </div>
    </div>
  );
};

const BlogUI = () => {
  return (
    <section className={`siteWrapper ${styles.blogWrapper}`}>
      <h1 className={styles.ttl}>Blog</h1>
      <MainBlog {...blogs[0]} />
      <div className={styles.blogList}>
        {blogs.slice(1, blogs.length - 1).map((elem, idx) => (
          <BlogCard key={idx} {...elem} />
        ))}
      </div>
    </section>
  );
};

export { BlogUI };
