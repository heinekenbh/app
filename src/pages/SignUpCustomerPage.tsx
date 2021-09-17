import React from 'react'
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

import { RootStackParamList } from '../routes'
import { Button, FormInput } from '../components'
import {
  Link,
  PageContainer,
  Text,
  MarginTop,
  LinkArea,
} from '../styles/global'

type SignUpCustomerPageProp = StackNavigationProp<
  RootStackParamList,
  'SignUpCustomerPage'
>

const SignUpCustomerPage: React.FC = () => {
  const { navigate, replace, popToTop } =
    useNavigation<SignUpCustomerPageProp>()

  const handleSignUpCustomer = () => {
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
            label="Nome"
            autoCompleteType="name"
            autoCapitalize="words"
            placeholder="Digite seu nome."
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
          <Button onPress={() => handleSignUpCustomer()}>Criar Conta</Button>
          <MarginTop />
          <LinkArea>
            <Text>
              Sou um{' '}
              <Link onPress={() => replace('SignUpRestaurantPage')}>
                Restaurante
              </Link>
            </Text>
            <MarginTop />
            <Text>
              Já tem uma conta? <Link onPress={() => popToTop()}>Entre</Link>
            </Text>
          </LinkArea>
        </ScrollView>
      </KeyboardAvoidingView>
    </PageContainer>
  )
}

export default SignUpCustomerPage
