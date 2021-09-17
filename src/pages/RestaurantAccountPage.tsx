import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

import resolveException from '../hooks/resolveException'
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
  const restaurantData: RestaurantModel = {
    id: '1',
    name: 'Restaurante',
    email: 'email@restaurante.com.br',
  }

  const [restaurant, setRestaurant] = useState<RestaurantModel>(
    {} as RestaurantModel
  )
  const [loadingRestaurant, setLoadingRestaurant] = useState(true)

  const loadRestaurant = async (): Promise<void> => {
    try {
      setRestaurant(restaurantData || ({} as RestaurantModel))
      setLoadingRestaurant(false)
    } catch (err) {
      resolveException(err as Error)
    }
  }

  useEffect(() => {
    loadRestaurant()
  }, [])

  return (
    <PageContainer>
      <Center>
        {loadingRestaurant ? (
          <ActivityIndicator size="large" color={theme.primary} />
        ) : (
          <>
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
          </>
        )}
      </Center>
    </PageContainer>
  )
}

export default RestaurantAccountPage
