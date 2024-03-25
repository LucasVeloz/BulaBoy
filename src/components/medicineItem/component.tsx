import React from 'react';

import { Props } from './types';

import { navigate } from '../../services';

import * as S from './styles';

export const MedicineItem = ({ name, schedule, id }: Props) => {
  return (
    <S.Container onPress={() => navigate('myMeds', { id })}>
      <S.Block>
        <S.Circle>
          <S.Icon name='pill' />
        </S.Circle>
        <S.MedicineName sharedTransitionTag={`${id}-${name}`} numberOfLines={1}>{name}</S.MedicineName>
      </S.Block>
      {/* <S.Schedule>{new Date(schedule?.date).getHours()}:</S.Schedule> */}
      <S.Arrow name='chevron-right' />
    </S.Container>
  )
}
