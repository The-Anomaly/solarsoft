import {
  CaretDown,
  DappsIcon,
  DappsIcon2,
  HamburgerMenu,
  Logo,
  MenuClose,
  NebulaMusicIcon,
  NebulaWalletIcon,
  NftIcon,
  ProdMania,
  SmartContractIcon,
  SolarsoftUniIcon,
  StudentPaddy,
  TSE,
} from "assets";
import { Button, Dropdown, DropdownItem } from "components";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [active, setActive] = React.useState("");
  const [showNav, setShowNav] = React.useState(false);
  const services: DropdownItem[] = [
    {
      Icon: SmartContractIcon,
      title: "Smart contracts",
      text: "Self executing code to make your business easier",
      action: () => navigate(Routes.contractService),
    },
    {
      Icon: NftIcon,
      title: "NFTs",
      text: "Create your collection. Design, mint and trade your NFTs",
      action: () => navigate(Routes.nftService),
    },
    {
      Icon: DappsIcon,
      title: "Dapps",
      text: "Develop and build your web applications on decentralised blockchain protocols",
      action: () => navigate(Routes.dappsService),
    },
  ];

  const products: DropdownItem[] = [
    {
      Icon: NebulaWalletIcon,
      title: "Nebula Wallet",
      text: "A cross chain NFT wallet",
      action: () => window.open("https://www.nebulawallet.io", "_blank"),
    },
    {
      Icon: SolarsoftUniIcon,
      title: "Solarsoft University",
      text: "Learn about blockchain technology and NFTs",
      action: () => {},
      comingSoon: true,
    },
    {
      Icon: NebulaMusicIcon,
      title: "Nebula Music",
      text: "A decentralised music streaming protocol",
      action: () => {},
      comingSoon: true,
    },
  ];

  const resources: DropdownItem[] = [
    {
      title: "Blog",
      text: "Stay updated with news and happenings",
      action: () => navigate(Routes.blog),
    },
    {
      title: "API Docs",
      text: "Well documented API to help you build better, faster.",
      action: () => window.open("https://docs.nebulawallet.io/", "_blank"),
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

  const closeNav = () => {
    setActive("");
    setShowNav(false);
  };

  return (
    <>
      <nav className={`${styles.navBg} ${showNav ? styles.openNav : ""}`}>
        <div className={`siteWrapper ${styles.nav}`}>
          <Link to={Routes.home}>
            <Logo className={styles.logo} />
          </Link>
          <div className={styles.navItems}>
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </div>
          <Button onClick={() => navigate(Routes.contactUs)} type="light" className={styles.btn}>
            Contact Us
          </Button>
        </div>
        <div className={styles.mobileNav}>
          <div className={styles.header}>
            <Link to={Routes.home}>
              <Logo className={styles.logo} />
            </Link>
            {!showNav ? (
              <HamburgerMenu onClick={() => setShowNav(true)} role="button" className={styles.menuBtn} />
            ) : (
              <MenuClose onClick={() => setShowNav(false)} role="button" className={styles.menuBtnClose} />
            )}
          </div>
          {showNav ? (
            <>
              <div className={styles.mobileNavItems}>
                <Link to={Routes.home} onClick={closeNav} className={styles.mobileNavItem}>
                  <p>Home</p>
                </Link>
                <div className={styles.mobileNavItem}>
                  <p>Products</p>{" "}
                  <CaretDown role="button" onClick={() => setActive(active === "products" ? "" : "products")} />
                  {active === "products" ? (
                    <div className={styles.dropdown}>
                      <a
                        href="https://www.nebulawallet.io"
                        target={"_blank"}
                        rel="noreferrer"
                        className={styles.dropdownItem}
                      >
                        <NebulaWalletIcon /> Nebula Wallet
                      </a>
                      <a href="" className={styles.dropdownItem}>
                        <SolarsoftUniIcon /> Solarsoft University <span className={styles.comingSoon}>Coming soon</span>
                      </a>
                      <a href="" className={styles.dropdownItem}>
                        <NebulaMusicIcon /> Nebula Music <span className={styles.comingSoon}>Coming soon</span>
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className={styles.mobileNavItem}>
                  <p>Services</p>{" "}
                  <CaretDown role="button" onClick={() => setActive(active === "services" ? "" : "services")} />
                  {active === "services" ? (
                    <div className={styles.dropdown}>
                      <Link onClick={closeNav} to={Routes.contractService} className={styles.dropdownItem}>
                        Smart Contracts
                      </Link>
                      <Link onClick={closeNav} to={Routes.nftService} className={styles.dropdownItem}>
                        Non-Fungible Tokens
                      </Link>
                      <Link onClick={closeNav} to={Routes.dappsService} className={styles.dropdownItem}>
                        Decentralized Apps
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className={styles.mobileNavItem}>
                  <p>Resources</p>
                  <CaretDown role="button" onClick={() => setActive(active === "resources" ? "" : "resources")} />
                  {active === "resources" ? (
                    <div className={styles.dropdown}>
                      <Link onClick={closeNav} to={Routes.blog} className={styles.dropdownItem}>
                        Blog
                      </Link>
                      <a
                        href="https://docs.nebulawallet.io/"
                        target={"_blank"}
                        rel="noreferrer"
                        className={styles.dropdownItem}
                      >
                        API Docs
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <Link onClick={closeNav} to={Routes.aboutUs} className={styles.mobileNavItem}>
                  <p>Company</p>
                </Link>
                <Link onClick={closeNav} to={Routes.contactUs} className={styles.mobileNavItem}>
                  <p>Contact Us</p>
                </Link>{" "}
              </div>
              <div className={styles.partners}>
                <ProdMania /> <StudentPaddy /> <TSE />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export { NavBar };
