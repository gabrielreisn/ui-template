import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '../Input'

describe('<Input />', () => {
  test('changing the input should trigger the callback provided', () => {
    const fakeChangeEvent = jest.fn()
    const inputLabel = 'insert your name here'
    const inputText = 'Gabriel'
    render(
      <Input id="name" label={inputLabel} value="" setValue={fakeChangeEvent} />
    )
    fireEvent.change(screen.getByLabelText(inputLabel), {
      target: { value: inputText },
    })
    expect(fakeChangeEvent).toHaveBeenCalledWith(inputText)
  })
})
