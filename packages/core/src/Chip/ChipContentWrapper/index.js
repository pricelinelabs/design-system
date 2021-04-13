import styled, { css } from 'styled-components'
import { space, fontSize } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import { getPaletteColor, applySizes } from '../../utils'
import { Box } from '../../Box'

const getSizes = ({ hasChildren }) => ({
  sm: css`
    padding-left: 8px;
    padding-right: 8px;
    ${hasChildren ? '' : 'height: 32px;'}
    font-size: ${themeGet('fontSizes.0')}px;
  `,
  md: css`
    padding-left: 16px;
    padding-right: 16px;
    ${hasChildren ? '' : 'height: 40px;'}
    font-size: ${themeGet('fontSizes.1')}px;
  `,
})

const getColor = ({ disabled }) => (disabled ? 'text.light' : 'base')

const getCursor = ({ disabled }) => (disabled ? 'default' : 'pointer')

const getBorderColor = (props) =>
  props.disabled
    ? 'transparent'
    : getPaletteColor(props.selected ? 'base' : 'border.base')(props)

const getBackgroundColor = (props) =>
  props.disabled
    ? 'background.light'
    : props.selected
    ? 'light'
    : 'background.lightest'

const ChipContentWrapper = styled(Box)`
  ${(props) => `
    cursor: ${getCursor(props)};
    color: ${getPaletteColor(getColor(props))(props)};
    background-color: ${getPaletteColor(getBackgroundColor(props))(props)};
    border: 1px solid ${getBorderColor(props)};
    ${
      props.disabled
        ? ''
        : `
      &:hover {
        border: 1px solid ${getPaletteColor('base')(props)};
        background-color: ${getPaletteColor('background.lightest')(props)};
      }
    `
    }
  `}
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  position: relative;
  border-radius: 2px;
  ${({ theme, hasChildren }) =>
    applySizes(getSizes({ hasChildren }), undefined, theme.mediaQueries)};
  ${space};
  ${fontSize};
`

export { ChipContentWrapper }
