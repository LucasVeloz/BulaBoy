export type Theme = {
  colors: {
    black: string;
    primary: string;
    secondary: string;
    tertiary: string;
    white: string;
  },
  fonts: {
    regular: string;
    medium: string;
    semiBold: string;
    bold: string;
  }
}

export type ThemeType = {
  light: Theme;
  dark: Theme;
}
