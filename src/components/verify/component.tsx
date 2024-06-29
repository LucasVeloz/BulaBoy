import React from 'react';
import { ActivityIndicator } from 'react-native';
import Animated, { SlideInRight, SlideOutRight } from 'react-native-reanimated';

import { renderTextByHash } from '../../utils';

import * as S from './styles';

export const Verify = ({ isLoading, onPress }: { isLoading: boolean, onPress: () => void }) => {
  return (
    <Animated.View entering={SlideInRight} exiting={SlideOutRight}>
      <S.Container onPress={onPress} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <S.Title>{renderTextByHash('verify')}</S.Title>
        )}
      </S.Container>
    </Animated.View>

  )
}
