import React from 'react'

import { FABButtonContainer } from '../styles/components/FABButton'
import { ReactElement } from 'hoist-non-react-statics/node_modules/@types/react'

export type FABButtonProps = {
  onPress(): void
  icon: ReactElement
}

const FABButton: React.FC<FABButtonProps> = ({ icon, onPress }) => {
  return (
    <FABButtonContainer
      activeOpacity={0.7}
      onPress={onPress}
      style={{ elevation: 2 }}
    >
      {icon}
    </FABButtonContainer>
  )
}

export default FABButton
