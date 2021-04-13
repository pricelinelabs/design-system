import styled from 'styled-components'
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system'

import { Box } from '../Box'

import { applyVariations, deprecatedColorValue } from '../utils'
import propTypes from '@styled-system/prop-types'
import pick from 'lodash.pick'

const Flex = styled(Box).attrs(({ wrap, align, justify, ...props }) => ({
  flexWrap: wrap ? 'wrap' : undefined,
  alignItems: align,
  justifyContent: justify,
  ...props,
}))`
  display: flex;
  ${applyVariations('Flex')}
  ${alignItems} ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`

Flex.propTypes = {
  ...propTypes.space,
  ...pick(propTypes.layout, ['width']),
  color: deprecatedColorValue(),
  ...pick(propTypes.flexbox, [
    'alignItems',
    'justifyContent',
    'flexWrap',
    'flexDirection',
  ]),
}

Flex.displayName = 'Flex'

export default Flex
