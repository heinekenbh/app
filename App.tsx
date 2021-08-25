import React from 'react'
import { StatusBar } from 'react-native'

import { AppContainer, Text } from './src/styles/global'

const App: React.FC = () => (
  <AppContainer>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Text>Hello World</Text>
  </AppContainer>
)

export default App
