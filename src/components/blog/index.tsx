import { blogImage } from "assets";
import { BlogCard } from "components/generalComponents";
import * as React from "react";
import styles from "./styles.module.css";

const MainBlog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.imgSec}>
        <img className={styles.img} src={blogImage} alt="" />
      </div>
      <div className={styles.txtSec}>
        <p className={styles.label}>NFTs</p>
        <p className={styles.blogTtl}>9 NFT Marketplaces You Should Explore</p>
        <p className={styles.date}>26 May 2022</p>
        <p className={styles.blogTxt}>
          Several things are imperative when it comes to NFTs, one of those being a promising community. NFT
          marketplaces have leveraged the power of communities in building their platforms....
        </p>
      </div>
    </div>
  );
};

const BlogUI = () => {
  return (
    <section className={`siteWrapper ${styles.blogWrapper}`}>
      <h1 className={styles.ttl}>Blog</h1>
      <MainBlog />
      <div className={styles.blogList}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export { BlogUI };
