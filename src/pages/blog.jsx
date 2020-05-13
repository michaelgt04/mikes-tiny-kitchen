import React from "react"
import { navigate, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = props => {
  const { data } = props

  const pages = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <h1 className="title-font">Blog</h1>
      <div className="flex flex-wrap mb-4">
        {pages.map(page => {
          const pageInfo = page.node

          return (
            <div
              key={pageInfo.fields.slug}
              className="w-100 md:w-4/12 p-2 flex justify-center"
            >
              <button
                onClick={() => navigate(`/blog/${pageInfo.fields.slug}`)}
                className="flex mb-4 md:mb-0 align-center rounded overflow-hidden shadow-lg"
              >
                <div>
                  <img src={pageInfo.frontmatter.image} alt="" />
                  <div className="p-4">
                    <h4 className="font-bold mb-2">
                      {pageInfo.frontmatter.title}
                    </h4>
                  </div>
                </div>
              </button>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            type
            title
            description
            image
          }
        }
      }
    }
  }
`
