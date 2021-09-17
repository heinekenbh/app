import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import RestaurantMealsPage from '../pages/RestaurantMealsPage'
import RestaurantMealDetailPage from '../pages/RestaurantMealDetailPage'

import { MealModel } from '../models/MealModel'

export type RestaurantMealsStackParamList = {
  RestaurantMealsPage: undefined
  RestaurantMealDetailPage: { meal: MealModel | null }
}

const Stack = createStackNavigator<RestaurantMealsStackParamList>()

const RestaurantMealsStack: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="RestaurantMealsPage"
  >
    <Stack.Screen name="RestaurantMealsPage" component={RestaurantMealsPage} />
    <Stack.Screen
      name="RestaurantMealDetailPage"
      component={RestaurantMealDetailPage}
    />
  </Stack.Navigator>
)

export default RestaurantMealsStack
