# Migrate to Design System version 5

## Breaking Changes

### Core

#### Removed exports

- `deprecatedPropType`

#### Badge

- Removed `bg` prop. Use `color` instead. Note that the `color` prop accepts only semantic color names.

#### Banner

- Removed `bg` prop. Use `color` instead. Depending on which semantic color name you pass to `color`, you may need to set `showIcon={false}` to hide the icon. Note that the `color` prop accepts only semantic color names.

#### Box

- Removed `bg` prop. Use `color` instead. This means you may need to use `<Text/>` nodes in order to customize the text color.

#### Button

- Removed `fullWidth` prop. Use `width={1}` instead.

#### Flag

- Removed `bg` prop. Use `color` instead. Note: `color` does not support custom hex colors like `bg` used to, only semantic color names.

#### Flex

- Removed `bg` prop. Use `color` instead.
- Removed `wrap` prop. Use `flexWrap` instead.
- Removed `align` prop. Use `alignItems` instead.
- Removed `justify` prop. Use `justifyContent` instead.

#### GenericBanner

- Due to changes in how `Banner` handles the `color` prop, you'll need to set the `color` prop on any `<Text/>` or `<Icon/>` nodes that you want to customize, for example nodes passed to the `heading` or `text` props.

#### Hug

- Removed `bg` prop. Use `color` instead.

#### Label

- Removed `bg` prop. Use `color` instead.

#### RatingBadge

- Removed `bg` prop. Use `color` instead.

#### Stamp

- Removed `variation='solid'`. Use `variation='fill'` instead.

Note about the `bg` prop for `variation='outline'`: this is a special case where we want to allow customization of the CSS `background-color` and `color` rules, so passing a semantic color name to `bg` will set the background color independently from `color`.

#### Text

- Removed `align` prop. Use `textAlign` instead.

#### Tooltip

- Removed `bg` prop. Use `color` instead.

#### ToggleBadge

- Removed `bg` prop. Use `color` instead.

### Autocomplete

#### Menu

- Removed `bg` prop. Use `color` instead.

### Modal

#### Modal

- Removed `bg` prop. Use `color` instead.

#### ModalHeader

- Removed `bg` prop. Use `color` instead.

#### SmallModalHeader

- Removed `bg` prop. Use `color` instead.

### Popover

- Removed `bg` prop. Use `color` instead.

### Icon

- Removed `bg` prop. Use `color` instead. Note that setting the `background-color` directly on an Icon is no longer supported.
