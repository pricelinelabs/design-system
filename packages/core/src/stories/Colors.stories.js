/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Flex, Text, createTheme } from '..'

const theme = createTheme()

const Chip = (props) => {
  return <Box width={1} px={5} py={4} color={props.color} />
}

const palette = Object.keys(theme.palette).map((key) => ({
  key,
  value: theme.palette[key],
}))

const ColorCard = (props) => {
  const colorArgs = props.color.split('.')
  return (
    <Box>
      <Chip name={props.name} color={props.color} />
      <Text f={0}>{props.name}</Text>
      <Text as='pre' m={0}>
        {theme.palette[colorArgs[0]][colorArgs[1]]}
      </Text>
    </Box>
  )
}

export default {
  title: 'Color',
}

export const Palette = () => (
  <div>
    <Box p={3}>
      <h1>Palette</h1>
      <p>The palette allows you to change the color of components.</p>
      <Flex wrap>
        {palette.map((pal) => {
          if (typeof pal.value === 'object') {
            return (
              <div style={{ width: '100%' }}>
                <h4>{pal.key}</h4>
                <Flex wrap>
                  {Object.keys(pal.value).map((key) => (
                    <Box
                      key={key}
                      p={3}
                      width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
                    >
                      <ColorCard name={key} color={`${pal.key}.${key}`} />
                    </Box>
                  ))}
                </Flex>
                <hr />
              </div>
            )
          } else {
            return (
              <Box key={pal.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
                <ColorCard name={pal.key} color={`${pal.value}.${pal.key}`} />
              </Box>
            )
          }
        })}
      </Flex>
    </Box>
  </div>
)
