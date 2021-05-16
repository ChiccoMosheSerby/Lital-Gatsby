const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: node.frontmatter.path,
      component: path.resolve("./src/templates/PostPage.js"),
      context: { path: node.frontmatter.path },
    })
  })
}
