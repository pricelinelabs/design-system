import styled from 'styled-components'
import { top, right, bottom, left, zIndex } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import omit from 'lodash.omit'

import { Box } from '../Box'

const Absolute = styled(Box)`
  position: absolute;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`

Absolute.propTypes = {
  ...omit(propTypes.position, ['position']),
}

Absolute.displayName = 'Absolute'

export default Absolute
