import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, optionsKnob } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Cartesian, Catch, LiveEditor, Markdown, XRay } from '@compositor/kit'

import { Box, Button } from '../src'

const variations = { outline: 'outline', fill: 'fill', link: 'link' }
const sizes = { small: 'small', medium: 'medium', large: 'large' }
const colors = {
  primary: 'primary',
  secondary: 'secondary',
  text: 'text',
  success: 'success',
  error: 'error',
  warning: 'warning',
  alert: 'alert',
  caution: 'caution',
  notify: 'notify',
  pricePrimary: 'pricePrimary',
  priceSecondary: 'priceSecondary',
  promoPrimary: 'promoPrimary',
  promoSecondary: 'promoSecondary',
  border: 'border',
  background: 'background'
}

storiesOf('Button', module)
  .addParameters({ component: Button })
  .addDecorator(story => (
    <Box>
      <Markdown>
        {`
Use the <code>&lt;Button /&gt;</code> component to render a primitive button. Use the *variation* prop to change the appearance of the button.
        `}
      </Markdown>
      {story()}
    </Box>
  ))
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      inline: false
    })
  )
  .add('Button', () => {
    const variation = optionsKnob('Variation', variations, 'fill', {
      display: 'select'
    })
    const size = optionsKnob('Size', sizes, 'medium', {
      display: 'select'
    })
    const color = optionsKnob('Palette Color', colors, 'primary', {
      display: 'select'
    })
    const disabled = boolean('Disabled?', false)
    const fullWidth = boolean('Full Width?', false)

    return (
      <Catch>
        <LiveEditor
          code={`<Button
  variation='${variation}'
  size='${size}'
  color='${color}'
  disabled={${disabled}}
  width={${fullWidth ? 1 : null}}>
  BUTTON
</Button>`}
          scope={{
            Button
          }}
        />
      </Catch>
    )
  })
  .add('Try It!', () => {
    const variation = optionsKnob('Variation', variations, 'fill', {
      display: 'multi-select'
    })
    const size = optionsKnob('Size', sizes, 'medium', {
      display: 'multi-select'
    })
    const color = optionsKnob('Palette Color', colors, 'primary', {
      display: 'multi-select'
    })
    const disabled = boolean('Disabled?', false)
    const fullWidth = boolean('Full Width?', false)

    return (
      <Cartesian
        component={Button}
        m={3}
        variation={variation}
        size={size}
        color={color}
        disabled={disabled}
        width={fullWidth ? 1 : null}
        onClick={action('Clicked button in Try It!')}
      >
        Try This Button!
      </Cartesian>
    )
  })

  .add('All', () => {
    return (
      <Cartesian
        component={Button}
        m={3}
        color={Object.keys(colors)}
        variation={Object.keys(variations)}
        disabled={[false, true]}
        size={Object.keys(sizes)}
        onClick={action('Clicked button in All')}
      >
        I'm a Button
      </Cartesian>
    )
  })

  .add('Geometry', () => (
    <XRay>
      <Cartesian
        component={Button}
        m={3}
        variation={Object.keys(variations)}
        size={Object.keys(sizes)}
      >
        Button Geometry
      </Cartesian>
    </XRay>
  ))

  .add('Forward refs', () => {
    class ForwardRefDemo extends React.Component {
      constructor(props) {
        super(props)
        this.btnRef = React.createRef()
      }

      componentDidMount() {
        // For SC3, omit current because SC3 uses innerRef
        // this.btnRef.focus()

        this.btnRef.current.focus()
      }

      render() {
        return (
          <div>
            {/*
              // This example is for SC3
              <Button dsRef={e => this.btnRef = e}>Click me</Button>
            */}
            <Button dsRef={this.btnRef}>Click me</Button>
            <button onClick={() => this.btnRef.current.focus()}>focus</button>
          </div>
        )
      }
    }

    return <ForwardRefDemo />
  })
