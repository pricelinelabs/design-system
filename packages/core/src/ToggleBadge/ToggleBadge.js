import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, fontSize } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import pick from 'lodash.pick'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
} from '../utils'

const ToggleBadge = styled.button`
  border-radius: ${(props) => props.theme.radius};
  border: 0;
  display: inline-block;
  font-weight: ${(props) => props.theme.bold};
  font-family: inherit;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected
      ? getPaletteColor(props.color, 'light')(props)
      : props.unSelectedBg};
  color: ${getPaletteColor('base')};
  &:hover {
    background-color: ${(props) =>
      getPaletteColor(props.color, 'light')(props)};
  }
  ${applyVariations('ToggleBadge')}
  ${space} ${fontSize};
`

ToggleBadge.displayName = 'ToggleBadge'

ToggleBadge.propTypes = {
  selected: PropTypes.bool,
  ...propTypes.space,
  ...pick(propTypes.typography, ['fontSize']),
  color: deprecatedColorValue(),
}

ToggleBadge.defaultProps = {
  selected: false,
  px: 2,
  py: 1,
  mx: 1,
  my: 1,
  fontSize: 0,
  color: 'primary',
  unSelectedBg: 'transparent',
}

export default ToggleBadge
