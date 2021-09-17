import React from 'react'
import QRCode from 'react-native-qrcode-svg'

import theme from '../styles/theme'
import { PageContainer, Subtitle, MarginTop, Center } from '../styles/global'
import {
  InfoContainer,
  QrCodeContainer,
  RestaurantNameText,
  EmailText,
} from '../styles/pages/RestaurantAccountPage'

import { RestaurantModel } from '../models/RestaurantModel'

const RestaurantAccountPage: React.FC = () => {
  const restaurant: RestaurantModel = {
    id: '1',
    name: 'Restaurante',
    email: 'email@restaurante.com.br',
  }

  return (
    <PageContainer>
      <Center>
        <InfoContainer>
          <RestaurantNameText>{restaurant.name}</RestaurantNameText>
          <EmailText>{restaurant.email}</EmailText>
        </InfoContainer>
        <MarginTop />
        <QrCodeContainer>
          <Subtitle>Código do Restaurante</Subtitle>
          <MarginTop />
          <QRCode
            value="QRCode restaurante"
            size={150}
            color={theme.textLight}
            backgroundColor={theme.background}
          />
        </QrCodeContainer>
      </Center>
    </PageContainer>
  )
}

export default RestaurantAccountPage
