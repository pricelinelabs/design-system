import React from 'react'
import { render } from 'testing-library'

import { Flag, theme } from '..'

describe('Flag', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const json = rendererCreateWithTheme(<Flag />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with width prop', () => {
    const json = rendererCreateWithTheme(<Flag width={256} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '256px')
  })

  test('renders with palette color as color prop', () => {
    const text = 'bla'
    const { getByText } = render(
      <Flag width={256} color='promoPrimary.base'>
        {text}
      </Flag>
    )
    expect(getByText(text)).toHaveStyleRule(
      'background-color',
      theme.colors.purple
    )
  })
})
