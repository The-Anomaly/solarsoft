import { BlogCard } from "components";
import * as React from "react";
import styles from "./styles.module.css";
import blogs from "../../../blogs.json";

const Blogs = () => {
  return (
    <section className={`siteWrapper ${styles.blogs}`}>
      <h4 className={styles.ttl}>Related blog posts</h4>
      <div className={styles.blogList}>
        <BlogCard {...(blogs[2])} />
        <BlogCard {...(blogs[3])} />
        <BlogCard {...(blogs[7])} />
      </div>
    </section>
  );
};

export { Blogs };
