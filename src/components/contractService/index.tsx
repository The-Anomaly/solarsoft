import * as React from "react";
import { HeroSection, OtherServices, Blogs, OtherService } from "components";
import { ContractHero, DappsIcon, NftIcon } from "assets";
import { ServiceDetails } from "./details";
import { Routes } from "router";

const SmartContractServiceUI = () => {
  const services: OtherService[] = [
    {
      Icon: NftIcon,
      text: "Blockchain for Non-Fungible Tokens",
      link: Routes.nftService,
    },
    {
      Icon: DappsIcon,
      text: "Decentralized Applications Development",
      link: Routes.dappsService,
    },
  ];
  return (
    <>
      <HeroSection
        type="other"
        title={<>Smart contracts development</>}
        text="Self-executing code to make your business easier and more efficient"
        label="SERVICES"
        Image={ContractHero}
      />
      <ServiceDetails />
      <OtherServices services={services} />
      <Blogs />
    </>
  );
};
export { SmartContractServiceUI };
