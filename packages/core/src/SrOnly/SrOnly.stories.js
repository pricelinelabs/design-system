import React from 'react'
import { SrOnly, Text, BackgroundImage, Box } from '..'

const image =
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'

export default {
  title: 'SrOnly',
  component: SrOnly,
}

export const ScreenreaderDescriptionOfContent = () => (
  <Box>
    <SrOnly>
      <Text>
        I should not be displayed on the screen, BUT I should be read out by the
        screen reader
      </Text>
    </SrOnly>
    <BackgroundImage image={image} width='320px' height={'200px'} />
    <Text pt={2}>Turn ON screenreader...</Text>
  </Box>
)

ScreenreaderDescriptionOfContent.storyName =
  'Screenreader description of content'
