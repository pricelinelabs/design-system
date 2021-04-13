import React from 'react'

import { Badge } from '..'

// for Args
// const sizes = { small: 'small', medium: 'medium' }
// const colors = {
//   primary: 'primary',
//   secondary: 'secondary',
//   text: 'text',
//   success: 'success',
//   error: 'error',
//   warning: 'warning',
//   alert: 'alert',
//   caution: 'caution',
//   notify: 'notify',
//   pricePrimary: 'pricePrimary',
//   priceSecondary: 'priceSecondary',
//   promoPrimary: 'promoPrimary',
//   promoSecondary: 'promoSecondary',
//   border: 'border',
//   background: 'background',
// }

export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'Use the <Badge /> component to render a primitive badge.',
      },
    },
  },
}

export const BadgeComponent = () => (
  <Badge color='background.light'>badge</Badge>
)

export const Default = () => <Badge>default</Badge>

Default.storyName = 'default'

export const Primary = () => <Badge color='primary'>primary</Badge>

Primary.storyName = 'primary'

export const PrimaryLight = () => (
  <Badge color='primary.light'>primary.light</Badge>
)

PrimaryLight.storyName = 'primary.light'

export const Secondary = () => <Badge color='secondary'>secondary</Badge>

Secondary.storyName = 'secondary'

export const SecondaryLight = () => (
  <Badge color='secondary.light'>secondary.light</Badge>
)

SecondaryLight.storyName = 'secondary.light'

export const Error = () => <Badge color='error'>error</Badge>

Error.storyName = 'error'

export const ErrorLight = () => <Badge color='error.light'>error.light</Badge>

ErrorLight.storyName = 'error.light'

export const Alert = () => <Badge color='alert'>alert</Badge>

Alert.storyName = 'alert'

export const Text = () => <Badge color='text'>text</Badge>

Text.storyName = 'text'
