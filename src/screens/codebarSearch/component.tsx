import { useEffect, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { GoBack } from '../../components';

import { Container } from './styles';
import { MedicineApi } from '../../services';
import { Button } from 'react-native';

export const CodebarSearch = () => {
  const [status, request] = useCameraPermissions();
  const [shouldScan, setShouldScan] = useState(false);



  useEffect(() => {
    if (status?.granted) return;
    request();
  }, [])

  if (!status) return <Container style={{ backgroundColor: 'red' }} />;

  return (
    <Container>
      <CameraView
        style={{ flex: 1, paddingTop: 40, paddingHorizontal: 20 }}
        barcodeScannerSettings={{
          barcodeTypes: ['codabar', 'code128', 'qr']
        }}
        onBarcodeScanned={shouldScan ? async (result) => {
          setShouldScan(false);
          console.log(result.data)
          const response = await MedicineApi.barCode(result.data)
          console.log('-------->', response)
        }: undefined}
      >
      <GoBack />
      <Button
        title='scannear'
        onPress={() => {
          setShouldScan(true);
        }}
      />
      </CameraView>
    </Container>
  )
}
