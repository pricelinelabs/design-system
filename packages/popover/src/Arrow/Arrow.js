import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getPaletteColor } from 'pcln-design-system'

const PopoverArrow = ({
  arrowProps,
  placement,
  borderColor,
  color,
  className,
}) => (
  <Arrow
    className={className}
    style={arrowProps.style}
    data-placement={placement}
    borderColor={borderColor}
    color={color}
    aria-hidden='true'
    data-testid='popover-arrow'
  >
    <div ref={arrowProps.ref} />
  </Arrow>
)

const ArrowAlignment = () =>
  `
    &[data-placement*="right"] {
      left: 0;
    }
    &[data-placement*="left"] {
      right: 0;
    }
    &[data-placement*="top"] {
      bottom: 0;
    }
    &[data-placement*="bottom"] {
      top: 0;
    }
    &[data-placement*="bottom"]::before,
    &[data-placement*="right"]::before,
    &[data-placement*="top"]::after,
    &[data-placement*="left"]::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      margin: auto;
      border-style: solid;
      transform-origin: 0 0;
      transform: rotate(-45deg);
      border-width: 6px;
    }
  `

const ArrowPlacement = ({ color, borderColor, ...props }) => {
  const bgColor = getPaletteColor(color, 'base')(props)
  const brColor = getPaletteColor(borderColor, 'base')(props)

  return `
    &[data-placement*="right"]::before {
      left: 8px;
      border-color: ${bgColor} transparent transparent ${bgColor};
      box-shadow: -0.75px -0.75px 0px 0.25px ${brColor};
    }
    &[data-placement*="left"]::after {
      right: 13px;
      border-color: transparent ${bgColor} ${bgColor} transparent;
      box-shadow: 0.75px 0.75px 0px 0.25px ${brColor};
    }
    &[data-placement*="top"]::after {
      top: -16px;
      margin-left: -5px;
      border-color: transparent transparent ${bgColor} ${bgColor};
      box-shadow: -0.75px 0.75px 0px 0.25px ${brColor};
    }
    &[data-placement*="bottom"]::before {
      top: 16px;
      margin-left: -5px;
      border-color: ${bgColor} ${bgColor} transparent transparent;
      box-shadow: 0.75px -0.75px 0px 0.25px ${brColor};
    }
  `
}

const Arrow = styled.span`
  position: absolute;
  ${ArrowAlignment}
  ${ArrowPlacement}
`

PopoverArrow.propTypes = {
  arrowProps: PropTypes.shape({
    ref: PropTypes.func,
    style: PropTypes.object,
  }).isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  placement: PropTypes.string,
}

PopoverArrow.defaultProps = {
  placement: 'top',
}

export default PopoverArrow
