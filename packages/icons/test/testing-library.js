import React from 'react'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react'

import { ThemeProvider } from 'pcln-design-system'

const WithThemeProvider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
)
WithThemeProvider.propTypes = {
  children: PropTypes.node,
}

const customRender = (ui, options) =>
  render(ui, { wrapper: WithThemeProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
