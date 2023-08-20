import { useEffect, useState } from 'react';
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner';
import { Header } from '../../components';
import { renderTextByHash } from '../../utils';

import { Container } from './styles';
import { MedicineApi } from '../../services';
import { Button } from 'react-native';

export const CodebarSearch = () => {
  const [status, request] = BarCodeScanner.usePermissions();
  const [shouldScan, setShouldScan] = useState(false);

  const scan = async (event: BarCodeEvent) => {
    setShouldScan(false);
    console.log(event);
    const result = await MedicineApi.barCode(event.data);
    console.log(result)
  };


  useEffect(() => {
    if (status && status.granted) return;
    request();
  }, [])

  if (!status) return null;

  return (
    <Container>
      <Header title={renderTextByHash('search-by-barcode')} />
      {status.granted && <BarCodeScanner style={{ flex: 1 }} onBarCodeScanned={shouldScan ? scan : undefined}  />}
      <Button
        title='scannear'
        onPress={() => {
          setShouldScan(true);
        }}
      />
    </Container>
  )
}
