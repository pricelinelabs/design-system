import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme as themeGet, space, fontSize, propTypes } from 'styled-system'
import theme from './theme'

const ToggleBadge = styled.button`
  border-radius: ${props => props.theme.radius};
  border: 0;
  display: inline-block;
  font-weight: ${props => props.theme.bold};
  font-family: inherit;
  cursor: pointer;
  background-color: ${props =>
    props.selected ? props.theme.colors.primary : props.unSelectedBg};
  color: ${props =>
    props.selected
      ? props.theme.colors.white
      : props.theme.colors[props.color]};
  ${space} ${fontSize};
  &:hover {
    background-color: ${props => props.theme.colors[props.bg]};
  }
`

ToggleBadge.displayName = 'ToggleBadge'

ToggleBadge.propTypes = {
  selected: PropTypes.bool,
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.color
}

ToggleBadge.defaultProps = {
  selected: false,
  px: 2,
  py: 1,
  mx: 1,
  my: 1,
  fontSize: 0,
  theme: theme,
  color: 'primary',
  bg: 'lightBlue',
  unSelectedBg: 'transparent'
}

export default ToggleBadge