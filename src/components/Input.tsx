import React, { useState } from 'react'
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native'

import { InputContainer } from '../styles/components/Input'

export type InputProps = {
  onError?(): void
} & TextInputProps

const Input: React.FC<InputProps> = ({ onFocus, onBlur, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (isFocused) onBlur && onBlur(e)
    else onFocus && onFocus(e)

    setIsFocused(!isFocused)
  }

  return (
    <InputContainer
      focus={isFocused}
      error={hasError}
      onFocus={e => handleFocus(e)}
      onBlur={e => handleFocus(e)}
      {...rest}
    />
  )
}

export default Input
