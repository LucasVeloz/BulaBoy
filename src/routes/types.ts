export type NavigationList = {
  home: undefined;
  textSearch: {
    search?: string;
    offline?: boolean;
  };
  barcodeSearch: undefined;
  bula: {
    id: string;
  }
  myMeds: {
    id: string;
  };
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationList {}
  }
}
