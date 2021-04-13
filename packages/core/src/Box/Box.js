import styled from 'styled-components'
import PropTypes from 'prop-types'
import pick from 'lodash.pick'
import {
  display,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  size,
  space,
  textAlign,
  width,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

import {
  applyVariations,
  color,
  deprecatedColorValue,
  boxShadow,
} from '../utils'

const Box = styled.div`
  ${applyVariations('Box')}
  ${display} ${height} ${maxHeight} ${maxWidth}
  ${minHeight} ${minWidth} ${size} ${space} 
  ${textAlign} ${width} 
  ${boxShadow}
  ${color}
`

Box.displayName = 'Box'

Box.propTypes = {
  ...propTypes.layout,
  ...propTypes.space,
  ...pick(propTypes.typography, ['textAlign']),
  boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  color: deprecatedColorValue(),
}

export default Box
