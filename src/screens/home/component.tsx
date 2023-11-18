import React from 'react';
import Animated from 'react-native-reanimated';
import { FlashList } from '@shopify/flash-list';

import { renderTextByHash } from '../../utils';

import { Block, Input, MedicineItem } from '../../components';

import { navigate } from '../../services';

import { SEARCH_TYPES } from './constants';

import { useMyMeds } from '../../hooks';

import * as S from './styles';



export function Home() {
  const { data } = useMyMeds();
  return (
    <S.Container>
      <S.Title>{renderTextByHash('greeting-title')}</S.Title>
        <Animated.View sharedTransitionTag='input'>
          <Input
            onPressIn={() => navigate('textSearch', {})}
            editable={false}
            placeholder={renderTextByHash('search-your-medicine')}
          />
        </Animated.View>
      <S.SectionText>{renderTextByHash('types-of-search')}</S.SectionText>
      <S.HeroSection>
        {SEARCH_TYPES.map((item) => (
          <Block
            key={item.navigation + item.icon}
            icon={item.icon}
            onPress={() => navigate(item.navigation)}
          />
        ))}
      </S.HeroSection>
      <S.SectionText>{renderTextByHash('my-medicines')}</S.SectionText>
      <FlashList
        data={data}
        renderItem={({ item }) => (
          <MedicineItem {...item} />
        )}
        ItemSeparatorComponent={S.Separator}
        estimatedItemSize={40}
      />
    </S.Container>
  )
}
