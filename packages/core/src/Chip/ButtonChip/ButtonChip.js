import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import pick from 'lodash.pick'
import { ChevronDown } from 'pcln-icons'
import { ChipContent } from '../ChipContent'
import { ChipContentWrapper } from '../ChipContentWrapper'
import { Button } from '../../Button'
import { getPaletteColor } from '../../utils'

const ChipButton = styled(Button)`
  border: none;
  padding: 0;
  &:focus {
    box-shadow: none;
    outline: none;
  }
  &:focus > ${ChipContentWrapper} {
    box-shadow: 0 0 0 1px ${getPaletteColor('base')};
    border-color: ${getPaletteColor('base')};
  }
`

const getTitle = ({ disabled, expanded }) =>
  disabled ? 'Disabled' : expanded ? 'Collapse' : 'Expand'

const ButtonChip = ({
  id,
  m,
  disabled,
  expanded,
  children,
  onClick,
  label,
  showActionIcon,
  ...props
}) => (
  <ChipButton
    id={id}
    data-testid={id}
    disabled={disabled}
    onClick={onClick}
    aria-expanded={expanded}
    m={m}
  >
    <ChipContent
      label={label}
      disabled={disabled}
      selected={expanded}
      action={
        showActionIcon && {
          Icon: ChevronDown,
          title: getTitle({ disabled, expanded }),
        }
      }
      {...props}
    >
      {children}
    </ChipContent>
  </ChipButton>
)

ButtonChip.displayName = 'ButtonChip'

ButtonChip.propTypes = {
  ...propTypes.space,
  ...pick(propTypes.typography, ['fontSize']),
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  facet: PropTypes.string,
  label: PropTypes.string,
  bridgeLabel: PropTypes.string,
  BridgeIcon: PropTypes.node,
  Icon: PropTypes.node,
  showActionIcon: PropTypes.bool,
  Image: PropTypes.object,
}

ButtonChip.defaultProps = {
  color: 'primary',
}

export default ButtonChip
