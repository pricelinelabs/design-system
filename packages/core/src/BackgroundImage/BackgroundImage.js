import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { width, height } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import pick from 'lodash.pick'
import { applyVariations, getPaletteColor } from '../utils'

const variations = {
  parallax: css`
    background-attachment: fixed;
  `,
  static: css`
    background-attachment: scroll;
  `,
}

const image = (props) =>
  props.image ? { backgroundImage: `url(${props.image})` } : null

const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${getPaletteColor('border.light')};
  ${applyVariations('BackgroundImage', variations)}
  ${image} ${height} ${width};
`

BackgroundImage.defaultProps = {
  variation: 'static',
}

BackgroundImage.propTypes = {
  ...pick(propTypes, ['width', 'height']),
  /** background-image url */
  image: PropTypes.string,
  variation: PropTypes.oneOf(Object.keys(variations)),
}

BackgroundImage.displayName = 'BackgroundImage'

export default BackgroundImage
