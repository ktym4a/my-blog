import merge from 'lodash/merge'
import colors from './colors'

const breakpoints = [
  ['phone', 600],
  ['tablet', 768],
  ['desktop', 1024],
  ['desktop_large', 1200],
]

const fonts = {
  serif: 'Merriweather, Georgia, Serif',
  montserrat: 'Montserrat,sans-serif',
}

const colorModeTransition =
  'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)'

export default merge({
  initialColorMode: 'light',
  useCustomProperties: true,
  colorModeTransition,
  colors,
  fonts,
  breakpoints,
})
