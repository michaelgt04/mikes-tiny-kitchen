import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { BREAKFAST_SANDWICH_IMG, CINNAMON_ROLL_IMG } from "../constants/images"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h3 className="title-font">So you've cooked a few recipes...</h3>
      <p className="body-font">
        Some probably came out pretty good. Some you probably shame ate in the
        kitchen before anyone else could see. The most frustrating part for me
        was never knowing where the bad ones went wrong. I followed the
        instructions, but I didn't have the fundamentals! Learning how to think
        about ingredients and techniques improved my cooking far more than two
        years of strict adherence to recipes.
      </p>
      <p className="body-font">
        That's why this will not be a site full of recipes. There are plenty of
        those out there. I learned as much as I could over the last couple years
        in my tiny apartment kitchen and now I'm sharing what I found to help
        make your journey a little less painful. This is a place to learn from a
        fellow home cook and make that mythical jump to cooking without a
        recipe.
      </p>
      <div className="flex justify-center mb-8">
        <button
          onClick={() => navigate("/blog")}
          className="rounded shadow-lg px-4 py-3 hover:shadow-xl bg-gray-900 text-white transition-shadow duration-100"
        >
          <p>Get cooking</p>
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
