import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import InputNumber from '../input_number'

describe('InputNumber', () => {
  it('renders without error', () => {
    const { container } = render(<InputNumber defaultValue={4} />)
    expect(container).toMatchSnapshot()
  })
})
