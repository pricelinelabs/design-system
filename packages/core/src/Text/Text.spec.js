import React from 'react'

import { Text, theme } from '..'

describe('Text', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Text />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('textAlign prop sets text-align', () => {
    const json = rendererCreateWithTheme(<Text textAlign='center' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-align', 'center')
  })

  test('regular prop sets font-weight', () => {
    const json = rendererCreateWithTheme(<Text regular />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-weight', theme.regular.toString())
  })

  test('bold prop sets font-weight', () => {
    const json = rendererCreateWithTheme(<Text bold />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-weight', theme.bold.toString())
  })

  test('caps prop sets text-transform', () => {
    const json = rendererCreateWithTheme(<Text caps />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-transform', 'uppercase')
  })

  test('fontSize prop sets font-size', () => {
    const f0 = rendererCreateWithTheme(<Text fontSize={0} />).toJSON()
    const f1 = rendererCreateWithTheme(<Text fontSize={1} />).toJSON()
    const f2 = rendererCreateWithTheme(<Text fontSize={2} />).toJSON()
    const f3 = rendererCreateWithTheme(<Text fontSize={3} />).toJSON()
    const f4 = rendererCreateWithTheme(<Text fontSize={4} />).toJSON()
    const f5 = rendererCreateWithTheme(<Text fontSize={5} />).toJSON()
    const f6 = rendererCreateWithTheme(<Text fontSize={6} />).toJSON()
    expect(f0).toHaveStyleRule('font-size', theme.fontSizes[0] + 'px')
    expect(f1).toHaveStyleRule('font-size', theme.fontSizes[1] + 'px')
    expect(f2).toHaveStyleRule('font-size', theme.fontSizes[2] + 'px')
    expect(f3).toHaveStyleRule('font-size', theme.fontSizes[3] + 'px')
    expect(f4).toHaveStyleRule('font-size', theme.fontSizes[4] + 'px')
    expect(f5).toHaveStyleRule('font-size', theme.fontSizes[5] + 'px')
    expect(f6).toHaveStyleRule('font-size', theme.fontSizes[6] + 'px')
  })

  test('mt prop sets margin-top', () => {
    const json = rendererCreateWithTheme(<Text mt={2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin-top', theme.space[2] + 'px')
  })

  test('display and overflow', () => {
    const json = rendererCreateWithTheme(
      <Text display='inline-block' overflow='none' />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('display', 'inline-block')
    expect(json).toHaveStyleRule('overflow', 'none')
  })

  test('height and width', () => {
    const json = rendererCreateWithTheme(
      <Text height={150} width={200} />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '150px')
    expect(json).toHaveStyleRule('width', '200px')
  })

  test('min/max values', () => {
    const json = rendererCreateWithTheme(
      <Text minHeight={200} maxHeight={400} minWidth={200} maxWidth={400} />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('min-height', '200px')
    expect(json).toHaveStyleRule('max-height', '400px')
    expect(json).toHaveStyleRule('min-width', '200px')
    expect(json).toHaveStyleRule('max-width', '400px')
  })
})
