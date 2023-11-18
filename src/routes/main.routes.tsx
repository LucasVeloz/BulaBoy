import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Bula, CodebarSearch, Home, MyMeds, TextSearch } from '../screens';
import { navigatorRef } from '../services';

const { Navigator, Screen } = createNativeStackNavigator()

export function MainRoutes() {
  return (
    <NavigationContainer ref={navigatorRef}>
      <Navigator screenOptions={{
        headerShown: false
      }}
      >
        <Screen name="home" component={Home} />
        <Screen name="textSearch" component={TextSearch} />
        <Screen name="bula" component={Bula} />
        <Screen name="barcodeSearch" component={CodebarSearch} />
        <Screen name="myMeds" component={MyMeds} />
      </Navigator>
    </NavigationContainer>
  )
}
