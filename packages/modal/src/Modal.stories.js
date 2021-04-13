import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Modal, SmallModalHeader, ScrollLock } from '../src'
import { Button } from 'pcln-design-system'

const StyledModal = styled(Modal)`
  height: ${(props) => props.height};
`
const CUSTOM_ANIMATION = (transitionState) => `
  transform: translateY(-122%);
  transition: transform 0.3s linear;
  ${transitionState === 'entered' ? `transform: translateY(0%);` : ''}
`

class ModalStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen,
    }
    this.scrollLock = new ScrollLock()
  }

  static propTypes = {
    isOpen: PropTypes.bool,
    lock: PropTypes.bool,
  }

  render() {
    return (
      <div style={{ height: '1500px' }}>
        <Button
          onClick={() => {
            if (this.props.lock) {
              this.scrollLock.on()
            }
            this.setState({ isOpen: true })
          }}
        >
          Open
        </Button>
        <StyledModal
          ariaLabel='Storybook modal.'
          isOpen={this.state.isOpen}
          onClose={() => {
            this.setState({ isOpen: false })
            if (this.props.lock) {
              this.scrollLock.off()
            }
          }}
          {...this.props}
        >
          <div style={{ height: '1000px' }}>Content with 1000px height</div>
        </StyledModal>
      </div>
    )
  }
}

export default {
  title: 'pcln-modal/Modal',
  component: Modal,
}

export const Raw = () => (
  <ModalStory width={['100px', '200px', '500px']} disableCloseButton />
)

export const WithSmallModalHeader = () => (
  <ModalStory
    header={<SmallModalHeader />}
    width={['80vw', '400px', '500px']}
  />
)

WithSmallModalHeader.storyName = 'With SmallModalHeader'

// export const WithModalHeaderAndScrollLock = () => {
//   // Generate content to demonstrate a scrollable <body>
//   const contentLines = [...Array(100).keys()]

//   return (
//     <div>
//       <h1>Scroll down to open modal</h1>
//       {contentLines.map((i, idx) => (
//         <div key={idx}>Line {idx}</div>
//       ))}
//       <ModalStory
//         header={
//           <ModalHeader title='Modal title' onClose={action('Modal closed!')} />
//         }
//         height={['90vh', '460px', '560px']}
//         width={['80vw', '400px', '500px']}
//         lock={true}
//         fullScreen={boolean('fullScreen', false)}
//       />
//     </div>
//   )
// }

// WithModalHeaderAndScrollLock.story = {
//   name: 'With ModalHeader (and ScrollLock!)',
// }

export const WithOverflow = () => (
  <ModalStory
    header={<SmallModalHeader />}
    width={['80vw', '400px', '500px']}
    enableOverflow
  />
)

export const WithImagemodeAndColorful = () => (
  <ModalStory
    color='alert.base'
    header={<SmallModalHeader />}
    width={['100px', '200px', '500px']}
    imgMode
    disableCloseButton
  />
)

WithImagemodeAndColorful.storyName = 'With imagemode and colorful'

export const WithCustomAnimation = () => (
  <ModalStory
    header={<SmallModalHeader />}
    width={['100px', '200px', '500px']}
    dialogAnimation={CUSTOM_ANIMATION}
    verticalAlignment='top'
  />
)

WithCustomAnimation.storyName = 'With custom animation'

export const ZeroTimeout = () => (
  <ModalStory
    disableCloseButton
    width={['100px', '200px', '500px']}
    timeout={0}
  />
)
