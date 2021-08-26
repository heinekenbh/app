import React, { useState } from 'react'

import Input, { InputProps } from './Input'
import {
  InputLabel,
  ErrorArea,
  ErrorText,
} from '../styles/components/FormInput'

export type FormInputProps = {
  label?: string
  error?: string
} & InputProps

const FormInput: React.FC<FormInputProps> = ({ label, error, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
      {label && (
        <InputLabel focus={isFocused} error={!!error}>
          {label}:
        </InputLabel>
      )}
      <Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        hasError={!!error}
        {...rest}
      />
      {error && (
        <ErrorArea>
          <ErrorText>{error}</ErrorText>
        </ErrorArea>
      )}
    </>
  )
}

export default FormInput
