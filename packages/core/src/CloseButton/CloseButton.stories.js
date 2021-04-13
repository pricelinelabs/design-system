import React from 'react'
import { action } from '@storybook/addon-actions'

import { Button, CloseButton } from '..'
import ForwardRefDemo from '../../storybook/utils/ForwardRefsDemo'

export default {
  title: 'CloseButton',
  component: CloseButton,
}

export const WithClickHandler = () => (
  <CloseButton color='background.darkest' onClick={action('clicked')} />
)

WithClickHandler.storyName = 'with click handler'

export const ForwardRefs = () => (
  <ForwardRefDemo
    refChild={(dsRef) => (
      <>
        <CloseButton
          color='background.darkest'
          onClick={action('clicked')}
          dsRef={dsRef}
        />
        <br />
        <Button onClick={() => dsRef.current.focus()} mt={4}>
          Click to focus button via ref
        </Button>
      </>
    )}
  />
)

ForwardRefs.storyName = 'Forward refs'
