import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const postsQuery = graphql`
  query AllPostsQuary {
    posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        frontmatter {
          title
          path
          date
          category
          author
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;

const Posts = ({ data }) => {
  const posts = data?.posts?.nodes;
  const email = data?.contact?.siteMetadata?.contact;
  // const postsQuery = useStaticQuery(graphql`
  //   query AllPostsQuary {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             author
  //             date
  //             path
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <Layout>
      <Seo title="Post" />
      <h1>Shared Posts</h1>
      {posts.map(({ frontmatter, id }) => {
        return (
          <div key={id}>
            <h3>{frontmatter.title}</h3>
            <div>Category: {frontmatter.category}</div>
            <small>
              Posted by {frontmatter.author} on {frontmatter.date}
            </small>
            <div>
              <Link to={frontmatter.path} key={id}>
                Read More...
              </Link>
            </div>
            <hr />
          </div>
        );
      })}
      Contact Us : {email}
    </Layout>
  );
};

export default Posts;
