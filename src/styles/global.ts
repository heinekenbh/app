import { Platform } from 'react-native'
import styled from 'styled-components/native'

import theme from './theme'

export const AppContainer = styled.View`
  flex: 1;
  background-color: ${theme.background};
`

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
`

export const PageContainer = styled.View`
  flex: 1;
  padding: 16px;
`

export const Center = styled.View`
  flex: 1;
  justify-content: center;
`

export const MarginTop = styled.View`
  margin-top: 20px;
`

export const Title = styled.Text`
  color: ${theme.primary};
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`

export const Subtitle = styled.Text`
  color: ${theme.textLight};
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`

export const Text = styled.Text`
  color: ${theme.textLight};
  font-size: 12px;
`

export const Link = styled.Text`
  color: ${theme.primary};
  font-size: 12px;
  font-weight: bold;
`

export const Label = styled.Text`
  color: ${theme.textSecondary};
  font-size: 12px;
`

export const LinkArea = styled.View`
  align-items: center;
`

export const ListItem = styled.View`
  padding: 16px;
  border: 1px solid ${theme.inputBorderAndText};
  border-radius: 5px;
  margin: 8px 0;
`
