import * as React from "react";
import { HeroSection } from "components";
import { Services } from "./services";
import { NFTCollection } from "./collections";
import { Blogs } from "./blogs";
import { API } from "./api";
import { FAQ } from "./faq";
import { ComingSoon } from "./comingSoon";
import { Discord } from "./discord";

const HomeUI = () => {
  return (
    <>
      <HeroSection
        type="landing"
        title="Blockchain infrastructure that powers businesses"
        text="We are confident you can better your business or brand by leveraging blockchain technology. We are here to
            help you with that."
      />
      <Services />
      <NFTCollection />
      <Blogs />
      <API />
      <FAQ />
      <ComingSoon />
      <Discord />
    </>
  );
};
export { HomeUI };
