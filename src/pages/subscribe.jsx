import React from "react"

import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Subscribe from "../components/subscribe"

const SubscribePage = () => {
  return (
    <Layout>
      <SEO title="Subscribe" />
      <h1 className="title-font">Subscribe</h1>
      <p className="body-font">
        If you'd like to hear about new articles as they come out, you can
        subscribe to emails below!
      </p>
      <div className="mb-4">
        <Subscribe />
      </div>
    </Layout>
  )
}

export default SubscribePage
