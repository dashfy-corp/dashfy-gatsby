import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'
import { darkModeTypes } from '../../../types'
import Card from '../../card/Card'
import Section from '../../section/Section'

/**
 * Gallery Section Component
 *
 * Custom section to display employees, each employee
 * can have its own avatar along with name and position.
 *
 * @param darkMode
 * @param title
 * @param description
 * @param action
 * @param services
 * @return {*}
 * @constructor
 */
const GallerySection = ({ darkMode, title, description, action, items }) => (
  <Section
    darkMode={darkMode}
    title={title || 'Gallery'}
    description={description}
    action={action}
  >
    <>
      {items
        .map(item => ({
          ...item,
          avatar: item.image
        }))
        .map(item => (
          <Col key={item.id} md={item.size || 6}>
            <Card {...item} plain />
          </Col>
        ))}
    </>
  </Section>
)

GallerySection.propTypes = {
  darkMode: darkModeTypes,
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      subTitle: PropTypes.string,
      description: PropTypes.string,
      theme: PropTypes.string,
      size: PropTypes.number,
      image: PropTypes.shape({
        alt: PropTypes.string,
        src: PropTypes.instanceOf(Object)
      }),
      action: PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
        callback: PropTypes.func
      })
    })
  ),
  action: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    callback: PropTypes.func
  })
}

GallerySection.defaultProps = {
  darkMode: false,
  items: []
}

export default GallerySection
