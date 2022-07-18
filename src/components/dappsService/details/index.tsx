import { ArrowRight, NebulaLogo, nfts } from "assets";
import { Button } from "components";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

const ServiceDetails = () => {
  const navigate = useNavigate();
  return (
    <section className={`siteWrapper ${styles.wrapper}`}>
      <h2 className={styles.ttl}>Decentralized Applications (dapps)</h2>
      <div className={styles.info}>
        <p className={styles.bottom1}>
          Dapps (decentralized application) are apps that are free from the control and intrusion of a single authority.
          They run on the blockchain or peer-to-peer (P2P) network of computers instead of relying on a single computer.
        </p>
        <p className={styles.bottom1}>
          At Solarsoft, we decompose problem statements and design working solutions before we proceed to develop
          applications. These apps are built on top of a decentralized blockchain protocol.
        </p>
        <p className={styles.bottom1}>We use an agnostic process to develop dapps;</p>
        <ul className={styles.list}>
          <li>Problem statement</li>
          <li>Market & user research</li>
          <li>Documentation (PRD & FRD) - Goals, features, and capabilities </li>
          <li>Design & prototyping Sprint </li>
          <li>Development sprint & Integration</li>
          <li>Optimization, quality assurance, testing , execution & evaluation</li>
        </ul>
        <p className={styles.bottom2}>
          We apply this process internally and is what was employed in the development of our first product- Nebula
          wallet
        </p>
        <h3 className={styles.subTtl}>The Problem</h3>
        <p className={styles.bottom3}>
          In the last two years, there has been a boom in the NFT space which has caused an influx of new users into Web
          3.0. Particularly the NFT market trading space. Products like wallets have been created to help users mint,
          buy and sell NFTs. The problem with most of these products is they weren't built for NFTs. A lot of them were
          initially crypto wallets. This has led to issues like unfriendly user experiences, creating multiple wallets
          to own and send NFTs from different chains and low security.
        </p>
        <h3 className={styles.subTtl}>The Solution</h3>
        <p className={styles.bottom1}>
          Solarsoft is building an NFT wallet. The wallet will be functional, cross-chain and incredibly easy to use. It
          will be the first multi-chain, <b>cross-chain NFT wallet</b> of its kind that allows you send multiple NFTs
          across multple blockchains in one transaction.
        </p>
        <div className={styles.shareNft}>
          <div>
            <p>Store, Send & Share your NFTs</p>
            <NebulaLogo />
          </div>
          <img src={nfts} alt="" />
        </div>
        <Button
          type="transparent"
          onClick={() => window.open("https://www.nebulawallet.io", "_blank")}
          Icon={ArrowRight}
          className={styles.exploreBtn}
        >
          Explore Nebula Wallet
        </Button>
        <div className={styles.contact}>
          <p>Start a conversation with us</p>
          <Button type="light" onClick={() => navigate(Routes.contactUs)}>
            CONTACT US
          </Button>
        </div>
      </div>
    </section>
  );
};

export { ServiceDetails };
