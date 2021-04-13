import React from 'react'
import { action } from '@storybook/addon-actions'
import { GenericBanner } from '.'
import { Warning, Rowing, Tea, Emoticon } from 'pcln-icons'
import { Text } from '../Text'
import styled from 'styled-components'
import { getPaletteColor } from '../utils'

export default {
  title: 'GenericBanner',
  component: GenericBanner,
}

const UnderlinedLinkText = styled(Text)`
  z-index: 2;
  text-decoration: underline;
  &:hover {
    color: ${(props) => getPaletteColor(props.hoverColor)};
  }
`

export const basicBannerAllInline = () => (
  <GenericBanner
    p={3}
    heading={
      <Text.span fontWeight='bold' mr={1}>
        COVID-19
      </Text.span>
    }
    text={
      <Text.span>
        Update: Your travel may be impacted. Please review this hotels important
        info.
      </Text.span>
    }
    iconLeft={<Warning />}
    color='caution.light'
  />
)

export const basicBannerAllInlineRightIcon = () => (
  <GenericBanner
    p={2}
    heading={
      <Text.span fontWeight='bold' color='secondary' mr={1}>
        This is a Heading
      </Text.span>
    }
    text={
      <Text.span color='text'>
        This is some text. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nunc at lacus vel dolor fringilla rhoncus.
      </Text.span>
    }
    iconRight={<Tea color='text' />}
    color='primary.light'
  />
)

export const basicBannerBlockWithURLPropsCTA = () => (
  <GenericBanner
    p={2}
    heading={
      <Text fontWeight='bold' mr={1} color='text'>
        This is a Heading
      </Text>
    }
    text={
      <Text color='text'>
        This is some text. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nunc at lacus vel dolor fringilla rhoncus.
      </Text>
    }
    URLProps={{
      href: 'https://www.priceline.com',
      target: '_blank',
    }}
    ctaText={
      <UnderlinedLinkText
        color='primary'
        fontWeight='bold'
        hoverColor='primary.dark'
      >
        {' '}
        Read More
      </UnderlinedLinkText>
    }
    iconLeft={<Rowing color='text' />}
    color='secondary.light'
  />
)

export const bannerWithOnClick = () => (
  <GenericBanner
    p={2}
    heading={
      <Text.span fontWeight='bold' textColor='primary.base' mr={1}>
        COVID-19
      </Text.span>
    }
    text={
      <Text.span textColor='primary.base' mr={1}>
        Update: Your travel may be impacted. Please review this hotels important
        info.
      </Text.span>
    }
    buttonClick={action('clicked on the banner or the read more link-button')}
    iconLeft={<Warning />}
    color='caution.light'
  />
)

export const bannerWithOnClickAndCTA = () => (
  <GenericBanner
    p={2}
    heading={
      <Text.span fontWeight='bold' textColor='primary.base' mr={1}>
        COVID-19
      </Text.span>
    }
    text={
      <Text.span textColor='primary.base' mr={1}>
        Update: Your travel may be impacted. Please review this hotels important
        info.
      </Text.span>
    }
    ctaText={
      <Text.span textColor='primary.base' fontWeight='bold'>
        Read More
      </Text.span>
    }
    buttonClick={action('clicked on the banner or the read more link-button')}
    iconLeft={<Warning />}
    color='caution.light'
  />
)

export const bannerWithOnClickButtonStyleCta = () => (
  <GenericBanner
    buttonVariation='fill'
    buttonSize='small'
    p={2}
    heading={
      <Text.span fontWeight='bold' textColor='primary.base' mr={1}>
        COVID-19
      </Text.span>
    }
    text={
      <Text.span mr={1} textColor='primary.base'>
        Update: Your travel may be impacted. Please review this hotels important
        info.
      </Text.span>
    }
    ctaText={
      <Text textColor='primary' fontWeight='bold'>
        Read More
      </Text>
    }
    buttonClick={action('clicked on the banner or the read more link-button')}
    iconLeft={<Warning />}
    color='caution.light'
  />
)

export const bannerWithURLPropsAndCta = () => (
  <GenericBanner
    p={2}
    heading={
      <Text.span fontWeight='bold' textColor='primary.base' mr={1}>
        This is a Heading
      </Text.span>
    }
    text={
      <Text.span color='warning' mr={1}>
        This is some text. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nunc at lacus vel dolor fringilla rhoncus.
      </Text.span>
    }
    URLProps={{
      href: 'https://www.priceline.com',
      target: '_blank',
    }}
    ctaText={
      <UnderlinedLinkText
        color='primary'
        fontWeight='bold'
        hoverColor='primary.dark'
      >
        Read More
      </UnderlinedLinkText>
    }
    iconLeft={<Emoticon />}
    color='alert.light'
  />
)

export const bannerWithURLProps = () => (
  <GenericBanner
    p={2}
    heading={
      <Text.span fontWeight='bold' textColor='primary.base' mr={1}>
        This is a Heading
      </Text.span>
    }
    text={
      <Text.span color='warning' mr={1}>
        This is some text. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nunc at lacus vel dolor fringilla rhoncus.
      </Text.span>
    }
    URLProps={{
      href: 'https://www.priceline.com',
      target: '_blank',
    }}
    iconLeft={<Emoticon />}
    color='alert.light'
  />
)

export const bannerWithURLPropsAndCustomHeadingSize = () => (
  <GenericBanner
    p={2}
    heading={
      <Text.span fontWeight='bold' textColor='primary.base' mr={1} fontSize={4}>
        This is a Heading
      </Text.span>
    }
    text={
      <Text.span color='warning' mr={1}>
        This is some text. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nunc at lacus vel dolor fringilla rhoncus.
      </Text.span>
    }
    URLProps={{
      href: 'https://www.priceline.com',
      target: '_blank',
    }}
    iconLeft={<Emoticon />}
    color='alert.light'
  />
)

export const bannerWithURLPropsButtonStyleCta = () => (
  <GenericBanner
    p={2}
    color='alert.light'
    linkColor='secondary'
    linkVariation='fill'
    heading={
      <Text.span fontWeight='bold' mr={1}>
        This is a Heading
      </Text.span>
    }
    text={
      <Text.span color='warning' mr={1}>
        This is some text. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nunc at lacus vel dolor fringilla rhoncus.
      </Text.span>
    }
    URLProps={{
      href: 'https://www.priceline.com',
      target: '_blank',
    }}
    ctaText={
      <Text color='text.lightest' fontWeight='bold'>
        Read More
      </Text>
    }
    iconLeft={<Emoticon />}
  />
)
