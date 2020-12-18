import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row } from 'reactstrap'
import { darkModeTypes } from '../../../types'
import { darkModeClassNames } from '../../../untils'
import Image from '../../image'
import { FlexCol, SubTitle, Title } from '../../styles'
import { SplitSectionContainer } from './styles'

/**
 * Split Section Component
 *
 * This component displays a section that is split in 2 areas:
 *
 * - the left area displays a title, description, optional action
 *   buttons, the text alignment can be customized using the align and
 *   justify properties.
 * - the right area displays either an image, if the image property
 *   containing the image source is provided, or the children property
 *   which you can use to display anything other than a image, like
 *   videos or animations.
 *
 * The layout is also customizable by adjusting the size, offset and
 * spacing properties.
 *
 * # Size
 * The size property changes the size of the left side directly, which
 * is later used to calculate the size of the right side by subtracting
 * the size from the total number of columns (12).
 *
 * # Offset
 * The offset property can be used to narrow the section area, and is also
 * offset is subtracted from the right side size.
 *
 * # Spacing
 * Spacing controls the distance in columns between the right and left side,
 * and is also subtracted from the right side column size.
 *
 * # Right side size calculation
 * The right area size is the remainder of the subtraction of the size, spacing and offset
 * from the total number of columns (12), here is an example:
 * ```
 * <SplitSection size={6} offset={1} spacing={1} />
 * ```
 * This will do the following:
 * - set the left side size to 6.
 * - set the left side offset to 1.
 * - set the right column size to: (total number of columns) - left size - (offset * 2) - spacing.
 * - set the right column offset to 1.
 *
 * This will produce a left area of 6 columns, offset by 1 column to the left,
 * with a right area of 3 columns offset by 1 column to the left and one column
 * to the right.
 *
 * # Reversed
 * The order of the left and right areas can be also reversed if you
 * need the image or custom content to be on the left instead of on the right.
 *
 * @return {*}
 * @constructor
 * @author [Jair Milanes](https://github.com/layoutzweb)
 */
const SplitSection = ({
  darkMode,
  align,
  title,
  description,
  image,
  size,
  reversed,
  offset,
  spacing,
  children
}) => (
  <SplitSectionContainer
    className={darkModeClassNames(darkMode, {
      section: true,
      'extra-space': true
    })}
  >
    <Container>
      <Row>
        {(image || {}).src && (
          <FlexCol
            padding="10%"
            xs={{ size: '6', offset: 3 }}
            sm={{ size: '6', offset: 3 }}
            md={{
              size: 12 - size - spacing,
              offset: spacing,
              order: reversed ? 1 : 2
            }}
            lg={{
              size: 12 - size - spacing,
              offset: spacing
            }}
            xl={{
              size: 12 - size - spacing - offset * 2,
              offset: spacing
            }}
          >
            <Image alt={image.alt} src={image.src} />
          </FlexCol>
        )}
        {(!image || !image.src) && children !== null && (
          <FlexCol
            xs={{ size: '8', offset: 2 }}
            sm={{ size: '8', offset: 2 }}
            md={{
              size: 12 - size - spacing,
              offset: spacing,
              order: reversed ? 1 : 2
            }}
            lg={{
              size: 12 - size - spacing,
              offset: spacing
            }}
            xl={{
              size: 12 - size - spacing - offset * 2,
              offset: spacing
            }}
            align={align}
          >
            {children}
          </FlexCol>
        )}
        <FlexCol
          xs={{ size: '10', offset: 1 }}
          sm={{ size: '10', offset: 1 }}
          md={{ size: size, offset: 0, order: reversed ? 2 : 1 }}
          lg={{ size: size, offset: 0 }}
          xl={{ size: size, offset }}
          justify="center"
          align="left"
        >
          {title && (
            <>
              <Title tag="h2">{title}</Title>
              {!description && <br />}
            </>
          )}
          {description && (
            <>
              <SubTitle>{description}</SubTitle>
              <br />
            </>
          )}
        </FlexCol>
      </Row>
    </Container>
  </SplitSectionContainer>
)

SplitSection.propTypes = {
  darkMode: darkModeTypes,
  title: PropTypes.string,
  description: PropTypes.string,
  reversed: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  offset: PropTypes.number,
  spacing: PropTypes.number,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.instanceOf(Object)
  }),
  size: PropTypes.number,
  children: PropTypes.oneOf([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

SplitSection.defaultProps = {
  title: null,
  description: null,
  reversed: false,
  offset: 0,
  spacing: 0,
  image: null,
  video: null,
  size: 6,
  children: null
}

export default SplitSection
