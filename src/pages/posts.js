import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const postsQuery = graphql`
  query AllPostsQuary {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
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
  }
`;

const Posts = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes;
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
    </Layout>
  );
};

export default Posts;
