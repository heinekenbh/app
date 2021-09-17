import React, { ReactElement } from 'react'

import { IconButtonContainer } from '../styles/components/IconButton'

export type IconButtonProps = {
  onPress(): void
  icon: ReactElement
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onPress }) => {
  return (
    <IconButtonContainer activeOpacity={0.7} onPress={onPress}>
      {icon}
    </IconButtonContainer>
  )
}

export default IconButton
