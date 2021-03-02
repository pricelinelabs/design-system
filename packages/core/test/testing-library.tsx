import React from 'react'
import PropTypes from 'prop-types'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from '../src'

const WithThemeProvider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
)
WithThemeProvider.propTypes = {
  children: PropTypes.node,
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const customRender = (ui: React.Node, options: any): RenderResult =>
  render(ui, { wrapper: WithThemeProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
