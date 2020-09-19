import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from 'reactstrap'

function NavBar() {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent')
  const [navbarCollapse, setNavbarCollapse] = useState(false)

  const toggleNavBarCollapse = () => {
    setNavbarCollapse(!navbarCollapse)
    document.documentElement.classList.toggle('nav-open')
  }

  useEffect(() => {
    const updateNavBarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor('')
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent')
      }
    }

    window.addEventListener('scroll', updateNavBarColor)

    return function cleanup() {
      window.removeEventListener('scroll', updateNavBarColor)
    }
  })
  return (
    <Navbar className={classNames('fixed-top', navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Dashfy"
          >
            Dashfy
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classNames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse
            })}
            onClick={toggleNavBarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.github.com"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#home" target="_blank">
                <i className="nc-icon nc-book-bookmark" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about" target="_blank">
                <i className="nc-icon nc-book-bookmark" /> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#services" target="_blank">
                <i className="nc-icon nc-book-bookmark" /> Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#locations" target="_blank">
                <i className="nc-icon nc-book-bookmark" /> Locations
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#locations" target="_blank">
                <i className="nc-icon nc-book-bookmark" /> Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="#pablo"
                target="_blank"
                disabled
              >
                Shop Now
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
