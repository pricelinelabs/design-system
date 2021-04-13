import React from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import styled from 'styled-components'
import {
  Flex,
  Card,
  Label as PclnLabel,
  Input as PclnInput,
  getPaletteColor,
} from 'pcln-design-system'
import { themeGet } from '@styled-system/theme-get'

export const AutocompleteContext = React.createContext()

export const withAutocomplete = (Component, mapProps) =>
  // eslint-disable-next-line react/display-name
  React.forwardRef((props, ref) => (
    <AutocompleteContext.Consumer
      // eslint-disable-next-line react/no-children-prop
      children={(state) => (
        <Component ref={ref} {...props} {...mapProps({ ...props, ...state })} />
      )}
    />
  ))

export const Label = withAutocomplete(PclnLabel, ({ getLabelProps }) =>
  getLabelProps()
)
Label.isLabel = true

export const Input = withAutocomplete(PclnInput, ({ getInputProps }) =>
  getInputProps()
)
Input.isField = true

const MenuCard = styled(Card)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: ${(props) => props.height};
  overflow-y: auto;
`

MenuCard.defaultProps = {
  color: 'white',
  height: '256px',
  borderWidth: 0,
  boxShadowSize: 'lg',
  mt: 1,
}

MenuCard.propTypes = {
  color: PropTypes.string,
}

const MenuRoot = React.forwardRef((props, ref) => (
  <MenuCard {...props} innerRef={ref} />
))
MenuRoot.displayName = 'Autocomplete_MenuRoot'

export const Menu = ({ children, ...props }) => (
  <AutocompleteContext.Consumer
    // eslint-disable-next-line react/no-children-prop
    children={({ match, isOpen, getMenuProps, inputValue }) => (
      <MenuRoot
        {...getMenuProps({
          ...props,
          isOpen,
        })}
        // eslint-disable-next-line react/no-children-prop
        children={
          isOpen
            ? React.Children.toArray(children)
                .filter((el) => match(el.props.item, inputValue))
                .map((el, index) => React.cloneElement(el, { index }))
            : false
        }
      />
    )}
  />
)

const ItemRoot = styled(Flex)`
  cursor: pointer;
  &[aria-selected='true'] {
    background-color: ${getPaletteColor('primary.light')};
  }
  &[data-highlighted] {
    color: ${themeGet('colors.white')};
    background-color: ${getPaletteColor('primary.base')};
    & svg {
      color: ${getPaletteColor('background.lightest')};
    }
  }
`

ItemRoot.defaultProps = {
  alignItems: 'center',
}

export const Item = (props) => (
  <AutocompleteContext.Consumer
    // eslint-disable-next-line react/no-children-prop
    children={({ item, getItemProps, highlightedIndex }) => (
      <ItemRoot
        {...getItemProps({
          item,
          px: 2,
          py: 1,
          'data-highlighted':
            // eslint-disable-next-line react/prop-types
            highlightedIndex === props.index ? true : undefined,
          ...props,
        })}
      />
    )}
  />
)

export class Autocomplete extends React.Component {
  static Label = Label
  static Input = Input
  static Menu = Menu
  static Item = Item

  static propTypes = {
    match: PropTypes.func,
  }

  static defaultProps = {
    match: () => true,
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children, style, ...props } = this.props

    return (
      <Downshift
        {...props}
        // eslint-disable-next-line react/no-children-prop
        children={(state) => (
          <div style={{ position: 'relative', ...style }}>
            <AutocompleteContext.Provider
              value={{ ...props, ...state }}
              // eslint-disable-next-line react/no-children-prop
              children={children}
            />
          </div>
        )}
      />
    )
  }
}
