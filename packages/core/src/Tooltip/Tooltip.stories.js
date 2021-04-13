import React from 'react'
import { Tooltip, InputField, Box, Flex } from '..'
import styled from 'styled-components'

const FlexColumn = styled(Flex)`
  flex-direction: column;
`

export default {
  title: 'Tooltip',
  component: Tooltip,
}

export const WithoutAnchors = () => (
  <Box mt={5} width={500}>
    <Tooltip color='primary' top left>
      left tooltip
    </Tooltip>
    <Tooltip color='background.darkest' top center>
      centered tooltip
    </Tooltip>
    <Tooltip color='error' top right>
      right tooltip
    </Tooltip>
    <br />
    <Tooltip bottom left>
      left tooltip
    </Tooltip>
    <Tooltip bottom center>
      centered tooltip
    </Tooltip>
    <Tooltip bottom right>
      right tooltip
    </Tooltip>
  </Box>
)

export const WithAnchors = () => (
  <FlexColumn justifyContent='space-between' wrap='wrap'>
    <Box width={300} p={2} my={2}>
      <Tooltip top left color='primary'>
        top left tooltip
      </Tooltip>
      <div>some text</div>
    </Box>
    <Box width={'300px'} p={2} mb={5}>
      <div>some text</div>
      <Tooltip bottom left color='error'>
        bottom left tooltip
      </Tooltip>
    </Box>
    <Box width={'300px'} p={2} mb={55}>
      <InputField
        icon='circleInfo'
        color='primary'
        label='Email Address'
        defaultValue='albus.dumbledore@priceline.com'
        id='form-field-3'
        placeholder='example@test.com'
      />
      <Tooltip bottom left color='primary'>
        bottom left tooltip
      </Tooltip>
    </Box>
    <Box width={'300px'} p={2} mb={5}>
      <InputField
        icon='circleInfo'
        color='primary'
        label='Email Address'
        defaultValue='albus.dumbledore@priceline.com'
        id='form-field-4'
        placeholder='example@test.com'
      />
      <Tooltip bottom center color='primary'>
        bottom center tooltip
      </Tooltip>
    </Box>
    <Box width={'300px'} p={2} mb={'80px'}>
      <InputField
        icon='circleInfo'
        color='red'
        label='Email Address'
        defaultValue='albus.dumbledore@pr'
        id='form-field-5'
        placeholder='example@test.com'
      />
      <Tooltip bottom right color='error'>
        Email Address Invalid
      </Tooltip>
    </Box>
    <Box width={'300px'} p={2} mb={5}>
      <Tooltip top left color='primary'>
        top left tooltip
      </Tooltip>
      <InputField
        icon='circleInfo'
        color='blue'
        label='Email Address'
        defaultValue='albus.dumbledore@priceline.com'
        id='form-field-6'
        placeholder='example@test.com'
      />
    </Box>
    <Box width={'300px'} p={2} mb={5}>
      <Tooltip top center color='primary'>
        top center tooltip
      </Tooltip>
      <InputField
        icon='circleInfo'
        color='blue'
        label='Email Address'
        defaultValue='albus.dumbledore@priceline.com'
        id='form-field-7'
        placeholder='example@test.com'
      />
    </Box>
    <Box width={'300px'} p={2}>
      <Tooltip top right color='primary'>
        top right tooltip
      </Tooltip>
      <InputField
        icon='circleInfo'
        color='blue'
        label='Email Address'
        defaultValue='albus.dumbledore@priceline.com'
        id='form-field-8'
        placeholder='example@test.com'
      />
    </Box>
  </FlexColumn>
)
