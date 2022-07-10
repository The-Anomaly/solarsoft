import styles from "./styles.module.css";
import * as React from "react";
import { HeroSection } from "components/heroSection";
import { Services } from "./services";
import { NFTCollection } from "./collections";

const HomeUI = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <NFTCollection />
    </>
  );
};
export { HomeUI };
