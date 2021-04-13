import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../Box'
import styled, { withTheme } from 'styled-components'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
} from '../utils'

const arrowShadow = (props) => {
  return props.top
    ? {
        'box-shadow':
          '-9.66px 9.66px 8px 0 rgba(0,0,0,0.04), -4px 4px 4px 0 rgba(0,0,0,0.08)',
      }
    : {
        'box-shadow':
          '-1.41px 1.41px 1px 0 rgba(0,0,0,0.01), -3.66px 3.66px 8px 0 rgba(0,0,0,0.04)',
      }
}

const arrowAlign = (props) => {
  return props.left
    ? { left: '16px', 'margin-left': props.top ? 0 : '15px' }
    : props.center
    ? { left: '50%', 'margin-left': props.top ? '-7px' : '7px' }
    : { right: '16px', 'margin-right': props.top ? '5px' : '-10px' }
}

const arrowPosition = (props) => {
  return props.top
    ? {
        'transform-origin': '0 0',
        transform: 'rotate(-45deg)',
        bottom: '-10px',
      }
    : {
        'transform-origin': '0 0',
        transform: 'rotate(-225deg)',
        top: '0',
      }
}

const arrow = (props) => {
  return props.top
    ? {
        'transform-origin': '0 0',
        transform: 'rotate(-45deg)',
      }
    : {
        'transform-origin': '0 0',
        transform: 'rotate(-225deg)',
      }
}

const tooltipPosition = (props) => {
  return props.top ? { bottom: '-8px' } : { top: 0 }
}

const tooltipAlign = (props) => {
  return props.right
    ? { right: 0 }
    : props.center
    ? { left: '50%', width: 'auto', transform: 'translateX(-50%)' }
    : null
}

const TooltipContent = styled(Box)`
  display: inline;
  box-shadow: ${({ theme }) => theme.boxShadows[1]};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  position: absolute;
  border-radius: ${({ theme }) => theme.radii[1]}px;
  box-sizing: border-box;
  text-align: center;

  ${tooltipPosition} ${tooltipAlign} &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent
      ${(props) => getPaletteColor(props.color, 'base')(props)}
      ${(props) => getPaletteColor(props.color, 'base')(props)};

    ${arrow} ${arrowPosition} ${arrowAlign} ${arrowShadow};
  }

  ${applyVariations('Tooltip')}
`

const propTypes = {
  children: PropTypes.any.isRequired,
  color: deprecatedColorValue(),
  bottom: PropTypes.bool,
  top: PropTypes.bool,
  center: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

const defaultProps = {
  position: 'bottom',
  color: 'background.lightest',
  zIndex: 'auto',
}

const Tooltip = ({ children, ...props }) => {
  return (
    <div style={{ position: 'relative', zIndex: props.zIndex }}>
      <TooltipContent p={2} mb={3} mt={2} {...props}>
        {children}
      </TooltipContent>
    </div>
  )
}

Tooltip.propTypes = propTypes
Tooltip.defaultProps = defaultProps

export default withTheme(Tooltip)
