import styled from 'styled-components/native'

import getBorderAndTextColor from '../../hooks/getBorderAndTextColor'
import { Label } from '../global'

type InputLabelStyleProps = {
  focus: boolean
  error?: boolean
}

export const InputLabel = styled(Label)<InputLabelStyleProps>`
  color: ${({ focus, error }) => getBorderAndTextColor(focus, error || false)};
  margin-bottom: 5px;
`
