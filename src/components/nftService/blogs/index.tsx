import { ArrowRight } from "assets";
import { BlogCard } from "components/blogCard";
import { Button } from "components/button";
import * as React from "react";
import styles from "./styles.module.css";

const Blogs = () => {
  return (
    <section className={`siteWrapper ${styles.blogs}`}>
      <h4 className={styles.ttl}>Related blog posts</h4>
      <div className={styles.blogList}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export { Blogs };
