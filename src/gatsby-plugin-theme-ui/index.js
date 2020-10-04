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
  montserrat: 'Montserrat, sans-serif',
  NotoSansJP: 'Noto Sans JP, sans-serif',
}

const colorModeTransition = 'background 0.3s ease-in-out,color 0.3s ease-in-out'

export default merge({
  initialColorMode: 'light',
  useCustomProperties: true,
  colorModeTransition,
  colors,
  fonts,
  breakpoints,
})
