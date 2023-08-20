import { useEffect, useState } from 'react';
import { ActivityIndicator, Linking, Platform, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Pdf from 'react-native-pdf';

import { Header } from '../../components';

import { MedicineApi } from '../../services';
import { useTheme } from 'styled-components/native';

export const Bula = () => {
  const { params } = useRoute();
  const { id } = params as { id: string };
  const [uri, setUri] = useState('');
  const { colors } = useTheme();


  useEffect(() => {
    (async () => {
        if (!id) return;
        const response = await MedicineApi.linkPDF(id);
        console.log(response.pdf)
        if (Platform.OS === 'android') {
          Linking.openURL(response.pdf);
          return;
        }
        setUri(response.pdf)
    })();
  }, [id])


  return (
    <View>
      <Header title='bula' />
      {
        uri &&
        <Pdf
          source={{ uri }}
          style={{ width: '100%', height: '100%' }}
          onError={(error) => {
            console.log(error);
            Linking.openURL(uri);
          }}
          renderActivityIndicator={() => (
            <ActivityIndicator color={colors.primary} />
          )}
        />
      }
    </View>
  );
}
