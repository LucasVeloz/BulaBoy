import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { GoBack } from '../../components';

import { NavigationList } from '../../routes';

import { useMed } from '../../hooks';

import * as S from './styles';



export const MyMeds = () => {
  const { params: { id } } = useRoute<RouteProp<NavigationList, 'myMeds'>>()

  const med = useMed(id);

  return (
    <S.Container>
      <S.HeaderContainer>
        <GoBack />
        <S.block>
          <S.Title>{med?.name}</S.Title>
        </S.block>
      </S.HeaderContainer>
    </S.Container>
  )
}
