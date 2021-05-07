import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/global.css";
import Header from "./Header.js";
import Menu from "./Menu/Menu";
import { theme } from "../styles/theme";

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: theme.maxWidthDesktop,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        {/* <footer
          style={{
            position: 'absolute',
            bottom: '0'
          }}
        >
          Copyright 2021 Chicco
        </footer> */}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
