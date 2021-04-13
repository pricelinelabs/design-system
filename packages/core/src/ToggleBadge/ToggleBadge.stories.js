import React from 'react'

import { Button, ToggleBadge } from '..'
import ForwardRefDemo from '../../storybook/utils/ForwardRefsDemo'

export default {
  title: 'ToggleBadge',
  component: ToggleBadge,
  parameters: {
    docs: {
      description: {
        component:
          'Use the <ToggleBadge /> component to render a primitive ToggleBadge.',
      },
    },
  },
}

export const ToggleBadgeComponent = () => <ToggleBadge>ToggleBadge</ToggleBadge>

export const Selected = () => (
  <ToggleBadge selected>Selected - Badge</ToggleBadge>
)
export const Unselected = () => <ToggleBadge>Un - Selected - Badge</ToggleBadge>

export const UnselectedWithDifferentBackgroundColor = () => (
  <ToggleBadge unSelectedBg='yellow'>Un - Selected - Badge</ToggleBadge>
)

UnselectedWithDifferentBackgroundColor.storyName =
  'Unselected with different background color'

export const AGroup = () => (
  <div>
    <ToggleBadge selected>Flight + Hotel</ToggleBadge>
    <ToggleBadge>Flight + Hotel + Car</ToggleBadge>
    <ToggleBadge>Flight + Car</ToggleBadge>
  </div>
)

AGroup.storyName = 'A group'

export const ForwardRefs = () => (
  <ForwardRefDemo
    refChild={(dsRef) => (
      <>
        <div>
          <ToggleBadge selected>Flight + Hotel</ToggleBadge>
          <ToggleBadge ref={dsRef}>Flight + Hotel + Car</ToggleBadge>
          <ToggleBadge>Flight + Car</ToggleBadge>
        </div>
        <Button onClick={() => dsRef.current.focus()} mt={4}>
          Click to focus second badge via ref
        </Button>
      </>
    )}
  />
)

ForwardRefs.storyName = 'Forward refs'
