import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { RestaurantMealsStackParamList } from '../routes/RestaurantMealsStackNavigation'
import resolveException from '../hooks/resolveException'
import theme from '../styles/theme'
import {
  Center,
  ListItem,
  ListItemActions,
  ListItemInfo,
  PageContainer,
} from '../styles/global'
import { IconButton, FABButton } from '../components'
import {
  MealTitle,
  MealInfo,
  MealPrice,
  NoMealsFoundText,
} from '../styles/pages/RestaurantMealsPage'

import { MealModel } from '../models/MealModel'

type RestaurantMealsPageProp = StackNavigationProp<
  RestaurantMealsStackParamList,
  'RestaurantMealsPage'
>

const RestaurantMealsPage: React.FC = () => {
  const { navigate } = useNavigation<RestaurantMealsPageProp>()

  const mealsData: MealModel[] = [
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

  const [meals, setMeals] = useState<MealModel[]>([])
  const [loadingMeals, setLoadingMeals] = useState(true)

  const loadMeals = async (): Promise<void> => {
    try {
      setMeals(mealsData || [])
      setLoadingMeals(false)
    } catch (err) {
      resolveException(err as Error)
    }
  }

  useEffect(() => {
    loadMeals()
  }, [])

  const handleDeleteMeal = (meal: MealModel): void => {
    try {
      console.log('Excluir refeição')

      setMeals(meals.filter(m => m.id !== meal.id))
    } catch (err) {
      resolveException(err as Error)
    }
  }

  const handleConfirmDeletionMeal = (meal: MealModel): void => {
    Alert.alert(
      'Atenção',
      `Deseja realmente excluir a refeição "${meal.name}"?`,
      [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim',
          onPress: () => handleDeleteMeal(meal),
        },
      ],
      {
        cancelable: true,
      }
    )
  }

  const renderItem = ({ item }: ListRenderItemInfo<MealModel>) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigate('RestaurantMealDetailPage', { meal: item })}
    >
      <ListItem>
        <ListItemInfo>
          <MealTitle>{item.name}</MealTitle>
          <MealInfo>{item.description}</MealInfo>
          <MealPrice>R$ {item.price.toFixed(2)}</MealPrice>
        </ListItemInfo>
        <ListItemActions>
          <IconButton
            icon={
              <MaterialIcons name="delete" size={20} color={theme.textLight} />
            }
            onPress={() => handleConfirmDeletionMeal(item)}
          />
        </ListItemActions>
      </ListItem>
    </TouchableOpacity>
  )

  return (
    <>
      {loadingMeals ? (
        <Center>
          <ActivityIndicator size="large" color={theme.primary} />
        </Center>
      ) : meals.length > 0 ? (
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
      )}
      <FABButton
        icon={<MaterialIcons name="add" size={40} color={theme.textLight} />}
        onPress={() => navigate('RestaurantMealDetailPage', { meal: null })}
      />
    </>
  )
}

export default RestaurantMealsPage
