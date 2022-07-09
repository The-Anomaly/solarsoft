import {
  DappsIcon,
  Logo,
  NebulaMusicIcon,
  NebulaWalletIcon,
  NftIcon,
  SmartContractIcon,
  SolarsoftUniIcon,
} from "assets";
import { Button } from "components/button";
import { Dropdown, DropdownItem } from "components/dropdown";
import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

interface NavItemProps {
  link?: string;
  text: string;
  type: "dropdown" | "link";
  items?: DropdownItem[];
}

const NavItem: React.FC<NavItemProps> = ({ text, link, type, items }) => {
  return (
    <>
      {type === "link" && link ? (
        <Link to={link} className={styles.navItem}>
          {text}
        </Link>
      ) : (
        <span className={`${styles.navItem} ${styles.dropdown}`}>
          {text}
          {items ? <Dropdown className={styles.list} items={items} /> : ""}
        </span>
      )}
    </>
  );
};

const NavBar = () => {
  const services: DropdownItem[] = [
    {
      Icon: SmartContractIcon,
      title: "Smart contracts",
      text: "Self executing code to make your business easier",
    },
    {
      Icon: NftIcon,
      title: "NFTs",
      text: "Create your collection. Design, mint and trade your NFTs",
    },
    {
      Icon: DappsIcon,
      title: "Dapps",
      text: "Develop and build your web applications on decentralised blockchain protocols",
    },
  ];

  const products: DropdownItem[] = [
    {
      Icon: NebulaWalletIcon,
      title: "Nebula Wallet",
      text: "A cross chain NFT wallet",
    },
    {
      Icon: NebulaMusicIcon,
      title: "Nebula Music",
      text: "A decentralised music streaming protocol",
    },
    {
      Icon: SolarsoftUniIcon,
      title: "Solarsoft University",
      text: "Learn about blockchain technology and NFTs",
    },
  ];

  const resources: DropdownItem[] = [
    {
      title: "Blog",
      text: "Stay updated with news and happenings",
    },
    {
      title: "API Docs",
      text: "Well documented API to help you build better, faster.",
    },
  ];
  const navItems: NavItemProps[] = [
    {
      text: "Home",
      link: Routes.home,
      type: "link",
    },
    {
      text: "Products",
      link: Routes.home,
      type: "dropdown",
      items: products,
    },
    {
      text: "Services",
      type: "dropdown",
      items: services,
    },
    {
      text: "Resources",
      type: "dropdown",
      items: resources,
    },
    {
      text: "About Us",
      link: Routes.aboutUs,
      type: "link",
    },
  ];

  return (
    <>
      <nav className={styles.navBg}>
        <div className={`siteWrapper ${styles.nav}`}>
          <Logo className={styles.logo} />
          <div className={styles.navItems}>
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </div>
          <Button onClick={() => {}} type="light" className={styles.btn}>
            Contact Us
          </Button>
        </div>
      </nav>
    </>
  );
};

export { NavBar };
