import React, { useRef, useState } from 'react';
import Animated from 'react-native-reanimated';
import { FlashList } from '@shopify/flash-list';
import BottomSheet from '@gorhom/bottom-sheet';
import { Button, Keyboard } from 'react-native';
import { useTheme } from 'styled-components/native';

import { renderTextByHash } from '../../utils';

import { AddButton, Block, Input, MedicineItem } from '../../components';

import { navigate } from '../../services';

import { SEARCH_TYPES } from './constants';

import { useMyMeds } from '../../hooks';

import * as S from './styles';

export function Home() {
  const theme = useTheme();

  const { data, createNewMed } = useMyMeds();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const [medicineNameInput, setMedicineNameInput] = useState('');


  return (
    <S.Container>
      <S.Title>{renderTextByHash('greeting-title')}</S.Title>
        {/* <Animated.View sharedTransitionTag='input'> */}
          <Input
            onPressIn={() => navigate('textSearch')}
            editable={false}
            placeholder={renderTextByHash('search-your-medicine')}
          />
        {/* </Animated.View> */}
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
          <AddButton onPress={() => {
            bottomSheetRef.current?.snapToIndex(1)
          }} />
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

      <BottomSheet
        ref={bottomSheetRef}
        keyboardBehavior='extend'
        snapPoints={['1%','50%', '100%']}
        enablePanDownToClose
        keyboardBlurBehavior='restore'
      >
        <S.CreateMedContainer onPress={Keyboard.dismiss}>
          <S.SectionText>{renderTextByHash('add-medicine')}</S.SectionText>
          <Input
            useKeyboardTextInput
            placeholder={renderTextByHash('medicine-name')}
            onChangeText={setMedicineNameInput}
            value={medicineNameInput}
          />
          <S.Separator />
          <S.Separator />
          <S.Separator />
          <Button
            title='Criar'
            onPress={() => createNewMed(medicineNameInput, () => {
              setMedicineNameInput('')
              bottomSheetRef.current?.close()
            })}
            color={theme.colors.primary}
          />
          <S.Separator />
          <S.Separator />
        </S.CreateMedContainer>
      </BottomSheet>
    </S.Container>
  )
}
