import * as React from "react";
import { HeroSection, OtherServices, Blogs, OtherService } from "components";
import { DappsIcon2, NftHero, SmartContractIcon } from "assets";
import { ServiceDetails } from "./details";
import { Routes } from "router";

const NFTServiceUI = () => {
  const services: OtherService[] = [
    {
      Icon: SmartContractIcon,
      text: "Smart Contract Development",
      link: Routes.contractService,
    },
    {
      Icon: DappsIcon2,
      text: "Decentralized Applications Development",
      link: Routes.dappsService,
    },
  ];
  return (
    <>
      <HeroSection
        type="other"
        title={
          <>
            Blockchain for
            <br /> Non-fungible Tokens
          </>
        }
        text="Create your collection. Design, mint and trade your NFTs"
        label="SERVICES"
        Image={NftHero}
      />
      <ServiceDetails />
      <OtherServices services={services} />
      <Blogs />
    </>
  );
};
export { NFTServiceUI };
