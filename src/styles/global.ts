import { Platform } from 'react-native'
import styled from 'styled-components/native'

import theme from './theme'

export const AppContainer = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
  background-color: ${theme.background};
`

export const Title = styled.Text`
  color: ${theme.primary};
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`

export const Text = styled.Text`
  color: ${theme.textLight};
  font-size: 12px;
`

export const Label = styled.Text`
  color: ${theme.textSecondary};
  font-size: 12px;
`
