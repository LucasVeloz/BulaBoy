import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

export const AddButton = (rest: TouchableOpacityProps) => {
  return (
    <S.SaveContainer {...rest}>
      <S.Icon name='add'  />
    </S.SaveContainer>
  )
}
