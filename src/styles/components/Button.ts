import styled from 'styled-components/native'

import { Text } from '../global'

import getBackgroundColor from '../../hooks/getBackgroundColor'
import getColor from '../../hooks/getColor'

type ButtonProps = {
  type?: 'primary' | 'disabled'
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ type }) => getBackgroundColor(type || 'primary')};
  border: 1px solid ${({ type }) => getBackgroundColor(type || 'primary')};
  border-radius: 5px;
  padding: 15px;
  justify-content: center;
  align-items: center;
`

export const TextButton = styled(Text)<ButtonProps>`
  color: ${({ type }) => getColor(type || 'primary')};
  text-transform: uppercase;
  font-weight: bold;
`
