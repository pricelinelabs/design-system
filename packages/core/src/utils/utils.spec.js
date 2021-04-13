import {
  applySizes,
  applyVariations,
  borders,
  color,
  createTheme,
  decomposeColor,
  deprecatedColorValue,
  getBreakpointSize,
  getByPalette,
  getContrastRatio,
  getLuminance,
  getPaletteColor,
  getTextColorOn,
  hasPaletteColor,
  hexToRgb,
} from '.'

describe('utils', () => {
  describe('deprecatedColorValue', () => {
    test('returns an error when when using a deprecated color prop value', () => {
      expect(
        deprecatedColorValue()(
          {
            color: 'blue',
            theme: createTheme(),
          },
          'color',
          'Component'
        )
      ).toBeTruthy()
    })

    test('returns undefined when using a valid palette color', () => {
      expect(
        deprecatedColorValue()(
          {
            color: 'primary',
            theme: createTheme(),
          },
          'color',
          'Component'
        )
      ).toBeUndefined()
      expect(
        deprecatedColorValue()(
          {
            color: 'primary.base',
            theme: createTheme(),
          },
          'color',
          'Component'
        )
      ).toBeUndefined()
    })
  })

  describe('hexToRgb', () => {
    test('converts hex to rgb', () => {
      expect(hexToRgb('#0068EF')).toEqual('rgb(0, 104, 239)')
      expect(hexToRgb('#000')).toEqual('rgb(0, 0, 0)')
    })

    test('returns empty if invalid hex', () => {
      expect(hexToRgb('#00')).toEqual('')
    })
  })

  describe('decomposeColor', () => {
    test('decomposes a hex or rgb', () => {
      expect(decomposeColor('#0068EF')).toEqual([0, 104, 239])
      expect(decomposeColor('#000')).toEqual([0, 0, 0])
      expect(decomposeColor('rgb(0, 104, 239)')).toEqual([0, 104, 239])
    })
  })

  describe('getLuminance', () => {
    test('returns the luminance of a color', () => {
      expect(getLuminance('#0068EF')).toBeCloseTo(0.16132624188259573)
      expect(getLuminance('#000')).toBeCloseTo(0)
      expect(getLuminance('#fff')).toBeCloseTo(1)
    })
  })

  describe('getContrastRatio', () => {
    test('returns the contrast ratio between two colors', () => {
      expect(getContrastRatio('#0068EF', '#000000')).toBeCloseTo(
        4.2265248376519144
      )
      expect(getContrastRatio('#0068EF', '#ffffff')).toBeCloseTo(
        4.968620984531288
      )
    })
  })

  describe('applyVariations', () => {
    test('applies component style overrides', () => {
      const props = {
        theme: createTheme({
          componentStyles: { Button: { primary: 'color: red;' } },
        }),
        color: 'primary',
      }
      const override = applyVariations('Button')(props)

      expect(override[0](props)).toEqual(
        props.theme.componentStyles.Button.primary
      )
    })

    test('applies variations with component style overrides', () => {
      const props = {
        theme: createTheme({
          componentStyles: { Button: { outline: { primary: 'color: red;' } } },
        }),
        color: 'primary',
        variation: 'outline',
      }
      const variations = { outline: 'color: blue;' }
      const override = applyVariations('Button', variations)(props)
      expect(override[0]).toEqual(variations.outline)
      expect(override[2](props)).toEqual(
        props.theme.componentStyles.Button.outline.primary
      )
    })
  })

  describe('getPaletteColor', () => {
    const props = {
      theme: createTheme(),
    }

    test('returns a palette shade', () => {
      expect(getPaletteColor('primary.base')(props)).toEqual(
        props.theme.palette.primary.base
      )
      expect(getPaletteColor('primary', 'base')(props)).toEqual(
        props.theme.palette.primary.base
      )
      expect(getPaletteColor('primary.dark', 'base')(props)).toEqual(
        props.theme.palette.primary.dark
      )

      // legacy support
      expect(getPaletteColor('orange', 'base')(props)).toEqual(
        props.theme.colors.orange
      )
      expect(getPaletteColor('#ffffff', 'base')(props)).toEqual('#ffffff')
    })

    test('returns a palette shade when provided a color prop', () => {
      expect(getPaletteColor('base')({ ...props, color: 'primary' })).toEqual(
        props.theme.palette.primary.base
      )
      expect(
        getPaletteColor('base')({ ...props, color: 'primary.dark' })
      ).toEqual(props.theme.palette.primary.dark)

      // legacy support
      expect(getPaletteColor('base')({ ...props, color: 'orange' })).toEqual(
        props.theme.colors.orange
      )
      expect(getPaletteColor('base')({ ...props, color: '#ffffff' })).toEqual(
        '#ffffff'
      )
    })
  })

  describe('hasPaletteColor', () => {
    test('returns true if palette color', () => {
      expect(
        hasPaletteColor({ theme: createTheme(), color: 'primary' })
      ).toBeTruthy()
      expect(
        hasPaletteColor({ theme: createTheme(), color: 'primary.dark' })
      ).toBeTruthy()
    })

    test('returns false if not a palette color', () => {
      expect(
        hasPaletteColor({ theme: createTheme(), color: 'orange' })
      ).toBeFalsy()
    })
  })

  describe('getTextColorOn', () => {
    const props = { theme: createTheme() }

    test('returns correct text color', () => {
      expect(getTextColorOn('test')({ theme: {} })).toEqual('')
      expect(getTextColorOn('abcde')(props)).toEqual(
        props.theme.palette.text.base
      )
      expect(getTextColorOn('primary.light')(props)).toEqual(
        props.theme.palette.text.base
      )
      expect(getTextColorOn('primary.base')(props)).toEqual(
        props.theme.palette.text.lightest
      )
    })

    test('returns correct text color with custom contrast ratio', () => {
      expect(
        getTextColorOn('primary.dark')({
          theme: { ...props.theme, contrastRatio: 9.2 },
        })
      ).toEqual(props.theme.palette.text.base)
    })

    test('can be driven by a color prop', () => {
      expect(getTextColorOn('light')({ ...props, color: 'primary' })).toEqual(
        props.theme.palette.text.base
      )
      expect(getTextColorOn('dark')({ ...props, color: 'primary' })).toEqual(
        props.theme.palette.text.lightest
      )
    })
  })

  describe('getByPalette', () => {
    test('returns the correct style', () => {
      const props = { theme: createTheme(), bg: 'background', color: 'primary' }
      expect(getByPalette(props)).toEqual(
        expect.arrayContaining([
          'background-color:',
          props.theme.palette.background.base,
          ';color:',
          props.theme.palette.primary.base,
          ';',
        ])
      )
    })
  })

  describe('color', () => {
    const props = { theme: createTheme() }

    test('returns empty string if missing props', () => {
      expect(color({})).toEqual('')
      expect(color({ color: 'primary' })).toEqual('')
    })

    test('returns the correct style', () => {
      expect(color({ ...props, color: 'background' })).toEqual(
        expect.arrayContaining([
          'background-color:',
          props.theme.palette.background.base,
          ';',
        ])
      )
      expect(color({ ...props, color: 'primary' })).toEqual(
        expect.arrayContaining([
          'background-color:',
          props.theme.palette.primary.base,
          ';color:',
          props.theme.palette.text.lightest,
          ';',
        ])
      )
      expect(color({ ...props, color: 'notify' })).toEqual(
        expect.arrayContaining([
          'background-color:',
          props.theme.palette.notify.base,
          ';color:',
          props.theme.palette.text.base,
          ';',
        ])
      )

      // legacy support
      expect(color({ ...props, color: 'text' })).toEqual(
        expect.arrayContaining(['color:', props.theme.colors.text, ';'])
      )
      expect(color({ ...props, color: 'blue' })).toEqual(
        expect.arrayContaining(['color:', props.theme.colors.blue, ';'])
      )
    })
  })

  describe('borders', () => {
    test('returns the correct style', () => {
      const props = { theme: createTheme() }
      expect(borders(props)).toEqual({
        'border-color': props.theme.palette.border.base,
        ':focus': {
          outline: 0,
          'border-color': props.theme.palette.primary.base,
          'box-shadow': `0 0 0 2px ${props.theme.palette.primary.base}`,
        },
      })
      expect(borders({ ...props, color: 'primary' })).toEqual({
        'border-color': props.theme.palette.primary.base,
        ':focus': {
          outline: 0,
          'border-color': props.theme.palette.primary.base,
          'box-shadow': `0 0 0 2px ${props.theme.palette.primary.base}`,
        },
      })
    })
  })

  describe('getBreakpointSize', () => {
    test('returns the expected result', () => {
      const testArray1 = ['small', 'medium', null, null, null, null]
      const testArray2 = [null, 'small', null, null, 'medium', null]
      expect(getBreakpointSize(testArray1, 2)).toBe('medium')
      expect(getBreakpointSize(testArray1, 1)).toBe('small')
      expect(getBreakpointSize(testArray2, 2)).toBe('small')
      expect(getBreakpointSize(testArray2, 4)).toBe('small')
      expect(getBreakpointSize(testArray2, 5)).toBe('medium')
    })
  })

  describe('applySizes', () => {
    const sizesCss = {
      small: 'smaaaallll css',
      medium: 'medium css',
    }

    test('returns the expected result when size is an array', () => {
      const result2Css = [
        'medium css',
        ';',
        '@media screen and (min-width:32em)',
        '{',
        'medium css',
        ';}',
        '@media screen and (min-width:40em)',
        '{',
        'medium css',
        ';}',
        '@media screen and (min-width:48em)',
        '{',
        'medium css',
        ';}',
        '@media screen and (min-width:64em)',
        '{',
        'smaaaallll css',
        ';}',
        '@media screen and (min-width:80em)',
        '{',
        'smaaaallll css',
        ';}',
      ]

      const sizeArray1 = ['small', 'medium', null, null, null, null]
      const sizeArray2 = ['medium', null, null, null, 'small', null]

      const result1 = applySizes(sizesCss)({ size: sizeArray1 })
      expect(result1[0]).toBe('smaaaallll css')
      const result2 = applySizes(sizesCss)({ size: sizeArray2 })
      expect(result2[0]).toBe('medium css')
      expect(result2).toEqual(result2Css)
    })
    test('expected result when size is a string', () => {
      const result1 = applySizes(sizesCss)({ size: 'medium' })
      const result2 = applySizes(sizesCss)({ size: 'small' })
      expect(result1).toEqual(['medium css'])
      expect(result2).toEqual(['smaaaallll css'])
    })
  })
})
