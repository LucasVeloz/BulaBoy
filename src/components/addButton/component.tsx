import React from 'react';

import { AddButonType } from './types';

import * as S from './styles';

export const AddButton = ({ isChecked, ...rest }: AddButonType) => {
  return (
    <S.SaveContainer {...rest}>
      <S.Icon name={isChecked ? 'checkmark' : 'add'}  />
    </S.SaveContainer>
  )
}
