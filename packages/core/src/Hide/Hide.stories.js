import React from 'react'
import { Hide, Box, Flex } from '..'

export default {
  title: 'Hide',
  component: Hide,
}

export const _Hide = () => (
  <Flex justifyContent='space-between'>
    <Hide xs sm md lg xl xxl>
      <Box p={2} color='warning'>
        Hide xs
      </Box>
    </Hide>
    <Hide sm md lg xl xxl>
      <Box p={2} color='alert'>
        Hide sm
      </Box>
    </Hide>
    <Hide md lg xl xxl>
      <Box p={2} color='success'>
        Hide md
      </Box>
    </Hide>
    <Hide lg xl xxl>
      <Box p={2} color='primary'>
        Hide lg
      </Box>
    </Hide>
    <Hide xl xxl>
      <Box p={2} color='promoPrimary'>
        Hide xl
      </Box>
    </Hide>
    <Hide xxl>
      <Box p={2} color='promoSecondary'>
        Hide xxl
      </Box>
    </Hide>
    <Hide print>
      <Box p={2} color='caution'>
        Hide print
      </Box>
    </Hide>
    <Hide.text sm>Hide.text (inline)</Hide.text>
  </Flex>
)
