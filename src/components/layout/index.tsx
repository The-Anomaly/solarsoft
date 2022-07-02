import * as React from "react";
import { Footer } from "./footer";
import { NavBar } from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export { Layout };
