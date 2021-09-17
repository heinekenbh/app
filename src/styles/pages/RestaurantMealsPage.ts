import styled from 'styled-components/native'

import theme from '../theme'
import { Title, Text } from '../global'

export const MealTitle = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`

export const MealInfo = styled(Text)`
  margin-top: 5px;
  font-size: 11px;
  color: ${theme.inputBorderAndText};
`

export const MealPrice = styled(Title)`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
`

export const NoMealsFoundText = styled(Text)`
  text-align: center;
  color: ${theme.inputBorderAndText};
`
