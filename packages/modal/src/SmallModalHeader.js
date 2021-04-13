import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from 'pcln-design-system'

const HeaderBar = styled(Box)`
  height: 8px;
`

const SmallModalHeader = ({ color }) => <HeaderBar color={color} />

SmallModalHeader.displayName = SmallModalHeader

SmallModalHeader.propTypes = {
  color: PropTypes.string,
}

SmallModalHeader.defaultProps = {
  color: 'secondary',
}

export default SmallModalHeader
