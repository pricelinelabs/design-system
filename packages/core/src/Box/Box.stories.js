import React from 'react'

import { Box, Text } from '..'
import { argTypes, defaultArgs } from './Box.stories.args'

export default {
  title: 'core / Box',
  component: Box,
  args: defaultArgs,
  argTypes,

  parameters: {
    docs: {
      description: {
        component: `A low-level layout component for setting color, display, height, margin, maxHeight, maxWidth, minHeight, minWidth, padding, size, textAlign, and width.`,
      },
    },
  },
}

const Template = (args) => <Box {...args} />

export const _Box = Template.bind({})

export const DisplayAndSize = Template.bind({})
DisplayAndSize.storyName = 'Display and Size'
DisplayAndSize.args = {
  color: 'alert.base',
  display: ['none', null, 'block'],
  size: 250,
}

export const Padding = Template.bind({})
Padding.args = {
  p: 4,
  color: 'background.base',
}

export const Height = Template.bind({})
Height.args = {
  color: 'warning.base',
  height: [250, 350, 450, 550],
  width: [150, 250, 350, 450],
}

export const MaxAndMinValues = Template.bind({})
MaxAndMinValues.storyName = 'Min and Max Values'
MaxAndMinValues.args = {
  color: 'priceSecondary.base',
  maxHeight: [300, null, 400, null, 500],
  maxWidth: [300, null, 400, null, 500],
  minHeight: [100, null, 200, null, 300],
  minWidth: [300, null, 200, null, 100],
}

export const Margin = Template.bind({})
Margin.args = {
  m: 3,
  color: 'background.base',
}

export const Color = Template.bind({})
Color.args = {
  color: 'primary.base',
}

export const BoxShadow = Template.bind({})
BoxShadow.args = {
  boxShadowSize: 'sm',
  p: 2,
  mb: '42px',
  color: 'primary.base',
}

export const Size = Template.bind({})
Size.args = {
  color: 'primary.base',
  size: 200,
}

const DimsChildren = () => <Text color='text.lightest'>Box Dimensions</Text>

export const Width = Template.bind({})
Width.args = {
  color: 'primary.base',
  width: 1 / 2,
  children: <DimsChildren />,
}

export const PixelWidth = Template.bind({})
PixelWidth.args = {
  color: 'primary.base',
  width: 256,
  children: <DimsChildren />,
}

export const VwWidth = Template.bind({})
VwWidth.storyName = 'Viewport Width unit'
VwWidth.args = {
  color: 'primary.base',
  width: '75vw',
  children: <DimsChildren />,
}

export const DirectionalPadding = () => (
  <Box p={3}>
    <Box m={1} pt={3} color='primary'>
      Padding Top
    </Box>
    <Box m={1} pr={3} color='primary'>
      Padding Right
    </Box>
    <Box m={1} pb={3} color='primary'>
      Padding Bottom
    </Box>
    <Box m={1} pl={3} color='primary'>
      Padding Left
    </Box>
    <Box m={1} px={3} color='primary'>
      Padding X-Axis
    </Box>
    <Box m={1} py={3} color='primary'>
      Padding Y-Axis
    </Box>
  </Box>
)

export const DirectionalMargin = () => (
  <Box p={3}>
    <Box mt={3} color='primary'>
      Margin Top
    </Box>
    <Box mr={3} color='primary'>
      Margin Right
    </Box>
    <Box mb={3} color='primary'>
      Margin Bottom
    </Box>
    <Box ml={3} color='primary'>
      Margin Left
    </Box>
    <Box mx={3} color='primary'>
      Margin X-Axis
    </Box>
    <Box my={3} color='primary'>
      Margin Y-Axis
    </Box>
  </Box>
)
