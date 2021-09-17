import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignInPage from '../pages/SignInPage'
import SignUpCustomerPage from '../pages/SignUpCustomerPage'
import SignUpRestaurantPage from '../pages/SignUpRestaurantPage'
import RestaurantBottomTab from './RestaurantTabNavigation'

export type RootStackParamList = {
  RestaurantBottomTab: undefined
  SignInPage: undefined
  SignUpCustomerPage: undefined
  SignUpRestaurantPage: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const RootStack: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="SignInPage"
  >
    <Stack.Screen name="SignInPage" component={SignInPage} />
    <Stack.Screen name="SignUpCustomerPage" component={SignUpCustomerPage} />
    <Stack.Screen
      name="SignUpRestaurantPage"
      component={SignUpRestaurantPage}
    />
    <Stack.Screen name="RestaurantBottomTab" component={RestaurantBottomTab} />
  </Stack.Navigator>
)

export default RootStack
