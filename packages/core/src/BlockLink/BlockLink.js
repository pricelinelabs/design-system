import styled from 'styled-components'

import { Link } from '../Link'

const BlockLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`

BlockLink.displayName = 'BlockLink'

BlockLink.propTypes = Link.propTypes

export default BlockLink
