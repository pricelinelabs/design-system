import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontWeight, borderRadius } from 'styled-system'
import pick from 'lodash.pick'
import propTypes from '@styled-system/prop-types'
import { Box } from '../Box'

const RatingBadge = styled(Box)`
  display: inline-block;
  line-height: 1.5;
  ${fontWeight} ${borderRadius};
`

RatingBadge.defaultProps = {
  fontWeight: 'bold',
  px: 2,
  color: 'alert',
  borderRadius: 1,
}

RatingBadge.propTypes = {
  ...pick(propTypes.typography, ['fontWeight']),
  ...pick(propTypes.border, ['borderRadius']),
  color: PropTypes.string,
}

export default RatingBadge
