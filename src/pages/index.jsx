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
        was never knowing where the bad ones went wrong. I followed the recipe,
        but I didn't have the fundamentals! I learned as many as I could over
        the last couple years in my tiny apartment kitchen and now I'm sharing
        what I learned to help make your journey a little less painful.
      </p>
      <div className="flex flex-wrap md:flex-no-wrap justify-around my-12">
        <button
          onClick={() => navigate("/about")}
          className="flex w-100 md:w-5/12 mb-4 md:mb-0 align-center rounded overflow-hidden shadow-lg"
        >
          <div>
            <img src={BREAKFAST_SANDWICH_IMG} alt="" />
            <div className="p-4">
              <h4 className="font-bold mb-2">For an intro to the blog...</h4>
            </div>
          </div>
        </button>
        <button
          onClick={() => navigate("/blog")}
          className="flex w-100 md:w-5/12 align-center rounded overflow-hidden shadow-lg"
        >
          <div>
            <img src={CINNAMON_ROLL_IMG} alt="" />
            <div className="p-4">
              <h4 className="font-bold mb-2">Straight to the content...</h4>
            </div>
          </div>
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
