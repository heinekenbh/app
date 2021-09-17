import React, { useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RestaurantMealsStackParamList } from '../routes/RestaurantMealsStackNavigation'
import { BackButton, FormInput } from '../components'
import { MarginTop, PageContainer } from '../styles/global'
import { MealModel } from '../models/MealModel'

type RestaurantMealsPageProp = StackNavigationProp<
  RestaurantMealsStackParamList,
  'RestaurantMealDetailPage'
>

type RestaurantMealDetailRouteProp = RouteProp<
  RestaurantMealsStackParamList,
  'RestaurantMealDetailPage'
>

const RestaurantMealDetailPage: React.FC = () => {
  const { canGoBack, goBack } = useNavigation<RestaurantMealsPageProp>()
  const { params } = useRoute<RestaurantMealDetailRouteProp>()

  const [meal, setMeal] = useState({} as MealModel)

  useEffect(() => setMeal(params.meal), [])

  return (
    <PageContainer>
      {canGoBack() && <BackButton onPress={goBack} />}
      <FormInput
        label="Nome"
        placeholder="Digite o nome da refeição."
        value={meal?.name}
        onChangeText={value => setMeal({ ...meal, name: value })}
      />
      <MarginTop />
      <FormInput
        label="Descrição"
        placeholder="Digite a composição da refeição."
        value={meal?.description}
        onChangeText={value => setMeal({ ...meal, description: value })}
        multiline
      />
      <MarginTop />
      <FormInput
        label="Preço"
        placeholder="Digite o preço da refeição."
        value={meal?.price?.toString()}
        onChangeText={value => setMeal({ ...meal, price: parseFloat(value) })}
      />
    </PageContainer>
  )
}

export default RestaurantMealDetailPage
