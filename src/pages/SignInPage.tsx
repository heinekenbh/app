import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '../routes'
import { Button, FormInput } from '../components'
import {
  PageContainer,
  Center,
  Text,
  Link,
  MarginTop,
  LinkArea,
} from '../styles/global'

type SignInPageProp = StackNavigationProp<RootStackParamList, 'SignInPage'>

const SignInPage: React.FC = () => {
  const { navigate } = useNavigation<SignInPageProp>()

  const handleSignIn = () => {
    try {
      console.log('Entrar')

      //navigate('Home')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <PageContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Center>
          <FormInput
            label="E-mail"
            keyboardType="email-address"
            autoCompleteType="email"
            autoCapitalize="none"
            placeholder="Digite seu e-mail."
          />
          <MarginTop />
          <FormInput
            label="Senha"
            secureTextEntry
            placeholder="Digite sua senha."
          />
          <MarginTop />
          <Button onPress={() => handleSignIn()}>Entrar</Button>
          <MarginTop />
          <LinkArea>
            <Text>
              Não tem uma conta?{' '}
              <Link onPress={() => navigate('SignUpCustomerPage')}>
                Cadastre-se
              </Link>
            </Text>
          </LinkArea>
        </Center>
      </KeyboardAvoidingView>
    </PageContainer>
  )
}

export default SignInPage