/* eslint-disable @typescript-eslint/ban-ts-comment */
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { rendererCreateWithTheme } from './rendererCreateWithTheme'

// @ts-ignore
global.rendererCreateWithTheme = rendererCreateWithTheme

// @ts-ignore
global.requestAnimationFrame =
  // @ts-ignore
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0)
  }
