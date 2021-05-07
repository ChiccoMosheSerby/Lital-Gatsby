import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";

export const postByID = graphql`
query GetPostByID ($path: String!){
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    id
    html
    frontmatter {
      author
      date
      path
      title
    }
  }
}
`

const PostPage = ({data}) => {

  // const data = useStaticQuery(graphql`
  //   query GetPostByID ($path: String!){
  //     markdownRemark(frontmatter: { path: { eq: $path } }) {
  //       id
  //       html
  //       frontmatter {
  //         author
  //         date
  //         path
  //         title
  //       }
  //     }
  //   }
  // `);
  console.log("data ", data);
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <Link to="/posts">Back</Link>
      <hr />
      <h1>{frontmatter.title}</h1>
      <h1>
        Posted By: {frontmatter.author} on {frontmatter.date}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

// export const data = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       id
//       frontmatter {
//         path
//         title
//         author
//         date
//       }
//     }
//   }
// `;

export default PostPage;
