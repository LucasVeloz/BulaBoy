import { ActivityIndicator, Linking, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import Pdf from 'react-native-pdf';



import { AddButton, GoBack } from '../../components';

import { useMed } from '../../hooks';

import * as S from './styles';
import { NavigationList } from '../../routes';

export const Bula = () => {
  const { colors } = useTheme();
  const { params } = useRoute();
  const { id, name, producer } = params as NavigationList['bula'];
  const { isChecked, saveMedicine, uri, cacheFileName } = useMed({ id, name, producer })


  return (
    <View>
      <S.ButtonContainer>
        <GoBack />
        <AddButton onPress={saveMedicine} isChecked={isChecked} />
      </S.ButtonContainer>
      <Pdf
        source={{ uri, cache: true, cacheFileName }}
        style={{ width: '100%', height: '100%' }}
        onError={() => {
          if (!uri) return;
          Linking.openURL(uri);
        }}
        renderActivityIndicator={() => (
          <ActivityIndicator color={colors.primary} />
        )}
      />
    </View>
  );
}
