import React from 'react'
import { RatingBadge, Flex } from '..'

export default {
  title: 'RatingBadge',
  component: RatingBadge,
}

export const Default = () => <RatingBadge>9.0</RatingBadge>

export const Colors = () => (
  <Flex width='150px' justifyContent='space-between'>
    <RatingBadge color='primary'>7.6</RatingBadge>
    <RatingBadge color='secondary'>8.1</RatingBadge>
    <RatingBadge color='alert'>9.0</RatingBadge>
  </Flex>
)
