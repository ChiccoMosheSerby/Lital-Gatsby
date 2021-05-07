import React from "react";
import { Link } from "gatsby";
import { Nav } from "./style";

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
            Home
          </LinkRoute>
        </li>
        <li>
          <LinkRoute path={"/about"} to="/about/">
            About
          </LinkRoute>
        </li>
        <li>
          <LinkRoute path={"/services"} to="/services/">
            Services
          </LinkRoute>
        </li>
        <li>
          <LinkRoute path={"/contact"} to="/contact/">
            Contact
          </LinkRoute>
        </li>
        <li>
          <LinkRoute path={"/posts"} to="/posts/">
            Posts
          </LinkRoute>
        </li>
      </ul>
    </Nav>
  );
};

export default Menu;
