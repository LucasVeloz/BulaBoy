import { light } from "./light";
import { ThemeType } from "./types";


export function themeFactory(type: keyof ThemeType) {
  if (type === 'light') {
    return light;
  }
  return light;
}
