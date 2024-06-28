import React, { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Switch } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as N from 'expo-notifications';

import { GoBack, Schedule } from '../../components';

import { NavigationList } from '../../routes';


import * as S from './styles';
import { getMed, navigate, updateMed } from '../../services';
import { renderTextByHash } from '../../utils';



export const MyMeds = () => {
  const { params: { id } } = useRoute<RouteProp<NavigationList, 'myMeds'>>()
  const theme = useTheme()
  const med = getMed(id);

  const [time, setTime] = useState(med?.schedule?.date ? new Date(med?.schedule?.date) : new Date());

  const [isToggled, setIsToggled] = useState(Boolean(med?.schedule?.isToggled));

  function openBula() {
    if (!med?.id) return;
    navigate('bula', { id, name: med?.name, producer: med?.producer })
  }



  useEffect(() => {
    (async () => {
      if (!isToggled || !med) return;
      const seconds = (time.getMinutes() * 60) + (time.getHours() * 60 * 60);

      const notificationId = await N.scheduleNotificationAsync({
        content: {
          title:  med?.name,
          subtitle: 'Está na hora de tomar seu remédio',
        },

        trigger: {
          seconds,
          repeats: true,
        }
      });

      updateMed(id, {
        ...med,
        schedule: {
          date: time,
          id: notificationId,
          isToggled,
        }
      })

    })()

    return () => {
      if (!med?.schedule?.id) return;
      N.cancelScheduledNotificationAsync(med?.schedule.id);
    }

  }, [time, isToggled, med])




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
        <S.Icon name="document" />
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
          <Schedule onChangeValue={setTime} value={time} />
        )
      }
    </S.Container>
  )
}
