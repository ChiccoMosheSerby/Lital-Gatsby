import * as React from "react"
import styled, { css } from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { removeDups } from "../utils"
import { theme } from "../styles/theme"

const PostsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  .post {
    width: calc(100%);
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    margin-left: 25px;
    margin-right: 25px;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    border: solid 1px ${theme.color2};
    .img {
      width: 30%;
      height: auto;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      .img {
        width: 100%;
        height: auto;
      }
    }

    .details {
      align-self: flex-start;
      /* width: 50%; */
      padding: 10px;
      a {
        text-decoration: none;
        color: black;
      }
    }
    .readMore {
      padding-top: 10px;
    }
    .shortText {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      /* white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; */
    }
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
`

const CategoriesBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  border-radius: 4px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const CategoryItemBar = styled.div`
  user-select: none;
  margin: 0;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.color1};
  color: #fff;
  flex: 1;
  height: 45px;
  border: solid 1px #fff;
  cursor: pointer;
  opacity: 0.8;
  font-weight: 600;
  transform: scale(0.8);
  transition: all 0.2s ease-in-out;
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${theme.color2opacity};
      color: ${theme.color2};
      opacity: 1;
      transform: scale(1);
    `}
`
export const postsQuery = graphql`
  query AllPostsQuary {
    posts: allMarkdownRemark(
      sort: {
        fields: [frontmatter___category, frontmatter___date]
        order: [ASC, ASC]
      }
    ) {
      nodes {
        html
        excerpt(format: PLAIN)
        frontmatter {
          title
          path
          date
          category
          author
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
`

const Posts = ({ data }) => {
  const [sortValue, setSortValue] = React.useState("")
  const posts = data?.posts?.nodes
  let categories = []
  const titles = posts.map(({ frontmatter }) => {
    categories.push(frontmatter.category)
    return frontmatter.title
  })
  categories = removeDups(categories)
  const email = data?.contact?.siteMetadata?.contact
  return (
    <Layout>
      <Seo title="Post" keywords={titles} />
      <h1>Shared Posts</h1>
      <CategoriesBar>
        <CategoryItemBar
          onClick={() => setSortValue(null)}
          selected={!sortValue}
        >
          Show All
        </CategoryItemBar>
        {categories.map((cat, idx) => {
          return (
            <CategoryItemBar
              selected={sortValue === cat}
              onClick={() => setSortValue(cat)}
            >
              {cat}
            </CategoryItemBar>
          )
        })}
      </CategoriesBar>
      <PostsContainer>
        {posts.map(({ frontmatter, id, excerpt }) => {
          const cat = frontmatter.category
          return (
            (!sortValue || sortValue === cat) && (
              <div key={id} className="post">
                <div className="details">
                  {cat}
                  <h3>{frontmatter.title}</h3>
                  <div>Category: {frontmatter.category}</div>
                  <small>
                    Posted by {frontmatter.author} on {frontmatter.date}
                  </small>
                  <div className="shortText">{excerpt}</div>
                  <div className="readMore">
                    <Link to={frontmatter.path} key={id}>
                      Read More
                    </Link>
                  </div>
                </div>
                {/* <img
                  className="img"
                  src="https://www.theredimediclinic.com/wp-content/uploads/2018/09/Holistic-Health.png"
                /> */}
                <div style={{ height: "200px", width: "auto" }}>
                  <Img fluid={frontmatter.thumb.childImageSharp.fluid} />
                </div>
                <hr />
              </div>
            )
          )
        })}
      </PostsContainer>
      Contact Us : {email}
    </Layout>
  )
}

export default Posts
