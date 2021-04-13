import React from 'react'
import styled from 'styled-components'
import { space, fontSize } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import { ChevronDown } from 'pcln-icons'

import { borders, deprecatedColorValue } from '../utils'
import { Flex } from '../Flex'
import propTypes from '@styled-system/prop-types'
import pick from 'lodash.pick'

const ClickableIcon = styled(ChevronDown)`
  pointer-events: none;
`

const SelectBase = styled.select`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: ${themeGet('radius')};
  border-width: 1px;
  border-style: solid;

  ${borders} ${space} ${fontSize}
  ::-ms-expand {
    display: none;
  }
`

SelectBase.defaultProps = {
  fontSize: [2, null, 1],
  m: 0,
  pl: 12,
  pr: 32,
  py: 14,
}

SelectBase.propTypes = {
  ...propTypes.space,
  ...pick(propTypes.typography, ['fontSize']),
  color: deprecatedColorValue(),
  ...borders.propTypes,
}

const Select = React.forwardRef((props, ref) => (
  <Flex width={1} alignItems='center'>
    <SelectBase {...props} ref={ref} />
    <ClickableIcon ml={-32} color='text.light' />
  </Flex>
))

Select.displayName = 'Select'
Select.isField = true

export default Select
