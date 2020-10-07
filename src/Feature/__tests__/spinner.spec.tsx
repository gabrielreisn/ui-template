import React from 'react'
import { render, screen } from '@testing-library/react'
import { Spinner } from '../Spinner'

describe('<Spinner />', () => {
  test('renders with the correct test-id', () => {
    render(<Spinner />)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })
})
