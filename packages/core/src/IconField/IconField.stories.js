import React from 'react'
import { IconField, Input, Select, IconButton } from '..'
import {
  Calendar as CalendarIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  Visibility as VisibilityIcon,
} from 'pcln-icons'
import { action } from '@storybook/addon-actions'

export default {
  title: 'IconField',
  component: IconField,
}

export const IconAndInput = () => (
  <IconField>
    <CalendarIcon color='blue' />
    <Input placeholder='Choose Date' />
  </IconField>
)

IconAndInput.storyName = 'Icon and Input'

export const InputAndIcon = () => (
  <IconField>
    <Input placeholder='Choose Date' />
    <CalendarIcon color='blue' />
  </IconField>
)

InputAndIcon.storyName = 'Input and Icon'

export const InputWithMultipleIcons = () => (
  <IconField>
    <CheckIcon color='success' />
    <VisibilityIcon color='text.light' />
    <Input placeholder='Choose Date' />
    <VisibilityIcon color='text.light' />
    <CheckIcon color='success' />
  </IconField>
)

InputWithMultipleIcons.storyName = 'Input with multiple Icons'

export const InputAndIconButton = () => (
  <IconField>
    <Input placeholder='Choose Date' />
    <IconButton
      icon={<CloseIcon />}
      size={24}
      color='gray'
      title='Clear text'
      onClick={action('Icon button clicked')}
    />
  </IconField>
)

InputAndIconButton.storyName = 'Input and Icon Button'

export const IconInputAndIcon = () => (
  <IconField>
    <CalendarIcon color='blue' />
    <Input placeholder='Choose Date' />
    <CheckIcon color='green' />
  </IconField>
)

IconInputAndIcon.storyName = 'Icon, Input, and Icon'

export const IconInputAndIconButton = () => (
  <IconField>
    <CalendarIcon color='blue' />
    <Input placeholder='Choose Date' />
    <IconButton
      icon={<CloseIcon />}
      size={24}
      color='gray'
      title='Clear text'
      onClick={action('Icon button clicked')}
    />
  </IconField>
)

IconInputAndIconButton.storyName = 'Icon, Input and Icon Button'

export const IconAndSelect = () => (
  <IconField>
    <CalendarIcon color='blue' />
    <Select>
      <option>Choose Date</option>
      <option>January 2019</option>
    </Select>
  </IconField>
)

IconAndSelect.storyName = 'Icon and Select'
