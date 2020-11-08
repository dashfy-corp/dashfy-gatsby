import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../icon/Icon'
import { Box, Description, LinkButton, Title } from '../styles'

const BlockBox = styled(Box)`
  .title {
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    margin: 80px 40px 0 40px;
  }
`

const IconContainer = styled.div`
  font-size: 24px;
`

const Block = ({ icon, theme, title, description, action }) => (
  <BlockBox direction="column" margin="40px 0">
    {icon && (
      <IconContainer data-testid="block-icon">
        <Icon {...{ size: '3x', ...icon }} />
      </IconContainer>
    )}
    <div>
      {title && (
        <Title tag="h4" testId="block-title">
          {title}
        </Title>
      )}
      {description && (
        <Description testId="block-description">{description}</Description>
      )}
      {action ? (
        <LinkButton
          data-testid="block-action"
          className="btn-link"
          color={theme}
          href={action.url || '#/'}
          onClick={action.callback}
        >
          {action.label}
        </LinkButton>
      ) : null}
    </div>
  </BlockBox>
)

Block.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  icon: PropTypes.shape({
    icon: PropTypes.object,
    size: PropTypes.string
  }),
  theme: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    callback: PropTypes.func
  })
}

Block.defaultProps = {
  image: null,
  icon: null,
  theme: 'info',
  title: null,
  description: null,
  action: null
}

export default Block
