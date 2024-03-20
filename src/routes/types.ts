export type NavigationList = {
  home: undefined;
  textSearch: undefined;
  barcodeSearch: undefined;
  bula: {
    id: string;
    name: string;
    producer: string;
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
