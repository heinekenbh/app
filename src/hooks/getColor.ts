import theme from '../styles/theme'

const getColor = (type: 'primary' | 'disabled'): string => {
  switch (type) {
    case 'primary':
      return theme.textLight
    case 'disabled':
      return theme.textDark
  }
}

export default getColor
