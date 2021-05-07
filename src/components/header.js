import * as React from "react";
import PropTypes from "prop-types";
import { Link, graphql, useStaticQuery, StaticQuery } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import { theme } from "../styles/theme";
import styled from "styled-components";

const StyledImg = styled(Img)`
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

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query HeaderQuary {
          file(relativePath: { eq: "logoCard.png" }) {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 660, height: 120) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title: site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => <HeaderWithData data={data} />}
    />
  );
};

const HeaderWithData = ({ data }) => {
  return (
    <header
      style={{
        background: theme.color1,
        position: "relative",
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
            {data?.title?.siteMetadata?.title}

            <Img
              objectFit="contain"
              objectPosition="50% 50%"
              alt=""
              fixed={data?.file?.childImageSharp?.fixed}
            />
          </Link>
        </h1>
      </div>
    </header>
  );
};
export default Header;
            {/* <Img fluid={data?.file?.childImageSharp?.fluid} /> */}
