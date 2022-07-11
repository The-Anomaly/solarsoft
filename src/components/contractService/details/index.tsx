import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";

const ServiceDetails = () => {
  return (
    <section className={`siteWrapper ${styles.wrapper}`}>
      <h2 className={styles.ttl}>Smart Contracts</h2>
      <div className={styles.info}>
        <p className={styles.bottom1}>
          Smart Contracts are computer programs that live on the blockchain. They digitise the terms of a traditional
          agreement. It is made up of self-executing code that carries out a set of instructions. The instructions are
          then verified on the blockchain. They are trustless, autonomous and transparent.
        </p>
        <p className={styles.largeTxt}>
          Smart contracts are one of the most important parts of blockchain-based ecosystems
        </p>
        <p className={styles.bottom1}>
          The vast potential application of smart contracts empowers us with the opportunity to introduce radical change
          in how business and trade, are done. By eliminating the need for third-party intermediaries, transactions can
          be completed, with superb speed increasing efficiency and reducing costs in both time and money.
        </p>
        <p className={styles.bottom3}>
          Beyond the application of smart contracts in finance—decentralised finance, smart contracts can be applied in
          many other ways. Here’s an example...
        </p>
        <h3 className={styles.subTtl}>The Problem</h3>
        <p className={styles.bottom3}>
          As the internet continues to innovate and grow, so does the pool of shared information. With contributors
          never being incentivized financially prior to the emergence of Web 3.0. Smart contracts have created an
          opportunity to provide incentives to both contributors and those who seek knowledge on the internet today.
        </p>
        <h3 className={styles.subTtl}>The Solution</h3>
        <p className={styles.bottom1}>
          Unlike web 2.0, web 3.0 protocols are able to have native tokens that are used as incentives for its user
          through smart contracts.
        </p>
        <p className={styles.bottom3}>
          In partnership with Student Paddy, Solarsoft is building a decentralised protocol that encourages knowledge
          sharing and participation by incentivising contributors through learn-to-earn tokens.
        </p>
        <p className={styles.bottom1}>
          Some of our other projects and collaborations include; smart contract development for Nebula wallet by
          Solarsoft, smart contract and minting services for the Celestial Void NFT by TSE.
        </p>
        <p className={styles.bottom1}>
          we elicit and validate clients use cases to see how the implementation of smart contracts can help proceed to
          provide effective asset tokenisation via smart contracts.
        </p>
        <p className={styles.bottom1}>These use cases include NFT custom smart contracts, tokens, DAOs and Dapps.</p>
        <div className={styles.contact}>
          <p>Start a conversation with us</p>
          <Button type="light" onClick={() => {}}>
            CONTACT US
          </Button>
        </div>
      </div>
    </section>
  );
};

export { ServiceDetails };
