/* eslint-disable react/no-children-prop */
import React from 'react'
import Component from '@reach/component-component'

import { Box, Text, ThemeProvider } from 'pcln-design-system'
import { Pin as PinIcon } from 'pcln-icons'

import catNames from 'cat-names'
import { Autocomplete, Label, Input, Menu, Item } from '.'

const cats = catNames.all
const match = (item, value) => item.includes(value)

const kayakTheme = {
  font: "'HelveticaNeue-Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  palette: {
    primary: {
      light: '#ff873f',
      base: '#ff690f',
      dark: '#b64907',
    },
    secondary: {
      light: '#ff873f',
      base: '#ff690f',
      dark: '#b64907',
    },
  },
}

export default {
  title: 'pcln-autocomplete/Autocomplete',
  component: Autocomplete,
}

export const Default = () => (
  <Component
    initialState={{ value: '' }}
    children={({ state, setState }) => (
      <Box>
        <Autocomplete
          onChange={(item) => {
            setState({ value: item })
          }}
          match={match}
        >
          <Label mb={1}>Cat</Label>
          <Input />
          <Menu>
            {cats.map((cat) => (
              <Item key={cat} item={cat}>
                <PinIcon color='primary' mr={2} />
                <Text fontSize={0}>{cat}</Text>
              </Item>
            ))}
          </Menu>
        </Autocomplete>
        <Text my={2}>
          This text should be covered up by the Autocomplete.Menu when open.
        </Text>
        <Text my={2}>
          The current value is <code>{state.value}</code>
        </Text>
      </Box>
    )}
  />
)

Default.storyName = 'default'

export const Themed = () => (
  <ThemeProvider theme={kayakTheme}>
    <Component
      initialState={{ value: '' }}
      children={({ state, setState }) => (
        <Box>
          <Autocomplete
            onChange={(item) => {
              setState({ value: item })
            }}
            match={match}
          >
            <Label mb={1}>Cat</Label>
            <Input />
            <Menu>
              {cats.map((cat) => (
                <Item key={cat} item={cat}>
                  <PinIcon color='primary' mr={2} />
                  <Text fontSize={0}>{cat}</Text>
                </Item>
              ))}
            </Menu>
          </Autocomplete>
          <Text my={2}>
            This text should be covered up by the Autocomplete.Menu when open.
          </Text>
          <Text my={2}>
            The current value is <code>{state.value}</code>
          </Text>
        </Box>
      )}
    />
  </ThemeProvider>
)

Themed.storyName = 'themed'
