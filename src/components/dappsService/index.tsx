import * as React from "react";
import { HeroSection, OtherServices, Blogs, OtherService } from "components";
import { DappsHero, NftIcon, SmartContractIcon } from "assets";
import { ServiceDetails } from "./details";
import { Routes } from "router";
import styles from "./styles.module.css";

const DappsServiceUI = () => {
  const services: OtherService[] = [
    {
      Icon: SmartContractIcon,
      text: "Smart Contract Development",
      link: Routes.contractService,
    },
    {
      Icon: NftIcon,
      text: "Blockchain for Non-Fungible Tokens",
      link: Routes.nftService,
    },
  ];
  return (
    <>
      <HeroSection
        type="other"
        title={
          <>
            Decentralised <br /> Applications Development
          </>
        }
        text="Develop and build your web applications on blockchain protocols"
        label="SERVICES"
        Image={DappsHero}
        className={styles.dapps}
      />
      <ServiceDetails />
      <OtherServices services={services} />
      <Blogs />
    </>
  );
};
export { DappsServiceUI };
