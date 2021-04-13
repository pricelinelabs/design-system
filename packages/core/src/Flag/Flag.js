import React from 'react'
import styled, { withTheme } from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from '../Flex'
import { Hide } from '../Hide'
import { Box } from '../Box'
import {
  applyVariations,
  getPaletteColor,
  hasPaletteColor,
  color,
  deprecatedColorValue,
} from '../utils'

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const shadowColor = (props) => {
  const darkColor = hasPaletteColor(props)
    ? getPaletteColor('dark')(props)
    : themeGet(`colors.dark${capitalize(props.color)}`)(props)

  return {
    backgroundImage: !darkColor
      ? `
        linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.5) 50%),
        linear-gradient(45deg, transparent 50%, ${props.color} 50%)
      `
      : `linear-gradient(45deg, transparent 50%, ${darkColor} 50%)`,
  }
}

const FlagShadow = styled(Box)`
  width: 8px;
  height: 8px;
  align-self: flex-end;
  background-color: inherit;
  ${shadowColor};
  position: absolute;
  bottom: 0;
`

const FlagRight = styled(Box)`
  flex: none;
  background-color: ${(props) => getPaletteColor('base')(props) || props.color};
  border-radius: 0 ${themeGet('radius')} ${themeGet('radius')} 0;
  /* for 32 x 8 triangle */
  transform: skew(-14deg);
  position: relative;
  z-index: 1;
`

const flexAuto = (props) =>
  props.flexAuto
    ? {
        flex: '1 1 auto',
      }
    : null

const FlagBody = styled(Box)`
  font-size: ${themeGet('fontSizes.0')}px;
  border-radius: 0 0 ${themeGet('radius')} 0;
  ${flexAuto} ${color};
  z-index: 2;
`

const RelativeHide = styled(Hide)`
  position: relative;
`

const StyledFlex = styled(Flex)`
  ${applyVariations('Flag')}
`

const Flag = ({ color, children, pl, pr, py, width, ...props }) => (
  <StyledFlex width={width} {...props} ml={[0, -2]}>
    <RelativeHide xs>
      <FlagShadow
        width='4px'
        mr={-2}
        mb={-2}
        color={hasPaletteColor({ color, ...props }) ? color : ''}
      />
    </RelativeHide>
    <FlagBody flexAuto={!!width} color={color} pl={pl} pr={pr} py={py}>
      {children}
    </FlagBody>
    <FlagRight
      width='18px'
      color={hasPaletteColor({ color, ...props }) ? color : ''}
      ml={-2}
    />
  </StyledFlex>
)

Flag.propTypes = {
  color: deprecatedColorValue(),
  ...propTypes.space,
}

Flag.defaultProps = {
  color: 'secondary',
  pl: [1, 3],
  pr: null,
  py: [1, 2],
}

Flag.displayName = 'Flag'

export default withTheme(Flag)
