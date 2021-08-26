import React from 'react'
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '../routes'
import { Button, FormInput } from '../components'
import {
  Link,
  PageContainer,
  Text,
  MarginTop,
  LinkArea,
} from '../styles/global'

type SignUpRestaurantPageProp = StackNavigationProp<
  RootStackParamList,
  'SignUpRestaurantPage'
>

const SignUpRestaurantPage: React.FC = () => {
  const { navigate } = useNavigation<SignUpRestaurantPageProp>()

  const handleSignUpRestaurant = () => {
    try {
      console.log('Cadastrar')

      navigate('SignInPage')
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
        <ScrollView>
          <FormInput
            label="Nome do restaurante"
            autoCapitalize="words"
            placeholder="Digite o nome do restaurante."
          />
          <MarginTop />
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
          <Button onPress={() => handleSignUpRestaurant()}>Criar Conta</Button>
          <MarginTop />
          <LinkArea>
            <Text>
              Sou um{' '}
              <Link onPress={() => navigate('SignUpCustomerPage')}>
                Cliente
              </Link>
            </Text>
            <MarginTop />
            <Text>
              Já tem uma conta?{' '}
              <Link onPress={() => navigate('SignInPage')}>Entre</Link>
            </Text>
          </LinkArea>
        </ScrollView>
      </KeyboardAvoidingView>
    </PageContainer>
  )
}

export default SignUpRestaurantPage
