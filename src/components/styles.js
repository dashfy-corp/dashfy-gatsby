import React from 'react'
import { Button, Col } from 'reactstrap'
import { compose, defaultProps } from 'recompose'
import styled from 'styled-components'
import {
  breakpointXs,
  breakpointSm,
  breakpointMd,
  breakpointLg,
  breakpointXl
} from '../theme'

export const FlexCol = styled(Col)`
  display: flex;
  flex-direction: ${props => `column${props.reversed ? '-reversed' : ''}`};
  align-items: ${props => props.align || 'left'};
  justify-content: ${props => props.justify || 'flex-start'};
`

export const Box = styled.div`
  display: flex;
  flex-direction: ${props =>
    `${props.direction}${props.reversed ? '-reversed' : ''}`};
  align-items: ${props => props.align || 'left'};
  justify-content: ${props => props.justify || 'flex-start'};

  @media (min-width: ${breakpointXs}) {
    ${props => (props.padding ? `padding: ${props.padding};` : '')}
    ${props => (props.margin ? `margin: ${props.margin};` : '')}
  }

  @media (min-width: ${breakpointSm}) {
    ${props => (props['padding-sm'] ? `padding: ${props['padding-sm']};` : '')}
    ${props => (props['margin-sm'] ? `margin: ${props['margin-sm']};` : '')}
  }

  @media (min-width: ${breakpointMd}) {
    ${props => (props['padding-md'] ? `padding: ${props['padding-md']};` : '')}
    ${props => (props['margin-md'] ? `margin: ${props['margin-md']};` : '')}
  }

  @media (min-width: ${breakpointLg}) {
    ${props => (props['padding-lg'] ? `padding: ${props['padding-lg']};` : '')}
    ${props => (props['margin-lg'] ? `margin: ${props['margin-lg']};` : '')}
  }

  @media (min-width: ${breakpointXl}) {
    ${props => (props['padding-xl'] ? `padding: ${props['padding-xl']};` : '')}
    ${props => (props['margin-xl'] ? `margin: ${props['margin-xl']};` : '')}
  }
`

export const FullButton = styled(Button)`
  width: 100%;
`

export const Title = defaultProps({
  tag: 'h4',
  testId: 'heading'
})(({ tag, testId, children }) => {
  switch (tag) {
    case 'h1':
      return <h1 className="title" data-testid={testId}>{children}</h1>
    case 'h2':
      return <h2 className="title" data-testid={testId}>{children}</h2>
    case 'h3':
      return <h3 className="title" data-testid={testId}>{children}</h3>
    default:
      return <h4 className="title" data-testid={testId}>{children}</h4>
  }
})

export const SubTitle = compose()(({ dataId, children }) => (
  <h5 className="description" data-dataid={dataId}>{children}</h5>
))

export const Description = compose()(({ testId, children }) => (
  <p className="description" data-testid={testId}>{children}</p>
))

export const LinkButton = compose()(({ testId, children, ...props }) => (
  <Button className="btn-link" {...props} data-testid={testId}>
    {children}
  </Button>
))
