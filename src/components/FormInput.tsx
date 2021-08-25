import React, { useState } from 'react'

import Input, { InputProps } from './Input'
import {
  InputLabel,
  ErrorArea,
  ErrorText,
} from '../styles/components/FormInput'

export type FormInputProps = {
  error?: string
} & InputProps

const FormInput: React.FC<FormInputProps> = ({ error, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
      <InputLabel focus={isFocused} error={!!error}>
        Label:
      </InputLabel>
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
