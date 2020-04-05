import React from "react"
import { Link } from "gatsby"

import PropTypes from "prop-types"

import Skillet from "../images/skillet-logo.svg"

const Header = ({ siteTitle }) => (
  <header className="container max-w-2xl m-auto">
    <div className="flex items-center px-6 md:px-0 py-8">
      <h1 className="flex items-center pr-2 md:pr-4 border-r-2 font-bold">
        <Skillet className="mr-2" style={{ height: "2rem", width: "2rem" }} />
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link
        activeClassName="underline"
        className="ml-2 md:ml-4 font-display"
        to="/about"
      >
        About
      </Link>
      <Link
        activeClassName="underline"
        className="ml-4 md:ml-6 font-display"
        to="/blog"
      >
        Blog
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
