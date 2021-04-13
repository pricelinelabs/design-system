import styled from 'styled-components'
import { space, fontSize, fontWeight, width } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import pick from 'lodash.pick'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
} from '../utils'

const nowrap = (props) =>
  props.nowrap
    ? {
        whiteSpace: 'nowrap',
      }
    : null

const accessiblyHide = (props) =>
  props.hidden
    ? {
        position: 'absolute',
        width: '1px',
        height: '1px',
        clip: 'rect(1px, 1px, 1px, 1px)',
      }
    : null

const Label = styled.label`
  font-size: 10px;
  letter-spacing: 0.2px;
  display: block;
  width: 100%;
  margin: 0;
  color: ${getPaletteColor('base')};

  ${applyVariations('Label')}
  ${space} ${fontSize} ${fontWeight} ${width};
  ${nowrap}
  ${accessiblyHide}
`

Label.propTypes = {
  ...propTypes.space,
  ...pick(propTypes.typography, ['fontSize', 'fontWeight']),
  ...pick(propTypes.layout, ['width']),
  color: deprecatedColorValue(),
}

Label.defaultProps = {
  fontSize: '10px',
  fontWeight: 'bold',
  color: 'text.light',
}

Label.displayName = 'Label'
Label.isLabel = true

export default Label
