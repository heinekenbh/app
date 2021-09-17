import styled from 'styled-components/native'

import theme from '../theme'
import { Subtitle, Text } from '../global'

export const QrCodeContainer = styled.View`
  align-items: center;
`

export const InfoContainer = styled.View`
  align-items: center;
`

export const RestaurantNameText = styled(Subtitle)`
  text-align: center;
`
export const EmailText = styled(Text)`
  text-align: center;
  color: ${theme.inputBorderAndText};
`
