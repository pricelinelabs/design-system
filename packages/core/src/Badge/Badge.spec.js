import React from 'react'
import { Badge, theme } from '..'

describe('Badge', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const json = rendererCreateWithTheme(<Badge />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders small', () => {
    const json = rendererCreateWithTheme(<Badge size='small' />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('color secondary sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge color='secondary' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('color secondary.light sets background-color and color', () => {
    const json = rendererCreateWithTheme(
      <Badge color='secondary.light' />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGreen)
    expect(json).toHaveStyleRule('color', theme.colors.text)
  })

  test('color error sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge color='error' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('color error.light sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge color='error.light' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightRed)
    expect(json).toHaveStyleRule('color', theme.colors.text)
  })

  test('color alert sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge color='alert' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('color primary sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge color='primary' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('color primary.light sets background-color and color', () => {
    const json = rendererCreateWithTheme(
      <Badge color='primary.light' />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.text)
  })
})
