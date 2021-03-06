import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeGet, space, fontSize } from 'styled-system'
import {
  applySizes,
  applyVariations,
  getPaletteColor,
  getTextColorOn,
  deprecatedColorValue,
  deprecatedPropType,
} from '../utils'

const sizes = {
  small: css`
    ${themeGet('textStyles.small')}
    line-height: ${themeGet('lineHeights.display')};
    min-height: 20px;
    & > svg {
      width: 12px;
      height: 12px;
    }
  `,
  medium: css`
    ${themeGet('textStyles.display0')}
    line-height: ${themeGet('lineHeights.standard')};
    min-height: 24px;
    & > svg {
      width: 14px;
      height: 14px;
    }
  `,
}

const variations = {
  outline: css`
    color: ${getPaletteColor('base')};
    border-color: ${(props) =>
      getPaletteColor(props.borderColor, 'base')(props)};
    ${(props) =>
      props.bg
        ? `background-color: ${getPaletteColor(props.bg, 'base')(props)};`
        : ''}
  `,
  fill: css`
    color: ${getTextColorOn('base')};
    background-color: ${getPaletteColor('base')};
    border-color: ${getPaletteColor('base')};
  `,
  // todo: remove this copy of the fill variation in v4 as its name does not follow conventions
  solid: css`
    color: ${getTextColorOn('base')};
    background-color: ${getPaletteColor('base')};
    border-color: ${getPaletteColor('base')};
  `,
}

const Stamp = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  min-height: 24px;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  color: ${getPaletteColor('base')};

  ${({ theme }) => applySizes(sizes, undefined, theme.mediaQueries)};
  ${applyVariations('Stamp', variations)};
  ${space} ${fontSize};
`

Stamp.displayName = 'Stamp'

Stamp.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(sizes)),
    PropTypes.arrayOf(PropTypes.oneOf(Object.keys(sizes))),
  ]),
  variation: PropTypes.oneOf(Object.keys(variations)),
  color: deprecatedColorValue(),
  bg: deprecatedPropType('color'),
  borderColor: deprecatedColorValue(),
}

Stamp.defaultProps = {
  px: 1,
  py: 0,
  color: 'border.light',
  bg: 'background.light',
  borderColor: 'border.base',
  size: 'medium',
  variation: 'outline',
}

export default Stamp
