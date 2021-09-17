import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import theme from '../styles/theme'
import { MarginTop } from '../styles/global'
import {
  BackButtonContainer,
  TextButton,
} from '../styles/components/BackButton'

export type BackButtonProps = {
  onPress(): void
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <>
      <BackButtonContainer activeOpacity={0.7} onPress={onPress}>
        <MaterialIcons name="arrow-back-ios" size={25} color={theme.primary} />
        <TextButton>Voltar</TextButton>
      </BackButtonContainer>
      <MarginTop />
    </>
  )
}

export default BackButton
