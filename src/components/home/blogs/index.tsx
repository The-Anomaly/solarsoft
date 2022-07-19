import { ArrowRight } from "assets";
import { Button, BlogCard } from "components";
import * as React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { Routes } from "router";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <section className={`siteWrapper ${styles.blogs}`}>
      <h4 className={styles.ttl}>Stay up to date with the latest news and insights</h4>
      <div className={styles.blogList}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Button type={"transparent"} onClick={() => navigate(Routes.blog)} Icon={ArrowRight} className={styles.btn}>
        Read more blog posts
      </Button>
    </section>
  );
};

export { Blogs };
