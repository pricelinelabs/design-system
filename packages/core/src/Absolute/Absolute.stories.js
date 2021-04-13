import React from 'react'
import styled from 'styled-components'
import { Absolute, Card, Flag, Image, Relative, Text } from '..'
import { Close as CloseIcon } from 'pcln-icons'

const TallCard = styled(Card)`
  height: 420px;
`

const SmallAbsolute = styled(Absolute)`
  height: 100px;
`

const MediumAbsolute = styled(Absolute)`
  height: 200px;
`

const LargeAbsolute = styled(Absolute)`
  height: 300px;
`

const ExtraLargeAbsolute = styled(Absolute)`
  height: 400px;
`

export default {
  title: 'Absolute',
  component: Absolute,
}

export const OverAnImage = () => (
  <Relative width={1 / 2}>
    <Absolute top={8} left={0}>
      <Flag>Hello Flag</Flag>
    </Absolute>
    <Image src='https://www.goodfreephotos.com/albums/new-zealand/other-new-zealand/lake-pukaki-and-mount-cook-in-the-background.jpg' />
  </Relative>
)

OverAnImage.storyName = 'Over an image'

export const PositioningAnIcon = () => (
  <Card m={2}>
    <Relative p={4}>
      <Text mt={2} textAlign='justify'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et nisl
        dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        quis nisi ac est elementum consequat a eu risus. Phasellus id facilisis
        nulla. Aliquam vel semper enim, id lobortis dolor. Morbi sed leo at
        turpis rutrum posuere. Nullam tincidunt ex vitae mi sagittis, vel
        sollicitudin lectus viverra. Curabitur sit amet fringilla velit.
      </Text>
      <Absolute top='10px' right='10px'>
        <CloseIcon color='text.base' size={24} />
      </Absolute>
    </Relative>
  </Card>
)

PositioningAnIcon.storyName = 'Positioning an icon'

export const MultipleAbsolutelyPositionedBoxes = () => (
  <TallCard pb={3}>
    <Relative p={3}>
      <ExtraLargeAbsolute
        pl={2}
        top={0}
        right={0}
        zIndex={1}
        width={400}
        color='primary'
      >
        <Text.span fontSize={1} bold>
          z-index 1
        </Text.span>
      </ExtraLargeAbsolute>
      <LargeAbsolute
        pl={2}
        top={0}
        right={0}
        zIndex={2}
        width={300}
        color='alert'
      >
        <Text.span fontSize={1} bold>
          z-index 2
        </Text.span>
      </LargeAbsolute>
      <MediumAbsolute
        pl={2}
        top={0}
        right={0}
        zIndex={3}
        width={200}
        color='primary.light'
      >
        <Text.span fontSize={1} bold>
          z-index 3
        </Text.span>
      </MediumAbsolute>
      <SmallAbsolute
        pl={2}
        top={0}
        right={0}
        zIndex='4'
        width={100}
        color='secondary'
      >
        <Text.span fontSize={1} bold>
          z-index 4
        </Text.span>
      </SmallAbsolute>
    </Relative>
  </TallCard>
)

MultipleAbsolutelyPositionedBoxes.storyName =
  'Multiple absolutely positioned boxes'
