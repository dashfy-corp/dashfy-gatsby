import React from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row, Button } from 'reactstrap'
import { darkModeTypes } from '../../types'
import { darkModeClassNames } from '../../untils'

const Section = ({ darkMode, title, description, action, children }) => (
  <div
    className={darkModeClassNames(darkMode, {
      section: true,
      'text-center': true
    })}
  >
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h2 className="title">{title}</h2>
          <h5 className="description">{description}</h5>
          <br />
          {action && (
            <Button
              className="btn-round"
              color={action.color || 'info'}
              href={action.url || '#/'}
              onClick={action.callback}
            >
              {action.label}
            </Button>
          )}
        </Col>
      </Row>
      <br />
      <br />
      {children && <Row>{children}</Row>}
    </Container>
  </div>
)

Section.propTypes = {
  darkMode: darkModeTypes,
  children: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    color: PropTypes.string,
    callback: PropTypes.func
  })
}

Section.defaultProps = {
  darkMode: false,
  title: null,
  description: null,
  action: null
}

export default Section
