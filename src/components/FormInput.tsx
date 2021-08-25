import React, { useState } from 'react'

import Input, { InputProps } from './Input'
import { InputLabel } from '../styles/components/FormInput'

export type FormInputProps = InputProps

const FormInput: React.FC<FormInputProps> = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <>
      <InputLabel focus={isFocused} error={hasError}>
        Label:
      </InputLabel>
      <Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </>
  )
}

export default FormInput
