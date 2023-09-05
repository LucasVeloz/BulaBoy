import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { MMKV } from "react-native-mmkv"

import { MainRoutes } from './src/routes';
import { light } from './src/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

const storage = new MMKV();

const clientStorage = {
  setItem: (key, value) => {
    storage.set(key, value);
  },
  getItem: (key) => {
    const value = storage.getString(key);
    return value === undefined ? null : value;
  },
  removeItem: (key) => {
    storage.delete(key);
  },
};

const clientPersister = createSyncStoragePersister({ storage: clientStorage });


const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    }
  }
});

export default function App() {
  const [isLoaded] = useFonts({
    'Poppins_Regular': Poppins_400Regular,
    'Poppins_Medium': Poppins_500Medium,
    'Poppins_SemiBold': Poppins_600SemiBold,
    'Poppins_Bold': Poppins_700Bold
  });

  if (!isLoaded) return null;

  return (
    <PersistQueryClientProvider client={client} persistOptions={{
      persister: clientPersister,
    }}>
    <ThemeProvider theme={light}>
      <MainRoutes />
    </ThemeProvider>
    </PersistQueryClientProvider>
  )
}

// implementar remedios do usuario com bula e possibilidade de reminder -> notificação
// arrumar pesquisar por text e cachear
// historico de pesquisas
// bula de medico e de paciente
