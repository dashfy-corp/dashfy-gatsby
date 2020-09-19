import PropTypes from 'prop-types'
import React from 'react'
import { Container } from 'reactstrap'
import { darkModeTypes } from '../../types'
import { darkModeClassNames } from '../../untils'
import { HeroContainer, HeroDescription, HeroTitle } from './styles'

function Hero({
  darkMode,
  image,
  color,
  styles,
  titleStyles,
  title,
  description
}) {
  return (
    <HeroContainer
      styles={styles}
      className={darkModeClassNames(darkMode, { 'page-header': true })}
    >
      <div
        style={{
          backgroundImage: image ? 'url(' + require(image) + ')' : 'none'
        }}
      >
        <div className="content-center">
          <Container>
            {title && (
              <div className="title-brand">
                <HeroTitle color={color} styles={titleStyles}>
                  {title}
                </HeroTitle>
              </div>
            )}
            {description && (
              <HeroDescription className="text-center">
                {description}
              </HeroDescription>
            )}
          </Container>
        </div>
      </div>
    </HeroContainer>
  )
}

Hero.propTypes = {
  darkMode: darkModeTypes,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
  styles: PropTypes.string,
  titleStyles: PropTypes.string
}

Hero.defaultProps = {
  darkMode: false,
  color: '#fff',
  title: null,
  description: null,
  image: null,
  styles: null,
  titleStyles: null
}

export default Hero
