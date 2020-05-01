import React from "react"

import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Confirm = () => {
  return (
    <Layout>
      <SEO title="Subscription Confirm" />
      <h1 className="title-font">Success!</h1>
      <p className="body-font">
        Thanks for signing up to hear about my new articles.
      </p>
      <button
        onClick={() => navigate("/blog")}
        className="rounded shadow-lg px-4 py-3 hover:shadow-xl bg-gray-900 text-white transition-shadow duration-100 mx-auto mb-4"
      >
        <p>Back to the blog</p>
      </button>
    </Layout>
  )
}

export default Confirm
