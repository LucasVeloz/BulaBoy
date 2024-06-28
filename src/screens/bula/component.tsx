import { useState } from 'react';
import { ActivityIndicator, Button, Linking, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import Pdf from 'react-native-pdf';

import { AddButton, GoBack } from '../../components';

import { useMed } from '../../hooks';

import { NavigationList } from '../../routes';

import * as S from './styles';
import { renderTextByHash } from '../../utils';

export const Bula = () => {
  const { colors } = useTheme();
  const { params } = useRoute();
  const { id, name, producer } = params as NavigationList['bula'];
  const { isChecked, saveMedicine, uri, cacheFileName } = useMed({ id, name, producer })

  const [isError, setIsError] = useState(false);

  return (
    <>
      <S.ButtonContainer>
        <GoBack />
        <AddButton onPress={saveMedicine} isChecked={isChecked} />
      </S.ButtonContainer>
      {isError ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title={renderTextByHash('bula-error')}
            onPress={() => {
              if (!uri) return;
              Linking.openURL(uri);
            }}
          />
        </View>
      ) : (
        <Pdf
        source={{ uri, cache: true, cacheFileName }}
        style={{ width: '100%', height: '100%' }}
        onError={() => setIsError(true)}
        renderActivityIndicator={() => (
          <ActivityIndicator color={colors.primary} />
        )}
        />
      )}
    </>
  );
}
