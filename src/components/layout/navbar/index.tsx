import { Logo } from "assets";
import { Button } from "components/button";
import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

interface NavItemProps {
  link?: string;
  text: string;
  type: "dropdown" | "link";
}

const NavItem: React.FC<NavItemProps> = ({ text, link, type }) => {
  return (
    <>
      {type === "link" && link ? (
        <Link to={link} className={styles.navItem}>
          {text}
        </Link>
      ) : (
        <span className={`${styles.navItem} ${styles.dropdown}`}>{text}</span>
      )}
    </>
  );
};

const NavBar = () => {
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
    },
    {
      text: "Services",
      link: Routes.services,
      type: "link",
    },
    {
      text: "Resources",
      link: Routes.resources,
      type: "link",
    },
    {
      text: "About Us",
      link: Routes.aboutUs,
      type: "link",
    },
  ];
  return (
    <nav className={styles.navBg}>
      <div className={styles.nav}>
        <Logo className={styles.logo} />
        <div className={styles.navItems}>
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
        <Button onClick={() => {}} type="light" className={styles.btn} >Contact Us</Button>
      </div>
    </nav>
  );
};

export { NavBar };
