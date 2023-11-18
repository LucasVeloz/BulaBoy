import { ActivityIndicator, Linking, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import Pdf from 'react-native-pdf';



import { GoBack } from '../../components';

import { useBula } from '../../hooks';

import * as S from './styles';

export const Bula = () => {
  const { colors } = useTheme();
  const { params } = useRoute();
  const { id } = params as { id: string };

  const { data } = useBula(id)

  return (
    <View>
      <S.ButtonContainer>
        <GoBack />
      </S.ButtonContainer>
      <Pdf
        source={{ uri: data, cache: true  }}
        style={{ width: '100%', height: '100%' }}
        onError={() => {
          if (!data) return;
          Linking.openURL(data);
        }}
        renderActivityIndicator={() => (
          <ActivityIndicator color={colors.primary} />
        )}
      />
    </View>
  );
}
