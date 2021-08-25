import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ButtonContainer, TextButton } from '../styles/components/Button'

export type ButtonProps = TouchableOpacityProps

const Button: React.FC<ButtonProps> = ({ children, disabled, ...rest }) => {
  const getType = () => (disabled ? 'disabled' : 'primary')

  const renderChildren = () => {
    if (typeof children === 'string') {
      return <TextButton type={getType()}>{children}</TextButton>
    }

    return children
  }

  return (
    <ButtonContainer
      type={getType()}
      activeOpacity={0.7}
      disabled={disabled}
      {...rest}
    >
      {renderChildren()}
    </ButtonContainer>
  )
}

export default Button
