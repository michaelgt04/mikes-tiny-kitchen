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
      <p className="leading-relaxed text-base mb-4">
        Some probably came out pretty good. Some you probably shame ate in the
        kitchen before anyone else could see. The most frustrating part for me
        was never knowing where the bad ones went wrong. I followed the recipe,
        but I didn't have the fundamentals! I learned as many as I could over
        the last couple years in my tiny apartment kitchen and now I'm sharing
        what I learned to help make your journey a little less painful.
      </p>
      <div className="flex justify-around my-12">
        <div className="flex w-5/12 align-center rounded overflow-hidden shadow-lg">
          <div>
            <img src="https://res.cloudinary.com/duor0bzmo/image/upload/c_scale,q_100,w_512/v1585866139/mikestinykitchen/breakfast-sandwich.jpg" />
            <div className="p-4">
              <h4 className="font-bold mb-2">For an intro to the blog...</h4>
              <Link
                className="font-body text-blue-700 underline"
                to="/get-started"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-5/12 align-center rounded overflow-hidden shadow-lg">
          <div>
            <img src="https://res.cloudinary.com/duor0bzmo/image/upload/c_scale,w_512/a_90/v1585866153/mikestinykitchen/cinnamon-rolls.jpg" />
            <div className="p-4">
              <h4 className="font-bold mb-2">
                To get straight to the content...
              </h4>
              <Link className="font-body text-blue-700 underline" to="/blog">
                Dive in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
