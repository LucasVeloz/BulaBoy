import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { useTheme } from 'styled-components/native';

import { renderTextByHash } from '../../utils';

import { Block, Input, MedicineItem } from '../../components';

import { navigate } from '../../services';

import { SEARCH_TYPES } from './constants';

import { useMyMeds } from '../../hooks';

import * as S from './styles';

export function Home() {
  const theme = useTheme();

  const { data } = useMyMeds();

  return (
    <S.Container>
      <S.Title>{renderTextByHash('greeting-title')}</S.Title>
          <Input
            onPressIn={() => navigate('textSearch')}
            editable={false}
            placeholder={renderTextByHash('search-your-medicine')}
          />
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
        <S.SectionText>
          {renderTextByHash('my-medicines')}{'\t'}
        </S.SectionText>
      <FlashList
        data={data}
        renderItem={({ item }) => (
          <S.Separator>
            <MedicineItem {...item} />
          </S.Separator>
        )}
        estimatedItemSize={50}
      />
    </S.Container>
  )
}
