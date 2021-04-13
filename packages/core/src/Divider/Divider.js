import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import pick from 'lodash.pick'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
} from '../utils'
import { space, width } from 'styled-system'

const Divider = styled.hr.attrs(({ mx, mr, ml }) => ({
  // Default mr and ml props shouldn't interfere with mx
  mr: mx && mr === 0 ? null : mr,
  ml: mx && ml === 0 ? null : ml,
}))`
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: ${(props) =>
    getPaletteColor(props.borderColor || props.color, 'base')(props)};
  background-color: ${(props) =>
    getPaletteColor(props.borderColor || props.color, 'base')(props)};
  ${applyVariations('Divider')}
  ${space} ${width};
`

Divider.displayName = 'Divider'

Divider.defaultProps = {
  color: 'border',
  ml: 0,
  mr: 0,
}

Divider.propTypes = {
  ...propTypes.space,
  ...pick(propTypes.layout, ['width']),
  ...pick(propTypes.border, ['borderColor']),
  color: deprecatedColorValue(),
}

export default Divider
