import styles from "./styles.module.css";
import * as React from "react";
import { DappsIcon, EthereumLogo, NftIcon, SmartContractIcon, SolanaLogo } from "assets";
import { Button } from "components/button";

interface ServiceProp {
  Icon: React.ReactElement<any, any>
  title: string;
  text: string;
}

const Service: React.FC<ServiceProp> = ({ Icon, text, title }) => {
  return (
    <div className={styles.service}>
      {/* <Icon className={styles.serviceIcon} /> */}
      {Icon}
      <p className={styles.serviceTtl}>{title}</p>
      <p className={styles.serviceTxt}>{text}</p>
      <Button className={styles.serviceBtn} type="outline" onClick={() => {}}>
        Learn more
      </Button>
    </div>
  );
};

const Services = () => {
  const service: ServiceProp[] = [
    {
      Icon: <SmartContractIcon className={`${styles.serviceIcon} ${styles.smartcontract}`} />,
      title: "Smart Contracts",
      text: "Self-executing code to make your business easier",
    },
    {
      Icon: <NftIcon className={`${styles.serviceIcon} ${styles.nft}`} />,
      title: "NFTs",
      text: "Create your collection. Design, mint and trade your NFTs",
    },
    {
      Icon: <DappsIcon className={styles.serviceIcon} />,
      title: "Dapps",
      text: "Develop and build your web applications on decentralised blockchain protocols",
    },
  ];
  return (
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
      <div className={styles.partners}>
        <p className={styles.txt2}>We build on</p>
        <div>
          <EthereumLogo /> <SolanaLogo />
        </div>
      </div>
    </section>
  );
};
export { Services };
