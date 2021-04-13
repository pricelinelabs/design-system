import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { width, space } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import pick from 'lodash.pick'
import { themeGet } from '@styled-system/theme-get'
import {
  applySizes,
  applyVariations,
  getPaletteColor,
  getTextColorOn,
  deprecatedColorValue,
} from '../utils'

const sizes = {
  small: css`
    font-size: ${themeGet('fontSizes.0')}px;
    padding: 7px 12px;
  `,
  medium: css`
    font-size: ${themeGet('fontSizes.1')}px;
    padding: 9.5px 18px;
  `,
  large: css`
    font-size: ${themeGet('fontSizes.2')}px;
    padding: 12px 22px;
  `,
}

const variations = {
  fill: css`
    background-color: ${(props) =>
      getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    color: ${(props) =>
      getTextColorOn(props.disabled ? 'light' : 'base')(props)};

    &:hover {
      background-color: ${(props) =>
        getPaletteColor(props.disabled ? 'light' : 'dark')(props)};
      ${(props) =>
        props.disabled ? '' : `color: ${getTextColorOn('dark')(props)};`}
    }
    &:focus {
      outline: ${(props) =>
        `0px solid ${getPaletteColor(props.disabled ? '' : 'dark')(props)}`};
      box-shadow: ${(props) =>
        ` 0 0 0 2px  ${getPaletteColor(props.disabled ? '' : 'dark')(props)}`};
    }
  `,
  link: css`
    -webkit-font-smoothing: inherit;
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: ${getPaletteColor('base')};
    line-height: ${(props) => props.theme.lineHeights.standard};
    vertical-align: inherit;
    padding: 0;
    background-color: transparent;
    &:hover {
      color: ${getPaletteColor('dark')};
      text-decoration: underline;
    }
  `,
  outline: css`
    color: ${(props) =>
      getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    box-shadow: inset 0 0 0 2px
      ${(props) => getPaletteColor(props.disabled ? 'light' : 'base')(props)};
    background-color: transparent;

    &:hover {
      background-color: transparent;
      ${(props) =>
        props.disabled
          ? ''
          : `
      color: ${getPaletteColor('dark')(props)};
      box-shadow: inset 0 0 0 2px ${getPaletteColor('dark')(props)};
    `}
    }
  `,
  plain: css`
    background-color: transparent;
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('background.light')};
      color: ${getPaletteColor('dark')};
    }
    &:focus {
      outline: 0px solid ${getPaletteColor('dark')};
      box-shadow: 0 0 0 2px ${getPaletteColor('dark')};
    }
  `,
  subtle: css`
    background-color: ${getPaletteColor('background.base')};
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('background.light')};
      color: ${getPaletteColor('dark')};
    }
    &:focus {
      outline: 0px solid ${getPaletteColor('dark')};
      box-shadow: 0 0 0 2px ${getPaletteColor('dark')};
    }
  `,
  lightFill: css`
    background-color: ${getPaletteColor('light')};
    color: ${getPaletteColor('base')};
    &:hover {
      background-color: ${getPaletteColor('light')};
      color: ${getPaletteColor('dark')};
    }
    &:focus {
      outline: ${(props) =>
        `0px solid ${getPaletteColor(props.disabled ? '' : 'dark')(props)}`};
      box-shadow: ${(props) =>
        ` 0 0 0 2px  ${getPaletteColor(props.disabled ? '' : 'dark')(props)}`};
    }
  `,
}

export const buttonStyles = css`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 1.5;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  border-radius: ${(props) => props.theme.radius};
  border-width: 0;
  border-style: solid;

  ${({ theme }) => applySizes(sizes, 'medium', theme.mediaQueries)};
  ${applyVariations('Button', variations)};
  ${width};
  ${space};

  &:disabled {
    cursor: not-allowed;
    color: ${getPaletteColor('text.light')};
    background-color: ${getPaletteColor('background.base')};
  }
`

/**
 * Use the <Button /> component to render a primitive button. Use the `variation` prop to change the look of the button.
 */
const Button = styled.button.attrs(
  ({ width, fullWidth, title, 'aria-label': ariaLabel }) => ({
    width: fullWidth ? 1 : width,
    'aria-label': ariaLabel || title,
  })
)`
  ${buttonStyles}
`

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ...pick(propTypes.layout, ['width']),
  ...propTypes.space,
  variation: PropTypes.oneOf(Object.keys(variations)),
  color: deprecatedColorValue(),
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  variation: 'fill',
}

Button.displayName = 'Button'

export default Button
