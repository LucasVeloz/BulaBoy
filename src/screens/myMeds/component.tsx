import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { GoBack } from '../../components';

import { NavigationList } from '../../routes';

import { useMed } from '../../hooks';

import * as S from './styles';
import { getMed } from '../../services';



export const MyMeds = () => {
  const { params: { id } } = useRoute<RouteProp<NavigationList, 'myMeds'>>()

  const med = getMed(id);


  return (
    <S.Container>
      <S.HeaderContainer>
        <GoBack />
        <S.block>
          <S.Title numberOfLines={1}>{med?.name}</S.Title>
          <S.Subtitle>{med?.producer}</S.Subtitle>
        </S.block>
      </S.HeaderContainer>
    </S.Container>
  )
}
