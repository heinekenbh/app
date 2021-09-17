import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import RestaurantDashboardPage from '../pages/RestaurantDashboardPage'
import RestaurantMealsStack from './RestaurantMealsStackNavigation'
import RestaurantAccountPage from '../pages/RestaurantAccountPage'
import theme from '../styles/theme'

export type BottomTabParamList = {
  RestaurantDashboardPage: undefined
  RestaurantMealsStack: undefined
  RestaurantAccountPage: undefined
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const RestaurantBottomTab: React.FC = () => (
  <BottomTab.Navigator
    initialRouteName="RestaurantDashboardPage"
    backBehavior="initialRoute"
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopColor: theme.inputBorderAndText,
        backgroundColor: theme.background,
      },
      tabBarInactiveTintColor: theme.inputBorderAndText,
    }}
  >
    <BottomTab.Screen
      name="RestaurantDashboardPage"
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="view-dashboard"
            size={size}
            color={color}
          />
        ),
      }}
      component={RestaurantDashboardPage}
    />
    <BottomTab.Screen
      name="RestaurantMealsStack"
      options={{
        tabBarLabel: 'Refeições',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="restaurant" size={size} color={color} />
        ),
      }}
      component={RestaurantMealsStack}
    />
    <BottomTab.Screen
      name="RestaurantAccountPage"
      options={{
        tabBarLabel: 'Minha Conta',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
      component={RestaurantAccountPage}
    />
  </BottomTab.Navigator>
)

export default RestaurantBottomTab
