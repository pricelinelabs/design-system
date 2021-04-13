import styled from 'styled-components'
import { width, height, space } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import pick from 'lodash.pick'

const Image = styled.img`
  display: block;
  max-width: 100%;
  ${height};
  ${space};
  ${width};
`

Image.displayName = 'Image'

Image.propTypes = {
  ...pick(propTypes, ['height', 'width']),
  ...propTypes.space,
}

export default Image
