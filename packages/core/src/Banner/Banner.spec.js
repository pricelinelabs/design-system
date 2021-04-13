import React from 'react'
import { render } from 'testing-library'

import { Banner, Text, Heading, theme } from '..'

describe('Banner', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders with no props other than theme', () => {
    const json = rendererCreateWithTheme(<Banner />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with custom iconName and size', () => {
    const json = rendererCreateWithTheme(
      <Banner iconName='star' iconSize={20} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with text string', () => {
    const json = rendererCreateWithTheme(
      <Banner
        header='Header'
        text='Text'
        iconName='star'
        iconSize={20}
        theme={theme}
      />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with text node', () => {
    const json = rendererCreateWithTheme(
      <Banner
        header='Header'
        text={<Text>Text</Text>}
        iconName='star'
        iconSize={20}
        theme={theme}
      />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with primary color', () => {
    const json = rendererCreateWithTheme(<Banner color='primary' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with secondary color', () => {
    const json = rendererCreateWithTheme(<Banner color='secondary' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with alert color', () => {
    const json = rendererCreateWithTheme(<Banner color='alert' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with error color', () => {
    const json = rendererCreateWithTheme(<Banner color='error' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with primary.light color', () => {
    const json = rendererCreateWithTheme(
      <Banner color='primary.light' />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue)
  })

  test('renders with secondary.light color', () => {
    const json = rendererCreateWithTheme(
      <Banner color='secondary.light' />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGreen)
    expect(json).toHaveStyleRule('color', theme.colors.darkGreen)
  })

  test('renders with error.light color', () => {
    const json = rendererCreateWithTheme(
      <Banner color='error.light' />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightRed)
    expect(json).toHaveStyleRule('color', theme.colors.darkRed)
  })

  test('renders close button if onClose func is provided', () => {
    const { container } = render(<Banner onClose={() => {}} />)
    const closeButton = container.querySelector('button')
    expect(closeButton).toBeTruthy()
  })

  test('does render blue left-hand icon by default', () => {
    const { container } = render(<Banner color='primary' />)
    const icon = container.querySelector('svg')
    // todo: check svg path/attrs for correct icon
    expect(icon).toBeTruthy()
  })

  test('does not render blue left-hand icon if showIcon is false', () => {
    const { container } = render(<Banner color='primary' showIcon={false} />)
    const icon = container.querySelector('svg')
    expect(icon).toBeFalsy()
  })

  test('renders content from children props', () => {
    const json = rendererCreateWithTheme(
      <Banner>
        <span>123</span>
      </Banner>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with header node', () => {
    const { asFragment, getByText } = render(
      <Banner
        header={<Heading>Hello world</Heading>}
        text={<Text>Text</Text>}
        iconName='star'
        iconSize={20}
        theme={theme}
      />
    )

    getByText(/Hello world/)
    expect(asFragment()).toMatchSnapshot()
  })
})
