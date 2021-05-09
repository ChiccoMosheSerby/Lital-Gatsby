import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import ExtensionRoundedIcon from "@material-ui/icons/ExtensionRounded";
import MoreRoundedIcon from "@material-ui/icons/MoreRounded";
import { Nav } from "./style";

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
  @media (max-width:500px){
    display:none;
  }
`;
const LinkRoute = ({ children, ...props }) => {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  let linkProps = {
    ...props,
    activeClassName: "active",
  };
  linkProps =
    currentPath !== props.path
      ? { ...linkProps }
      : {
          ...linkProps,
          className: currentPath === props.path && "active",
        };

  return <Link {...linkProps}>{children}</Link>;
};

const Menu = () => {
  return (
    <Nav>
      <ul>
        <li>
          <LinkRoute path={"/"} to="/">
            <Container>
              <HomeRoundedIcon />
              <Text>Home</Text>
            </Container>
          </LinkRoute>
        </li>
        <li>
          <LinkRoute path={"/about"} to="/about/">
            <Container>
              <InfoRoundedIcon />
              <Text>About</Text>
            </Container>
          </LinkRoute>
        </li>
        <li>
          <LinkRoute path={"/services"} to="/services/">
            <Container rotate>
              <MoreRoundedIcon />
              <Text>Services</Text>
            </Container>
          </LinkRoute>
        </li>
        <li>
          <LinkRoute path={"/contact"} to="/contact/">
            <Container>
              <ContactMailRoundedIcon />
              <Text>Contacnt</Text>
            </Container>
          </LinkRoute>
        </li>
        <li>
          <LinkRoute path={"/posts"} to="/posts/">
            <Container>
              <ExtensionRoundedIcon />
              <Text>Posts</Text>
            </Container>
          </LinkRoute>
        </li>
      </ul>
    </Nav>
  );
};

export default Menu;
