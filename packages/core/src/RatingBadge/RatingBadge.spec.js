import React from 'react'
import { render } from 'testing-library'

import { RatingBadge } from '..'

const text = '123'

describe('RatingBadge', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const { asFragment } = render(<RatingBadge>5</RatingBadge>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('has correct background and text colors', () => {
    const color = 'secondary'

    const { getByText } = render(
      <RatingBadge color={color}>{text}</RatingBadge>
    )

    const badge = getByText(text)

    // Need to check the computed styles because .toHaveStyleRule(..) doesn't evaluate the functions
    const computedStyles = window.getComputedStyle(badge)
    expect(computedStyles.color).toEqual('rgb(255, 255, 255)')
    expect(computedStyles.backgroundColor).toEqual('rgb(0, 170, 0)')
  })

  test('renders with no bg and color', () => {
    const color = 'secondary'

    const { getByText } = render(
      <RatingBadge color={color}>{text}</RatingBadge>
    )

    const badge = getByText(text)

    const computedStyles = window.getComputedStyle(badge)
    expect(computedStyles.backgroundColor).toEqual('rgb(0, 170, 0)')
    expect(computedStyles.color).toEqual('rgb(255, 255, 255)')
  })

  test('renders default color with no props', () => {
    const { getByText } = render(<RatingBadge>{text}</RatingBadge>)

    const badge = getByText(text)

    const computedStyles = window.getComputedStyle(badge)
    expect(computedStyles.color).toEqual('rgb(255, 255, 255)')
    expect(computedStyles.backgroundColor).toEqual('rgb(246, 128, 19)')
  })
})
