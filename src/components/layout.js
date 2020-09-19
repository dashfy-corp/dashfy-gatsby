import React from 'react'
import PropTypes from 'prop-types'
import '../assets/css/bootstrap.min.css'
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";
import '../assets/scss/paper-kit.scss'

import Footer from './footer/Footer'
import NavBar from './navbar/Navbar'

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div className="main">
      <main>{children}</main>
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
