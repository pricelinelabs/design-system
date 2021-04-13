import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Box } from '../Box'
import { Card } from '../Card'
import { Flex } from '../Flex'
import { Text } from '../Text'
import { applyVariations, deprecatedColorValue } from '../utils'

const HugCard = styled(Card)`
  border-top-left-radius: ${(props) => props.theme.radius};
  border-top-right-radius: ${(props) => props.theme.radius};
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  overflow: hidden;
  ${applyVariations('Hug')}
`

const BorderConcealer = styled(Box)`
  & > * {
    border: 0 !important;
  }
`

// eslint-disable-next-line react/prop-types
const Hug = ({ color, p, fontSize, icon, iconDisplay, ...props }) => {
  let iconClone

  if (React.isValidElement(icon)) {
    iconClone = React.cloneElement(icon, {
      style: { display: iconDisplay },
      mr: 2,
      mt: '-2px',
      mb: '2px',
      size: 24,
    })
  }

  return (
    <HugCard {...props} borderColor={color}>
      <Flex color={color} p={p} alignItems='center'>
        {!!iconClone && iconClone}
        <Text fontSize={fontSize}>{props.text}</Text>
      </Flex>
      <BorderConcealer>{props.children}</BorderConcealer>
    </HugCard>
  )
}

Hug.defaultProps = {
  borderWidth: 1,
  color: 'text.lightest',
  fontSize: 1,
  p: 2,
}

Hug.propTypes = {
  iconDisplay: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
  text: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]),
  color: deprecatedColorValue(),
  borderWidth: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Hug
