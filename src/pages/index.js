import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="max-w-2xl mx-auto">
      <h3 className="font-black text-4xl mb-8">
        So you've cooked a few recipes...
      </h3>
      <p className="leading-loose text-lg mb-4">
        Some probably came out pretty good. Some you probably
        angrily/shamefully/resignedly ate in the kitchen before anyone else
        could see.
      </p>
      <p className="leading-loose text-lg mb-4">
        The most frustrating part for me was never knowing why the bad ones
        turned out bad. I followed the recipe! I make pretty good food! Where
        did it all go wrong?
      </p>
      <p className="leading-loose text-lg">
        I didn't have the fundamentals. I had been making recipes for a couple
        years but didn't really feel like I knew how to cook. Never was this
        more clear to me than when I read our goddess, the one and only Samin
        Nosrat's Salt, Fat, Acid, Heat.
      </p>
    </div>
    <Link to="/blog">Blog</Link>
  </Layout>
)

export default IndexPage
