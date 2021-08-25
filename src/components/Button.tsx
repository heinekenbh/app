import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ButtonContainer, TextButton } from '../styles/components/Button'

export type ButtonProps = {
  text?: string
} & TouchableOpacityProps

const Button: React.FC<ButtonProps> = ({ disabled, ...rest }) => {
  const getType = () => (disabled ? 'disabled' : 'primary')

  return (
    <ButtonContainer
      type={getType()}
      activeOpacity={0.7}
      disabled={disabled}
      {...rest}
    >
      <TextButton type={getType()}>Entrar</TextButton>
    </ButtonContainer>
  )
}

export default Button
