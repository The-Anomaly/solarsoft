import styles from "./styles.module.css";
import * as React from "react";
import {
  AlchemyLogo,
  ChainLinkLogo,
  DappsIcon2,
  EthereumLogo,
  MagicEdenLogo,
  NftIcon2,
  SmartContractIcon2,
  SolanaLogo,
} from "assets";
import { Button } from "components";
import { useNavigate } from "react-router-dom";
import { Routes } from "router";

interface ServiceProp {
  Icon: React.ReactElement<any, any>;
  title: string;
  text: string;
  action: () => void;
}

const Service: React.FC<ServiceProp> = ({ Icon, text, title, action }) => {
  return (
    <div className={styles.service}>
      {/* <Icon className={styles.serviceIcon} /> */}
      {Icon}
      <p className={styles.serviceTtl}>{title}</p>
      <p className={styles.serviceTxt}>{text}</p>
      <Button className={styles.serviceBtn} type="outline" onClick={action}>
        Learn more
      </Button>
    </div>
  );
};

const Services = () => {
  const navigate = useNavigate();
  const service: ServiceProp[] = [
    {
      Icon: <SmartContractIcon2 className={styles.serviceIcon} />,
      title: "Smart Contracts",
      text: "Self-executing code to make your business easier",
      action: () => navigate(Routes.contractService),
    },
    {
      Icon: <NftIcon2 className={styles.serviceIcon} />,
      title: "NFTs",
      text: "Create your collection. Design, mint and trade your NFTs",
      action: () => navigate(Routes.nftService),
    },
    {
      Icon: <DappsIcon2 className={styles.serviceIcon} />,
      title: "Dapps",
      text: "Develop and build your web applications on decentralised blockchain protocols",
      action: () => navigate(Routes.dappsService),
    },
  ];
  return (
    <>
      <section className={`siteWrapper ${styles.services}`}>
        <h2 className={styles.ttl}>Innovative. Forward-thinking</h2>
        <p className={styles.txt1}>
          We partner with innovative and forward thinking businesses, leveraging blockchain technology to build valuable
          products that solve real world problems
        </p>
        <div className={styles.serviceList}>
          {service.map((item, index) => (
            <Service {...item} key={index} />
          ))}
        </div>
      </section>
      <section className={styles.partners}>
        <p className={styles.txt2}>We have built with</p>
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            <div className={styles.slide}>
              <EthereumLogo className={styles.logo1} />
            </div>
            <div className={styles.slide}>
              <AlchemyLogo className={styles.logo2} />
            </div>
            <div className={styles.slide}>
              <SolanaLogo className={styles.logo3} />
            </div>
            <div className={styles.slide}>
              <MagicEdenLogo className={styles.logo4} />
            </div>
            <div className={styles.slide}>
              <ChainLinkLogo className={styles.logo5} />
            </div>
            <div className={styles.slide}>
              <EthereumLogo className={styles.logo1} />
            </div>
            <div className={styles.slide}>
              <AlchemyLogo className={styles.logo2} />
            </div>
            <div className={styles.slide}>
              <SolanaLogo className={styles.logo3} />
            </div>
            <div className={styles.slide}>
              <MagicEdenLogo className={styles.logo4} />
            </div>
            <div className={styles.slide}>
              <ChainLinkLogo className={styles.logo5} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export { Services };
