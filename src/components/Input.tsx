import React, { useState } from 'react'
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native'

import { InputContainer } from '../styles/components/Input'
import theme from '../styles/theme'

export type InputProps = {
  hasError?: boolean
} & TextInputProps

const Input: React.FC<InputProps> = ({
  onFocus,
  onBlur,
  hasError,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (isFocused) onBlur && onBlur(e)
    else onFocus && onFocus(e)

    setIsFocused(!isFocused)
  }

  return (
    <InputContainer
      focus={isFocused}
      error={hasError}
      placeholderTextColor={theme.textSecondary}
      selectionColor={theme.secondary}
      onFocus={e => handleFocus(e)}
      onBlur={e => handleFocus(e)}
      {...rest}
    />
  )
}

export default Input
