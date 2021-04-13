import React from 'react'
import { Box, Card } from '..'

export default {
  title: 'Card',
  component: Card,
}

export const BoxShadowsWithDefaultBorder = () => (
  <Box>
    <Card
      boxShadowSize='sm'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      borderWidth={1}
    >
      Small Shadow
    </Card>
    <Card
      boxShadowSize='md'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      borderWidth={1}
    >
      Medium Shadow
    </Card>
    <Card
      boxShadowSize='lg'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      borderWidth={1}
    >
      Large Shadow
    </Card>
    <Card
      boxShadowSize='xl'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      borderWidth={1}
    >
      XLarge Shadow
    </Card>
  </Box>
)

BoxShadowsWithDefaultBorder.storyName = 'Box Shadows with default border'

export const BoxShadowsWithFocused2PxBorder = () => (
  <Box>
    <Card
      boxShadowSize='sm'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      borderWidth={2}
    >
      Small Shadow
    </Card>
    <Card
      boxShadowSize='md'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      borderWidth={2}
    >
      Medium Shadow
    </Card>
    <Card
      boxShadowSize='lg'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      borderWidth={2}
    >
      Large Shadow
    </Card>
    <Card
      boxShadowSize='xl'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      borderWidth={2}
    >
      XLarge Shadow
    </Card>
  </Box>
)

BoxShadowsWithFocused2PxBorder.storyName = 'Box Shadows with focused 2px border'

export const BoxShadowsWithVaryingBorderRadii = () => (
  <Box>
    <Card
      boxShadowSize='sm'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      borderRadius={0}
    >
      Small Shadow - 0px
    </Card>
    <Card
      boxShadowSize='md'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      borderRadius={10}
    >
      Medium Shadow - 10px
    </Card>
    <Card
      boxShadowSize='lg'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      borderRadius={20}
    >
      Large Shadow - 20px
    </Card>
    <Card
      boxShadowSize='xl'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      borderRadius='30px'
    >
      XLarge Shadow - 30px
    </Card>
  </Box>
)

BoxShadowsWithVaryingBorderRadii.storyName =
  'Box Shadows with varying border radii'
