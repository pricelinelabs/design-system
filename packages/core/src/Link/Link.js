import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { width, space } from 'styled-system'

import { buttonStyles } from '../Button'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
} from '../utils'
import pick from 'lodash.pick'
import propTypes from '@styled-system/prop-types'

const variations = {
  fill: css`
    &:hover {
      text-decoration: none;
    }

    ${buttonStyles}
  `,
  link: css`
    cursor: pointer;
    text-decoration: none;
    color: ${getPaletteColor('base')};

    &:hover {
      color: ${getPaletteColor('dark')};
      text-decoration: underline;
    }
  `,
  outline: css`
    &:hover {
      text-decoration: none;
    }

    ${buttonStyles}
  `,
}

const Link = styled.a.attrs(({ target, ...props }) => ({
  rel: target === '_blank' ? 'noopener' : null,
  target,
  ...props,
}))`
  ${applyVariations('Link', variations)}
  ${width} ${space};
`

Link.displayName = 'Link'

Link.defaultProps = {
  color: 'primary',
  variation: 'link',
  size: 'medium',
}

Link.propTypes = {
  color: deprecatedColorValue(),
  ...pick(propTypes.layout, ['width']),
  ...propTypes.space,
  variation: PropTypes.oneOf(Object.keys(variations)),
}

export default Link
