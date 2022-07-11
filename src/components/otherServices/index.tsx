import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export interface OtherService {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  link: string;
}

interface OtherServicesProps {
  services: OtherService[];
}

const OtherServices: React.FC<OtherServicesProps> = ({ services }) => {
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
