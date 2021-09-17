import styled from 'styled-components/native'

import theme from '../theme'
import { Text, Title } from '../global'

export const PendentOrdersContainer = styled.View``

export const PendentOrderTitle = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`

export const PendentOrderInfo = styled(Text)`
  margin-top: 5px;
  font-size: 11px;
  color: ${theme.inputBorderAndText};
`

export const PendentOrderPrice = styled(Title)`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
`

export const NoPendentOrdersFoundText = styled(Text)`
  text-align: center;
  color: ${theme.inputBorderAndText};
`
