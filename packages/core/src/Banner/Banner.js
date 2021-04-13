import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import {
  Attention as AttentionIcon,
  Information as InformationIcon,
  Success as SuccessIcon,
  Warning as WarningIcon,
} from 'pcln-icons'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { Text } from '../Text'
import { CloseButton } from '../CloseButton'
import {
  applyVariations,
  deprecatedColorValue,
  getPaletteColor,
} from '../utils'

const bannerColors = {
  secondary: {
    backgroundColor: 'secondary.base',
    color: 'text.lightest',
    icon: <SuccessIcon />,
  },
  'secondary.light': {
    backgroundColor: 'secondary.light',
    color: 'secondary.dark',
    icon: <SuccessIcon />,
  },
  error: {
    backgroundColor: 'error.base',
    color: 'text.lightest',
    icon: <WarningIcon />,
  },
  'error.light': {
    backgroundColor: 'error.light',
    color: 'error.dark',
    icon: <WarningIcon />,
  },
  alert: {
    backgroundColor: 'alert.base',
    color: 'text.lightest',
    icon: <AttentionIcon />,
  },
  primary: {
    backgroundColor: 'primary.base',
    color: 'text.lightest',
    icon: <InformationIcon />,
  },
  'primary.light': {
    backgroundColor: 'primary.light',
    color: 'primary.dark',
    icon: <InformationIcon />,
  },
}

const StyledBox = styled(Box)`
  ${applyVariations('Banner')}
  ${(props) =>
    props.backgroundColor
      ? `background-color: ${getPaletteColor(props.backgroundColor)(props)};`
      : ''}
  ${(props) =>
    props.backgroundColor
      ? `color: ${getPaletteColor(props.color)(props)};`
      : ''}
`

const Banner = (props) => {
  const bannerColor = bannerColors[props.color] || {}
  const Icon = props.icon || bannerColor.icon
  const color = !bannerColor.color ? props.color : bannerColor.color

  let header = null

  if (props.header) {
    header = React.isValidElement(props.header) ? (
      props.header
    ) : (
      <Text textStyle='display2'>{props.header}</Text>
    )
  }

  return (
    <StyledBox
      {...props}
      backgroundColor={bannerColor.backgroundColor}
      color={color}
    >
      <Flex justifyContent='space-between' alignItems='flex-start'>
        {!!Icon &&
          !!props.showIcon &&
          React.cloneElement(Icon, { mr: 2, size: 24, mt: '-2px' })}
        <Box textAlign={props.textAlign} width={1}>
          {header}
          <Text.span fontSize={1}>{props.text}</Text.span>
          {props.children}
        </Box>
        {!!props.onClose && (
          <CloseButton
            onClick={props.onClose}
            ml={2}
            size={24}
            title='close'
            mt='-2px'
          />
        )}
      </Flex>
    </StyledBox>
  )
}

Banner.displayName = 'Banner'

Banner.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  onClose: PropTypes.func,
  showIcon: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  textAlign: Box.propTypes.textAlign,
  color: deprecatedColorValue(),
  children: PropTypes.node,
}

Banner.defaultProps = {
  textAlign: 'left',
  showIcon: true,
  color: 'secondary',
}

export default withTheme(Banner)
