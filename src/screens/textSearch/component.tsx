import { useEffect, useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import debounce from 'lodash.debounce';

import { Header, Input, Item } from '../../components';

import { renderTextByHash } from '../../utils';

import { MedicineApi } from '../../services';

import { Container, Content } from './styles';


export const TextSearch = () => {
  const { navigate } = useNavigation();

  const [input, setInput] = useState('');
  const [medicines, setMedicines] = useState();

  useEffect(() => {
    const debounced = debounce(async () => {
      if (!input) return;
      const { content } = await MedicineApi.search(input);
      setMedicines(content)
    }, 1000)
    debounced();
}, [input])

  return (
    <Container onPress={Keyboard.dismiss}>
      <Header title={renderTextByHash('search-by-text')} />
      <Content>
        <Input
          placeholder='Pesquise seu medicamento'
          value={input}
          onChangeText={setInput}
        />
        <FlatList
          data={medicines}
          keyExtractor={item => item.idBulaPacienteProtegido}
          style={{ paddingVertical: 32 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Item name={item.nomeProduto} maker={item.razaoSocial} onPress={() => {
              navigate('bula', { id: item.idBulaProfissionalProtegido })
            }} />
          )}
        />
      </Content>
    </Container>
  )
}
