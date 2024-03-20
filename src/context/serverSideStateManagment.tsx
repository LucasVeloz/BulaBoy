import { ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

import { storage } from "../services";


const clientStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return value === undefined ? null : value;
  },
  removeItem: (key: string) => {
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

export const ServerSideStateManagment = ({ children }: { children: ReactNode }) => {

  return (
    <PersistQueryClientProvider client={client} persistOptions={{
      persister: clientPersister,
    }}>
      {children}
    </PersistQueryClientProvider>
  )
};
