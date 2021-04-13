import React from 'react'
import { Label, Input, Radio, Flex } from '..'

export default {
  title: 'Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component:
          'Simple styled label component that supports a number of the styled-system props.',
      },
    },
  },
}

export const LabelComponent = () => <Label m={3}>Label Component</Label>

export const UsingFontSize = () => (
  <div>
    <Label fontSize={6}>Label with fontSize 6</Label>
    <Label fontSize={5}>Label with fontSize 5</Label>
    <Label fontSize={4}>Label with fontSize 4</Label>
    <Label fontSize={3}>Label with fontSize 3</Label>
    <Label fontSize={2}>Label with fontSize 2</Label>
    <Label fontSize={1}>Label with fontSize 1</Label>
    <Label fontSize={0}>Label with fontSize 0</Label>
  </div>
)

UsingFontSize.storyName = 'Using fontSize'

export const Spacing = () => (
  <div>
    <Label mt={4} mb={2}>
      A tish of margin
    </Label>
    <Label pl={3}>A dash of padding</Label>
  </div>
)

export const Color = () => (
  <div>
    <Label color='blue'>A blue label</Label>
    <Label color='green'>a green label</Label>
  </div>
)

Color.storyName = 'color'

export const HtmlFor = () => (
  <div>
    Clicking{' '}
    <Label fontSize={4} htmlFor='sample-input'>
      here
    </Label>{' '}
    should focus on the input element.
    <br />
    <Input id='sample-input' />
  </div>
)

HtmlFor.storyName = 'htmlFor'

export const Nowrap = () => (
  <Flex>
    <Label nowrap>
      <Radio checked />
      Round-trip
    </Label>
    <Label nowrap>
      <Radio checked />
      One-way
    </Label>
    <Label nowrap>
      <Radio checked />
      Multi-destination
    </Label>
  </Flex>
)

Nowrap.storyName = 'nowrap'

export const Width = () => (
  <div>
    <Label width={1 / 2} color='blue'>
      label with 50% width
    </Label>
    <Label width='20px' color='green'>
      label with 20px width
    </Label>
    <Label color='orange'>default label width</Label>
  </div>
)

Width.storyName = 'width'
