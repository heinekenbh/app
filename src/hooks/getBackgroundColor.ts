import theme from '../styles/theme'

const getBackgroundColor = (type: 'primary' | 'disabled'): string => {
  switch (type) {
    case 'primary':
      return theme.primary
    case 'disabled':
      return theme.secondary
  }
}

export default getBackgroundColor
