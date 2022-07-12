import * as React from "react";
import { HeroSection, OtherServices, Blogs, OtherService } from "components";
import { DappsIcon2, NftHero, SmartContractIcon2 } from "assets";
import { ServiceDetails } from "./details";
import { Routes } from "router";

const NFTServiceUI = () => {
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
      Icon: SmartContractIcon2,
      text: mobile ? "Smart Contract" : "Smart Contract Development",
      link: Routes.contractService,
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
