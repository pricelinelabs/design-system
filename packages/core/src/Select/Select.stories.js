import React from 'react'

import { Select, Label, Box, Button } from '..'
import ForwardRefDemo from '../../storybook/utils/ForwardRefsDemo'

export default {
  title: 'Select',
  component: Select,
}

export const Default = () => (
  <Box>
    <Label htmlFor='cabinClass'>Cabin Class</Label>
    <Select id='cabinClass' name='cabinClass' defaultValue='Premium Economy'>
      <option>Economy</option>
      <option>Premium Economy</option>
      <option>Business</option>
      <option>First Class</option>
      <option>
        With a super long label that does not get clobbered by the chevron
      </option>
    </Select>
  </Box>
)

Default.storyName = 'default'

export const LongOptionString = () => (
  <Box width={[1, 320]}>
    <Label htmlFor='cabinClass'>Cabin Class</Label>
    <Select id='cabinClass' name='cabinClass' defaultValue=''>
      <option>
        With a super long label that does not collide with the chevron
      </option>
    </Select>
  </Box>
)

LongOptionString.storyName = 'long option string'

export const HiddenLabel = () => (
  <Box width={[1, 320]}>
    <Label hidden htmlFor='cabinClass'>
      Cabin Class
    </Label>
    <Select id='cabinClass' name='cabinClass' defaultValue=''>
      <option>Economy</option>
      <option>Premium Economy</option>
      <option>Business</option>
      <option>First Class</option>
    </Select>
  </Box>
)

HiddenLabel.storyName = 'hidden label'

export const ForwardRefs = () => (
  <ForwardRefDemo
    refChild={(dsRef) => (
      <>
        <Select id='cabinClass' name='cabinClass' defaultValue='' ref={dsRef}>
          <option>Economy</option>
          <option>Premium Economy</option>
          <option>Business</option>
          <option>First Class</option>
        </Select>
        <Button onClick={() => dsRef.current.focus()} mt={4}>
          Click to focus select via ref
        </Button>
      </>
    )}
  />
)

ForwardRefs.storyName = 'Forward refs'
