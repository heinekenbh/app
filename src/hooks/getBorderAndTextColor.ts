import theme from '../styles/theme'

const getBorderAndTextColor = (focus: boolean, error: boolean): string => {
  if (focus) return theme.inputBorderAndTextSelected
  else {
    if (error) return theme.inputBorderAndTextError
  }

  return theme.inputBorderAndText
}

export default getBorderAndTextColor
