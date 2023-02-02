import { renderTextByHash } from "../../utils";
import { IMenuItems } from "./types";

export const MENU_ITEMS: IMenuItems[] = [
  {
    title: renderTextByHash('search-by-text'),
    icon: 'search',
    navigation: 'textSearch',
  },
  {
    title: renderTextByHash('search-by-barcode'),
    icon: 'code',
    navigation: 'codebarSearch',
  },
  {
    title: renderTextByHash('search-by-map'),
    icon: 'map',
    navigation: 'mapSearch',
  }
]
