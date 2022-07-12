import * as React from "react";
import { HeroSection, OtherServices, Blogs, OtherService } from "components";
import { ContractHero, DappsIcon2, NftIcon2 } from "assets";
import { ServiceDetails } from "./details";
import { Routes } from "router";

const SmartContractServiceUI = () => {
  const [mobile, setMobile] = React.useState(window.innerWidth <= 900 ? true : false);

  const checkWidth = () => {
    if (window.innerWidth <= 800) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  window.onresize = checkWidth;

  const services: OtherService[] = [
    {
      Icon: NftIcon2,
      text: mobile ? "Non-Fungible Tokens" : "Blockchain for Non-Fungible Tokens",
      link: Routes.nftService,
    },
    {
      Icon: DappsIcon2,
      text: mobile ? "Dapp Development" : "Decentralized Applications Development",
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
