import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image/withIEPolyfill";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const postByPost = graphql`
  query PostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        author
        category
        date
        path
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
const PostPage = ({ data }) => {
  console.log("data ", data);
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Seo title={frontmatter.title} keywords={frontmatter.title} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1>{frontmatter.title}</h1>
          <h4>
            Posted By: {frontmatter.author} on {frontmatter.date}
          </h4>
        </div>

        <Link to="/posts">Back To Posts All Post</Link>
      </div>
      <Img fluid={frontmatter.featuredImg.childImageSharp.fluid} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div style={{ width: "150px", height: "auto" }}>
        <Img fluid={frontmatter.thumb.childImageSharp.fluid} />
      </div>
      <Link to="/posts">Back To Posts All Post</Link>
    </Layout>
  );
};

export default PostPage;
