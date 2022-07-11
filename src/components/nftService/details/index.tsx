import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";

const ServiceDetails = () => {
  return (
    <section className={`siteWrapper ${styles.wrapper}`}>
      <h2 className={styles.ttl}>Non-Fungible Tokens (NFTs)</h2>
      <div className={styles.info}>
        <p className={styles.bottom1}>
          NFTs (Non-fungible tokens) are unique and irreplaceable digital assets. Unlike cryptocurrency(ETH, SOL, USDT),
          NFTs can’t be exchanged. These assets range from online-only assets like digital art or even event tickets to
          real-life assets like real estate.
        </p>
        <p className={styles.bottom1}>
          With the help of smart contracts, real-world assets can be tokenized and verified on the blockchain. Allowing
          token models like play-to-earn, stream-to-earn, and learn-to-earn to exist.
        </p>
        <p className={styles.bottom2}>
          NFTs have blown up over the past few years, and the tokens still have a long future ahead. As long as it is
          unique, can be stored digitally and holds value. It can be an NFT.
        </p>
        <p className={styles.bottom3}>
          Interestingly, NFTs have many other potential use cases than the applications in art that we see today. As an
          example; here’s a theoretical application of NFTs in governance.
        </p>
        <h3 className={styles.subTtl}>The Problem</h3>
        <p className={styles.bottom3}>
          The traditional voting system takes a lot of work to complete voting correctly. In several countries, there
          are transparency and corruption issues in voting systems. These problems include human error, complex
          processes, inconsistent data and unnecessary third parties.
        </p>
        <h3 className={styles.subTtl}>The Solution</h3>
        <p className={styles.bottom2}>
          Implementing a blockchain system using non-fungible tokens makes the process more accurate, efficient and
          straightforward. Voters can be tallied by the system immediately using the voter’s unique identifier. NFTs can
          represent immutable proof of identity, enabling authenticating voter identities and votes.
        </p>
        <p className={styles.bottom1}>
          The system ensures that no duplicate votes are cast, and no fraud occurs. The voting records will be permanent
          and updated in live time. Everyone will have the same data at every point in time, and there will be a
          permanent record of the voting process. This system can apply to organisational voting too.
        </p>
        <p className={styles.bottom2}> Elections would be free and fair.</p>
        <p className={styles.largeTxt}>
          Heroes of Kronos, Krypto Alienz and Alta are some of the in-house NFT collections we have worked on.
        </p>
        <p className={styles.bottom1}> Krypto Alienz is an NFT collection that consists of 3,333 Alienz.</p>
        <p className={styles.bottom2}>
          We worked on the design, product description, NFT custom smart contract, branding asset designs, metadata,
          website development and gamified attributes for this collection.
        </p>
        <p className={styles.bottom1}>
          At Solarsoft, we offer our services to artists, brands and potential collaborators. We can bring your unique
          digital ideas to life by offering you; design, minting and consultation services.
        </p>
        <p className={styles.bottom1}>
          We can work on your collection from scratch, write the smart contract and mint it, or offer consultation
          services.
        </p>
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
