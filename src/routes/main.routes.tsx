import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Bula, CodebarSearch, Map, Menu, TextSearch } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator()

export const MainRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false
      }}>
        <Screen name="menu" component={Menu} />
        <Screen name="textSearch" component={TextSearch} />
        <Screen name="bula" component={Bula} />
        <Screen name="codebarSearch" component={CodebarSearch} />
        <Screen name="mapSearch" component={Map} />
      </Navigator>
    </NavigationContainer>
  )
}
