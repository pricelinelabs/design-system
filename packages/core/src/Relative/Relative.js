import styled from 'styled-components'
import { Box } from '../Box'
import { top, right, bottom, left, zIndex } from 'styled-system'
import omit from 'lodash.omit'
import propTypes from '@styled-system/prop-types'

const Relative = styled(Box)`
  position: relative;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`

Relative.propTypes = {
  ...omit(propTypes.position, ['position']),
}

Relative.displayName = 'Relative'

export default Relative
