import React, { useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import { Button, Modal } from 'react-native';

import { renderTextByHash } from '../../utils';

import { Block, Input, MedicineItem, Verify } from '../../components';

import { navigate } from '../../services';

import { SEARCH_TYPES } from './constants';

import { useMyMeds } from '../../hooks';

import * as S from './styles';

export function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { data, isLoading, verifyData, dispatchVerify } = useMyMeds();


  async function verifyMeds() {
    dispatchVerify(undefined,{ onSuccess: () => {
      setIsModalVisible(true);
    }})
  }

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
      {data.length > 0 &&
        <Verify isLoading={isLoading} onPress={verifyMeds} />
      }
      <Modal
        visible={isModalVisible}
        animationType='slide'
      >
        <S.ScrollContainer contentContainerStyle={{
          paddingBottom: 120
        }}>
        <S.Title>{renderTextByHash('greeting-title')}</S.Title>
        <S.SectionText>{verifyData}</S.SectionText>
        <Button
          title={renderTextByHash('close')}
          onPress={() => setIsModalVisible(false)}
          />
        </S.ScrollContainer>
      </Modal>
    </S.Container>
  )
}
