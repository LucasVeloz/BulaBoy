import React from 'react';

import * as S from './styles';
import { ModifyDate, Props } from './types';

export const Schedule = ({ value, onChangeValue }: Props) => {

  function modifyDate(type: ModifyDate) {
    const updatedValue = new Date(value);
    if (type === 'addHour') {
      updatedValue.setHours(value.getHours() + 1);
    }
    if (type === 'addMinute') {
      updatedValue.setMinutes(value.getMinutes() + 1);
    }
    if (type === 'subHour') {
      updatedValue.setHours(value.getHours() - 1);
    }
    if (type === 'subMinute') {
      updatedValue.setMinutes(value.getMinutes() - 1);
    }
    onChangeValue(updatedValue)
  }


  return (
    <S.Container>
      <S.ButtonContainer>
      <S.Button onPress={() => modifyDate('addHour')}>
        <S.Icon name="chevron-up" />
      </S.Button>
      <S.Button onPress={() => modifyDate('addMinute')}>
        <S.Icon name="chevron-up" />
      </S.Button>
      </S.ButtonContainer>
      <S.Content>
        <S.TimeText>{('0' + value.getHours()).slice(-2)}:{('0' + value.getMinutes()).slice(-2)}</S.TimeText>
      </S.Content>
      <S.ButtonContainer>
      <S.Button onPress={() => modifyDate('subHour')}>
        <S.Icon name="chevron-down" />
      </S.Button>
      <S.Button onPress={() => modifyDate('subMinute')}>
        <S.Icon name="chevron-down" />
      </S.Button>
      </S.ButtonContainer>
    </S.Container>
  )
}
