import styled, { css } from 'styled-components'
import { space, width } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import pick from 'lodash.pick'
import { themeGet } from '@styled-system/theme-get'

/**
 * Gets the color of a palette shade, using props.color as
 * the palette color. If palette shade does not exist, falls
 * back to theme.colors
 *
 * @see This function is a copy of the core function located
 * in /core/src/utils.js in order to avoid circular issues
 *
 * @example getPaletteColor('dark')(props) => will return the dark
 * shade of theme.palette[props.color].dark
 * @example getPaletteColor('primary.base')(props) => theme.palette.primary.base
 * @example getPaletteColor('primary', 'base')(props) => theme.palette.primary.base
 */
const getPaletteColor = (...args) => (props) => {
  let color = args.length === 2 ? args[0] : props.color
  let shade = args.length === 2 ? args[1] : args[0]

  const colorShade = shade.match(/^([a-z]+)\.([a-z]+)$/)

  if (colorShade) {
    color = colorShade[0]
    shade = colorShade[1]
  }

  return (
    themeGet(`palette.${color}.${shade}`)(props) ||
    themeGet(`palette.${color}`)(props) ||
    themeGet(`colors.${color}`)(props) ||
    color
  )
}

const color = (props) => {
  if (props.color) {
    return css`
      color: ${getPaletteColor('base')(props)};
    `
  }

  return null
}

const Svg = styled('svg')`
  flex: none;
  line-height: 1;

  ${space}
  ${width}
  ${color}
`

Svg.propTypes = {
  ...propTypes.space,
  ...pick(propTypes.layout, ['width']),
  ...propTypes.color,
}

export default Svg
