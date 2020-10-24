import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'
import { darkModeTypes } from '../../../types'
import Block from '../../block/Block'
import Section from '../../section/Section'

/**
 * Services Section Component
 *
 * Custom section to display a variety of services, each service
 * can have it's own icon along with title and description and
 * optional action button's.
 *
 * @param darkMode
 * @param title
 * @param description
 * @param action
 * @param services
 * @return {*}
 * @constructor
 */
const ServicesSection = ({
  darkMode,
  title,
  description,
  action,
  services
}) => (
  <Section
    darkMode={darkMode}
    title={title}
    description={description}
    action={action}
  >
    <>
      {services &&
        services.map(service => (
          <Col
            key={service.id}
            className="content-center"
            md={service.size || 6}
          >
            <Block {...service} />
          </Col>
        ))}
    </>
  </Section>
)

ServicesSection.propTypes = {
  darkMode: darkModeTypes,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    callback: PropTypes.func
  }),
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.number,
      icon: PropTypes.shape({
        icon: PropTypes.object,
        size: PropTypes.string
      }),
      action: PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
        callback: PropTypes.func
      })
    })
  )
}

ServicesSection.defaultProps = {
  darkMode: false,
  services: []
}

export default ServicesSection
