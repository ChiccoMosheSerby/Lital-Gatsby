import * as React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
// import Img from "gatsby-image/withIEPolyfill";
import { theme } from "../styles/theme";
import styled from "styled-components";
import { useDeviceDetect } from "../hooks/useDeviceDetect";
import "./headerStyle.scss";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.isMobile ? "80px" : "120px")};
  width: ${(props) => (props.isMobile ? "80px" : "120px")};
  background-color: #ffffffd0;
  border-radius: 5000px;
  border: solid 1px ${theme.color2opacity};

  img {
    height: ${(props) => (props.isMobile ? "50px" : "70px")};
    width: ${(props) => (props.isMobile ? "50px" : "70px")};
  }
`;

const Header = ({ lang }) => {
  return (
    <StaticQuery
      query={graphql`
        query HeaderQuary {
          file(relativePath: { eq: "logo.png" }) {
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
  const { isMobile } = useDeviceDetect();

  return (
    <div className="cont">
      <header
        id="#header"
        style={{
          // position: "relative",
          // backgroundColor: '#1162ff',
          // backgroundColor: theme.color1,
          // backgroundImage:'url(https://kareneren.files.wordpress.com/2015/02/tumblr_header-animation_transparent_final1.gif)',
          // backgroundPosition:'right center',
          // backgroundSize:'100% auto',
          // backgroundRepeat:'no-repeat'
        }}
      >
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <Container>
          <ImageContainer isMobile={isMobile}>
            <img src="../images/logo.png" />
          </ImageContainer>

          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              color: `${theme.color2}`,
            }}
          >
            <h1
              style={{
                margin: "auto",
                textAlign: "center",
                color: '#9097fe',
              }}
            >
              {lang === "he"
                // ? data?.title?.siteMetadata?.title
                // : data?.title?.siteMetadata?.hebTitle
                ?'ליטל':  'Lital'  
                }
            </h1>
          </Link>
        </Container>
      </header>
    </div>
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
