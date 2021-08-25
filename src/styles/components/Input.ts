import { TextInput, TextInputProps } from 'react-native'
import styled from 'styled-components/native'

import getBorderAndTextColor from '../../hooks/getBorderAndTextColor'
import theme from '../theme'

type InputStyleProps = {
  focus: boolean
  error?: boolean
} & TextInputProps

export const InputContainer = styled(TextInput)<InputStyleProps>`
  color: ${theme.textLight};
  border: 1px solid
    ${({ focus, error }) => getBorderAndTextColor(focus, error || false)};
  border-radius: 5px;
  font-size: 12px;
  padding: 15px;
`
