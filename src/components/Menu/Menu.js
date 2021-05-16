import React, { useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled, { css } from "styled-components";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import ExtensionRoundedIcon from "@material-ui/icons/ExtensionRounded";
import MoreRoundedIcon from "@material-ui/icons/MoreRounded";
import { Nav } from "./style";
import { he, en } from "../../../static/content/data.json";
import { useNavIcons } from "../../../static/icons/navigatinIcons";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  svg {
    ${({ rotate }) =>
      rotate &&
      css`
        transform: rotate(180deg);
      `}
  }
`;
const Text = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;
const LinkRoute = ({ children, ...props }) => {
  // console.log('window.location.pathname',window.location.pathname);
  // console.log('props.path',props?.path);

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  let linkProps = {
    ...props,
    activeClassName: "active",
  };

  linkProps = {
    ...props,
    className: currentPath === props?.path ? "active" : "",
  };

  return <Link {...linkProps}>{children}</Link>;
};

const Menu = ({lang = 'en'}) => {
  const icons = useNavIcons();
  let nav = lang == "he" ? he.navigation : en.navigation;

  // const lang =
  //   typeof window !== "undefined"
  //     ? JSON.parse(localStorage.getItem("lang"))
  //     : "en";

  useEffect(() => {
    nav = lang == "he" ? he.navigation : en.navigation;
  },[lang]);
  console.log(nav);
  const renderNav = () =>
    nav.map((navItem, index) => {
      return (
        <li key={navItem.id}>
          <LinkRoute path={navItem.path} to={navItem.path} exact>
            <Container>
              {/* <HomeRoundedIcon /> */}
              {icons[index]}
              <Text>{navItem.text}</Text>
            </Container>
          </LinkRoute>
        </li>
      );
    });
  return (
    <Nav lang={lang}>
      <ul>
        {/* <li>
          <LinkRoute path={"/"} to="/" exact>
            <Container>
              <HomeRoundedIcon />
              <Text>Home</Text>
            </Container>
          </LinkRoute>
        </li>
        <li>
          <LinkRoute path={"/about/"} to="/about/">
            <Container>
              <InfoRoundedIcon />
              <Text>About</Text>
            </Container>
          </LinkRoute>
        </li>
        <li>
          <LinkRoute path={"/services/"} to="/services/">
            <Container rotate>
              <MoreRoundedIcon />
              <Text>Services</Text>
            </Container>
          </LinkRoute>
        </li>
        <li>
          <LinkRoute path={"/contact/"} to="/contact/">
            <Container>
              <ContactMailRoundedIcon />
              <Text>Contacnt</Text>
            </Container>
          </LinkRoute>
        </li>
        <li>
          <LinkRoute path={"/posts/"} to="/posts/">
            <Container>
              <ExtensionRoundedIcon />
              <Text>Posts</Text>
            </Container>
          </LinkRoute>
        </li> */}
        {renderNav()}
      </ul>
    </Nav>
  );
};

export default Menu;
