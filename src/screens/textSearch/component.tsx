import { FlatList, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

import { GoBack, Input, Card } from '../../components';

import { useSearch } from './hook';

import { renderTextByHash } from '../../utils';

import * as S from './styles';


const AnimatedView = Animated.createAnimatedComponent(S.InputContainer)


export const TextSearch = () => {
  const { navigate } = useNavigation();

  const { data, input, setInput } = useSearch();

  return (
    <S.Container onPress={Keyboard.dismiss}>
      <S.HeaderContainer>
        <GoBack />
        <AnimatedView sharedTransitionTag='input'>
          <Input
            placeholder={renderTextByHash('search-your-medicine')}
            value={input}
            onChangeText={setInput}
          />
        </AnimatedView>
      </S.HeaderContainer>
      <FlatList
        data={data}
        keyExtractor={item => item.idBulaPacienteProtegido + item.nomeProduto}
        contentContainerStyle={{ paddingVertical: 32, paddingHorizontal: 20, rowGap: 20 }}
        renderItem={({ item, index }) => (
          <Card
            name={item.nomeProduto}
            maker={item.razaoSocial}
            index={index}
            onPress={() => {
              navigate('bula', { id: item.idBulaProfissionalProtegido })
            }}
          />
        )}
      />
    </S.Container>
  )
}
