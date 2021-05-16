import * as React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
// import Img from "gatsby-image/withIEPolyfill";
import { theme } from "../styles/theme";
import styled from "styled-components";

const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: auto;
  margin: auto;
`;

const Header = ({ lang }) => {
  return (
    <StaticQuery
      query={graphql`
        query HeaderQuary {
          file(relativePath: { eq: "400PngdpiLogoCropped.png" }) {
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
              hebTitle
            }
          }
        }
      `}
      render={(data) => <HeaderWithData lang={lang} data={data} />}
    />
  );
};

const HeaderWithData = ({ lang, data }) => {
  return (
    <>
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
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <h1 style={{ margin: "auto", textAlign: "center" }}>
              {lang === "en"
                ? data?.title?.siteMetadata?.title
                : data?.title?.siteMetadata?.hebTitle}
            </h1>

            {/* <StyledImg alt ={data?.file?.childImageSharp.alt} src={data?.file?.childImageSharp?.fluid.src} /> */}
            <StyledImg fluid={data?.file?.childImageSharp?.fluid} />
          </Link>
        </div>
      </header>
      {/* <Img fluid={data?.file?.childImageSharp?.fluid} /> */}
    </>
  );
};
export default Header;
// {
/* <Img fluid={data?.file?.childImageSharp?.fluid} /> */
// }

// <Img
//   objectFit="contain"
//   objectPosition="50% 50%"
//   alt=""
//   fixed={data?.file?.childImageSharp?.fixed}
// />
