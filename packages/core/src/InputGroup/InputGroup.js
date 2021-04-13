import styled from 'styled-components'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import { space } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { Box } from '../Box'
import { getPaletteColor } from '../utils'

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${themeGet('radius')};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => getPaletteColor(props.borderColor, 'base')(props)};

  ${space} & > ${Box} {
    width: 100%;
    flex: 1 1 auto;
  }

  & input {
    border: 0;
    box-shadow: none;
  }
`

InputGroup.propTypes = {
  ...propTypes.space,
  borderColor: PropTypes.string,
}

InputGroup.defaultProps = {
  borderColor: 'border',
}

export default InputGroup
