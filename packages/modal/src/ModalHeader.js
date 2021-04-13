import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex, CloseButton, Text } from 'pcln-design-system'

const HeaderWrapper = styled(Flex)`
  height: 40px;
`

const Title = styled(Text)`
  display: flex;
  align-items: center;
`

const StyledCloseButton = styled(CloseButton)`
  height: 24px;
  width: 24px;
  svg {
    vertical-align: top;
  }

  &:focus {
    background-color: ${(props) => props.theme.palette.primary.dark};
    outline: none;
  }
`

const ModalHeader = ({ color, onClose, title }) => (
  <HeaderWrapper align='center' alignItems='center' color={color} px={3}>
    {title && (
      <Title fontSize={1} bold>
        {title}
      </Title>
    )}
    {onClose && <StyledCloseButton onClick={onClose} ml='auto' />}
  </HeaderWrapper>
)

ModalHeader.displayName = ModalHeader

ModalHeader.propTypes = {
  color: PropTypes.string,
  onClose: PropTypes.func,
  title: PropTypes.string,
}

ModalHeader.defaultProps = {
  color: 'primary',
}

export default ModalHeader
