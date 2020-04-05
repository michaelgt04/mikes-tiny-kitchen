import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>This is where you learn</h1>
    <Link to="/sourdough">Sourdough</Link>
  </Layout>
)

export default Blog
