import styled from 'styled-components'
import PropTypes from 'prop-types'
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

import {
  applyVariations,
  color,
  deprecatedColorValue,
  deprecatedPropType,
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

const boxPropTypes = {
  ...display.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...width.propTypes,
  bg: deprecatedPropType('color'),
  boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  color: deprecatedColorValue(),
}

type BoxProps = PropTypes.InferProps<typeof boxPropTypes>

const Box = styled.div<BoxProps>`
  ${display} ${height} ${maxHeight} ${maxWidth}
  ${minHeight} ${minWidth} ${size} ${space} 
  ${textAlign} ${width} 

  ${applyVariations('Box')}
  ${boxShadow}
  ${color}
`

Box.displayName = 'Box'

Box.propTypes = boxPropTypes

export default Box
