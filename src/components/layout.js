import * as React from "react";
import PropTypes from "prop-types";
import "../styles/global.css";
import Header from "./Header.js";
import Menu from "./Menu/Menu";
import { LayoutContent } from "./layout.style.js";
import LanguageChangerBtn from "./Language/LanguageChangerBtn";

const Layout = ({ children }) => {
  const [language, setLang] = React.useState()

  return (
    <>
      <Header  lang={language} />
      <LanguageChangerBtn language ={language} setL={(l)=>setLang(l)}/>
      <Menu lang={language} />
      <LayoutContent >
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
