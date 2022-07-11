import { DappsIcon, SmartContractIcon } from "assets";
import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

const OtherServices = () => {
  const services = [
    {
      Icon: SmartContractIcon,
      text: "Smart Contract Development",
      link: Routes.contractService,
    },
    {
      Icon: DappsIcon,
      text: "Decentralized Applications Development",
      link: Routes.dappsService,
    },
  ];
  return (
    <section className={`siteWrapper ${styles.others}`}>
      <h4 className={styles.ttl}>Other Services</h4>
      <div className={styles.list}>
        {services.map((item, index) => (
          <Link key={index} to={item.link}>
            <div className={styles.service}>
              <item.Icon />
              <p>{item.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export { OtherServices };
