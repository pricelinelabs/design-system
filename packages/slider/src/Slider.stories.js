/* eslint-disable react/no-children-prop */
import React from 'react'
import Component from '@reach/component-component'

import { ThemeProvider } from 'pcln-design-system'
import RangeSlider, { Slider } from '.'

const formatValueText = (value) => `${value} units`

const untdTheme = {
  font: "'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif",
  contrastRatio: 4.5,
  palette: {
    primary: {
      light: '#CCD6EC',
      base: '#0033A0',
      dark: '#002244',
    },
    secondary: {
      light: '#DADBED',
      base: '#6244BB',
      dark: '#31225D',
    },
    success: {
      light: '#D1E3D9',
      base: '#1B7742',
      dark: '#0D3B21',
    },
    error: {
      light: '#F6CCD6',
      base: '#D50032',
      dark: '#6A0019',
    },
    warning: {
      light: '#F6CCD6',
      base: '#D50032',
      dark: '#6A0019',
    },
    alert: {
      light: '#FFF3DD',
      base: '#FFC658',
      dark: '#7F632C',
    },
    caution: {
      light: '#FFF3DD',
      base: '#FFC658',
      dark: '#7F632C',
    },
    notify: {
      light: '#CCD6EC',
      base: '#0033A0',
      dark: '#002244',
    },
    text: {
      lightest: '#FFFFFF',
      light: '#666666',
      base: '#333333',
      dark: '#000000',
    },
    pricePrimary: {
      light: '#D1E3D9',
      base: '#1B7742',
      dark: '#0D3B21',
    },
    priceSecondary: {
      light: '#CCD6EC',
      base: '#0033A0',
      dark: '#002244',
    },
    strike: {
      base: '#D50032',
    },
    promoPrimary: {
      light: '#DADBED',
      base: '#6244BB',
      dark: '#31225D',
    },
    promoSecondary: {
      light: '#FFF3DD',
      base: '#FFC658',
      dark: '#7F632C',
    },
    border: {
      light: '#4F6F8F',
      base: '#C0CAD5',
      dark: '#364049',
    },
    background: {
      lightest: '#FFFFFF',
      light: '#F4F4F3',
      base: '#E9E9E7',
      dark: '#7C878E',
    },
  },
}

export default {
  title: 'pcln-slider / Slider',
  component: Slider,
}

export const Basic = () => (
  <div>
    <div>
      <div id='handle_2'>Handle Two</div> is labelled by the text above
    </div>
    <Component
      initialState={{
        value: [32, 64],
      }}
      children={({ state, setState }) => (
        <RangeSlider
          ariaLabelGroupForHandles={['Handle One', undefined]}
          ariaLabelledByGroupForHandles={[undefined, 'handle_2']}
          ariaValueTextFormattersForHandles={[formatValueText, formatValueText]}
          value={state.value}
          onChange={(value) => {
            setState({ value })
          }}
        />
      )}
    />
  </div>
)

export const RangeSliderWithSingleValue = () => (
  <RangeSlider ariaLabelGroupForHandles={['Handle One']} value={[32]} />
)

RangeSliderWithSingleValue.storyName = 'RangeSlider with Single value'

export const _Slider = () => <Slider ariaLabelForHandle='Handle' value={[32]} />

export const MultipleValues = () => (
  <RangeSlider
    ariaLabelGroupForHandles={['handle_1', 'handle_2', 'handle_3', 'handle_4']}
    value={[16, 32, 64, 128]}
    max={256}
  />
)

MultipleValues.storyName = 'Multiple values'

export const Colors = () => (
  <div>
    <RangeSlider
      value={[8, 16]}
      color='primary'
      mb={2}
      ariaLabelGroupForHandles={['handle_1', 'handle_2']}
    />
    <RangeSlider
      value={[16, 32]}
      color='secondary'
      mb={2}
      ariaLabelGroupForHandles={['handle_1', 'handle_2']}
    />
    <RangeSlider
      value={[32, 64]}
      color='alert'
      mb={2}
      ariaLabelGroupForHandles={['handle_1', 'handle_2']}
    />
    <RangeSlider
      value={[64, 96]}
      color='error'
      mb={2}
      ariaLabelGroupForHandles={['handle_1', 'handle_2']}
    />
  </div>
)

export const ThemedColors = () => (
  <ThemeProvider theme={untdTheme}>
    <RangeSlider
      value={[8, 16]}
      color='primary'
      mb={2}
      ariaLabelGroupForHandles={['handle_1', 'handle_2']}
    />
    <RangeSlider
      value={[16, 32]}
      color='secondary'
      mb={2}
      ariaLabelGroupForHandles={['handle_1', 'handle_2']}
    />
    <RangeSlider
      value={[32, 64]}
      color='alert'
      mb={2}
      ariaLabelGroupForHandles={['handle_1', 'handle_2']}
    />
    <RangeSlider
      value={[64, 96]}
      color='error'
      mb={2}
      ariaLabelGroupForHandles={['handle_1', 'handle_2']}
    />
  </ThemeProvider>
)
