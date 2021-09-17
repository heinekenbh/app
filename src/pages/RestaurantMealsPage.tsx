import React from 'react'
import { FlatList, ListRenderItemInfo, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

import { RestaurantMealsStackParamList } from '../routes/RestaurantMealsStackNavigation'
import { MealModel } from '../models/MealModel'
import { Center, ListItem, PageContainer } from '../styles/global'
import {
  MealTitle,
  MealInfo,
  MealPrice,
  NoMealsFoundText,
} from '../styles/pages/RestaurantMealsPage'

type RestaurantMealsPageProp = StackNavigationProp<
  RestaurantMealsStackParamList,
  'RestaurantMealsPage'
>

const RestaurantMealsPage: React.FC = () => {
  const { navigate } = useNavigation<RestaurantMealsPageProp>()

  const meals: MealModel[] = [
    {
      id: '1',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '2',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '3',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '4',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '5',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '6',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '7',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '8',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '9',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '10',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '11',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '12',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '13',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '14',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '15',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '16',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '17',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '18',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '19',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '20',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '21',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '22',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '23',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '24',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
    {
      id: '25',
      name: 'Prato Feito Pequeno',
      description: 'Arroz, feijão, carne de boi, salada',
      price: 13,
    },
  ]

  const renderItem = ({ item }: ListRenderItemInfo<MealModel>) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigate('RestaurantMealDetailPage', { meal: item })}
    >
      <ListItem>
        <MealTitle>{item.name}</MealTitle>
        <MealInfo>{item.description}</MealInfo>
        <MealPrice>R$ {item.price.toFixed(2)}</MealPrice>
      </ListItem>
    </TouchableOpacity>
  )

  return meals.length > 0 ? (
    <FlatList<MealModel>
      data={meals}
      style={{ paddingHorizontal: 16 }}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
    />
  ) : (
    <PageContainer>
      <Center>
        <NoMealsFoundText>
          Nenhuma refeição encontrada, cadastre uma para começar.
        </NoMealsFoundText>
      </Center>
    </PageContainer>
  )
}

export default RestaurantMealsPage
