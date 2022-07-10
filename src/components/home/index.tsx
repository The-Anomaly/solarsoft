import styles from "./styles.module.css";
import * as React from "react";
import { HeroSection } from "components/heroSection";
import { Services } from "./services";
import { NFTCollection } from "./collections";
import { Blogs } from "./blogs";
import { API } from "./api";
import { FAQ } from "./faq";

const HomeUI = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <NFTCollection />
      <Blogs />
      <API />
      <FAQ />
    </>
  );
};
export { HomeUI };
