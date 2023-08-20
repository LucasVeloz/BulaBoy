import { useEffect, useState } from 'react';
import { getLastKnownPositionAsync, LocationObjectCoords, useForegroundPermissions } from 'expo-location';
import MapView from 'react-native-maps';
import { Header } from '../../components';
import { renderTextByHash } from '../../utils';

import { Container } from './styles';

export const Map = () => {
  const [coords, setCoords] = useState<LocationObjectCoords | null>(null);

  useEffect(() => {
    getLastKnownPositionAsync().then((position) => {
      if (!position) return;
      console.log(position)
      setCoords(position.coords)
    });
  }, [])

  return (
    <Container>
      <Header title={renderTextByHash('search-by-map')} />
      <MapView style={{ flex: 1 }}
      showsUserLocation
      region={{
        latitude: coords?.latitude || 0,
        longitude: coords?.longitude || 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      />
    </Container>
  )
}
