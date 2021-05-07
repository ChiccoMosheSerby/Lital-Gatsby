import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import LogoCard from '../images/logoCard.png'
import { theme } from "../styles/theme";
import styled from "styled-components";

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  height: 60px;
  width: auto;
`;
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: theme.color1,
      position: 'relative',

    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: theme.maxWidthDesktop,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          {/* <Img src = {LogoCard} /> */}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
