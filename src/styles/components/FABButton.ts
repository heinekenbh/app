import styled from 'styled-components/native'

import theme from '../theme'

export const FABButtonContainer = styled.TouchableOpacity`
  position: absolute;
  width: 60px;
  height: 60px;
  bottom: 16px;
  right: 16px;
  border-radius: 60px;
  background-color: ${theme.primary};
  justify-content: center;
  align-items: center;
`
