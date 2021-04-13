import React from 'react'
import { render } from 'testing-library'

import styled from 'styled-components'

import { Button, createTheme } from '..'

const theme = createTheme()

const StyledButton = styled(Button)`
  padding: 100px;
`

const consoleError = console.error
afterEach(() => {
  console.error = consoleError
})

describe('Button', () => {
  it('should render correctly with no props', () => {
    const { getByText } = render(<Button>BUTTON</Button>)

    const button = getByText('BUTTON')

    expect(button).toHaveStyleRule(
      'background-color',
      theme.palette.primary.base
    )
    expect(button).toHaveStyleRule('color', theme.palette.text.lightest)

    expect(button).toHaveStyleRule(
      'background-color',
      theme.palette.primary.dark,
      {
        modifier: ':hover',
      }
    )
    expect(button).toHaveStyleRule('color', theme.palette.text.lightest, {
      modifier: ':hover',
    })
  })

  it('should render correctly when disabled', () => {
    const { getByText } = render(<Button disabled>BUTTON</Button>)

    const button = getByText('BUTTON')

    expect(button).toHaveStyleRule(
      'background-color',
      theme.palette.primary.light
    )
    expect(button).toHaveStyleRule('color', theme.palette.text.base)
    expect(button).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled',
    })

    expect(button).toHaveStyleRule(
      'background-color',
      theme.palette.primary.light,
      {
        modifier: ':hover',
      }
    )
    expect(button).toHaveStyleRule('color', theme.palette.text.base)
  })

  it('should render correctly for "size" prop', () => {
    const { getByText, rerender } = render(<Button>BUTTON</Button>)

    const button = getByText('BUTTON')

    expect(button).toHaveStyleRule('font-size', '14px')
    expect(button).toHaveStyleRule('padding', '9.5px 18px')

    rerender(<Button size='small'>BUTTON</Button>)

    expect(button).toHaveStyleRule('font-size', '12px')
    expect(button).toHaveStyleRule('padding', '7px 12px')

    rerender(<Button size='medium'>BUTTON</Button>)

    expect(button).toHaveStyleRule('font-size', '14px')
    expect(button).toHaveStyleRule('padding', '9.5px 18px')

    rerender(<Button size='large'>BUTTON</Button>)

    expect(button).toHaveStyleRule('font-size', '16px')
    expect(button).toHaveStyleRule('padding', '12px 22px')
  })

  it('should render correctly for "width" prop', () => {
    const { getByText, rerender } = render(<Button>BUTTON</Button>)

    const button = getByText('BUTTON')

    expect(button).toHaveStyleRule('width', undefined)

    rerender(<Button width={1}>BUTTON</Button>)
    expect(button).toHaveStyleRule('width', '100%')

    rerender(<Button width={1 / 2}>BUTTON</Button>)
    expect(button).toHaveStyleRule('width', '50%')

    rerender(<Button width={100}>BUTTON</Button>)
    expect(button).toHaveStyleRule('width', '100px')

    rerender(<Button width='3em'>BUTTON</Button>)
    expect(button).toHaveStyleRule('width', '3em')
  })

  it('should render correctly for "title" prop', () => {
    const { getByTitle } = render(<Button title='button title'>BUTTON</Button>)

    expect(getByTitle('button title')).toHaveAttribute(
      'aria-label',
      'button title'
    )
  })

  it('should forward the "aria-label" prop', () => {
    const label = 'i am an aria label'
    const { getByLabelText } = render(
      <Button aria-label={label}>BUTTON</Button>
    )

    expect(getByLabelText(label)).toHaveAttribute('aria-label', label)
  })

  describe('variations', () => {
    describe('fill variation', () => {
      it('should render correctly', () => {
        const { getByText } = render(<Button variation='fill'>BUTTON</Button>)

        const button = getByText('BUTTON')

        expect(button).toHaveStyleRule('color', theme.palette.text.lightest)
        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.primary.base
        )

        expect(button).toHaveStyleRule('color', theme.palette.text.lightest, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.primary.dark,
          {
            modifier: ':hover',
          }
        )
        expect(button).toHaveStyleRule(
          'outline',
          `0px solid ${theme.palette.primary.dark}`,
          {
            modifier: ':focus',
          }
        )
        expect(button).toHaveStyleRule(
          'box-shadow',
          `0 0 0 2px ${theme.palette.primary.dark}`,
          {
            modifier: ':focus',
          }
        )
      })

      it('should render correctly when disabled', () => {
        const { getByText } = render(
          <Button variation='fill' disabled>
            BUTTON
          </Button>
        )

        const button = getByText('BUTTON')

        expect(button).toHaveStyleRule('color', theme.palette.text.base)
        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.primary.light
        )

        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.primary.light,
          {
            modifier: ':hover',
          }
        )
      })
    })

    describe('outline variation', () => {
      it('should render correctly', () => {
        const { getByText } = render(
          <Button variation='outline'>BUTTON</Button>
        )

        const button = getByText('BUTTON')

        expect(button).toHaveStyleRule('color', theme.palette.primary.base)
        expect(button).toHaveStyleRule('background-color', 'transparent')
        expect(button).toHaveStyleRule('background-color', 'transparent', {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('color', theme.palette.primary.dark, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule(
          'box-shadow',
          `inset 0 0 0 2px ${theme.palette.primary.dark}`,
          {
            modifier: ':hover',
          }
        )
      })

      it('should render correctly when disabled', () => {
        const { getByText } = render(
          <Button variation='outline' disabled>
            BUTTON
          </Button>
        )

        const button = getByText('BUTTON')

        expect(button).toHaveStyleRule('color', theme.palette.primary.light)
        expect(button).toHaveStyleRule('background-color', 'transparent')
      })
    })

    describe('link variation', () => {
      it('should render correctly', () => {
        const { getByText } = render(<Button variation='link'>BUTTON</Button>)

        const button = getByText('BUTTON')

        expect(button).toHaveStyleRule('color', theme.palette.primary.base)
        expect(button).toHaveStyleRule('vertical-align', 'inherit')
        expect(button).toHaveStyleRule('-webkit-font-smoothing', 'inherit')
        expect(button).toHaveStyleRule('font-weight', '500')
        expect(button).toHaveStyleRule('line-height', '1.4')
        expect(button).toHaveStyleRule('padding', '0')
        expect(button).toHaveStyleRule('background-color', 'transparent')
        expect(button).toHaveStyleRule('color', theme.palette.primary.dark, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('text-decoration', 'underline', {
          modifier: ':hover',
        })
      })

      it('should render correctly when disabled', () => {
        const { getByText } = render(
          <Button variation='link' disabled>
            BUTTON
          </Button>
        )

        const button = getByText('BUTTON')

        expect(button).toHaveStyleRule('color', theme.palette.text.light, {
          modifier: ':disabled',
        })
        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.background.base,
          {
            modifier: ':disabled',
          }
        )
      })
    })

    describe('subtle variation', () => {
      it('should render correctly', () => {
        const { getByText } = render(<Button variation='subtle'>BUTTON</Button>)

        const button = getByText('BUTTON')

        expect(button).toHaveStyleRule('color', theme.palette.primary.base)
        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.background.base
        )
        expect(button).toHaveStyleRule('vertical-align', 'middle')
        expect(button).toHaveStyleRule('-webkit-font-smoothing', 'antialiased')
        expect(button).toHaveStyleRule('font-weight', '700')
        expect(button).toHaveStyleRule('line-height', '1.5')
        expect(button).toHaveStyleRule('color', theme.palette.primary.dark, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.background.light,
          {
            modifier: ':hover',
          }
        )
        expect(button).toHaveStyleRule(
          'outline',
          `0px solid ${theme.palette.primary.dark}`,
          {
            modifier: ':focus',
          }
        )
        expect(button).toHaveStyleRule(
          'box-shadow',
          `0 0 0 2px ${theme.palette.primary.dark}`,
          {
            modifier: ':focus',
          }
        )
      })

      it('should render correctly when disabled', () => {
        const { getByText } = render(
          <Button variation='subtle' disabled>
            BUTTON
          </Button>
        )

        const button = getByText('BUTTON')

        expect(button).toHaveStyleRule('color', theme.palette.text.light, {
          modifier: ':disabled',
        })
        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.background.base,
          {
            modifier: ':disabled',
          }
        )
      })
    })

    describe('plain variation', () => {
      it('should render correctly', () => {
        const { getByText } = render(<Button variation='plain'>BUTTON</Button>)

        const button = getByText('BUTTON')

        expect(button).toHaveStyleRule('color', theme.palette.primary.base)
        expect(button).toHaveStyleRule('background-color', 'transparent')
        expect(button).toHaveStyleRule('vertical-align', 'middle')
        expect(button).toHaveStyleRule('-webkit-font-smoothing', 'antialiased')
        expect(button).toHaveStyleRule('font-weight', '700')
        expect(button).toHaveStyleRule('line-height', '1.5')
        expect(button).toHaveStyleRule('color', theme.palette.primary.dark, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.background.light,
          {
            modifier: ':hover',
          }
        )
        expect(button).toHaveStyleRule(
          'outline',
          `0px solid ${theme.palette.primary.dark}`,
          {
            modifier: ':focus',
          }
        )
        expect(button).toHaveStyleRule(
          'box-shadow',
          `0 0 0 2px ${theme.palette.primary.dark}`,
          {
            modifier: ':focus',
          }
        )
      })

      it('should render correctly when disabled', () => {
        const { getByText } = render(
          <Button variation='plain' disabled>
            BUTTON
          </Button>
        )

        const button = getByText('BUTTON')

        expect(button).toHaveStyleRule('color', theme.palette.text.light, {
          modifier: ':disabled',
        })
        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.background.base,
          {
            modifier: ':disabled',
          }
        )
      })
    })

    describe('lightFill variation', () => {
      it('should render correctly', () => {
        const { getByText } = render(
          <Button variation='lightFill' color='warning'>
            BUTTON
          </Button>
        )

        const button = getByText('BUTTON')

        expect(button).toHaveStyleRule('color', theme.palette.warning.base)
        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.warning.light
        )
        expect(button).toHaveStyleRule('vertical-align', 'middle')
        expect(button).toHaveStyleRule('-webkit-font-smoothing', 'antialiased')
        expect(button).toHaveStyleRule('font-weight', '700')
        expect(button).toHaveStyleRule('line-height', '1.5')
        expect(button).toHaveStyleRule('color', theme.palette.warning.dark, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.warning.light,
          {
            modifier: ':hover',
          }
        )
        expect(button).toHaveStyleRule(
          'outline',
          `0px solid ${theme.palette.warning.dark}`,
          {
            modifier: ':focus',
          }
        )
        expect(button).toHaveStyleRule(
          'box-shadow',
          `0 0 0 2px ${theme.palette.warning.dark}`,
          {
            modifier: ':focus',
          }
        )
      })

      it('should render correctly when disabled', () => {
        const { getByText } = render(
          <Button variation='lightFill' disabled>
            BUTTON
          </Button>
        )

        const button = getByText('BUTTON')

        expect(button).toHaveStyleRule('color', theme.palette.text.light, {
          modifier: ':disabled',
        })
        expect(button).toHaveStyleRule(
          'background-color',
          theme.palette.background.base,
          {
            modifier: ':disabled',
          }
        )
      })
    })
  })

  // this test detects a current defect that will be fixed properly in DSv4
  it('should not lose base styles on "styled(Button)"', () => {
    const { getByText } = render(<StyledButton>BUTTON</StyledButton>)

    const button = getByText('BUTTON')

    expect(button).toHaveStyleRule(
      'background-color',
      theme.palette.primary.base
    )
    expect(button).toHaveStyleRule('color', theme.palette.text.lightest)
    expect(button).toHaveStyleRule('padding', '100px')

    expect(button).toHaveStyleRule(
      'background-color',
      theme.palette.primary.dark,
      {
        modifier: ':hover',
      }
    )
    expect(button).toHaveStyleRule('color', theme.palette.text.lightest, {
      modifier: ':hover',
    })
  })
})
