import React from 'react'
import { render } from '@testing-library/react'
import Block from './Block'

describe('Block', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      title: 'Test title',
      description: 'Test description'
    }
    const { getByTestId } = render(<Block {...props} />)
    expect(getByTestId('block-title')).toHaveTextContent(props.title)
    expect(getByTestId('block-description')).toHaveTextContent(
      props.description
    )
  })
})
