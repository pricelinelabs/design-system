import styled from 'styled-components'
import React from 'react'
import {
  space,
  width,
  textAlign,
  SpaceProps,
  WidthProps,
  TextAlignProps,
  AlignItemsProps,
} from 'styled-system'

import { ColorProps } from '../@types/colorProps'
import { applyVariations, color, boxShadow } from '../utils'
import { deprecatedPropType } from '../utils'
import { ThemeProps } from '../@types/theme'

export type BoxShadowSize = 'sm' | 'md' | 'lg' | 'xl'

export interface BoxProps
  extends SpaceProps,
    WidthProps,
    TextAlignProps,
    ColorProps,
    ThemeProps {
  /** Size of box shadow */
  boxShadowSize?: BoxShadowSize
  /** @deprecated Use 'textAlign' instead */
  align?: AlignItemsProps['alignItems']
  className?: string
  style?: React.CSSProperties
}

/**
 * A low-level layout component for setting width, margin, padding, and color
 */
export const Box = styled.div<BoxProps>`
  ${space} ${width} ${textAlign} ${boxShadow as never}
  ${color}
  ${applyVariations('Box') as never}
` as React.FunctionComponent<BoxProps>

/**
 * We can keep the regular prop types around for deprecation warnings at runtime
 */
Box.propTypes = {
  align: deprecatedPropType('textAlign') as never,
}

Box.displayName = 'Box'

export default Box