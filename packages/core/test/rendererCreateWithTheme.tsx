import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '../src'

export const rendererCreateWithTheme = (Tree: React.Node): ReactTestRenderer =>
  renderer.create(<ThemeProvider theme={createTheme()}>{Tree}</ThemeProvider>)
