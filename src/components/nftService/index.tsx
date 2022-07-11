import * as React from "react";
import { HeroSection } from "components/heroSection";
import { NftHero } from "assets";
import { ServiceDetails } from "./details";
import { OtherServices } from "./otherServices";
import { Blogs } from "./blogs";

const NFTServiceUI = () => {
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
      <OtherServices />
      <Blogs />
    </>
  );
};
export { NFTServiceUI };
