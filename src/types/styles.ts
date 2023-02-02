import { light } from "../themes";

type Theme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
