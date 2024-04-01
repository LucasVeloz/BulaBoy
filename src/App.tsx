import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import * as N from 'expo-notifications';


import { MainRoutes } from './routes';
import { themeFactory } from './config';
import { ServerSideStateManagment } from './context';


const theme = themeFactory('light');

export default function App() {
  const [isLoaded] = useFonts({
    'Poppins_Regular': Poppins_400Regular,
    'Poppins_Medium': Poppins_500Medium,
    'Poppins_SemiBold': Poppins_600SemiBold,
    'Poppins_Bold': Poppins_700Bold
  });

  useEffect(() => {
    (() => {
      N.requestPermissionsAsync({
        ios: {
          allowBadge: true,
          allowAlert: true,
          allowSound: true,
        },
      })
      N.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true,
        }),
      });
    })()
  }, [])

  if (!isLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ServerSideStateManagment>
        <ThemeProvider theme={theme}>
          <MainRoutes />
        </ThemeProvider>
      </ServerSideStateManagment>
    </GestureHandlerRootView>
  )
}
