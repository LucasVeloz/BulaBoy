import React, { useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Switch } from 'react-native';
import { useTheme } from 'styled-components/native';

import { GoBack } from '../../components';

import { NavigationList } from '../../routes';

import { useMed } from '../../hooks';

import * as S from './styles';
import { getMed, navigate } from '../../services';
import { renderTextByHash } from '../../utils';



export const MyMeds = () => {
  const { params: { id } } = useRoute<RouteProp<NavigationList, 'myMeds'>>()
  const theme = useTheme()

  const [isToggled, setIsToggled] = useState(false);

  const med = getMed(id);

  function openBula() {
    if (!med?.id) return;
    navigate('bula', { id, name: med?.name, producer: med?.producer })
  }


  return (
    <S.Container>
      <S.HeaderContainer>
        <GoBack />
        <S.block>
          <S.Title numberOfLines={1}>{med?.name}</S.Title>
          <S.Subtitle>{med?.producer}</S.Subtitle>
        </S.block>
      </S.HeaderContainer>
      <S.BulaButton onPress={openBula}>
        <S.BulaButtonText>{renderTextByHash('bula')}</S.BulaButtonText>
        <S.Icon name="ios-document" />
        <S.IconGo name="chevron-forward" />
      </S.BulaButton>
      <S.SchedulerHeader>
        <S.SchedulerHeaderText>{renderTextByHash('scheduler-header')}</S.SchedulerHeaderText>
        <Switch
          value={isToggled}
          onValueChange={setIsToggled}
          trackColor={{ true: theme.colors.primary }}
        />
      </S.SchedulerHeader>
      {
        isToggled && (
          <S.Subtitle>vai mostrar o picker quando tiver pronto</S.Subtitle>
        )
      }
    </S.Container>
  )
}
