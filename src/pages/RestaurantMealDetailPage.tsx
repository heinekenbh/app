import React, { useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RestaurantMealsStackParamList } from '../routes/RestaurantMealsStackNavigation'
import resolveException from '../hooks/resolveException'
import { BackButton, Button, FormInput } from '../components'
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

  useEffect(() => setMeal(params.meal || ({} as MealModel)), [])

  const handleSaveMeal = () => {
    try {
      console.log('Salvar refeição')

      goBack()
    } catch (err) {
      resolveException(err as Error)
    }
  }

  const handleDeleteMeal = () => {
    try {
      console.log('Excluir refeição')

      goBack()
    } catch (err) {
      resolveException(err as Error)
    }
  }

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
      <MarginTop />
      <Button onPress={() => handleSaveMeal()}>Salvar</Button>
    </PageContainer>
  )
}

export default RestaurantMealDetailPage
