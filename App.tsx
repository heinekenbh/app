import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { AppContainer, SafeAreaView } from './src/styles/global'
import theme from './src/styles/theme'
import RootStack from './src/routes'

const App: React.FC = () => (
  <AppContainer>
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: theme.background,
            text: theme.textLight,
            primary: theme.primary,
          },
        }}
      >
        <RootStack />
      </NavigationContainer>
    </SafeAreaView>
  </AppContainer>
)

export default App
