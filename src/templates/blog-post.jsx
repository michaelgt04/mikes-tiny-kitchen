import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Subscribe from "../components/subscribe"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className="blog-post">
        <header>
          <h1 className="title-font">{post.frontmatter.title}</h1>
        </header>
        <img alt="" src={post.frontmatter.fullImage} />
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="max-w-lg mx-auto my-12 bg-gray-100 p-6">
          <p className="body-font mb-4">
            If you enoyed this article and want to keep up to date on all the
            latest, enter your email below to hear about new articles!
          </p>
          <Subscribe />
        </div>
        <hr style={{}} />
      </article>

      <nav>
        <ul className="flex mt-4 mb-8">
          <li>
            <Link to="/blog" rel="prev">
              ← Back to articles
            </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        fullImage
      }
    }
  }
`
