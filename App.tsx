import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'

import { MainRoutes } from './src/routes';
import { light } from './src/themes';

export default function App() {
  const [isLoaded] = useFonts({
    'Poppins_Regular': Poppins_400Regular,
    'Poppins_Medium': Poppins_500Medium,
    'Poppins_SemiBold': Poppins_600SemiBold,
    'Poppins_Bold': Poppins_700Bold
  });

  if (!isLoaded) return null;

  return (
    <ThemeProvider theme={light}>
      <MainRoutes />
    </ThemeProvider>
  )
}
