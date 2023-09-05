import { FlatList, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { SlideInLeft, SlideOutRight } from 'react-native-reanimated';

import { Header, Input, Item } from '../../components';

import { useSearch } from './hook';

import { renderTextByHash } from '../../utils';

import * as S from './styles';
import { FlashList } from '@shopify/flash-list';


export const TextSearch = () => {
  const { navigate } = useNavigation();

  const { data, input, setInput } = useSearch();

  return (
    <S.Container onPress={Keyboard.dismiss}>
      <Header title={renderTextByHash('search-by-text')} />
      <S.InputContainer>
        <Input
          placeholder='Pesquise seu medicamento'
          value={input}
          onChangeText={setInput}
        />
      </S.InputContainer>
      <FlashList
        data={data}
        keyExtractor={item => item.idBulaPacienteProtegido}
        contentContainerStyle={{ paddingVertical: 32, paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={100}
        renderItem={({ item, index }) => (
          <Animated.View
            entering={SlideInLeft.delay(index * 100)}
            exiting={SlideOutRight.delay(index * 100)}
            style={{ marginBottom: 20 }}
          >
          <Item
            name={item.nomeProduto}
            maker={item.razaoSocial}
            onPress={() => {
              navigate('bula', { id: item.idBulaProfissionalProtegido })
            }}
          />
          </Animated.View>
        )}
      />
    </S.Container>
  )
}
