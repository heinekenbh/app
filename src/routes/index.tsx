import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignInPage from '../pages/SignInPage'
import SignUpCustomerPage from '../pages/SignUpCustomerPage'
import SignUpRestaurantPage from '../pages/SignUpRestaurantPage'

export type RootStackParamList = {
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
  >
    <Stack.Screen name="SignInPage" component={SignInPage} />
    <Stack.Screen name="SignUpCustomerPage" component={SignUpCustomerPage} />
    <Stack.Screen
      name="SignUpRestaurantPage"
      component={SignUpRestaurantPage}
    />
  </Stack.Navigator>
)

export default RootStack
