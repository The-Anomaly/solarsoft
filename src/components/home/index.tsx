import styles from "./styles.module.css";
import * as React from "react";
import { HeroSection } from "components/heroSection";
import { Services } from "./services";

const HomeUI = () => {
  return (
    <>
      <HeroSection />
      <Services />
    </>
  );
};
export { HomeUI };
