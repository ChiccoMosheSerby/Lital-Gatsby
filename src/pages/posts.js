import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Posts = () => {
  const postsQuery = useStaticQuery(graphql`
    query PostIndexQuary {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              author
              date
              path
              title
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo title="Post" />
      <h1>Shared Posts</h1>
      {postsQuery.allMarkdownRemark.edges.map((post) => {
        const postData = post.node.frontmatter;
        return (
          <div key={post.node.id}>
            <h3>{postData.title}</h3>
            <small>
              Posted by {postData.author} on {postData.date}
            </small>
            <div>
              <Link to={postData.path}>Read More</Link>
            </div>
            <hr />
          </div>
        );
      })}
    </Layout>
  );
};

export default Posts;
