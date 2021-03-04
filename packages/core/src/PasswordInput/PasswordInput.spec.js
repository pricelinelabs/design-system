import React from 'react'
import { render, screen, fireEvent } from 'testing-library'
import PasswordInput from './PasswordInput'

const sampleRegexCheckx = [
  { label: '1 Uppercase Letter', regex: /(?=.*[A-Z])/ },
  { label: '1 Lowercase Letter', regex: /(?=.*[a-z])/ },
]

describe('PasswordInput', () => {
  it('test show/hide password options', () => {
    render(<PasswordInput hasProgressBar />)
    const inputField = screen.getByTestId('input-field')
    const visibilityButton = screen.getByTitle('visibility-button')
    expect(inputField).toHaveAttribute('type', 'password')
    fireEvent.click(visibilityButton)
    expect(inputField).toHaveAttribute('type', 'text')
  })

  it('test with a strong password', () => {
    const mockOnChange = jest.fn()
    render(<PasswordInput hasProgressBar onChange={mockOnChange} />)
    const inputField = screen.getByTestId('input-field')
    fireEvent.change(inputField, { target: { value: 'GoodPassword1!' } })

    expect(mockOnChange).toHaveBeenLastCalledWith({
      isValid: true,
      value: 'GoodPassword1!',
    })

    const checkIconOn = screen.queryAllByTestId('check-icon-on')
    const checkIconOff = screen.queryAllByTestId('check-icon-off')
    expect(checkIconOn.length).toBe(5)
    expect(checkIconOff.length).toBe(0)
    expect(checkIconOn[0]).toHaveStyleRule('color', '#0a0')

    const checkMark = screen.queryAllByTestId('check-mark-icon')
    expect(checkMark.length).toBe(1)
  })

  it('test with a no number and special character password', () => {
    const mockOnChange = jest.fn()
    render(<PasswordInput hasProgressBar onChange={mockOnChange} />)
    const inputField = screen.getByTestId('input-field')
    fireEvent.change(inputField, { target: { value: 'SamplePassword' } })

    expect(mockOnChange).toHaveBeenLastCalledWith({
      isValid: false,
      value: 'SamplePassword',
    })

    const checkIconOn = screen.queryAllByTestId('check-icon-on')
    const checkIconOff = screen.queryAllByTestId('check-icon-off')
    expect(checkIconOn.length).toBe(3)
    expect(checkIconOff.length).toBe(2)
    expect(checkIconOn[0]).toHaveStyleRule('color', '#0a0')
    expect(checkIconOff[0]).toHaveStyleRule('color', '#4f6f8f')

    const checkMark = screen.queryAllByTestId('check-mark-icon')
    expect(checkMark.length).toBe(0)
  })

  it('test with a weak password', () => {
    const mockOnChange = jest.fn()
    render(<PasswordInput hasProgressBar onChange={mockOnChange} />)
    const inputField = screen.getByTestId('input-field')
    fireEvent.change(inputField, { target: { value: 'bad' } })

    expect(mockOnChange).toHaveBeenLastCalledWith({
      isValid: false,
      value: 'bad',
    })

    const checkIconOn = screen.queryAllByTestId('check-icon-on')
    const checkIconOff = screen.queryAllByTestId('check-icon-off')
    expect(checkIconOn.length).toBe(1)
    expect(checkIconOff.length).toBe(4)
    expect(checkIconOff[0]).toHaveStyleRule('color', '#4f6f8f')

    const checkMark = screen.queryAllByTestId('check-mark-icon')
    expect(checkMark.length).toBe(0)
  })

  it('test with a manual regex checks', () => {
    const mockOnChange = jest.fn()
    render(
      <PasswordInput
        hasProgressBar
        regexChecks={sampleRegexCheckx}
        onChange={mockOnChange}
      />
    )
    const inputField = screen.getByTestId('input-field')
    fireEvent.change(inputField, { target: { value: 'Password' } })

    expect(mockOnChange).toHaveBeenLastCalledWith({
      isValid: true,
      value: 'Password',
    })

    const checkIconOn = screen.queryAllByTestId('check-icon-on')
    const checkIconOff = screen.queryAllByTestId('check-icon-off')
    expect(checkIconOn.length).toBe(2)
    expect(checkIconOff.length).toBe(0)
    expect(checkIconOn[0]).toHaveStyleRule('color', '#0a0')

    const checkMark = screen.queryAllByTestId('check-mark-icon')
    expect(checkMark.length).toBe(1)
  })
})
