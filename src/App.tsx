import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'

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

  if (!isLoaded) return null;

  return (
    <ServerSideStateManagment>
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </ServerSideStateManagment>
  )
}
