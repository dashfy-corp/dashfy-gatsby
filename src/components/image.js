import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Image = ({ src, alt }) => {
  return <Img fluid={src.childImageSharp.fluid} alt={alt} />
}

Image.propTypes = {
  src: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.any
    })
  }).isRequired,
  alt: PropTypes.string
}

Image.defaultProps = {
  alt: ''
}

export default Image
