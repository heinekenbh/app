import styled from 'styled-components/native'

import theme from '../theme'
import { Text } from '../global'

export const BackButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const TextButton = styled(Text)`
  color: ${theme.primary};
  font-weight: bold;
  font-size: 12px;
`
