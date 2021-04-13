import React from 'react'
import { ToggleBadge, theme } from '..'

describe('ToggleBadge', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('selected ToggleBadge renders with default props', () => {
    const json = rendererCreateWithTheme(<ToggleBadge selected />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })

  test('unselected ToggleBadge renders with default props', () => {
    const json = rendererCreateWithTheme(<ToggleBadge />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })
})
