import * as React from "react";
import PropTypes from "prop-types";
import "../styles/global.css";
import Header from "./Header.js";
import Menu from "./Menu/Menu";
import { LayoutContent } from "./layout.style.js";
import LanguageChangerBtn from "./Language/LanguageChangerBtn";
import { useDeviceDetect } from "../hooks/useDeviceDetect";
import "./layoutFooterStyle.scss";
const Layout = ({ children }) => {
  const [language, setLang] = React.useState();
  const { isMobile } = useDeviceDetect();
  return (
    <>
      <Header lang={language} />
      <LanguageChangerBtn language={language} setL={(l) => setLang(l)} />
      <Menu lang={language} />
      <LayoutContent>
        <main
          style={{
            marginBottom: "10px",
          }}
        >
          {children}
        </main>
        {!isMobile && (
          <div className="contfoot">
            <footer id="#footer">
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
            </footer>
          </div>
        )}
      </LayoutContent>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
