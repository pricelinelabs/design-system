import React from 'react'
import PropTypes from 'prop-types'
import { Close } from 'pcln-icons'
import propTypes from '@styled-system/prop-types'
import pick from 'lodash.pick'
import { ChipContent } from '../ChipContent'
import { ChipLabel } from '../ChipLabel'
import { ChipInput } from '../ChipInput'

const getTitle = ({ disabled, actionTitle }) =>
  `${actionTitle}${disabled ? ' disabled' : ''}`

const FilterChip = ({
  id,
  disabled,
  selected,
  children,
  onClick,
  label,
  showActionIcon,
  actionTitle,
  ...props
}) => (
  <ChipLabel htmlFor={id} {...props}>
    <ChipInput
      type='checkbox'
      role='checkbox'
      id={id}
      data-testid={id}
      disabled={disabled}
      checked={selected}
      onChange={onClick}
    />
    <ChipContent
      label={label}
      disabled={disabled}
      selected={selected}
      action={
        showActionIcon && {
          Icon: Close,
          title: getTitle({ disabled, actionTitle }),
        }
      }
      {...props}
    >
      {children}
    </ChipContent>
  </ChipLabel>
)

FilterChip.displayName = 'FilterChip'

FilterChip.propTypes = {
  ...propTypes.space,
  ...pick(propTypes.typography, ['fontSize']),
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  facet: PropTypes.string,
  label: PropTypes.string,
  bridgeLabel: PropTypes.string,
  BridgeIcon: PropTypes.node,
  Icon: PropTypes.node,
  showActionIcon: PropTypes.bool,
  Image: PropTypes.object,
  actionTitle: PropTypes.string,
}

FilterChip.defaultProps = {
  color: 'primary',
  actionTitle: 'Close',
}

export default FilterChip
