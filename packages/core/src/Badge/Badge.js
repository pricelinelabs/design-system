import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { themeGet } from '@styled-system/theme-get'
import {
  applySizes,
  applyVariations,
  color,
  deprecatedColorValue,
  getPaletteColor,
} from '../utils'

const sizes = {
  small: css`
    ${themeGet('textStyles.small')}
    line-height: ${themeGet('lineHeights.display')};
  `,
  medium: css`
    ${themeGet('textStyles.display0')}
    line-height: ${themeGet('lineHeights.standard')};
  `,
}

const Badge = styled.div`
  border-radius: 99999px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
  ${({ theme }) => applySizes(sizes, undefined, theme.mediaQueries)};
  ${applyVariations('Badge')};
  ${space} ${color};

  ${(props) => {
    return props.color === 'text'
      ? `background-color: ${getPaletteColor('light')({
          ...props,
          color: 'background',
        })};`
      : ''
  }}
`

Badge.displayName = 'Badge'

Badge.propTypes = {
  ...propTypes.space,
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: deprecatedColorValue(),
}

Badge.defaultProps = {
  color: 'text',
  size: 'medium',
  px: 2,
  py: 1,
}

export default Badge
