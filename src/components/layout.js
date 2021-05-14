import * as React from "react";
import PropTypes from "prop-types";
import "../styles/global.css";
import Header from "./Header.js";
import Menu from "./Menu/Menu";
import { theme } from "../styles/theme";
import { makeStyles } from "@material-ui/styles";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";
import { LayoutContent } from "./layout.style.js";

const useStyles = makeStyles({
  iconStyle: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 100,
    background: "#fff",
    borderRadius: 5000,
    color: theme.color1,
    cursor: "pointer",
    boxShadow: "0px 0px 7px 2px rgba(0,0,0,0.22)",
    "&:hover": {
      boxShadow: "0px 0px 7px 5px rgba(0,0,0,0.22)",
    },
  },
});

const Layout = ({ children }) => {
  const styles = useStyles();

  return (
    <>
      <LanguageRoundedIcon className={styles.iconStyle} />
      <Header />
      <Menu />
      <LayoutContent>
        <main>{children}</main>
        {/* <footer
          style={{
            position: 'absolute',
            bottom: '0'
          }}
        >
          Copyright 2021 Chicco
        </footer> */}
      </LayoutContent>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
