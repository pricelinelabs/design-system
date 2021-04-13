import React from 'react'
import { render } from 'testing-library'
import TestRenderer from 'react-test-renderer'

import { Accessible as AccessibleIcon } from 'pcln-icons'

import * as icons from 'pcln-icons'
const iconList = Object.keys(icons)
  .filter((key) => key && key !== 'Icon')
  .map((key) => [key, icons[key]])

test.each(iconList)('renders %s', (key, Component) => {
  const { asFragment } = render(<Component />)
  expect(asFragment()).toMatchSnapshot()
})

describe('pcln-icons', () => {
  test('applies provided title', () => {
    const { getByText, getAllByTitle } = render(
      <AccessibleIcon title='Accessible' />
    )

    getByText('Accessible')

    // this matches the `title` prop passed to `svg` element and the
    // `<title></title>` node nested inside it
    expect(getAllByTitle('Accessible')).toHaveLength(2)
  })

  describe('SVG Icon Accessibility', () => {
    test.each(iconList)(
      'renders %s with accessibility attributes when title and desc is passed ',
      (key, Component) => {
        if (key !== 'Icon') {
          const testRenderer = TestRenderer.create(
            <Component
              title='SVG title'
              titleId='unique-svg-title-id'
              desc='SVG icon description'
              descId='unique-svg-icon-descId'
            />
          )
          const testInstance = testRenderer.root

          expect(testInstance.findByType('title').children[0]).toBe('SVG title')
          expect(testInstance.findByType('desc').children[0]).toBe(
            'SVG icon description'
          )
        }
      }
    )

    test(`render svg <Icon /> with accessibility attributes when 'title' and 'desc' props are passed`, () => {
      const testRenderer = TestRenderer.create(
        <AccessibleIcon
          title='Accessible Logo'
          titleId='titleId'
          desc='Accessible Logo description'
          descId='descId'
        />
      )
      const testInstance = testRenderer.root

      expect(testInstance.findByType('title').children[0]).toBe(
        'Accessible Logo'
      )
      expect(testInstance.findByType('desc').children[0]).toBe(
        'Accessible Logo description'
      )
      expect(testRenderer.toJSON().props['focusable']).toBe(false)
      expect(testRenderer.toJSON().props['tabIndex']).toBe(-1)
      expect(testRenderer.toJSON().props['role']).toBe('img')
      expect(testRenderer.toJSON().props['aria-labelledby']).toBe(
        'titleId descId'
      )
    })

    test(`render svg <Icon /> with 'aria-hidden' as 'true' when 'title' prop is not passed`, () => {
      const testRenderer = TestRenderer.create(
        <AccessibleIcon desc='Accessible Logo description' descId='descId' />
      )
      const testInstance = testRenderer.root
      const title = testInstance.findAll((el) => el.type == 'title')
      expect(title).toHaveLength(0)
      expect(testInstance.findByType('desc').children[0]).toBe(
        'Accessible Logo description'
      )
      expect(testRenderer.toJSON().props['role']).toBe('img')

      const tree = testRenderer.toTree()
      const renderedProps = tree.rendered.props
      expect(renderedProps['aria-hidden']).toBeTruthy()
      expect(renderedProps['focusable']).toBeFalsy()
      expect(renderedProps['tabIndex']).toBe(-1)
    })

    test(`aria-labelledby has only titleId when 'desc' prop is missing in <Icon /> `, () => {
      const testRenderer = TestRenderer.create(
        <AccessibleIcon title='Accessible Logo' titleId='accessible-logo' />
      )
      expect(testRenderer.toJSON().props['aria-labelledby']).toBe(
        'accessible-logo'
      )
    })

    test(`aria-labelledby has only titleId when 'desc' prop is missing in <Icon /> `, () => {
      const testRenderer = TestRenderer.create(
        <AccessibleIcon title='Accessible Logo' />
      )

      expect(testRenderer.toJSON().props['aria-labelledby']).toBeUndefined()
    })
  })

  describe('Icons should render without an outline', () => {
    test.each(iconList)(
      '%s Icon should render with no outline ',
      (key, Component) => {
        const { getAllByTitle } = render(
          <Component data-testid={key} title={key} />
        )

        expect(getAllByTitle(key)[0]).toHaveStyleRule('outline', 'none')
      }
    )
  })
})
