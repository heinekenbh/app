import React from 'react'
import { StatusBar } from 'react-native'

import { AppContainer, Title, Text } from './src/styles/global'
import { Button, Input, FormInput } from './src/components'

const App: React.FC = () => (
  <AppContainer>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Title>Login</Title>
    <Text>Login</Text>
    <Input />
    <FormInput />
    <Button onPress={() => console.log('clicou')}>Entrar</Button>
    <Button onPress={() => console.log('clicou')} disabled>
      Entrar
    </Button>
  </AppContainer>
)

export default App
