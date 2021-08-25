import styled from 'styled-components/native'

import getBorderAndTextColor from '../../hooks/getBorderAndTextColor'
import { Label, Text } from '../global'
import theme from '../theme'

type InputLabelStyleProps = {
  focus: boolean
  error?: boolean
}

export const InputLabel = styled(Label)<InputLabelStyleProps>`
  color: ${({ focus, error }) => getBorderAndTextColor(focus, error || false)};
  margin-bottom: 5px;
`

export const ErrorArea = styled.View`
  margin-top: 5px;
`

export const ErrorText = styled(Text)`
  margin-top: 5px;
  color: ${theme.inputBorderAndTextError};
`
