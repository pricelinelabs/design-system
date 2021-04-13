import React from 'react'
import { action } from '@storybook/addon-actions'
import { Box, Banner, Flex, Heading, Text } from '..'

export default {
  title: 'Banner',
  component: Banner,
}

export const AllBgs = () => (
  <Box>
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='default'
      text='Secondary Text'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='primary'
      text='Secondary Text'
      color='primary'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='secondary'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare.'
      color='secondary'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='alert'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur.'
      color='alert'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='error'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus.'
      color='error'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='primary.light'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum.'
      color='primary.light'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='secondary.light'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare.'
      color='secondary.light'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='error.light'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare. Quisque at quam vel nibh tempor imperdiet vitae non orci. Etiam bibendum sem id nibh finibus interdum. Nunc quam neque, tristique porttitor varius a, ultrices a nibh. Nunc et ipsum id eros condimentum convallis. Donec gravida leo facilisis, pharetra tellus eu, dictum mi.'
      color='error.light'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='custom'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare. Quisque at quam vel nibh tempor imperdiet vitae non orci. Etiam bibendum sem id nibh finibus interdum. Nunc quam neque, tristique porttitor varius a, ultrices a nibh. Nunc et ipsum id eros condimentum convallis. Donec gravida leo facilisis, pharetra tellus eu, dictum mi.'
      color='background.darkest'
      onClose={action('closed')}
    />
    <Banner
      mb={2}
      p={3}
      color='primary'
      showIcon={false}
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare. Quisque at quam vel nibh tempor imperdiet vitae non orci. Etiam bibendum sem id nibh finibus interdum. Nunc quam neque, tristique porttitor varius a, ultrices a nibh. Nunc et ipsum id eros condimentum convallis. Donec gravida leo facilisis, pharetra tellus eu, dictum mi.'
    />
    <Banner
      mb={2}
      p={3}
      color='warning'
      iconName='attention'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare. Quisque at quam vel nibh tempor imperdiet vitae non orci. Etiam bibendum sem id nibh finibus interdum. Nunc quam neque, tristique porttitor varius a, ultrices a nibh. Nunc et ipsum id eros condimentum convallis. Donec gravida leo facilisis, pharetra tellus eu, dictum mi.'
    />
  </Box>
)

AllBgs.storyName = 'All bgs'

export const AllBgsHeaderOnly = () => (
  <Box>
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      header='default'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      header='primary'
      color='primary'
      onClose={action('closed')}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      header='secondary'
      alert='secondary'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      header='alert'
      color='alert'
      onClose={action('closed')}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      header='error'
      color='error'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      header='primary.light'
      color='primary.light'
      onClose={action('closed')}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      header='secondary.light'
      color='secondary.light'
      onClose={action('closed')}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      header='error.light'
      color='error.light'
      onClose={action('closed')}
    />
  </Box>
)

AllBgsHeaderOnly.storyName = 'All bgs header only'

export const AllBgsTextOnly = () => (
  <Box>
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='default'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='primary'
      color='primary'
      onClose={action('closed')}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='secondary'
      color='secondary'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='alert'
      color='alert'
      onClose={action('closed')}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='error'
      color='error'
      onClose={action('closed')}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='Secondary Text'
      color='primary.light'
      onClose={action('closed')}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='Secondary Text'
      color='secondary.light'
      onClose={action('closed')}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='Secondary Text'
      color='error.light'
      onClose={action('closed')}
    />
  </Box>
)

AllBgsTextOnly.storyName = 'All bgs text only'

export const SansCloseButton = () => (
  <Box>
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='default'
      text='Secondary Text'
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='primary'
      text='Secondary Text'
      color='primary'
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='secondary'
      text='Secondary Text'
      color='secondary'
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='alert'
      text='Secondary Text'
      color='alert'
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='error'
      text='Secondary Text'
      color='error'
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='primary.light'
      text='Secondary Text'
      color='primary.light'
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='secondary.light'
      text='Secondary Text'
      color='secondary.light'
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='error.light'
      text='Secondary Text'
      color='error.light'
    />
  </Box>
)

export const SansIcon = () => (
  <Box>
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='default'
      text='Secondary Text'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='primary'
      text='Secondary Text'
      color='primary'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='secondary'
      text='Secondary Text'
      color='secondary'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='alert'
      text='Secondary Text'
      color='alert'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='error'
      text='Secondary Text'
      color='error'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='primary.light'
      text='Secondary Text'
      color='primary.light'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='secondary.light'
      text='Secondary Text'
      color='secondary.light'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='error.light'
      text='Secondary Text'
      color='error.light'
      onClose={action('closed')}
      showIcon={false}
    />
  </Box>
)

export const WithoutIconOrCloseButton = () => (
  <Box>
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='default'
      text='Secondary Text'
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='primary'
      text='Secondary Text'
      color='primary'
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='secondary'
      text='Secondary Text'
      color='secondary'
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='alert'
      text='Secondary Text'
      color='alert'
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='error'
      text='Secondary Text'
      color='error'
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={3}
      header='primary.light'
      text='Secondary Text'
      color='primary.light'
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='secondary.light'
      text='Secondary Text'
      color='secondary.light'
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={3}
      header='error.light'
      text='Secondary Text'
      color='error.light'
      showIcon={false}
    />
  </Box>
)

WithoutIconOrCloseButton.storyName = 'Without Icon or Close Button'

export const SansCloseButtonTextOnly = () => (
  <Box>
    <Banner textAlign='right' mb={2} p={2} text='default' />
    <Banner textAlign='left' mb={2} p={2} text='primary' color='primary' />
    <Banner textAlign='right' mb={2} p={2} text='secondary' color='secondary' />
    <Banner textAlign='left' mb={2} p={2} text='alert' color='alert' />
    <Banner textAlign='right' mb={2} p={2} text='error' color='error' />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='primary.light'
      color='primary.light'
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='secondary.light'
      color='secondary.light'
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='error.light'
      color='error.light'
    />
  </Box>
)

SansCloseButtonTextOnly.storyName = 'Sans Close Button, Text only'

export const SansIconTextOnly = () => (
  <Box>
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='default'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='primary'
      color='primary'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='secondary'
      color='secondary'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='alert'
      color='alert'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='error'
      color='error'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='primary.light'
      color='primary.light'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='secondary.light'
      color='secondary.light'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='error.light'
      color='error.light'
      onClose={action('closed')}
      showIcon={false}
    />
  </Box>
)

SansIconTextOnly.storyName = 'Sans Icon, Text only'

export const CustomHeaderAsNode = () => (
  <Box>
    <Banner
      header={<Heading>LOUD HEADER</Heading>}
      textAlign='right'
      mb={2}
      p={2}
      text='default'
      onClose={action('closed')}
      showIcon={false}
    />
    <Banner
      header={<Heading.h5>quiet header</Heading.h5>}
      textAlign='right'
      mb={2}
      p={2}
      text='default'
      onClose={action('closed')}
      showIcon={false}
    />
  </Box>
)

CustomHeaderAsNode.storyName = 'Custom header as node'

export const WithoutIconOrCloseButtonTextOnly = () => (
  <Box>
    <Banner textAlign='right' mb={2} p={2} text='default' showIcon={false} />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='primary'
      color='primary'
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='secondary'
      color='secondary'
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='alert'
      color='alert'
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='error'
      color='error'
      showIcon={false}
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='primary.light'
      color='primary.light'
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='secondary.light'
      color='secondary.light'
      showIcon={false}
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='error.light'
      color='error.light'
      showIcon={false}
    />
  </Box>
)

WithoutIconOrCloseButtonTextOnly.storyName =
  'Without Icon or Close Button, Text only'

export const WithCustomIconsAndSizes = () => (
  <Box>
    <Banner textAlign='right' mb={2} p={2} text='default' iconName='star' />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='primary'
      color='primary'
      iconName='star'
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='secondary'
      color='secondary'
      iconName='star'
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='alert'
      color='alert'
      iconName='star'
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='error'
      color='error'
      iconName='star'
    />
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      text='primary.light'
      color='primary.light'
      iconName='star'
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='secondary.light'
      color='secondary.light'
      iconName='star'
    />
    <Banner
      textAlign='right'
      mb={2}
      p={2}
      text='error.light'
      color='error.light'
      iconName='star'
    />
  </Box>
)

WithCustomIconsAndSizes.storyName = 'With custom icons and sizes'

export const WithChildren = () => (
  <Box>
    <Banner p={2} mb={2} onClose={action('closed')}>
      <Flex>
        <Box color={'error.light'} p={2} width={1 / 2}>
          Pink box!
        </Box>
        <Box color={'error'} p={2} width={1 / 2}>
          Red box!
        </Box>
      </Flex>
    </Banner>
    <Banner
      textAlign='left'
      mb={2}
      p={2}
      header='default'
      onClose={action('closed')}
    >
      <Text bold italic>
        I am a text component!
      </Text>
    </Banner>
  </Box>
)

WithChildren.storyName = 'With children'
