import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Box } from 'pcln-design-system'

const StyledOverlay = styled(Box)`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${({ popoverOpen, overlayOpacity }) =>
    popoverOpen ? overlayOpacity : 0};
  z-index: ${({ zIndex }) => (zIndex < 0 ? 0 : zIndex)};
  cursor: pointer;
`

const Overlay = ({
  className,
  popoverOpen,
  handleClick,
  overlayOpacity,
  zIndex,
}) => {
  return (
    <StyledOverlay
      className={className}
      aria-hidden='true'
      tabIndex='-1'
      onClick={handleClick}
      popoverOpen={popoverOpen}
      overlayOpacity={overlayOpacity}
      zIndex={zIndex}
      color='background.darkest'
      data-testid='__pcln-popover_Overlay'
    />
  )
}

Overlay.propTypes = {
  className: PropTypes.string,
  popoverOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  overlayOpacity: PropTypes.number,
  zIndex: PropTypes.number,
}

Overlay.defaultProps = {
  popoverOpen: true,
  overlayOpacity: 0,
  zIndex: 101,
}

export default Overlay
