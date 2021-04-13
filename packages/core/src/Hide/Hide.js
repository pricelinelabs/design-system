import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Box } from '../Box'
import { Text } from '../Text'

const getMaxWidth = (em) => parseInt(em) - 0.01

const breakpoints = (props) => ({
  xs: `@media screen and (max-width: ${getMaxWidth(
    props.theme.breakpoints[0]
  )}em)`,
  sm: `@media screen and (min-width: ${
    props.theme.breakpoints[0]
  }) and (max-width: ${getMaxWidth(props.theme.breakpoints[1])}em)`,
  md: `@media screen and (min-width: ${
    props.theme.breakpoints[1]
  }) and (max-width: ${getMaxWidth(props.theme.breakpoints[2])}em)`,
  lg: `@media screen and (min-width: ${
    props.theme.breakpoints[2]
  }) and (max-width: ${getMaxWidth(props.theme.breakpoints[3])}em)`,
  xl: `@media screen and (min-width: ${
    props.theme.breakpoints[3]
  }) and (max-width: ${getMaxWidth(props.theme.breakpoints[4])}em)`,
  xxl: `@media screen and (min-width: ${props.theme.breakpoints[4]})`,
  print: `@media print`,
})

const hidden = (key) => (props) =>
  props[key]
    ? {
        [breakpoints(props)[key]]: {
          display: 'none',
        },
      }
    : null

const Hide = styled(Box)`
  ${hidden('xs')}
  ${hidden('sm')}
  ${hidden('md')}
  ${hidden('lg')}
  ${hidden('xl')}
  ${hidden('xxl')}
  ${hidden('print')};
`

Hide.propTypes = {
  ...Box.propTypes,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  print: PropTypes.bool,
}

Hide.displayName = 'Hide'
Hide.text = styled(Text)`
  display: inline;
  ${hidden('xs')}
  ${hidden('sm')}
  ${hidden('md')}
  ${hidden('lg')}
  ${hidden('xl')}
  ${hidden('xxl')}
  ${hidden('print')};
`

export default Hide
