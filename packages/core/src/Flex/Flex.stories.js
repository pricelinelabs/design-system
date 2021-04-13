import React from 'react'
import { Flex, Box } from '..'

export default {
  title: 'Flex',
  component: Flex,
}

export const Basic = () => (
  <Flex alignItems='center'>
    <Box width={1 / 2} p={3} color='primary'>
      Flex
    </Box>
    <Box width={1 / 2} p={1} color='secondary'>
      Box
    </Box>
  </Flex>
)

export const Wrap = () => (
  <Flex flexWrap='wrap'>
    <Box width={[1, 1 / 2]} p={3} color='primary'>
      Flex
    </Box>
    <Box width={[1, 1 / 2]} p={1} color='secondary'>
      Wrap
    </Box>
  </Flex>
)

export const Justify = () => (
  <Flex justifyContent='space-around'>
    <Box width={1 / 3} p={2} color='primary'>
      Flex
    </Box>
    <Box width={1 / 3} p={2} color='secondary'>
      Justify
    </Box>
  </Flex>
)
